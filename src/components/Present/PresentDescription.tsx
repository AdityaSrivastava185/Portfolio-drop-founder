import HeroTitle from '@/utility/HeroTitle'
import Link from 'next/link'
import React from 'react'

const PresentDescription = () => {
    return (
        <div className='space-y-7'>
            <HeroTitle title="Present" />
            <div>
                <p className='md:text-balance'>Iterating <Link href={"https://boring-designer.com"} className="text-blue-500 underline">@Boring-Designer</Link> , the space which helps ambitious founders, indie hackers & devs go live faster with ready-to-use templates — high-trust, high-conversion designs to match the power of your product.</p>
            </div>
        </div>
    )
}

export default PresentDescription
