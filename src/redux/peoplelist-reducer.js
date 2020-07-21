import { charactersAPI } from '../api/api'

const SET_USERS = 'PEOPLE/SET-USERS';
const SET_FETCHING = 'PEOPLE/SET-FETCHING';
const SET_FAVORITE_PERSON_ID = 'PEOPLE/SET-FAVORITE-PERSON-ID';
const REMOVE_FAVORITE_PERSON_ID = 'PEOPLE/REMOVE-FAVORITE-PERSON-ID';


let initialState = {
    isFetching: true,
    characters: [],
    favorites: []

}


const peoplelistReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS:
            return {
                ...state,
                characters: [...action.characters]
            }

        case SET_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }

        case SET_FAVORITE_PERSON_ID:
            return {
                ...state,
                favorites: [...state.favorites, ...state.characters.filter(person=> person.id === action.personId)]
            }

        case REMOVE_FAVORITE_PERSON_ID:
            return {
                ...state,
                favorites: [...state.favorites.filter(person=> person.id !== action.personId)]
            }


        default:
            return state;
    }
}


export const setCharacters = (data) => ({ type: SET_USERS, characters: data })
export const setFetching = (isFetching) => ({ type: SET_FETCHING, isFetching })
export const addFavoritePerson = (personId) => ({ type: SET_FAVORITE_PERSON_ID, personId })
export const removePerson = (personId) => ({ type: REMOVE_FAVORITE_PERSON_ID, personId })


export const getCharacters = () => {

    return (dispatch) => {
        charactersAPI.getCharacters().then(chars => {
            dispatch(setCharacters(chars.results))
            dispatch(setFetching(false))
        })
    }
}


export default peoplelistReducer;