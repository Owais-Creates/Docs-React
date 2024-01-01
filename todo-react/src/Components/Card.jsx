import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";


function Card() {
    return (
        <>
            <div className=' relative w-60 h-72 rounded-[50px] bg-zinc-900/90 text-white px-6 py-10 overflow-hidden '>
                <FaRegFileAlt/>
                <p className='text-sm font-semibold mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, corporis.</p>
                <div className='bg-sky-200 w-full h-12 absolute bottom-0 left-0 '></div>
            </div>

        </>
    )
}

export default Card
