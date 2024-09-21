import AboutMe from '@/app/about/component/about-me'
import AboutWork from '@/app/about/component/about-work'
import AboutContact from '@/app/about/component/about.contact'

const About = () => {
  return (
    <div className={'flex flex-col gap-[100px] mt-20 max-md:gap-9'}>
      <div className="flex gap-[40px] max-md:flex-col max-md:gap-2">
        <AboutMe />
      </div>
      <div>
        <div className="flex gap-[40px] max-md:flex-col max-md:gap-2">
          <AboutContact />
        </div>
      </div>
      <div>
        <div className="flex gap-[40px] max-md:flex-col max-md:gap-2">
          <AboutWork />
        </div>
      </div>
    </div>
  )
}

export default About
