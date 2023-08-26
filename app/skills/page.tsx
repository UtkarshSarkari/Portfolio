import React from 'react'
import { allskills } from "./allskills";

export default function Skills() {
    const skillCategory = ["Languages", "Frontend", "Backend", "Others"];
    return (
        <div className='flex flex-col justify-around w-[80%] mx-auto h-auto font-mainFont mb-20'>

            <span className="text-1.5xl sm:text-2xl mb-6 flex items-center">
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
                {skillCategory.map((skill) => (
                    <span className="border border-gray-600 text-gray-300 px-5 py-2 mr-3 my-2 rounded-md active:bg-gradient-to-r active:from-emerald-400 active:to-blue-400 active:text-black text-sm sm:text-xl sm:px-6 sm:mr-4">
                        {skill}
                    </span>
                ))}
            </div>

            <div className="grid grid-rows-skill-rows gap-y-px grid-cols-2 mb-6 sm:gap-y-3">
                {
                    allskills.map((skill) => (
                        <span className="text-gray-400">{skill.name}</span>
                    ))
                }
            </div>

        </div>
    )
}
