const DataLoader = require('dataloader')
const { getUsers } = require('../user/user.actions')

const userLoader = new DataLoader(async (elt) => {
    const users = await getUsers()
    return elt.map(i => users.find(user => user.id === i))
})

module.exports = { userLoader }