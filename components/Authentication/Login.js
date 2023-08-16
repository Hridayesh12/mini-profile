import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../../contexts/AuthContext';
import api from '../../contexts/adapter';
import Swal from 'sweetalert2';
function Login() {
    const router = useRouter();
    const AuthData = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passShow, setpassShow] = useState(false);
    const [disableBtn, setdisableBtn] = useState(false);

    const submit = async () => {
        if (email == '' || password == '') {
            Swal.fire({
                icon: "warning",
                title: "Fill All The Details",
                showConfirmButton: false,
                timer: 1500,
            });
            return;
        }
        try {
            setdisableBtn(true);
            const body = {
                email: email,
                password: password,
            }
            const response = await api.post(`/auth/login`, body)
            // console.log(response);
            if (response.status == 200) {
                const respp = await AuthData.login();
                // console.log(respp);
                if (respp) {
                    Swal.fire({
                        icon: "success",
                        title: "Logged In",
                        showConfirmButton: false,
                        timer: 1500,
                    });
                    router.push('/dashboard/profile');
                }
            }
            else {
                Swal.fire({
                    icon: "error",
                    title: "Something Went Wrong",
                    showConfirmButton: false,
                    timer: 1500,
                });
            }
        }
        catch (error) {
            Swal.fire({
                icon: "error",
                title: error,
                showConfirmButton: false,
                timer: 1500,
            });
        }
        setdisableBtn(false);
    }
    return (
        <div className='bg-gray-100 min-h-screen flex items-center justify-center'>
            <div className=' bg-violet-200 flex rounded-2xl shadow-lg max-w-3xl p-5'>
                <div className='sm:w-1/2 px-6'>
                    <h2 className='font-bold text-2xl text-violet-900 underline'>Login</h2>
                    <p className='text-sm mt-4 text-violet-900'>If You Already A Member, Login In</p>
                    <div className='flex flex-col gap-4'>
                        <input className='p-2 mt-3 rounded-xl border' type='email' placeholder='Email' value={email} onChange={(e) => { setEmail(e.target.value) }} />
                        <div className='relative'>
                            <input className='p-2 rounded-xl border w-full' type={passShow ? "text" : "password"} placeholder='Password' value={password} onChange={(e) => { setPassword(e.target.value) }} />
                            <>
                                {passShow ?
                                    <svg xmlns="http://www.w3.org/2000/svg" onClick={() => { setpassShow(!passShow) }} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="cursor-pointer w-6 h-6 absolute top-1/2 right-3 -translate-y-1/2 ">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                                    </svg>
                                    :
                                    <svg xmlns="http://www.w3.org/2000/svg" onClick={() => { setpassShow(!passShow) }} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="cursor-pointer w-6 h-6 absolute top-1/2 right-3 -translate-y-1/2 ">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                }
                            </>
                        </div>
                        {disableBtn ?
                            <button className='bg-violet-300 rounded-xl text-white py-2 cursor-progress flex items-center justify-center space-x-2' >Login
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="animate-spin h-5 w-5 mr-3">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.712 4.33a9.027 9.027 0 011.652 1.306c.51.51.944 1.064 1.306 1.652M16.712 4.33l-3.448 4.138m3.448-4.138a9.014 9.014 0 00-9.424 0M19.67 7.288l-4.138 3.448m4.138-3.448a9.014 9.014 0 010 9.424m-4.138-5.976a3.736 3.736 0 00-.88-1.388 3.737 3.737 0 00-1.388-.88m2.268 2.268a3.765 3.765 0 010 2.528m-2.268-4.796a3.765 3.765 0 00-2.528 0m4.796 4.796c-.181.506-.475.982-.88 1.388a3.736 3.736 0 01-1.388.88m2.268-2.268l4.138 3.448m0 0a9.027 9.027 0 01-1.306 1.652c-.51.51-1.064.944-1.652 1.306m0 0l-3.448-4.138m3.448 4.138a9.014 9.014 0 01-9.424 0m5.976-4.138a3.765 3.765 0 01-2.528 0m0 0a3.736 3.736 0 01-1.388-.88 3.737 3.737 0 01-.88-1.388m2.268 2.268L7.288 19.67m0 0a9.024 9.024 0 01-1.652-1.306 9.027 9.027 0 01-1.306-1.652m0 0l4.138-3.448M4.33 16.712a9.014 9.014 0 010-9.424m4.138 5.976a3.765 3.765 0 010-2.528m0 0c.181-.506.475-.982.88-1.388a3.736 3.736 0 011.388-.88m-2.268 2.268L4.33 7.288m6.406 1.18L7.288 4.33m0 0a9.024 9.024 0 00-1.652 1.306A9.025 9.025 0 004.33 7.288" />
                                </svg>
                            </button>
                            :
                            <button className='bg-violet-900 hover:bg-violet-500 rounded-xl text-white py-2' onClick={submit}>Login</button>
                        }
                    </div>
                    <div className='mt-5 grid grid-cols-3 items-center text-violet-500'>
                        < hr className='border-violet-500' /><p className='text-center text-sm'>OR</p>< hr className='border-violet-500' />
                    </div>
                    <div className='mt-3 text-xs flex justify-between items-center'>
                        <p className='text-xs'>Don't Have An Account ?&nbsp;</p>
                        <button className='py-2 px-5 bg-white border rounded-xl cursor-pointer hover:bg-violet-300' onClick={() => router.push('/signup')}>Register</button>
                    </div>
                </div>
                <div className='w-1/2 sm:block hidden'>
                    <img
                        className='rounded-2xl'
                        src={`/login.jpg`}
                        alt={`logo`}
                    />
                </div>
            </div>
        </div>
    );
}

export default Login;
