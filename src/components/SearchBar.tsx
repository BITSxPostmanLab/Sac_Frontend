"use client"
import React from 'react'
import { Input } from './ui/input'
import { Search } from 'lucide-react';
import { useState } from 'react';

const SearchBar = () => {
    const [isFocused, setIsFocused] = useState(false)
    return (
        <div>
            <div className='min-w-[400px] w-[30vw] mx-auto relative flex'>

                <Input onFocus={() => { setIsFocused(true) }} className="h-[4vh]" onBlur={() => { setIsFocused(false) }} />
                <div className=' flex justify-center items-center px-3 bg-slate-300 rounded-sm'>
                    {!isFocused ? <Search className='' /> : null}
                </div>
            </div>
        </div>
    )
}

export default SearchBar

