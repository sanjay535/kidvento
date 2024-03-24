import { createSlice } from "@reduxjs/toolkit";
import { CORE_SKILLS, CREATIVE_SKILLS, SPECIAL_SKILLS } from "./constant";

const schoolSlice=createSlice({
    name:'school',
    initialState:{
      selectedSkills:{
        core:CORE_SKILLS,
        special:SPECIAL_SKILLS,
        creative:CREATIVE_SKILLS
       },
       prioritySkills:{
         schoolsPriority:[],
         homePriority:[]
       }
    },
    reducers:{
        addSkillInSchoolsPriority:(state, action)=>{
          state.prioritySkills.schoolsPriority.push(action.payload)
          state.selectedSkills[action.payload.type]=state.selectedSkills[action.payload.type].filter(skill=>skill.id!==action.payload.id)
        },
        addSkillInHomPriority:(state, action)=>{
          state.prioritySkills.homePriority.push(action.payload)
          state.selectedSkills[action.payload.type]=state.selectedSkills[action.payload.type].filter(skill=>skill.id!==action.payload.id)
        },
        removeSkillFromSkillPriority:(state, action)=>{
          // console.log('action.payload=',action.payload)
          if(action.payload.priority==='school_priority'){
            state.prioritySkills.schoolsPriority=state.prioritySkills.schoolsPriority.filter(skill=>skill.id!==action.payload.id)
          }else{
            state.prioritySkills.homePriority=state.prioritySkills.homePriority.filter(skill=>skill.id!==action.payload.id)
          }
          const removedSkill={
            skill: action.payload.skill, type: action.payload.type, id:action.payload.id
          }
          // added back to the original place
         state.selectedSkills[action.payload.type].push(removedSkill);
        },
    }
})

export const {addSkillInHomPriority,addSkillInSchoolsPriority,removeSkillFromSkillPriority}=schoolSlice.actions;
export default schoolSlice.reducer;

