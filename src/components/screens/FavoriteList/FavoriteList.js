import React from 'react';
import { connect } from 'react-redux';
import cl from './FavoriteList.module.css'
import { NavLink } from 'react-router-dom'
import { compose } from 'redux'
import withLoginRedirect from '../../../hoc/withLoginRedirect'
import PropTypes from 'prop-types'

const Person = (props) => {
    return (
        <div className={cl.person} >
            <NavLink to={`/herodetail/${props.id}`}>
                <div className={cl.person__link}>
                    <span className={cl.person__link_name}>{props.name}</span> - <span className={cl.person__link_avatar}> <img src={props.image} alt="" /> </span>
                </div>

            </NavLink>
        </div>
    )
}


const FavoriteList = ({ favorites, ...props }) => {
    return (<>
    <h2>This is list of your favorite Characters</h2>
        <div className={cl.favore}>
            {favorites.map(person => <Person key={person.id} {...person} />)}
        </div>
        </>
    )
}

let mapStateToProps = (state) => {
    return {

        favorites: state.people.favorites
    }
}

export default compose(connect(mapStateToProps), withLoginRedirect )(FavoriteList)


FavoriteList.propTypes = {
    favorites: PropTypes.array.isRequired
}

Person.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
}
