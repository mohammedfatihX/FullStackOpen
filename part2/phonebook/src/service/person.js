import axios from 'axios'

const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {

    return axios.get(baseUrl)
                .then(result => result.data)

    }

const create = (person) => {
    return axios.post(baseUrl,person)
                .then(result => result.data) 
                
}
const update = (id,person) => {
    return axios.put(`${baseUrl}/${id}`,person)
                .then(result => result.data)

}

const remove = (id) => {
    return axios.delete(`${baseUrl}/${id}`)
                .then(result => result.data)
}

export default { getAll,create,update,remove }
