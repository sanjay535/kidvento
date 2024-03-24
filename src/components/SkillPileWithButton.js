import React from 'react'
import { removeSkillFromSkillPriority } from '../utils/schoolSlice';

const SkillPileWithButton = ({color,skill,onRemoveHandler}) => {
  return (
    <div className={`${color} flex justify-between items-center my-2`}>
        <div>{skill.skill}</div>
        <button onClick={()=>onRemoveHandler(skill)} className='text-white text-xl px-1 rounded-md bg-black'>X</button>
    </div>
  )
}

export default SkillPileWithButton