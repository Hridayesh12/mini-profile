import React from "react";
import Link from "next/link";
import { useAuth } from "../../contexts/AuthContext";
// import a from "next/a";
const SideMobile = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const AuthData = useAuth();
    return (
        <div>
            {isOpen ? (
                <button
                    className='sm:hidden w-full bg-white flex justify-between bg-white text-black items-center px-4 py-2 drop-shadow-lg'
                    onClick={() => {
                        setIsOpen(!isOpen);
                    }}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-6 h-6"
                    >
                        <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                    </svg>
                </button>
            ) : (
                <div className='sm:hidden w-full bg-white flex justify-between bg-white text-black items-center px-4 py-2 drop-shadow-lg'>
                    <button
                        className="flex flex-row items-center text-slate-500 font-medium  py-2 pl-2"
                        onClick={() => {
                            setIsOpen(!isOpen);
                        }}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                        </svg>

                    </button>
                    <div className="flex flex-row items-center">
                        &nbsp;&nbsp;
                        <button
                            className="flex items-center"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            <img
                                src='https://tse1.mm.bing.net/th?id=OIP.25iSkbJTm4F-Rq0g1JR8NgHaHa&pid=Api&P=0&h=180'
                                className="rounded-full border-2 scale-110"
                                alt="avatar"
                                width={36}
                                height={36}
                                unoptimized
                            />
                            <div className="flex">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </div>
                        </button>
                    </div>
                </div>
            )}
            {isOpen ? (
                <aside className="absolute z-10 sm:hidden flex flex-col bg-white min-h-screen h-inherit w-full text-slate-500">
                    <div className="flex flex-col bg-white h-fit pb-24">
                        <Link
                            href="/dashboard/profile"
                            onClick={() => {
                                setIsOpen(!isOpen);
                            }}
                        >
                            <div className="flex flex-row items-center font-medium  px-2 py-2 hover:bg-blue-100 active:bg-blue-100">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    className="w-4 h-4 mr-1"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M6 5v1H4.667a1.75 1.75 0 00-1.743 1.598l-.826 9.5A1.75 1.75 0 003.84 19H16.16a1.75 1.75 0 001.743-1.902l-.826-9.5A1.75 1.75 0 0015.333 6H14V5a4 4 0 00-8 0zm4-2.5A2.5 2.5 0 007.5 5v1h5V5A2.5 2.5 0 0010 2.5zM7.5 10a2.5 2.5 0 005 0V8.75a.75.75 0 011.5 0V10a4 4 0 01-8 0V8.75a.75.75 0 011.5 0V10z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                Profile
                            </div>
                        </Link>
                        <Link
                            href="/dashboard/connection"
                            onClick={() => {
                                setIsOpen(!isOpen);
                            }}
                        >
                            <div className="flex flex-row items-center font-medium  px-2 py-2 hover:bg-blue-100 active:bg-blue-100">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    className="w-4 h-4 mr-1"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M5.75 2a.75.75 0 01.75.75V4h7V2.75a.75.75 0 011.5 0V4h.25A2.75 2.75 0 0118 6.75v8.5A2.75 2.75 0 0115.25 18H4.75A2.75 2.75 0 012 15.25v-8.5A2.75 2.75 0 014.75 4H5V2.75A.75.75 0 015.75 2zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                Connections
                            </div>
                        </Link>
                    </div>
                    <Link
                        href="#"
                        onClick={() => {
                            setIsOpen(!isOpen);
                            AuthData.logout();
                        }}
                    >
                        <div className="flex flex-row px-2 py-2 items-center font-medium border-t hover:bg-blue-100 active:bg-blue-100">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="w-5 h-5"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M3 4.25A2.25 2.25 0 015.25 2h5.5A2.25 2.25 0 0113 4.25v2a.75.75 0 01-1.5 0v-2a.75.75 0 00-.75-.75h-5.5a.75.75 0 00-.75.75v11.5c0 .414.336.75.75.75h5.5a.75.75 0 00.75-.75v-2a.75.75 0 011.5 0v2A2.25 2.25 0 0110.75 18h-5.5A2.25 2.25 0 013 15.75V4.25z"
                                    clipRule="evenodd"
                                />
                                <path
                                    fillRule="evenodd"
                                    d="M6 10a.75.75 0 01.75-.75h9.546l-1.048-.943a.75.75 0 111.004-1.114l2.5 2.25a.75.75 0 010 1.114l-2.5 2.25a.75.75 0 11-1.004-1.114l1.048-.943H6.75A.75.75 0 016 10z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            &nbsp;&nbsp; Log Out
                        </div>
                    </Link>
                </aside>
            ) : (
                ""
            )}
        </div>
    );
};

export default SideMobile;
