import HeroTitle from '@/utility/HeroTitle'
import React from 'react'

const ExperienceSection = () => {
    return (
        <div className='space-y-7'>
            <HeroTitle title="Experience" />
            <div>
                <ul className="list-disc pl-5 space-y-7">
                    <div>
                        <li className="text-lg font-medium">Hanalabs</li>
                        <p className="italic text-sm">Frontend Developer Internship, Remote</p>
                        <p>As a Frontend Developer Intern at HanaLabs, I participated in creating high-fidelity, captivating user interfaces. My role specifically included reducing the frontend load time and improving responsiveness on mobile and desktop devices. </p>
                    </div>
                    <div>
                        <li className="text-lg font-medium">Intentjs</li>
                        <p className="italic text-sm">Frontend Developer, Contractual Work, Remote</p>
                        <p>I worked closely with the founder of IntentJS to create a developer-focused landing page from the ground up. I used Next.js, Tailwind CSS, and TypeScript to transform intricate Figma designs into clear, production-quality code.</p>
                    </div>
                    <div>
                        <li className="text-lg font-medium">Basu Education</li>
                        <p className="italic text-sm">Frontend Developer</p>
                        <p> I worked closely with the backend team to create an EdTech platform that was both responsive and easy to use. </p>
                    </div>
                </ul>
            </div>
        </div>
    )
}

export default ExperienceSection
