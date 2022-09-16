import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'

export const SignUp = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showModal, setShowModal] = React.useState(false);
    const [showMessage, setShowMessage] = React.useState(null);
    const navigate = useNavigate()
    const { user, signUp } = UserAuth()


    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            console.log(email, password)
            await signUp(email, password)
            navigate('/')

        } catch (error) {
            setShowMessage(error.message.slice(9))
            setShowModal(true)

            console.log(error.message)
        }
    }

    return (
        <div className='w-full h-screen'>
            <img className='hidden sm:block absolute w-full h-full object-cover' src='https://assets.nflxext.com/ffe/siteui/vlv3/908077b4-cf0a-43c3-b2c9-435fb990299b/7d5fd507-5575-42f8-912d-14afd6cedc28/IN-en-20220829-popsignuptwoweeks-perspective_alpha_website_medium.jpg' alt='' />
            <div className='bg-black/60 fixed top-0 left-0 w-full h-screen'></div>
            <div className='fixed w-full px-4 py-24 z-50'>
                <div className='max-w-[450px] h-[600px] mx-auto bg-black/75 text-white'>
                    <div className='max-w-[320px] mx-auto py-16'>
                        <h1 className='text-3xl font-bold'>Sign Up</h1>
                        <form className='w-full flex flex-col py-4' onSubmit={handleSubmit}>
                            <input onChange={(e) => setEmail(e.target.value)} className="p-3 my-2 bg-gray-700 rounded" type="email" placeholder='Email' autoComplete='email' />
                            <input onChange={(e) => setPassword(e.target.value)} className="p-3 my-2 bg-gray-700 rounded" type="password" placeholder="Password" autoComplete='current-password' />
                            <button className='bg-red-600 py-3 my-6 rounded font-bold'>Sign Up</button>
                            <div className='flex justify-between items-center'>
                                <p><input className='mr-2' type="checkbox" />Remember me</p>
                                <p>Need Help?</p>
                            </div>
                            <p className='py-8'><span className='text-gray-600'>Already Subscribed to Netflix?</span>{' '}
                                <Link to='/login'>
                                    Sign In
                                </Link>
                            </p>
                        </form>
                        {showModal ? (
                            <>
                                <div
                                    className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                                >
                                    <div className="relative w-auto my-6 mx-auto max-w-3xl">
                                        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-black/90 outline-none focus:outline-none">
                                            <div className="relative p-6 flex-auto">
                                                <p className="my-4 text-white text-lg leading-relaxed">
                                                    {showMessage}
                                                </p>
                                            </div>
                                            <div className="flex items-center justify-end p-6 ">
                                                <button
                                                    className="bg-red-600 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                    type="button"
                                                    onClick={() => setShowModal(false)}
                                                >
                                                    Ok
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                            </>
                        ) : null}
                    </div>
                </div>
            </div>
        </div >

    )
}
