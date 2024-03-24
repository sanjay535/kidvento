import React from 'react'
import SkillPile from './SkillPile'
import { COLORS } from '../utils/constant'

const SkillCard = ({skillType, skills}) => {
  return (
    <div className='p-4 bg-[#E2EBF8] my-2'>
        <h4 className='text-xl font-semibold my-2'>{skillType}</h4>
        <div className='flex flex-wrap p-4 bg-white'>
        {skills.map(skill=><SkillPile key={skill.id} color={COLORS[skill.type]} skill={skill}/>)}
        </div>
    </div>
  )
}

export default SkillCard