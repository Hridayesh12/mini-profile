"use client";
import React from "react";
import Link from "next/link";
import { useAuth } from "../../contexts/AuthContext";
const SideNavBar = () => {
    const AuthData = useAuth();
    const [isOpen, setIsOpen] = React.useState(false);
    return (
        <aside className="hidden sm:flex flex-col bg-white min-h-screen h-inherit sm:2/5 md:w-1/5 text-slate-500">
            <div className="flex flex-col bg-white pb-24">
                <Link href="/dashboard/profile">
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
                        Profile
                    </div>
                </Link>
                <Link href="/dashboard/connection">
                    <div className="flex flex-row items-center font-medium  px-2 py-2 hover:bg-blue-100 active:bg-blue-100">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="w-5 h-5 mr-1"
                        >
                            <path
                                fillRule="evenodd"
                                d="M4.5 2A1.5 1.5 0 003 3.5v13A1.5 1.5 0 004.5 18h11a1.5 1.5 0 001.5-1.5V7.621a1.5 1.5 0 00-.44-1.06l-4.12-4.122A1.5 1.5 0 0011.378 2H4.5zm7.75 9.75a.75.75 0 000-1.5h-4.5a.75.75 0 000 1.5h4.5z"
                                clipRule="evenodd"
                            />
                        </svg>
                        Connections
                    </div>
                </Link>
            </div>
            <button
                onClick={() => {
                    AuthData.logout();
                }}
            >
                <div className="flex flex-row px-2 py-2 items-center font-medium border-t hover:bg-blue-100 active:bg-blue-100">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-5 h-5 mr-1"
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
                    </svg>{" "}
                    Log Out
                </div>
            </button>
        </aside>
    );
};

export default SideNavBar;
