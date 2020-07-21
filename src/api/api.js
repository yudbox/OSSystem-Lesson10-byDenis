import * as axios from 'axios';

const axiosBase = axios.create({
    baseURL: 'https://rickandmortyapi.com/api/character',
})

export const charactersAPI = {

    getCharacters(currentPage = 1, pageSize = 10)  {
        return axiosBase.get(`/?page=${currentPage}`)
            .then(response => {
                return response.data;
            })
    },
    getIndividualPerson(personId=1) {
        return axiosBase.get(`/${personId}`)
        .then(response => {
            return response.data;
        })
    }
}