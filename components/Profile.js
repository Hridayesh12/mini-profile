import { useState, useEffect } from 'react'
import api from '../contexts/adapter';
import { useAuth } from '../contexts/AuthContext';
import axios from 'axios';
import ViewProfile from './ProfileComponents/ViewProfile';
import EditProfile from './ProfileComponents/EditProfile';
const Profile = () => {
    const AuthData = useAuth();
    const [userInfo, setUserInfo] = useState({});
    const [edit, setEdit] = useState(false);
    const [loading, setLoading] = useState(true);
    const userId = AuthData.userId;
    // console.log(userId);
    const getUserInfo = async () => {
        try {
            const response = await api.get(`/auth/user_info/${AuthData.userId}`);
            // console.log(response.data);
            setUserInfo(response.data);
            setLoading(false);
            if (response.status === 200) {
                // console.log('success');
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
    }, [edit]);
    return (
        <div className='mx-auto relative w-full'>
            <div className='absolute w-full p-2 text-2xl text-white h-32 bg-indigo-900 text-white rounded-lg z-1'>Profile</div>
            <div className="relative rounded-lg shadow-2xl top-14  sm:top-16 bg-white w-11/12 mx-auto flex flex-col  justify-around container p-5 mb-32 font-medium z-2">
                <ViewProfile userInfo={userInfo} edit={edit} setEdit={setEdit} />
                <EditProfile userInfo={userInfo} edit={edit} setEdit={setEdit} setUserInfo={setUserInfo} />
            </div>
        </div>
    )
}

export default Profile