import { HeadingProps } from '@/types/HeadingTypes'
import React from 'react'

const HeroTitle = ({title} : HeadingProps) => {
  return (
    <div>
      <h1 className="font-medium text-2xl font-sans text-balance">{title}</h1>
    </div>
  )
}

export default HeroTitle
