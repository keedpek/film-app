import axios from "axios"

const $movies = axios.create({
  baseURL: 'http://localhost:5000/api/'
})

export default $movies
