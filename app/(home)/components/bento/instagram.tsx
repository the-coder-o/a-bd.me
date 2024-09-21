import Link from '@/components/ui/Link'
import { FaInstagram } from 'react-icons/fa'
import Card from '@/app/(home)/components/bento/card-template'
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar'

export default function Instagram() {
  return (
    <Card className="col-span-1 row-span-1 flex aspect-square flex-col gap-1.5 md:hidden block h-[180px]">
      <div className="flex items-center justify-between">
        <div className="flex aspect-square h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-bl from-[#7638FA] via-[#FF006A] to-[#FED702]">
          <FaInstagram className="text-2xl text-white" />
        </div>
        <Avatar>
          <AvatarImage
            src="https://instagram.ftas9-1.fna.fbcdn.net/v/t51.2885-19/429932148_1591646608329913_548584857647468098_n.jpg?_nc_ht=instagram.ftas9-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=MRyyZj6TVXYQ7kNvgH6fmuA&_nc_gid=196370cf6fab4085a922225958e59f3b&edm=AP4sbd4BAAAA&ccb=7-5&oh=00_AYCfByJjCQbp_dcfGdy5UerbQJB5kAeYRORJvO37QNtZ0A&oe=66F43256&_nc_sid=7a9f4b"
            alt="@shadcn"
            width={32}
            height={32}
            className="rounded-md"
          />
          <AvatarFallback>TC</AvatarFallback>
        </Avatar>
      </div>
      <p className="text-[#b4b4b4]">@the_coder_o</p>
      <Link className="mt-auto flex w-fit items-center gap-1.5 rounded-full bg-secondary px-4 py-1.5 text-sm no-underline hover:bg-tertiary" href="https://instagram.com/the_coder_o">
        <span className="font-medium text-primary">Follow</span>
        <span className="text-tertiary">350+</span>
      </Link>
    </Card>
  )
}
