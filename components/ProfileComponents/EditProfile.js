import { useState } from "react";
import api from "../../contexts/adapter";
import Swal from "sweetalert2";
const EditProfile = ({ userInfo, edit, setEdit, setUserInfo }) => {
    // console.log(userInfo);
    const [disableBtn, setdisableBtn] = useState(false);
    const handlePhotoInputs = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setUserInfo({ ...userInfo, ...userInfo, pic: reader.result });
        }
    }
    const update_data = async () => {
        try {
            const response = await api.put(`/auth/user_update/${userInfo?._id}`, userInfo);
            if (response.status == 200) {
                Swal.fire({
                    icon: "success",
                    title: "Updated Successfully",
                    showConfirmButton: false,
                    timer: 1500,
                });
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
            // console.log(error);
        }
    }
    return (
        <>
            {edit ?
                <div className='w-full flex flex-col px-3'>
                    <div className='flex flex-wrap flex-col-reverse md:flex-row items-center justify-around mb-5'>
                        <div className="w-full md:flex-1 mt-1 flex items-center  justify-between relative text-black">
                            <img
                                className="rounded-full w-[100px] h-[100px] mr-2"
                                src={userInfo?.pic ? `${userInfo?.pic}` : 'https://tse1.mm.bing.net/th?id=OIP.25iSkbJTm4F-Rq0g1JR8NgHaHa&pid=Api&P=0&h=180'}
                                alt="profilePic"
                            />

                            <div className="text-center absolute right-0 bg-violet-900 hover:bg-violet-500 rounded-xl text-white w-7/12 overflow-hidden">
                                <button className='w-full h-full rounded-xl py-2 cursor-pointer'>Upload Avatar</button>
                                <input
                                    className="absolute cursor-pointer top-0 left-0 scale-70 opacity-0"
                                    type="file"
                                    accept="img/*"
                                    onChange={handlePhotoInputs}
                                />
                            </div>
                        </div>
                        <div className="w-full md:flex-1 flex items-center justify-end">
                            <button
                                className='rounded-full border-2 border-slate-300 shadow-xl p-2'
                                onClick={
                                    () => {
                                        setEdit(false)
                                    }
                                }
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className='flex w-full flex-col md:flex-row items-start justidy-center w-ful border-gray-300'>
                        <div className='w-full md:flex-1 flex flex-col gap-3'>
                            <div className="flex flex-col border-2 border-slate-300 shadow-xl rounded-lg m-2 p-2">
                                <h2 className="font-md text-gray-500 font-bold mb-1">Your Name</h2>
                                <div className="flex flex-col">
                                    <input type='text' placeholder='First Name' value={userInfo?.firstname} className="mb-2 border-2 border-gray-400 rounded-lg p-1"
                                        onChange={(e) => { setUserInfo({ ...userInfo, ...userInfo, firstname: e.target.value }) }}
                                    />
                                    <input type='text' placeholder='Last Name' value={userInfo?.lastname} className="mb-2 border-2 border-gray-400 rounded-lg p-1"
                                        onChange={(e) => { setUserInfo({ ...userInfo, ...userInfo, lastname: e.target.value }) }}
                                    />
                                </div>
                                <h2 className="font-md text-gray-500 font-bold mb-1">Email</h2>
                                <input type='email' placeholder="Email" value={userInfo?.email} className="mb-2 border-2 border-gray-400 rounded-lg p-1"
                                    onChange={(e) => { setUserInfo({ ...userInfo, ...userInfo, email: e.target.value }) }}
                                />
                                <h2 className="font-md text-gray-500 font-bold mb-1">Phone</h2>
                                <input type='number' placeholder="Phone" value={userInfo?.phone} className="mb-2 border-2 border-gray-400 rounded-lg p-1"
                                    onChange={(e) => { setUserInfo({ ...userInfo, ...userInfo, phone: e.target.value }) }}
                                />
                            </div>
                            <div className="flex flex-col border-2 border-slate-300 shadow-xl rounded-lg m-2 p-2">
                                <h2 className="font-md text-gray-500 font-bold mb-1">About {userInfo?.firstname}</h2>
                                <textarea type='text' placeholder="About" value={userInfo?.about} className="mb-2 border-2 border-gray-400 rounded-lg p-1"
                                    onChange={(e) => { setUserInfo({ ...userInfo, ...userInfo, about: e.target.value }) }}
                                />
                            </div>
                            <div className="flex flex-col border-2 border-slate-300 shadow-xl rounded-lg m-2 p-2">
                                <h2 className="font-md text-gray-500 font-bold mb-1">Skills</h2>
                                <div className='flex flex-row flex-wrap lg:gap-2'>
                                    {userInfo?.skills?.map((skill, index) => (
                                        <div className="flex flex-row justify-between gap-2 justify-around my-2" key={index}>
                                            <input type='text' placeholder="Skill" value={skill} className="mb-2 border-2 border-gray-400 rounded-lg p-1"
                                                onChange={(e) => { setUserInfo({ ...userInfo, ...userInfo, skills: userInfo?.skills?.map((skill, i) => i === index ? e.target.value : skill) }) }}
                                            />
                                            <button className="mb-2 bg-red-500 hover:bg-red-700 rounded-full text-white p-2" onClick={() => { setUserInfo({ ...userInfo, ...userInfo, skills: userInfo?.skills?.filter((skill, i) => i !== index) }) }}>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                                </svg>
                                            </button>
                                        </div>
                                    ))}
                                    <input type='text' placeholder="Add Skill" className="mb-2 border-2 border-gray-400 rounded-lg p-1"
                                        onKeyDown={(e) => { e.key === 'Enter' && setUserInfo({ ...userInfo, ...userInfo, skills: [...userInfo?.skills, e.target.value] }) }}
                                    />
                                </div>

                            </div>
                        </div>

                        <div className='w-full md:flex-1'>
                            <div className="flex flex-col border-b-2 border-b-gray-500 m-2 p-2">
                                <h2 className="font-md text-gray-500 font-bold mb-1">Certifications</h2>
                                {userInfo?.certification?.map((certification, index) => (
                                    <div className="flex flex-col border-2 border-slate-300 shadow-xl m-2 p-2 rounded-lg" key={index}>
                                        <div className="flex flex-row justify-between items-center mb-2 pb-1 border-b-2 border-b-gray-300">
                                            <h1 className="font-bold text-2xl">
                                                {index + 1}
                                            </h1>
                                            <button className="bg-red-500 hover:bg-red-700 rounded-full text-white p-2" onClick={() => { setUserInfo({ ...userInfo, ...userInfo, certification: userInfo?.certification?.filter((certification, i) => i !== index) }) }}>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                                </svg>
                                            </button>
                                        </div>
                                        <input type='text' placeholder="Certification" value={certification.name} className="mb-2 border-2 border-gray-400 rounded-lg p-1"
                                            onChange={(e) => { setUserInfo({ ...userInfo, ...userInfo, certification: userInfo?.certification?.map((certification, i) => i === index ? { ...certification, name: e.target.value } : certification) }) }}
                                        />
                                        <input type='text' placeholder="Certification Authority" value={certification.authority} className="mb-2 border-2 border-gray-400 rounded-lg p-1"
                                            onChange={(e) => { setUserInfo({ ...userInfo, ...userInfo, certification: userInfo?.certification?.map((certification, i) => i === index ? { ...certification, authority: e.target.value } : certification) }) }}
                                        />
                                    </div>
                                ))}
                                <div className="w-full">
                                    <h2 className="font-md text-gray-500 font-bold mb-1">Add Certification</h2>
                                    <input type='text' placeholder="Certification  (Press Enter To Add Details)" className="w-full mb-2 border-2 border-gray-400 rounded-lg p-1"
                                        onKeyDown={(e) => { e.key === 'Enter' && setUserInfo({ ...userInfo, ...userInfo, certification: [...userInfo?.certification, { name: e.target.value, authority: '' }] }) }}
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col border-b-2 border-b-gray-500 m-2 p-2">
                                <h2 className="font-md text-gray-500 font-bold mb-1">Experience</h2>
                                {userInfo?.experience?.map((experience, index) => (
                                    <div className="flex flex-col border-2 border-slate-300 shadow-xl rounded-lg m-2 p-2" key={index}>
                                        <div className="flex flex-row justify-between items-center mb-2 pb-1 border-b-2 border-b-gray-300">
                                            <h1 className="font-bold text-2xl">
                                                {index + 1}
                                            </h1>
                                            <button className="bg-red-500 hover:bg-red-700 rounded-full text-white p-2 " onClick={() => { setUserInfo({ ...userInfo, ...userInfo, experience: userInfo?.experience?.filter((experience, i) => i !== index) }) }}>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                                </svg>
                                            </button>
                                        </div>
                                        <input type='text' placeholder="Duration" value={experience.duration} className="mb-2 border-2 border-gray-400 rounded-lg p-1"
                                            onChange={(e) => { setUserInfo({ ...userInfo, ...userInfo, experience: userInfo?.experience?.map((experience, i) => i === index ? { ...experience, duration: e.target.value } : experience) }) }}
                                        />
                                        <input type='text' placeholder="Company" value={experience.company} className="mb-2 border-2 border-gray-400 rounded-lg p-1"
                                            onChange={(e) => { setUserInfo({ ...userInfo, ...userInfo, experience: userInfo?.experience?.map((experience, i) => i === index ? { ...experience, company: e.target.value } : experience) }) }}
                                        />
                                        <input type='text' placeholder="Position" value={experience.position} className="mb-2 border-2 border-gray-400 rounded-lg p-1"
                                            onChange={(e) => { setUserInfo({ ...userInfo, ...userInfo, experience: userInfo?.experience?.map((experience, i) => i === index ? { ...experience, position: e.target.value } : experience) }) }}
                                        />
                                        <input type='text' placeholder="Type" value={experience.type} className="mb-2 border-2 border-gray-400 rounded-lg p-1"
                                            onChange={(e) => { setUserInfo({ ...userInfo, ...userInfo, experience: userInfo?.experience?.map((experience, i) => i === index ? { ...experience, type: e.target.value } : experience) }) }}
                                        />

                                    </div>
                                ))}
                                <div className="w-full">
                                    <h2 className="font-md text-gray-500 font-bold mb-1">Add Experience</h2>
                                    <input type='text' placeholder="Company (Press Enter To Add Details)" className="w-full mb-2 border-2 border-gray-400 rounded-lg p-1"
                                        onKeyDown={(e) => { e.key === 'Enter' && setUserInfo({ ...userInfo, ...userInfo, experience: [...userInfo?.experience, { duration: '', company: e.target.value, position: '', type: '' }] }) }}
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col m-2 p-2">
                                <h2 className="font-md text-gray-500 font-bold mb-1">Education</h2>
                                {userInfo?.education?.map((education, index) => (
                                    <div className="flex flex-col  border-2 border-slate-300 shadow-xl rounded-lg m-2 p-2" key={index}>
                                        <div className="flex flex-row justify-between items-center mb-2 pb-1 border-b-2 border-b-gray-300">
                                            <h1 className="font-bold text-2xl">
                                                {index + 1}
                                            </h1>
                                            <button className="bg-red-500 hover:bg-red-700 rounded-full text-white p-2" onClick={() => { setUserInfo({ ...userInfo, ...userInfo, education: userInfo?.education?.filter((education, i) => i !== index) }) }}>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                                </svg>
                                            </button>
                                        </div>
                                        <div className="flex flex-col lg:flex-row">
                                            <div className="w-full flex flex-row items-center justify-between lg:justify-around flex-wrap mb-2">
                                                <h3 className="">From &nbsp;:&nbsp;</h3>
                                                <input type='month' placeholder="From" value={education.start_year} className="border-2 border-gray-400 rounded-lg p-1"
                                                    onChange={(e) => { setUserInfo({ ...userInfo, ...userInfo, education: userInfo?.education?.map((education, i) => i === index ? { ...education, start_year: e.target.value } : education) }) }}
                                                />
                                            </div>
                                            <div className="w-full flex flex-row items-center justify-between lg:justify-around flex-wrap mb-2 ">
                                                <h3 className="">To &nbsp;:&nbsp;</h3>
                                                <input type='month' placeholder="To" value={education.end_year} className="border-2 border-gray-400 rounded-lg p-1"
                                                    onChange={(e) => { setUserInfo({ ...userInfo, ...userInfo, education: userInfo?.education?.map((education, i) => i === index ? { ...education, end_year: e.target.value } : education) }) }}
                                                />
                                            </div>
                                        </div>
                                        <input type='text' placeholder="Institute" value={education.institute} className="mb-2 border-2 border-gray-400 rounded-lg p-1"
                                            onChange={(e) => { setUserInfo({ ...userInfo, ...userInfo, education: userInfo?.education?.map((education, i) => i === index ? { ...education, institute: e.target.value } : education) }) }}
                                        />
                                        <input type='text' placeholder="Degree" value={education.degree} className="mb-2 border-2 border-gray-400 rounded-lg p-1"
                                            onChange={(e) => { setUserInfo({ ...userInfo, ...userInfo, education: userInfo?.education?.map((education, i) => i === index ? { ...education, degree: e.target.value } : education) }) }}
                                        />
                                        <textarea type="text" placeholder="Description" value={education.description} className="mb-2 border-2 border-gray-400 rounded-lg p-1"
                                            onChange={(e) => { setUserInfo({ ...userInfo, ...userInfo, education: userInfo?.education?.map((education, i) => i === index ? { ...education, description: e.target.value } : education) }) }}
                                        />
                                    </div>
                                ))}
                                <div className="w-full">
                                    <h2 className="font-md text-gray-500 font-bold mb-1">Add Education</h2>
                                    <input type='text' placeholder="Institute" className="w-full mb-2 border-2 border-gray-400 rounded-lg p-1"
                                        onKeyDown={(e) => { e.key === 'Enter' && setUserInfo({ ...userInfo, ...userInfo, education: [...userInfo?.education, { start_year: null, end_year: null, institute: e.target.value, degree: '', description: '' }] }) }}
                                    />
                                </div>
                            </div>

                        </div>
                    </div>
                    {disableBtn ?
                        <button className='bg-violet-300 rounded-xl text-white py-2 cursor-progress flex items-center justify-center space-x-2' >Save
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="animate-spin h-5 w-5 mr-3">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.712 4.33a9.027 9.027 0 011.652 1.306c.51.51.944 1.064 1.306 1.652M16.712 4.33l-3.448 4.138m3.448-4.138a9.014 9.014 0 00-9.424 0M19.67 7.288l-4.138 3.448m4.138-3.448a9.014 9.014 0 010 9.424m-4.138-5.976a3.736 3.736 0 00-.88-1.388 3.737 3.737 0 00-1.388-.88m2.268 2.268a3.765 3.765 0 010 2.528m-2.268-4.796a3.765 3.765 0 00-2.528 0m4.796 4.796c-.181.506-.475.982-.88 1.388a3.736 3.736 0 01-1.388.88m2.268-2.268l4.138 3.448m0 0a9.027 9.027 0 01-1.306 1.652c-.51.51-1.064.944-1.652 1.306m0 0l-3.448-4.138m3.448 4.138a9.014 9.014 0 01-9.424 0m5.976-4.138a3.765 3.765 0 01-2.528 0m0 0a3.736 3.736 0 01-1.388-.88 3.737 3.737 0 01-.88-1.388m2.268 2.268L7.288 19.67m0 0a9.024 9.024 0 01-1.652-1.306 9.027 9.027 0 01-1.306-1.652m0 0l4.138-3.448M4.33 16.712a9.014 9.014 0 010-9.424m4.138 5.976a3.765 3.765 0 010-2.528m0 0c.181-.506.475-.982.88-1.388a3.736 3.736 0 011.388-.88m-2.268 2.268L4.33 7.288m6.406 1.18L7.288 4.33m0 0a9.024 9.024 0 00-1.652 1.306A9.025 9.025 0 004.33 7.288" />
                            </svg>
                        </button>
                        :
                        <button className='bg-violet-900 hover:bg-violet-500 rounded-xl text-white py-2' onClick={update_data}>Save</button>
                    }
                </div>
                : ''
            }
        </>
    )
}

export default EditProfile