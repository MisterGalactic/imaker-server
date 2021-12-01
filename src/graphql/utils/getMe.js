const jwt = require('jsonwebtoken')

const models = require('@/db/models')

const getMe = async (req) => {
  let token = ''
  if (req) token = req.headers['x-token']
  if (token) {
    try {
      const response = await jwt.verify(token, process.env.SECRET)
      const userDB = await models.User.findOne({ where: { email: response.email } })
      if (!userDB) throw new Error('No user found.')

      return response
    } catch (err) {
      return err
    }
  }

  return null
}

module.exports = getMe
