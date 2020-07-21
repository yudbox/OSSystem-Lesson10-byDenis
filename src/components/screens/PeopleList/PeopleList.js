import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getCharacters } from '../../../redux/peoplelist-reducer'
import cl from './PeopleList.module.css'
import {NavLink} from 'react-router-dom'
import { compose } from 'redux'
import withLoginRedirect from '../../../hoc/withLoginRedirect'
import PropTypes from 'prop-types'

const Person = (props) => {
    return (
        <div className={cl.person} >
            <NavLink to={`/herodetail/${props.id}`}>
                <span>{props.name}</span> - <span className={cl.person__species}>{props.species}</span>
            </NavLink>
        </div>
    )
}


//////////////////////********************************* */



const PeopleList = ({ charactersData, isFetching, getCharacters }) => {
    useEffect(() => {
        getCharacters()
    }, [])

    if (isFetching) { return <div>...Loading</div> }


    return (

        <div className={cl.characters_container}>
            {charactersData.map(person => <Person {...person} key={person.id} />)}
        </div>
    )
}


let mapStateToProps = (state) => {

    return {
        charactersData: state.people.characters,
        isFetching: state.people.isFetching
    }
}


export default compose(connect(mapStateToProps, { getCharacters }), withLoginRedirect )(PeopleList);

PeopleList.propTypes = {
    charactersData: PropTypes.array.isRequired,
    isFetching: PropTypes.bool.isRequired,
    getCharacters: PropTypes.func
}

Person.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    species: PropTypes.string
}