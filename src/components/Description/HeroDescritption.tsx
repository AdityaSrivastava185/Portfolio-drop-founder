import { HeroDescription } from '@/types/HeroDescription'
import React from 'react'

const HeroDescritption = ({description} : HeroDescription) => {
  return (
    <div>
       <div>
          <p className='text-balance'>{description}</p>
        </div>
    </div>
  )
}

export default HeroDescritption
