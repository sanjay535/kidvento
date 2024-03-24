import React from 'react'

const SkillPile = ({skill, color}) => {
  const handleDragStart = (e) => {
    e.dataTransfer.setData("skill", JSON.stringify(skill));
  };

  return (
    <div draggable onDragStart={handleDragStart} className={`${color} cursor-move`}>
        {skill.skill}
    </div>
  )
}

export default SkillPile