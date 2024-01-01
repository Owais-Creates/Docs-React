import React, { useRef } from 'react'
import Card from './Card'

function Foreground() {

    const ref = useRef(null);

    const data = [
        {
            desc: "Hello World",
            fileSize: "0.9mb",
            close: "false",
            tag: { isOpen: "false", tagTitle: "Download Now", tagColor: "green" }
        },
        {
            desc: "Hello World",
            fileSize: "0.9mb",
            close: "false",
            tag: { isOpen: "false", tagTitle: "Download Now", tagColor: "green" }
        },
        {
            desc: "Hello World",
            fileSize: "0.9mb",
            close: "false",
            tag: { isOpen: "false", tagTitle: "Download Now", tagColor: "green" }
        }
    ]

    return (
        <>
            <div ref={ref} className='w-full h-screen fixed top-0 left-0 z-[3] p-5 flex gap-10 flex-wrap'>

                {data.map((items, index) => (
                    <Card data={items} reference={ref} />
                ))}

            </div>

        </>
    )
}

export default Foreground
