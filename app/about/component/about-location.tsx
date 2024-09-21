import { LocationData } from '@/lib/data/about-me.data'

const AboutLocation = () => {
  return (
    <>
      {LocationData.map((location, index) => (
        <>
          <p className="text-[#646464] dark:text-[#b4b4b4] text-[18px] mt-[-2px]">{location?.title}</p>
          <div key={index} className="flex flex-col gap-5">
            <p>{location?.description1}</p>
            <div className="flex flex-col gap-5 w-[525px] max-md:w-full">
              <p>{location?.description2}</p>
            </div>
          </div>
        </>
      ))}
    </>
  )
}

export default AboutLocation
