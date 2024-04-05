import Image from 'next/image'
import { FaYoutube } from 'react-icons/fa'
import Link from '@/components/ui/Link'
import Card from '@/app/(home)/components/bento/card-template'

export default async function YouTube() {
  return (
    <Card className="col-span-2 row-span-1 flex justify-between gap-6">
      <div className="flex flex-col gap-1.5">
        <div className="flex aspect-square h-8 w-8 items-center justify-center rounded-lg bg-[#FF0000]">
          <FaYoutube className="text-xl text-white" />
        </div>
        <p className="text-[#b4b4b4]">@the_coder_o</p>
        <Link className="mt-auto flex items-center gap-1.5 rounded-full bg-secondary px-4 py-1.5 text-sm no-underline hover:bg-tertiary" href="https://www.youtube.com/channel/UC8D9cwzX9Utv7InLSNCm1VQ">
          <span className="font-medium text-primary">Subscribe</span>
          <span className="text-tertiary">186</span>
        </Link>
      </div>
      <div className="grid w-full grid-cols-2 grid-rows-2 gap-3">
        <Link className="relative col-span-1 row-span-1" href={'https://youtu.be/j68U1wBplk8'}>
          <Image src={'https://miro.medium.com/v2/resize:fit:1400/1*2adoEiRUwCyLA66ev4mrgg.png'} fill={true} alt="thumbnail" className="rounded-lg border border-secondary object-cover hover:opacity-75" />
        </Link>
        <Link className="relative col-span-1 row-span-1" href={'https://youtu.be/53KFVt2GRkE'}>
          <Image src={'https://miro.medium.com/v2/resize:fit:1400/1*2adoEiRUwCyLA66ev4mrgg.png'} fill={true} alt="thumbnail" className="rounded-lg border border-secondary object-cover hover:opacity-75" />
        </Link>
        <Link className="relative col-span-1 row-span-1" href={'https://youtu.be/mH4Fs1Pxomo'}>
          <Image src={'https://miro.medium.com/v2/resize:fit:1400/1*2adoEiRUwCyLA66ev4mrgg.png'} fill={true} alt="thumbnail" className="rounded-lg border border-secondary object-cover hover:opacity-75" />
        </Link>
        <Link className="relative col-span-1 row-span-1" href={'https://youtu.be/BlB5wovFmjc'}>
          <Image src={'https://miro.medium.com/v2/resize:fit:1400/1*2adoEiRUwCyLA66ev4mrgg.png'} fill={true} alt="thumbnail" className="rounded-lg border border-secondary object-cover hover:opacity-75" />
        </Link>
      </div>
    </Card>
  )
}
