"use client"
const api = {}
import axios from "axios"
const API_ENDPOINT_URL = 'http://localhost:3001/api'

api.getAllUser = async () => {
    let result = await axios.get(API_ENDPOINT_URL + '/users')

    return result
}

module.exports = api