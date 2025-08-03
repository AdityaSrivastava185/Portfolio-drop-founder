import { HeroDescription } from '@/types/HeroDescription'
import React from 'react'

const HeroDescritption = ({description} : HeroDescription) => {
  return (
    <div>
       <div>
          <p>{description}</p>
        </div>
    </div>
  )
}

export default HeroDescritption
