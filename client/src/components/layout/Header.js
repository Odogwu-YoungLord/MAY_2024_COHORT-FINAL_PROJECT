import React, {Fragment, useContext} from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import AuthContext from '../../context/auth/authContext'
import ContactContext from '../../context/contact/contactContext'

const Header = ({title, icon}) => {

    const authContext = useContext(AuthContext)
    const contactContext = useContext(ContactContext)

    const { user, logout, isAuthenticated } = authContext
    const { clearContacts } = contactContext

    const onLogout = () => {
        logout()
        clearContacts()
    }

    const authLinks = (
        <Fragment>
            <li>Hello {user && user.name}</li>
            <li>
                <a onClick={onLogout} href="#!">
                    <i className="fas fa-sign-out-alt"></i>
                    <span className="hide-sm">Logout</span>
                </a>
            </li>
        </Fragment>
    )
    const guestLinks = (
        <Fragment>
            <li>
                <Link to="/login">Login</Link>
            </li>
            <li>
                <Link to="/register">Register</Link>
            </li>
        </Fragment>
    )

    return (
        <nav style={{display: 'flex'}} className="navbar bg-primary">
            <h1><i className={icon}></i>{title}</h1>
            <ul>
                {isAuthenticated ? authLinks : guestLinks}
            </ul>
        </nav>
    )
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
}

Header.defaultProps = {
    title: 'Project Header'
}

export default Header
