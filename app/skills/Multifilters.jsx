'use client'
import React, {useEffect, useState} from 'react';
import { allskills } from './allskills';

export default function Multifilters() {

    const [seletedFilters, setSElectedFilters] = useState([]);
    const [filteredSkills, setFilteredSkills] = useState(allskills);
    let filters = ["Languages", "Frontend", "Backend", "Others"];

    const handleFilterButtonClick = (selectedCategory)=>{
      if(seletedFilters.includes(selectedCategory)){
        let filters = seletedFilters.filter((el)=>el !== selectedCategory);
        setSElectedFilters(filters);
      }
      else{

      }
    }

  return (
    <div className='flex flex-col h-full justify-center'>
        <div className="flex flex-wrap items-center my-5">
          {
            filters.map((category, idx)=>(
              <button key={`filters-${idx}`} onClick={()=>handleFilterButtonClick(category)} className={`${seletedFilters?.includes(category) ? "bg-white mx-5 border border-gray-400" : "mx-3 my-2 border border-gray-400 rounded-md px-3 py-1"}`}>
                {category}
              </button>
            ))
          }
        </div>
        <div className="flex flex-wrap items-center">
          {
            allskills.map((skill, idx)=>(
              <span key={`allskills-${idx}`} className='mx-3 my-2 text-gray-500'>{skill.name}</span>
            ))
          }
        </div>
    </div>
  )
}
