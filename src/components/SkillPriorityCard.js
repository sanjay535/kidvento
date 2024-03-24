import React, { useState } from 'react'
import SkillPileWithButton from './SkillPileWithButton'
import { COLORS } from '../utils/constant'
import { useDispatch } from 'react-redux'
import { addSkillInHomPriority, addSkillInSchoolsPriority, removeSkillFromSkillPriority } from '../utils/schoolSlice'

const SkillPriorityCard = ({skills, skillType, id }) => {
  const [isDraggingOver, setIsDraggingOver] = useState(false);
  const dispatch=useDispatch();

  const handleDrop=(e)=>{
    const skill = e.dataTransfer.getData("skill");
    const skillObj=JSON.parse(skill)
    if(id==='school_priority'){
      dispatch(addSkillInSchoolsPriority({...skillObj}))
    }else if(id==='home_priority'){
      dispatch(addSkillInHomPriority({...skillObj}))
    }
    setIsDraggingOver(false);
   
  }

  const handleDragOver = (event) => {
    event.preventDefault();
  
  };

  const handleDragEnter = (event) => {
    setIsDraggingOver(true);
  };

  const handleDragLeave = (e) => {
    setIsDraggingOver(false);
  };

  const handleRemoveSkills=(skill)=>{
    dispatch(removeSkillFromSkillPriority({...skill, priority:id}))
  }

  return (
    <div
      id={id}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
    
      className={` my-2 box-border bg-white min-h-60 rounded-md overflow-y-scroll transition-all ${isDraggingOver?'border-2 border-dotted border-slate-500':''}`}>
      <h4 className='text-xl font-semibold m-2'>{skillType}</h4>
      <div>
        {skills.map(skill=><SkillPileWithButton onRemoveHandler={handleRemoveSkills} key={skill.id} color={COLORS[skill.type]} skill={skill} />)}
      </div>
    </div>
  )
}

export default SkillPriorityCard