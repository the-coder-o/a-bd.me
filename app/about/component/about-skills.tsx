import { SkillData } from '@/lib/data/about-me.data'

const AboutSkills = () => {
  return (
    <>
      <p className="text-[#646464] dark:text-[#b4b4b4] text-[18px] mt-[-2px]">Skills</p>
      <div className="flex flex-col gap-8  w-[525px] max-md:w-full">
        <p className={'w-full'}>I have been using these programming languages for 2 years now.</p>
        <div className="flex justify-between flex-wrap gap-2 max-md:justify-between group">
          {SkillData.map((skill) => (
            <a href={skill?.url} target={'_blank'} className="flex items-center gap-3 transition hover:!opacity-100 group-hover:opacity-50">
              <div className={'bg-[#1e1e1e] p-2 rounded-full'}>
                <img className="rounded-full !w-[40px]" src={skill?.img} alt={skill?.skillTitle} />
              </div>
            </a>
          ))}
        </div>
      </div>
    </>
  )
}

export default AboutSkills
