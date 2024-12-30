"use client"
import React from 'react'
import { Input } from './ui/input'
import { Search } from 'lucide-react';
import { useState } from 'react';

const SearchBar = () => {
    const [isFocused, setIsFocused] = useState(false)
    return (
        <div>
            <div className='w-[20vw] mx-auto relative'>
                <div className='absolute top-[6px] left-1'>
                    {!isFocused ? <Search size={"1.3vw"} /> : null}
                </div>
                <Input onFocus={() => { setIsFocused(true) }} className="h-[4vh]" onBlur={() => { setIsFocused(false) }} />
            </div>
        </div>
    )
}

export default SearchBar

