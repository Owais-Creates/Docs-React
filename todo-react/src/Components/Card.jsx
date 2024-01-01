import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { motion } from "framer-motion"


function Card({ data, reference }) {
    return (
        <>
            <motion.div
                dragConstraints={reference} drag whileDrag={{ scale: 1.2 }} dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
                className='relative w-60 h-72 rounded-[45px] bg-zinc-900/90 text-white px-6 py-10 overflow-hidden'>
                <FaRegFileAlt />
                <p className='text-sm font-semibold mt-3'>{data.desc}.</p>
                <div className=' footer w-full absolute bottom-0 left-0  '>
                    <div className='flex items-center justify-between px-8 py-3 mb-3 text-white'>
                        <h4>{data.fileSize}</h4>
                        {data.close ? <IoIosCloseCircleOutline /> : <MdOutlineFileDownload />}
                    </div>

                    {data.tag.isOpen && (
                        <div className='data py-6 w-full h-8 bg-green-600 flex items-center justify-center' >
                            <p className='font-semibold text-md'>Download</p>
                        </div>
                    )}

                </div>
            </motion.div>

        </>
    )
}

export default Card
