import Link from "next/link";
import HeroTitle from "@/utility/HeroTitle";
import { Name, ProfileImage } from "@/data";
import PresentDescription from "@/components/Present/PresentDescription";
import ExperienceSection from "@/components/Experience/ExperienceSection";
import Miscellaneus from "@/components/Miscellaneous/Miscellaneus";
import Image from "next/image";
import Socials from "@/components/Socials/Socials";
import Contactus from "@/components/Contactus/Contactus";
import Watermark from "@/components/Watermark/Watermark";

export default function Home() {
  return (

    <>
      <div className="max-w-xl mx-auto flex flex-col justify-center min-h-screen space-y-7 px-7 md:px-0 my-10 md:my-0">
        <Image src={ProfileImage} alt="Profile Image" width={70} height={70} />
        <div className="space-y-2">
          <HeroTitle title={Name} />
          <Socials />
        </div>
        <PresentDescription />
        <ExperienceSection />
        <Miscellaneus />
        <Contactus/>
        <Watermark/>
      </div>
    </>
  );
}
