import axios from 'axios'

export default axios.create({
  //baseurl will need to be changed
  baseURL: 'https://jsonplaceholder.typicode.com'
})