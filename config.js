if (process.env.NODE_ENV !== 'production')
    require('dotenv').config()

const token = process.env.TOKEN

module.exports = {token}