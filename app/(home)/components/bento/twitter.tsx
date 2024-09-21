import Link from '@/components/ui/Link'
import { FaTwitter } from 'react-icons/fa'
import Card from '@/app/(home)/components/bento/card-template'

export default function Twitter() {
  return (
    <Card className="flex aspect-square flex-col gap-1.5">
      <div className="flex aspect-square h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-bl from-[#7638FA] via-[#FF006A] to-[#FED702]">
        <FaTwitter className="text-2xl text-white" />
      </div>
      <p className="text-[#b4b4b4]">@the_coder_o</p>
      <Link className="mt-auto flex w-fit items-center gap-1.5 rounded-full bg-secondary px-4 py-1.5 text-sm no-underline hover:bg-tertiary" href="https://instagram.com/the_coder_o">
        <span className="font-medium text-primary">Follow</span>
        <span className="text-tertiary">150+</span>
      </Link>
    </Card>
  )
}
