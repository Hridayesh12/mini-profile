import React, { useState, useEffect } from 'react'
import api from '../contexts/adapter';
import { useAuth } from '../contexts/AuthContext';
import Image from 'next/image';
const Connections = () => {
    const AuthData = useAuth();
    const userId = AuthData.user.userId;
    // console.log(AuthData);
    const [conn, setConn] = useState([]);
    const [otherConn, setOtherConn] = useState([]);
    const [userInfo, setUserInfo] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const get_connections = async (new_conn) => {
        try {
            // console.log(userInfo);
            const body = new_conn;
            // console.log(body);
            const response = await api.post(`/auth/connections`, body);
            // console.log(response);
            setConn(response.data);
        }
        catch (err) {
            setError(true);
        }
    }
    const other_connections = async (new_conn) => {
        try {
            const body = new_conn;
            const response = await api.post(`/auth/remaining_connections`, body);
            // console.log(response);
            setOtherConn(response.data);
        }
        catch (err) {
            setError(true);
        }
    }
    const getUserInfo = async () => {
        try {
            const response = await api.get(`/auth/user_info/${AuthData.user.userId}`);
            setUserInfo(response.data);
            setLoading(false);
            if (response.status === 200) {
                // console.log('success');
                // console.log(response.data);
                let new_conn = response.data.connections;
                if (userInfo != null || userInfo != undefined || userInfo != {}) {
                    get_connections(response.data.connections);
                    other_connections(response.data.connections);
                }
            }
            else {
                // console.log('error', response);
            }
        }
        catch (err) {
            // console.log(err);
        }
    }
    const remove_user = async (user_id) => {
        try {
            let userIn = { ...userInfo };
            let findIndex = userIn.connections.indexOf(user_id);
            userIn.connections.splice(findIndex, 1);
            // console.log(userIn, user_id, AuthData.user.userId);
            const response = await api.put(`/auth/user_update/${userInfo?._id}`, userIn);
            // console.log(response);
            if (response.status === 200) {
                // console.log('success');
                getUserInfo();
            }
            else {
                // console.log('error', response);
            }
        }
        catch (err) {
            // console.log(err);
        }
    }
    const update_user = async (user_id) => {
        try {
            let userIn = { ...userInfo };
            userIn.connections = [...userInfo.connections, user_id];
            // console.log(userIn, user_id, AuthData.user.userId);
            const response = await api.put(`/auth/user_update/${userInfo?._id}`, userIn);
            // console.log(response);
            if (response.status === 200) {
                // console.log('success');
                getUserInfo();
            }
            else {
                // console.log('error', response);
            }
        }
        catch (err) {
            // console.log(err);
        }
    }
    useEffect(() => {
        getUserInfo();
    }, []);
    return (
        <div className='mx-auto w-full'>
            <div className='w-full p-2 text-2xl text-white h-32 bg-indigo-900 text-white rounded-lg z-1'>My Connections</div>
            <div className="rounded-lg shadow-2xl bg-white w-full mx-auto flex flex-col  justify-around container p-5 mb-32 font-medium z-2">
                {conn.length > 0 && <div className='text-2xl text-center'>Your Connections</div>}
                <div className='flex flex-row flex-wrap w-full items-center gap-2 '>
                    {conn.length > 0 && conn.map((item, index) => {
                        return (
                            <div key={index} className='p-5 flex flex-row flex-wrap justify-between items-center border-2 border-slate-300 rounded-lg'>
                                <div className='flex flex-col items-start justify-center'>
                                    <h3 className="font-md text-gray-700 font-bold text-indigo-800 mb-3">{item?.firstname}&nbsp;{item?.lastname}</h3>
                                    <h3 className="font-md text-gray-700 font-medium mb-3">{item?.email}</h3>
                                    <h3 className="font-md text-gray-700 font-medium mb-3">{item?.phone}</h3>
                                    <button className='w-full bg-violet-900 hover:bg-violet-500 rounded-xl text-white py-2'
                                        onClick={() => remove_user(item?._id)}
                                    >
                                        Remove
                                    </button>
                                </div>
                                <div className='flex flex-row items-center'>
                                    <Image
                                        className="rounded-full w-[100px] h-[100px] mr-2"
                                        src={item?.pic == '' ? 'https://tse1.mm.bing.net/th?id=OIP.25iSkbJTm4F-Rq0g1JR8NgHaHa&pid=Api&P=0&h=180' : `${item?.pic}`}
                                        alt="profilePic"
                                    />
                                </div>

                            </div>
                        )
                    })}
                </div>
                {conn.length === 0 && <div className='text-2xl text-center'>No Connections</div>}
                <div className='border-2 border-slate-300 my-3 w-full'></div>
                {otherConn.length > 0 && <div className='text-2xl p-3'>People You Can Also Connect</div>}
                <div className='flex flex-row flex-wrap w-full items-center gap-2 '>
                    {otherConn.length > 0 && otherConn.map((item, index) => {
                        return (
                            <>
                                {
                                    item?._id === userId ? null :
                                        <div key={index} className='p-5 flex flex-row flex-wrap justify-between items-center border-2 border-slate-300 rounded-lg'>
                                            <div className='flex flex-col items-start justify-center'>
                                                <h3 className="font-md text-gray-700 font-bold text-indigo-800 mb-3">{item?.firstname}&nbsp;{item?.lastname}</h3>
                                                <h3 className="font-md text-gray-700 font-medium mb-3">{item?.email}</h3>
                                                <h3 className="font-md text-gray-700 font-medium mb-3">{item?.phone}</h3>
                                                <button className='w-full bg-violet-900 hover:bg-violet-500 rounded-xl text-white py-2'
                                                    onClick={() => update_user(item?._id)}
                                                >
                                                    Connect
                                                </button>
                                            </div>
                                            <div className='flex flex-row items-center'>
                                                <Image
                                                    className="rounded-full w-[100px] h-[100px] mr-2"
                                                    src={item?.pic == '' ? 'https://tse1.mm.bing.net/th?id=OIP.25iSkbJTm4F-Rq0g1JR8NgHaHa&pid=Api&P=0&h=180' : `${item?.pic}`}
                                                    alt="profilePic"
                                                />
                                            </div>

                                        </div>
                                }
                            </>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Connections