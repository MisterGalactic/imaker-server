const bcrypt = require('bcrypt')

const createToken = require('@/graphql/utils/createToken')

// Queries
exports.get_user_info = async (_, __, { models, me }) => {
  try {
    const user = await models.User.findByPk(me.id)
    if (!user) throw new Error('No user found. If this is unexpected, try to log out and log in again.')

    return user
  } catch (err) {
    return err
  }
}

// Association Queries
exports.get_items_by_user = async (user, _, { models }) => {
  const items = await models.Item.findAll({ where: { UserId: user.id } })
  return items
}

exports.get_address_by_user = async (user, _, { models }) => {
  const address = await models.Address.findOne({ where: { UserId: user.id } })
  return address
}

// Mutations
exports.sign_up = async (_, { user }, { models, secret }) => {
  try {
    const userDB = await models.User.findOne({ where: { email: user.email } })
    if (userDB) throw new Error('Please choose another email, this one is already taken.')

    const createdUser = await models.User.create(user)
    return { token: createToken(createdUser, secret, '10h') }
  } catch (err) {
    return err
  }
}

exports.sign_in = async (_, { email, password }, { models, secret }) => {
  try {
    const user = await models.User.findByLogin(email)
    if (!user) throw new Error('No user found with this email credentials.')

    const isValid = await user.validatePassword(password)
    if (!isValid) throw new Error('Invalid password')

    return { token: createToken(user, secret, '10h') }
  } catch (err) {
    return err
  }
}

exports.update_user = async (_, { user }, { models, me }) => {
  try {
    const userDB = await models.users.findOne({ where: { id: me.id } })
    if (!userDB) throw new Error('No user found. If this is unexpected, try to log out and log in again.')

    const newPassword = await bcrypt.hash(userDB.password, 10)
    await userDB.update({ ...user, newPassword })
    await userDB.reload()
    return userDB
  } catch (err) {
    return err
  }
}
