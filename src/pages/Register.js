
import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';

const Register = () => {
    const navigate = useNavigate()
    const {createUser, user, updateUserProfile, verifyEmail} = useContext(AuthContext);
    const [error, setError] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value; 
        const password = form.password.value;
        console.log(name, email,password); 

        createUser(email, password)
        .then((result) => {
            const user = result.user;
            form.reset();
            setError('')
            updateUser(name, photoURL);
            handleEmailVerification();
            navigate('/login')
            toast.success('e-mail verification send')
            console.log(user);
        })
        .catch((error) => {
            setError(error.message);
            console.error(error);
        })
    }

    const updateUser = (name, photoURL) => {
        const profile = {
            displayName : name,
            photoURL : photoURL
        }
        updateUserProfile(profile)
        .then(() => {})
        .catch(error => console.error(error))
    }

    const handleEmailVerification = () => {
        verifyEmail()
        .then(() => {})
        .catch(error => console.error(error))
    }

    return (
        <div className="container mx-auto my-12">
            <div className="flex flex-col w-1/3 mx-auto p-6 rounded-md sm:p-10 bg-gray-50 text-gray-800">
            <div className="mb-8 text-center">
                <h1 className="my-3 text-4xl font-bold">Sign up</h1>
                <p className="text-sm text-gray-600">Sign up to get access</p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-12 ng-untouched ng-pristine ng-valid">
                <div className="space-y-4">
                    <div>
                        <label for="name" className="block mb-2 text-sm">Full Name</label>
                        <input type="text" name="name" id="name" placeholder="Enter Full Name" className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800" required/>
                    </div>
                    <div>
                        <label for="photo" className="block mb-2 text-sm">Photo URL</label>
                        <input type="text" name="photoURL" id="photo" placeholder="Enter photo URL" className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800" required/>
                    </div>
                    <div>
                        <label for="email" className="block mb-2 text-sm">Email address</label>
                        <input type="email" name="email" id="email" placeholder="Enter email address" className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800" required/>
                    </div>
                    <div>
                        <div className="flex justify-between mb-2">
                            <label for="password" className="text-sm">Password</label>
                            
                        </div>
                        <input type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800" required/>
                    </div>
                </div>
                <div className="space-y-2">
                    <div>
                        <button type="submit" className="w-full px-8 py-3 font-semibold rounded-md bg-slate-600 text-gray-50">Sign up</button>
                    </div>
                    {
                        user && <p className="text-center text-red-700">{error}</p>
                     }
                </div>
            </form>
        </div>
        </div>
    );
};

export default Register;