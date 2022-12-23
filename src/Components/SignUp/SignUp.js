import './SignUp.css'
import { Link } from 'react-router-dom'
import {Formik,Form,Field} from 'formik'
import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';


function SignUp() {


    let navigate = useNavigate();
    const [formData ] = useState({
        name:'',
        lastName:'',
        email:'',
        password: '',
        rePassword:''
        }); 
    

let handleSubmit = (val)=>{
    console.log(val)
    alert('congratulation Sign-Up Successfull go to login')
    navigate("/login", true)
}


const LoginSchema = Yup.object().shape({
    
    name: Yup.string()
        .required("Name is required!")
        .min(3,"Name should be 3 charector"),

        lastName:Yup.string()
        .required("Last Name is required!")
        .min(3,"Last Name should be 3 charector"),

    email: Yup.string()
       .required("Email is required!")
       .email("Invailed Email"),
   
    password: Yup.string()
       .required("Password is required!")
       .min(8, "password should not be less than 8 chars")
       .max(30, "password is too long!")
       .matches(/^(?=.*[a-z])/, "Password must contain atleast a lowercase character")
       .matches(/^(?=.*[A-Z])/, "Password must contain atleast a uppercase character")
       .matches(/^(?=.*[0-9])/, "Password must contain at least a number"),

       rePassword: Yup.string()
       .oneOf([Yup.ref('password'), null], 'Passwords must match')
       .required("Confirm Password is required!")
                
       });
    // console.log(password)
    return(

    <div className='page_container'>
        <div className='form-container'>
            <h1>Sign Up</h1>

            <Formik initialValues={formData} validationSchema={LoginSchema}>

            {({errors})=>(  <Form id="form" method='post'>
                        <Field id="firstName" name="name"type="text"placeholder="First Name"/>
                        <span>{errors.name}</span>
                        <Field id="lastName" name="lastName"type="text"placeholder="Last Name"/>
                        <span>{errors.lastName}</span>
                        <Field id="email"name="email"type="email"placeholder="Email Address"/>
                        <span> {errors.email}</span>
                        <Field id="password"name="password"type="password"placeholder="Password"/>
                        <span> {errors.password}</span>
                        <Field id="c-password"name="rePassword" type="password" placeholder="Confirm Password"/>
                        <span> {errors.rePassword}</span>

                           <p> Already have a account? Login <Link to='/login'>here.</Link></p>


                           <button onClick={handleSubmit} id="formSubmit"className="btn_submit" type='button'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-vcard" viewBox="0 0 16 16">
                                    <path d="M5 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm4-2.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5ZM9 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4A.5.5 0 0 1 9 8Zm1 2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5Z"/>
                                    <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2ZM1 4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H8.96c.026-.163.04-.33.04-.5C9 10.567 7.21 9 5 9c-2.086 0-3.8 1.398-3.984 3.181A1.006 1.006 0 0 1 1 12V4Z"/>
                                    </svg>&nbsp;Sign Up
                            </button>
                </Form>)}
            </Formik>
        

       </div>
    </div> 
    )
}



export default SignUp