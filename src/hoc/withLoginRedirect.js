import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

// Обвернул ХОКом все компоненты, так как все данные хранятся в Redux и при обновлении старницы, если URL это
// не главныя страница, данные теряются и появляется ошибка "Не могу мапить у undefined". А при этом ХОКе на
// всех компонентах проверяется логинизация и после логинизации производится redirect на главную, где производится
// запрос на сервер, redux обновляет данные - страница не падает.

export const withLoginRedirect = (Component) => {

class RedirectComponent extends React.Component {
    render() {
        if (!this.props.isLogged) return <Redirect to='/login' />
        return <Component {...this.props} />
    }
}

let mapStateToProps = (state) => ({
    isLogged: state.auth.isLogged
})

let connectedRedirectComponent = connect(mapStateToProps)(RedirectComponent)
return connectedRedirectComponent;
}

export default withLoginRedirect;