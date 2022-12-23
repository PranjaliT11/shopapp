import './Login.css';
import {Link} from 'react-router-dom';
import {Formik,Form,Field} from 'formik';
import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';


function Login(){

    let navigate = useNavigate();
    const [formData] = useState({
        email:'',
        password: ''
        }); 

     let handleSubmit = (val)=>{
            console.log(val)
            alert('congratulation login Successfull')
            navigate("/", true)
    }
    const LoginSchema = Yup.object().shape({
        email: Yup.string()
           .required("Email is required!")
           .email("Invailed Email"),
       
        password: Yup.string()
           .required("Password is required!")
           .min(8, "password should not be less than 8 chars")
           .max(30, "password is too long!")
           .matches(/^(?=.*[a-z])/, "Password must contain atleast a lowercase character")
           .matches(/^(?=.*[A-Z])/, "Password must contain atleast a uppercase character")
           .matches(/^(?=.*[0-9])/, "Password must contain at least a number")
                    
           });
        


    
    return(
        <div className='page_container'>
    <div className='form-container'>
        <h1>Login</h1>
        <Formik initialValues={formData} validationSchema={LoginSchema}  >
      {({errors})=>(<Form id="form" method='post'>
        <Field  id="email"name="email"type="email"placeholder="Email Address"/>
        <span>{errors.email}</span>
        <Field  id="password"name="password"type="password"placeholder="Password"/>
        <span>{errors.password}</span>
        <p> Don't have an account? Sign up <Link to='/signup'>here.</Link></p>
        <button onClick={handleSubmit} id="formSubmit"className="btn_submit" type='button'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" classNmae="bi bi-box-arrow-in-left" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M10 3.5a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 1 1 0v2A1.5 1.5 0 0 1 9.5 14h-8A1.5 1.5 0 0 1 0 12.5v-9A1.5 1.5 0 0 1 1.5 2h8A1.5 1.5 0 0 1 11 3.5v2a.5.5 0 0 1-1 0v-2z"/>
                <path fillRule="evenodd" d="M4.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H14.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z"/>
                </svg>&nbsp;Login
        </button>
        </Form>)}
      </Formik>

       </div>
    </div> 
    )
}


export default Login;