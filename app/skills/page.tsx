import React from 'react'
import { allskills } from "./allskills";

export default function Skills() {
    const skillCategory = ["Languages", "Frontend", "Backend", "Others"];
    return (
        <div className='flex flex-col justify-around w-[80%] mx-auto h-auto font-mainFont mb-20'>

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
                {skillCategory.map((skill) => (
                    <div className='text-sm sm:text-xl  rounded-md px-[1px] py-[1px] bg-gradient-to-r from-emerald-500 to-cyan-600 hover:scale-[1.02] mr-3 my-2 sm:mr-4'>
                        <span className="bg-black rounded-md px-5 py-2 sm:px-6 hover:bg-gradient-to-r hover:text-black hover:font-medium hover:from-emerald-500 hover:to-cyan-600 flex items-center justify-between">
                            {skill}
                        </span>
                    </div>
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
