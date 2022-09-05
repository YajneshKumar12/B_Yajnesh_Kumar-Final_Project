import React, { Fragment, useState } from 'react'
import { Link, Redirect } from "react-router-dom"
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { login } from '../actions/auth'


const Login = ({ login, isAuthenticated }) => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const { email, password } = formData;
    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });
    const onSubmit = (e) => {
        e.preventDefault();
        login(email, password)

    }

    if (isAuthenticated) {
        return <Redirect to="/dashboard" />
    }

    return (
        <div className="container">
    
            <div className="flex-container">
                
                <div className="left-divider">
                    
                    <form className="form" onSubmit={e => onSubmit(e)}>
                        <div className="form-group2">
                            <center><h1><i>Agency Login Page</i></h1></center>
                            <label htmlFor="email">Email-ID:</label>
                            <input required name="email" placeholder="Email ID" value={email} type="email" className="form-control sgnUp" onChange={e => onChange(e)} />
                        </div>
                        <div className="form-group2">
                            <label htmlFor="password">Password :</label>
                            <input required id="password" name="password" value={password} placeholder="Password" type="password" className="form-control sgnUp" onChange={e => onChange(e)} />
                        </div>

                        <div className="form-group2">
                            <input required type="submit" value="Login" className="btn-primary btnn form-submit sub-btn sgnUp" />
                        </div>
                        <div>
                            <small className="form-text text-muted link-text"><b>Already have a Account?</b>
                                      </small>
                            <Link to="/register"><b>Register</b></Link>
                        </div>
                    </form>
                </div>
            </div>
        </div >
    )
};
Login.propTypes = {
    setAlert: PropTypes.func.isRequired,
    register: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { login })(Login)
