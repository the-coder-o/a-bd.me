import Image from 'next/image'

const MobileDesign = () => {
  return (
    <div className="lg:hidden mt-[100px] mb-[100px]">
      <div className="!animate-in" style={{ '--index': 1 } as React.CSSProperties}>
        <Image
          src={'https://searchengineland.com/wp-content/seloads/2018/07/google-building-logo-shutterstock_559400386-764x600.jpg'}
          alt={'me and lily'}
          width={324}
          height={139}
          className="relative h-60 inset-0 object-cover bg-gray-400 shadow-md pointer-events-none rounded-2xl -rotate-6 max-lg:left-[165px] max-[885px]:left-[90px] max-md:left-10 max-[430px]:left-5"
          priority
        />
      </div>
      <div className="!animate-in" style={{ '--index': 1 } as React.CSSProperties}>
        <Image
          src={'https://www.amirsoy.com/img/about/about-5.jpg'}
          alt={'me and lily'}
          width={220}
          height={260}
          className="absolute w-48 inset-0 object-cover bg-gray-400 shadow-md pointer-events-none rounded-2xl rotate-6 left-[45%] md:left-[60%] md:w-56 max-lg:top-[250px] max-md:top-[320px] max-[430px]:top-[350px]"
          priority
        />
      </div>
    </div>
  )
}

export default MobileDesign
