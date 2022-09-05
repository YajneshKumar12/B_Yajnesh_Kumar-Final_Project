import React, { Fragment, useState } from 'react'
import { Link, Redirect } from "react-router-dom"
import { setAlert } from '../actions/alert'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { register } from '../actions/auth'


const Register = ({ register, setAlert, isAuthenticated }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: '',
        contact: '',
        comapny: '',
        gst: ''

    });
    const { name, email, password, password2, contact, company, gst } = formData;
    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });
    const onSubmit = (e) => {
        e.preventDefault();
        if (password !== password2) {
            setAlert(<strong>Passwords do not match</strong>, 'danger')
        } else {
            register({ name, email, password, contact, company, gst })
        }
    }

    if (isAuthenticated) {
        return <Redirect to="/dashboard" />
    }

    return (
        <Fragment>
            <div className="container">
                <div className="flex-container">
                    <div className="left-divider">
                        <form className="form" onSubmit={e => onSubmit(e)}>
                            <div className="form-group2">
                                <center><h1>Agency Register Page</h1></center>
                                <label htmlFor="name"><strong>Owner Name:</strong></label>
                                <input type="text" placeholder="Name" name="name" value={name} className="form-control sgnUp" onChange={e => onChange(e)} />
                            </div>
                            <div className="form-group2">
                                <label htmlFor="company"><strong>Company Name:</strong></label>
                                <input type="text" placeholder="Company Name" name="company" value={company} className="form-control sgnUp" onChange={e => onChange(e)} />
                            </div>
                            <div className="form-group2">
                                <label htmlFor="mob-number"><strong>GSTIN Number:</strong></label>
                                <input required id="gst" placeholder="GSTIN" type="text" name="gst" value={gst} className="form-control sgnUp" onChange={e => onChange(e)} />
                            </div>
                            <div className="form-group2">
                                <label htmlFor="mob-number"><strong>Contact-No.:</strong></label>
                                <input required id="mob-number" placeholder="Contact No" type="text" name="contact" value={contact} className="form-control sgnUp" onChange={e => onChange(e)} />
                            </div>
                            <div className="form-group2">
                                <label htmlFor="email"><strong>Email-ID:</strong></label>
                                <input required name="email" placeholder="Email ID" value={email} type="email" className="form-control sgnUp" onChange={e => onChange(e)} />
                            </div>
                            <div className="form-group2">
                                <label htmlFor="password"><strong>Password :</strong></label>
                                <input required id="password" name="password" value={password} placeholder="Password" type="password" className="form-control sgnUp" onChange={e => onChange(e)} />
                            </div>
                            <div className="form-group2">
                                <label htmlFor="password"><strong>Re-Password :</strong></label>
                                <input required id="password2" name="password2" value={password2} placeholder="Confirm Password" type="password" className="form-control sgnUp" onChange={e => onChange(e)} />
                            </div>
                            <div className="form-group2">
                                <input required type="submit" value="Register" className="btn-primary btnn form-submit sub-btn sgnUp" />
                            </div>
                            <div>
                                <small className="form-text text-muted link-text"><b>Already a User?</b>
                                      </small>
                                <Link to="/login"><b> Sign-In</b></Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div >
        </Fragment>
    )
};
Register.propTypes = {
    setAlert: PropTypes.func.isRequired,
    register: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})


export default connect(mapStateToProps, { setAlert, register })(Register)
