import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://food-explorer-api-3su0.onrender.com'
})