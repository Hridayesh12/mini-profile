import React from 'react'
const ViewProfile = ({ userInfo, edit, setEdit }) => {
    return (
        <>
            {!edit ?
                <div className='w-full flex flex-col px-3'>
                    <div className='flex items-center justify-around mb-3'>
                        <div className="flex-1 mt-1 flex items-center justify-start relative text-black">
                            <img
                                className="rounded-full w-[100px] h-[100px] mr-2"
                                src={userInfo?.pic ? `${userInfo?.pic}` : 'https://tse1.mm.bing.net/th?id=OIP.25iSkbJTm4F-Rq0g1JR8NgHaHa&pid=Api&P=0&h=180'}
                                alt="profilePic"
                            />
                        </div>
                        <div className="flex-1 flex items-center justify-end">
                            <button
                                className='rounded-full border-2 border-slate-300 shadow-xl p-2'
                                onClick={
                                    () => {
                                        setEdit(true)
                                    }
                                }
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className='flex w-full flex-col md:flex-row items-start justidy-center w-full'>
                        <div className='w-full md:flex-1 flex flex-col gap-3'>
                            <div className="flex flex-col border-2 border-slate-300 shadow-xl rounded-lg m-2 p-2">
                                <h2 className="font-md text-gray-700 font-normal mb-1 mt-3">Your Name</h2>
                                <h3 className="font-md text-gray-700 font-bold mb-3">{userInfo?.firstname}&nbsp;{userInfo?.lastname}</h3>
                                <h2 className="font-md text-gray-700 font-normal mb-1">Email</h2>
                                <h3 className="font-md text-gray-700 font-bold mb-3">{userInfo?.email}</h3>
                                <h2 className="font-md text-gray-700 font-normal mb-1">Phone Number</h2>
                                <h3 className="font-md text-gray-700 font-bold mb-3">{userInfo?.phone}</h3>
                            </div>
                            <div className="p-5 flex flex-col border-2 border-slate-300 shadow-xl rounded-lg m-2 p-2">
                                <h2 className="font-md text-gray-700 font-bold mb-1 text-xl">About <span className='text-indigo-800'>{userInfo?.firstname}</span></h2>
                                <h3 className="font-md text-gray-700 font-normal mb-1 text-justify">{userInfo?.about}</h3>
                            </div>
                            <div className="flex flex-col border-2 border-slate-300 shadow-xl rounded-lg m-2 p-2">
                                <h2 className="font-md text-gray-700 text-xl font-bold mb-1">Skills</h2>
                                {userInfo?.skills?.map((skill, index) => (
                                    <div className="flex flex-row justify-between my-2" key={index}>
                                        <h3 className="font-md text-gray-700 font-bold mb-1">{skill}</h3>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className='w-full md:flex-1'>
                            <div className="flex flex-col m-2 p-2">
                                <h2 className="font-md text-gray-700 font-bold mb-1">Certifications</h2>
                                {userInfo?.certification?.map((certification, index) => (
                                    <div className="flex flex-col items-center justify-center border-2 border-slate-300 shadow-xl rounded-full my-3" key={index}>
                                        <h3 className="font-md text-gray-700 font-normal mb-1">{certification?.name}</h3>
                                        <h3 className="font-md text-gray-700 font-normal mb-1">{certification?.authority}</h3>
                                    </div>
                                ))}
                            </div>
                            <div className="flex flex-col m-2 p-2">
                                <h2 className="font-md text-gray-700 font-bold mb-1">Experience</h2>
                                {userInfo?.experience?.map((experience, index) => (
                                    <div className="flex flex-col border-2 border-slate-300 shadow-xl rounded-lg my-2 p-5" key={index}>
                                        <div className="flex flex-row justify-between">
                                            <h3 className="font-md text-gray-700 font-bold mb-1">{experience?.duration}</h3>
                                            <h3 className="font-md text-gray-700 font-bold mb-1">{experience?.type}</h3>
                                        </div>
                                        <div className="flex flex-row justify-between">
                                            <h3 className="font-md text-gray-700 font-normal mb-1">{experience?.company}</h3>
                                            <h3 className="font-md text-gray-700 font-normal mb-1">{experience?.position}</h3>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="flex flex-col m-2 p-2">
                                <h2 className="font-md text-gray-700 font-bold mb-1">Education</h2>
                                {userInfo?.education?.map((education, index) => (
                                    <div className="flex flex-col border-2 border-slate-300 shadow-xl rounded-lg my-2 p-5 gap-3" key={index}>
                                        <h3 className="font-md text-gray-700 font-bold text-xl mb-1 text-indigo-800">{education?.institute}</h3>
                                        <div className="flex flex-row justify-between">
                                            <h3 className="font-md text-gray-700 font-bold mb-1">{education?.start_year} - {education?.end_year}</h3>
                                            <h3 className="font-md text-gray-700 font-bold mb-1">{education?.degree}</h3>
                                        </div>
                                        <h3 className="font-md text-gray-700 font-normal mb-1">{education?.description}</h3>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                : ''
            }
        </>
    )
}

export default ViewProfile