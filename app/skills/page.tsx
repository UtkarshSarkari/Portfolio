'use client'
import React from 'react'
import { allskills } from "./allskills";
import Image from 'next/image';

export default function Skills() {
    const skillCategory = ["Languages", "Frontend", "Backend", "Others"];
    const handleClick = (selectedSkills: string) => {
        console.log('abc', selectedSkills);
    }
    return (
        <div className='flex flex-col justify-around w-[80%] mx-auto h-auto font-mainFont mb-20 mt-24'>

            <span className="text-1.5xl sm:text-2xl mb-6 flex items-center font-semibold">
                Skills
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-10 h-8 ml-3 text-gray-600"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                    />
                </svg>
            </span>

            <div className=" flex flex-wrap mb-6">
                {skillCategory.map((category) => (
                    <div key={category} className="flex flex-wrap items-center text-zinc-300">
                        <span className='bg-zinc-800 cursor-pointer select-none rounded-lg px-8 py-2 mr-3.5 my-1.5'>{category}</span>
                    </div>
                ))}
            </div>

            <div className="grid grid-rows-skill-rows gap-y-px grid-cols-2 mb-6 sm:gap-y-2">
                {
                    allskills.map((skill) => (
                        <div key={skill.name} className="flex items-center">
                            <Image src={skill.imgUrl} height={20} width={20} alt='iconImg' className='mr-2' />
                            <span className="text-gray-400 text-sm sm:text-xl flex items-center">{skill.name}</span>
                        </div>
                    ))
                }
            </div>

        </div>
    )
}
