import { React, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'


export const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    const { user, logIn } = UserAuth()


    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            console.log(email, password)
            await logIn(email, password)
            navigate('/')

        } catch (error) {
            console.log(error.message)
        }
    }
    return (
        <div>
            <div className='w-full h-screen'>
                <img className='hidden sm:block absolute w-full h-full object-cover' src='https://assets.nflxext.com/ffe/siteui/vlv3/908077b4-cf0a-43c3-b2c9-435fb990299b/7d5fd507-5575-42f8-912d-14afd6cedc28/IN-en-20220829-popsignuptwoweeks-perspective_alpha_website_medium.jpg' alt='' />
                <div className='bg-black/60 fixed top-0 left-0 w-full h-screen'></div>
                <div className='fixed w-full px-4 py-24 z-50'>
                    <div className='max-w-[450px] h-[600px] mx-auto bg-black/75 text-white'>
                        <div className='max-w-[320px] mx-auto py-16'>
                            <h1 className='text-3xl font-bold'>Sign In</h1>
                            <form className='w-full flex flex-col py-4' onSubmit={handleSubmit}>
                                <input className="p-3 my-2 bg-gray-700 rounded" onChange={(e) => setEmail(e.target.value)} type="email" placeholder='Email' autoComplete='email' />
                                <input className="p-3 my-2 bg-gray-700 rounded" onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" autoComplete='current-password' />
                                <button className='bg-red-600 py-3 my-6 rounded font-bold'>Sign In</button>
                                <div className='flex justify-between items-center'>
                                    <p><input className='mr-2' type="checkbox" />Remember me</p>
                                    <p>Need Help?</p>
                                </div>
                                <p className='py-8'><span className='text-gray-600'>New to Netflix?</span>{' '}
                                    <Link to='/login'>
                                        Sign Up
                                    </Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div></div>
    )
}
