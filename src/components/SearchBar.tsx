"use client"
import React, { useState } from 'react'
import { Input } from './ui/input'
import { Search } from 'lucide-react'

type SearchBarProps = {
    value: string;
    onChange: (value: string) => void;
}

const SearchBar = ({ value, onChange }: SearchBarProps) => {
    const [isFocused, setIsFocused] = useState(false)

    return (
        <div>
            <div className='min-w-[320px] w-[30vw] mx-auto relative flex'>
                <Input
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    className="h-[4vh] rounded-r-none"
                    placeholder="Search by event title..."
                />
                <div className='flex justify-center items-center px-3 bg-slate-300 rounded-l-none rounded-sm  '>
                    <Search />
                </div>
            </div>
        </div>
    )
}

export default SearchBar

