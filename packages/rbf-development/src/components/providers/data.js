/* global fetch */
export const GET_ONE = 'GET_ONE'
export const GET_MANY = 'GET_MANY'
export const CREATE = 'CREATE'
export const UPDATE = 'UPDATE'
export const DELETE = 'DELETE'

const dataProvider = async (type, resource, params) => {
  switch (type) {
    case GET_ONE:
      return fetch(`http://jsonplaceholder.typicode.com/${resource}/${params.id}`)
        .then(response => response.json())
        .then(data => ({
          data
        }))
    case GET_MANY:
      const idsStr = params.ids
        .map(val => {
          return `id[]=${val}`
        })
        .join('&')
      return fetch(`http://jsonplaceholder.typicode.com/${resource}?${idsStr}`)
        .then(response => response.json())
        .then(data => ({
          data
        }))
    case CREATE:
      return fetch(`https://jsonplaceholder.typicode.com/${resource}`, {
        method: 'POST',
        body: JSON.stringify(params.data),
        headers: {
          'Content-type': 'application/json; charset=UTF-8'
        }
      })
        .then(response => response.json())
        .then(data => ({
          data
        }))
    case UPDATE:
      return fetch(`https://jsonplaceholder.typicode.com/${resource}/${params.id}`, {
        method: 'PATCH',
        body: JSON.stringify(params.data),
        headers: {
          'Content-type': 'application/json; charset=UTF-8'
        }
      })
        .then(response => response.json())
        .then(data => ({
          data
        }))
    case DELETE:
      return fetch(`http://jsonplaceholder.typicode.com/${resource}/${params.id}`)
        .then(response => response.json())
        .then(data => {
          if (!data) {
            throw new Error(`Record #${params.id} is not found`)
          }
          return fetch(`https://jsonplaceholder.typicode.com/${resource}/${params.id}`, {
            method: 'DELETE'
          })
            .then(() => ({ data }))
        })
    default:
      throw new Error(`Unknown param "type" (${type}) in the data provider`)
  }
}

export default dataProvider
