import { AboutMeData } from '@/lib/data/about-me.data'

const AboutMe = () => {
  return (
    <>
      {AboutMeData.map((about, index) => (
        <>
          <p className="text-[#646464] dark:text-[#b4b4b4] text-[18px] mt-[-2px]">{about?.title}</p>
          <div key={index} className="flex flex-col gap-5">
            <p>{about?.description1}</p>
            <div className="flex flex-col gap-5 w-[525px] max-md:w-full">
              <p>{about?.description2}</p>
              <p>{about?.description3}</p>
              <p>{about?.description4}</p>
            </div>
          </div>
        </>
      ))}
    </>
  )
}

export default AboutMe
