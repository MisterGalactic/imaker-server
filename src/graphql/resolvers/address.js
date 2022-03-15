// Queries
exports.get_address = async (_, __, { models, me }) => {
  const address = await models.Address.findOne({ where: { UserId: me.id } })
  return address
}

// Association Queries
exports.get_user_by_address = async (address, _, { models }) => {
  const user = await models.Address.findOne({ where: { id: address.UserId } })
  return user
}

// Mutations
exports.create_address = async (_, { address }, { models, me }) => {
  try {
    const addressDB = await this.get_address(_, { }, { models, me })
    if (addressDB) throw new Error('Cannot create more than 1 address, use edit/update instead')

    const createdAddress = await models.Address.create({
      ...address,
      UserId: me.id
    })

    return createdAddress
  } catch (err) {
    return err
  }
}

exports.update_address = async (_, { address }, { models, me }) => {
  console.log("adadfasdfasdfdasfasfdsafadsdfafsdafsadfsfasdfasdfasdfsadfdress")
  try {
    const addressDB = await models.Address.findOne({ where: { id: address.id } })
    if (!addressDB) throw new Error('Address Not Found')

    await addressDB.update({ ...address })
    await addressDB.reload()
    return addressDB
  } catch (err) {
    return err
  }
}
