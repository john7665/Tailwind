import { Button } from "@material-ui/core";
import React, { useState } from "react";
import { isDOMComponent } from "react-dom/test-utils";
import logo from '../logo.svg';


export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        
        <>
        <div className="absolute top-0 w-full p-20 bg-gray-500">
            <img className="w-40 top-0 right-0 z-20 absolute" srcSet={logo} loading="lazy"></img>
        </div>
        {!isOpen ?
            (
                <button className='absolute left-0 top-0 p-10 z-10' onClick={() => setIsOpen(!isOpen)}>
                    <div className='w-10 h-1.5 m-2 bg-white'></div>
                    <div className='w-10 h-1.5 m-2 bg-white mt-1.5'></div>
                    <div className='w-10 h-1.5 m-2 bg-white mt-1.5'></div>
                </button>
            ):
            (
                <div className="top-0 left-0">
                    <button className="text-white z-10 absolute text-5xl top-0 left-3 p-10 " onClick={() => setIsOpen(!isOpen)}>
                        X
                    </button>
                </div>
            )
        }
        <div className={`top-0 left-0 fixed w-[35vw] h-full rounded-r-2xl p-16 bg-gray-600 text-white ${isOpen ? 'translate-x-0' : '-translate-x-full'} ease-in-out duration-700`}>
            <div className="p-10">
            <h1 className="text-center text-3xl p-5">page 1</h1>
            <h1 className="text-center text-3xl p-5">page 2</h1>
            <h1 className="text-center text-3xl p-5">page 3</h1>
            <h1 className="text-center text-3xl p-5">page 4</h1>
            <h1 className="text-center text-3xl p-5">page 5</h1>
            <h1 className="text-center text-3xl p-5">page 6</h1>
            <h1 className="text-center text-3xl p-5">page 7</h1>
            </div>
        </div>
        </>

    )
}