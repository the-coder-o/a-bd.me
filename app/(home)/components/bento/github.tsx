import Link from '@/components/ui/Link'
import { FaGithub } from 'react-icons/fa'
import Card from '@/app/(home)/components/bento/card-template'
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar'

export default function Github() {
  return (
    <Card className="flex aspect-square flex-col gap-1.5 h-[180px]">
      <div className="flex items-center justify-between">
        <div className="flex aspect-square h-8 w-8 items-center justify-center rounded-md bg-gradient-to-bl from-[#7638FA] via-[#FF006A] to-[#FED702]">
          <FaGithub className="text-2xl text-white" />
        </div>
        <Avatar>
          <AvatarImage src="https://avatars.githubusercontent.com/u/115723431?v=4" alt="@shadcn" width={32} height={32} className="rounded-md" />
          <AvatarFallback>TC</AvatarFallback>
        </Avatar>
      </div>
      <p className="text-[#b4b4b4]">@the-coder-o</p>
      <Link className="mt-auto flex w-fit items-center gap-1.5 rounded-full bg-secondary px-4 py-1.5 text-sm no-underline hover:bg-tertiary" href="https://github.com/the-coder-o">
        <span className="font-medium text-primary">Follow</span>
        <span className="text-tertiary">680+</span>
      </Link>
    </Card>
  )
}
