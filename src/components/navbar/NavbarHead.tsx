'use client'

import Link from 'next/link'
import React, { useState } from 'react'

export default function NavbarHead() {
    const [selectedItem, setSelectedItem] = useState(0);
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, index: number) => {

        setSelectedItem(index);
    }

    return (
        <div className='grid grid-cols-3 place-items-center p-4 bg-yellow-200 text-black mb-6 sticky top-0 '>
            <Link className={` hover:bg-slate-300 hover:text-slate-800 hover:rounded-md px-6 py-1 ${selectedItem === 0 ? 'bg-slate-300 text-slate-800 rounded-md' : ''}`} href={'/'} onClick={(e) => handleClick(e, 0)}>Home</Link>
            <Link className={` hover:bg-slate-300 hover:text-slate-800 hover:rounded-md px-6 py-1 ${selectedItem === 1 ? 'bg-slate-300 text-slate-800 rounded-md' : ''}`} href={'/web/about'} onClick={(e) => handleClick(e, 1)}> About</Link>
            <Link className={` hover:bg-slate-300 hover:text-slate-800 hover:rounded-md px-6 py-1 ${selectedItem === 2 ? 'bg-slate-300 text-slate-800 rounded-md' : ''}`} href={'/web/contact'} onClick={(e) => handleClick(e, 2)}> Contact</Link>
        </div>
    )
}
