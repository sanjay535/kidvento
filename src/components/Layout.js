import React from 'react'
import { useSelector } from 'react-redux'
import SkillCard from './SkillCard'
import SkillPriorityCard from './SkillPriorityCard'


const Layout = () => {
    const skills=useSelector(store=>store.skills);
    const {selectedSkills,prioritySkills}=skills;
    const {schoolsPriority, homePriority}=prioritySkills
    const {core,special,creative}=selectedSkills;
    
    return (
        <div className='max-w-[100%] my-4 min-h-[100vh]'>
            <div className='grid grid-cols-[20%_40%_40%] max-w-[90%] mx-auto bg-[#f2f2f2] gap-4'>
            <div className='rounded-md'>
                <h2 className='text-white text-2xl py-2 bg-black text-center rounded-tl-md rounded-tr-md'>School Level</h2>
                <div className='py-4'>
                    
                </div>
            </div>
            <div className='rounded-md'>
                <h2 className='text-white text-2xl py-2 bg-black text-center rounded-tl-md rounded-tr-md'>Skills Selected</h2>
                <div className='py-4'>
                    <SkillCard skillType={'Core'} skills={core}/>
                    <SkillCard skillType={'Special'} skills={special}/>
                    <SkillCard skillType={'Creative'} skills={creative}/>
                </div>
            </div>
            <div className='rounded-md'>
                <h2 className='text-white text-2xl py-2 bg-black text-center rounded-tl-md rounded-tr-md'>Set Skill Priority</h2>
                <div className='py-4 grid grid-rows-2'>
                    <SkillPriorityCard skills={schoolsPriority} skillType={'School Priority'} id="school_priority"/>
                    <SkillPriorityCard skills={homePriority}  skillType={'Home Priority'}  id="home_priority"/>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Layout