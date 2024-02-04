import HomeMain from '@/app/(home)/components/home-main'
import HomeLinks from '@/app/(home)/components/home-links'
import HomeAboutMe from '@/app/(home)/components/home-aboutme'
import HomeLatestPosts from '@/app/(home)/components/home-latest-posts'

export default function Home() {
  return (
    <main className={'container pb-28'}>
      <div className={'pt-[9rem] max-md:pt-[8rem] flex flex-col gap-8'}>
        <HomeMain />
        <HomeLinks />
        <HomeAboutMe />
      </div>
      <HomeLatestPosts />
    </main>
  )
}
