import {v4 as uuidv4} from 'uuid'

export const CORE_SKILLS = [
  {
    skill: 'Finance & Entrepreneurship',
    type:'core',
    id: uuidv4()
  }, {
    skill: 'Maths',
    type:'core',
    id: uuidv4()

  },
  {
    skill: 'Commerce',
    type:'core',
    id: uuidv4()

  }, {
    skill: 'Science',
    type:'core',
    id: uuidv4()
  }, {
    skill: 'Language & communication',
    type:'core',
    id: uuidv4()
  }

]

export const SPECIAL_SKILLS = [
  {
    skill: 'Space Tech',
    type:'special',
    id: uuidv4(),

  }, {
    skill: 'Robotics',
    type:'special',
    
    id: uuidv4()

  }, {
    skill: 'Electronics',
    type:'special',
    id: uuidv4()
  }
]

export const CREATIVE_SKILLS = [
  {
    skill: 'Graphic Novel',
    type:'creative',
    id: uuidv4()
  }, {
    skill: 'Yoga',
    type:'creative',
    id: uuidv4()
  }, {
    skill: 'Music',
    type:'creative',
    id: uuidv4()

  }, {
    skill: 'Dance',
    type:'creative',
    id: uuidv4()
  }, {
    skill: 'Guitar',
    type:'creative',
    id: uuidv4()
  }
]

export const COLORS={
  core:`border-[#71CA00] border-[1.5px] bg-[#EDFED7] p-1 m-1 rounded-md`,
  special:`border-[#F85858] border-[1.5px] bg-[#FEEBEB] p-1 m-1 rounded-md`,
  creative:`border-[#F85858] border-[1.5px] bg-[#FDE7FD] p-1 m-1 rounded-md`
}