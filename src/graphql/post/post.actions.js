const fetch = require('node-fetch')

const getPostById = async (id) => {
    const response = await fetch(`http://localhost:4200/post/${id}`, {method: 'GET'})
    const data = await response.json()
    return data
}

module.exports = {
    getPostById
}