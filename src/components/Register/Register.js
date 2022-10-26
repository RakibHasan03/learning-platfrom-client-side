import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import { AuthContext } from '../../UserContext/AuthProvider';

const Register = () => {
    const [error, setError] = useState("")
    const [accepted, setAccepted] = useState(false)
    const { createAccount, updateUserProfile, verifyEmail } = useContext(AuthContext)
    const submitHandler = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(name, photoUrl, email, password)
        createAccount(email, password)
            .then(result => {
                const user = result.user
                console.log(user)
                form.reset()
                setError('')
                handelUpdateProfile(name, photoURL)
                handelEmailVerification()
                toast.success('Please verify your email');
                
            })
            .catch(error => {
            console.error(error)
            })
       

        
    }
    const handelUpdateProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateUserProfile(profile)
            .then(() => { })
            .catch(error => console.error(error))
    }
    const handelEmailVerification = () => {
        verifyEmail()
            .then(() => { })
            .catch(error => console.error(error))

    }
    const handelChecked = (event) => {
        setAccepted(event.target.checked)

    }
    
    return (
        <div className='w-11/12 mx-auto mt-10'>
            <div className='flex justify-center'>
                <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-violet-500 dark:text-gray-100">
                    <h1 className="text-2xl font-bold text-center">Register</h1>
                    <form onSubmit={submitHandler}  className="space-y-6 ng-untouched ng-pristine ng-valid">
                        <div className="space-y-1 text-sm">
                            <label htmlFor="username" className="block text-white">Full Name</label>
                            <input type="text" name="name" id="name" placeholder="your name" className="w-full px-4 py-3 rounded-md dark:border-gray-700 bg-white dark:text-gray-700 focus:outline-none " />
                        </div>
                        <div className="space-y-1 text-sm">
                            <label htmlFor="username" className="block text-white">Photo URL</label>
                            <input type="text" name="photoURL" id="photoUrl" placeholder="Photo URL" className="w-full px-4 py-3 rounded-md dark:border-gray-700 bg-white dark:text-gray-700 focus:outline-none " />
                        </div>
                        <div className="space-y-1 text-sm">
                            <label htmlFor="username" className="block text-white">Email</label>
                            <input type="email" name="email" id="username" placeholder="your email" className="w-full px-4 py-3 rounded-md dark:border-gray-700 bg-white dark:text-gray-700 focus:outline-none " required />
                        </div>
                        <div className="space-y-1 text-sm">
                            <label htmlFor="password" className="block text-white">Password</label>
                            <input type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md dark:border-gray-700 bg-white dark:text-gray-700 focus:outline-none" />
                            <div className="flex justify-center text-xs dark:text-gray-400" required>
                                <p></p>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <input onClick={handelChecked} type="checkbox" name="remember" id="remember" aria-label="Remember me" className="mr-1 rounded-lg focus:ring-blue-800 focus:dark:border-blue-800 focus:ring-2 accent-blue-800" />
                            <label htmlFor="remember" className="text-sm text-white">Accept Terms And Conditions</label>
                        </div>
                        <button
                            disabled={!accepted}
                            className="block w-full p-3 text-center rounded-sm dark:text-gray-900 bg-white hover:bg-violet-300">Register</button>
                    </form>
                   

                    <div className="flex items-center pt-4 space-x-1">
                        <p className="text-xs text-center sm:px-6 text-white">Already have an account?
                            <Link to='/login' className="underline dark:text-gray-100">Log In</Link>
                        </p>
                    </div>
                 
                  
                </div>
            </div>
        </div>
    );
};

export default Register;