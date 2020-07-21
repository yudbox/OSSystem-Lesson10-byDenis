import React from 'react';
import { useParams } from "react-router-dom";
import { connect } from 'react-redux';
import { addFavoritePerson, removePerson } from '../../../redux/peoplelist-reducer';
import cl from './HeroDetail.module.css'
import { compose } from 'redux'
import withLoginRedirect from '../../../hoc/withLoginRedirect'
import PropTypes from 'prop-types'


const HeroDeatail = ({ characters, favorites,  addFavoritePerson, removePerson, ...props }) => {

    let heroId = useParams().id;



    let [{...personData}] = characters.filter(person=> {
        if(person.id == heroId) {
            return person
        }
    })
    const addToFavorites = () =>{
        let persodId = personData.id
        addFavoritePerson(persodId)
    }

    const removeFromFavorites = () => {
        let persodId = personData.id
        removePerson(persodId)
    }


    //  this function helps to know Do this person already in Faforite Characters or no?, depends from the answer
    // will display different buttons: add to favorites or remove from favorites
    const isPersonInFavorites = () => {
        let favoritesId = favorites.map((person, index)=>{
             if(person.id === personData.id) {
                 return true
             } else {
                return false
             }
            }) 
            let isFavoritePerson = favoritesId.includes(true)
            return isFavoritePerson
            
    }

  


    return (
        <div className={cl.hero}>
            <div className={cl.hero__avatar}><img src={personData.image} alt="" /></div>
            <div className={cl.hero__info}>
                <div className={cl.hero__infoName} >
                    <div>Name: {personData.name} </div><div>ID: {personData.id}</div>
                </div>
                <div>Gender: {personData.gender} </div>
                <div>Location: {personData.location.name} </div>
                <div>Species: {personData.species} </div>
                <div>Status: {personData.status} </div>
                <div>

                {favorites.length === 0 
                ? <button onClick={addToFavorites} >Add to favorites</button> 
                :  isPersonInFavorites() ? 
                <div className={cl.info__inFavore}>
                    <p>This is one of your favorite Character</p>
                    <button onClick={removeFromFavorites} >Remove from favorites</button> 
                </div> 
               : <button onClick={addToFavorites} >Add to favorites</button> 
                }

                    
                </div>
            </div>
        </div>
    )
}
let mapStateToProps = (state) => {


    return {
        characters: state.people.characters,
        favorites: state.people.favorites
    }
}




export default compose(connect(mapStateToProps, { addFavoritePerson, removePerson }), withLoginRedirect )(HeroDeatail)


HeroDeatail.propTypes = {
    characters: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired
        })
    ),
    favorites: PropTypes.array,
    addFavoritePerson: PropTypes.func,
    removePerson: PropTypes.func
}