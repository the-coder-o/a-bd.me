import { Metadata } from 'next'

import GearMain from '@/app/gear/components/gear-main'
import GeneralGearsComponent from '@/app/gear/components/general-gears-component'

export const metadata: Metadata = {
  title: 'Gear | Abdul Basit',
  description: 'My toolbox. This is gear I actually own and recommend.',
}

const GearPage = () => {
  return (
    <div className={'container pb-28'}>
      <div className={'flex flex-col gap-16 md:gap-24'}>
        <GearMain />
        <GeneralGearsComponent />
      </div>
    </div>
  )
}

export default GearPage
