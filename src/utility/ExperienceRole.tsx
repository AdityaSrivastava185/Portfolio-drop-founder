import { ExperienceRoleProps } from '@/types/HeadingTypes'
import React from 'react'

const ExperienceRole = ({role} : ExperienceRoleProps) => {
  return (
    <div>
       <p className="italic text-sm text-balance text-[#9f9fa9]">{role}</p>
    </div>
  )
}

export default ExperienceRole
