'use client'
import React from 'react'

import Header from "../../components/Elements/Header";
import Footer from "../../components/Footer";
import Sidebar from "../../components/home/SideBar";

export default function DashboardLayout(props:any) {

    return (
        <div className="w-screen h-screen flex overflow-auto" dir="rtl">
            <div>
                <Sidebar />
            </div>
            <div className="flex flex-col flex-grow">
                <div className="w-full"><Header/></div>
                    <div id="content"  className="flex-grow  w-[calc(100vw-64px)] max-h-[calc(100vh-110px)] overflow-auto  sm:w-[calc(100vw-290px)]">
                        {props.children}
                        {props.new_event}
                    </div>
                <div className="w-full"><Footer /></div>
            </div>
        </div>
    )
}