import { useState } from 'react'
import { ThumbsDown, ThumbsUp } from 'lucide-react'

const BlogLikesBtn = () => {
  const [like, setLike] = useState(0)
  const [disLike, setDisLike] = useState(0)

  const [likeActive, setLikeActive] = useState(false)
  const [disLikeActive, setDisLikeActive] = useState(false)

  const handleLikes = () => {
    if (likeActive) {
      setLikeActive(false)
      setLike(like - 1)
    } else {
      setLikeActive(true)
      setLike(like + 1)
      if (disLikeActive) {
        setDisLikeActive(false)
        setLike(like + 1)
        setDisLike(disLike - 1)
      }
    }
  }
  const handleDisLikes = () => {
    if (disLikeActive) {
      setDisLikeActive(false)
      setDisLike(disLike - 1)
    } else {
      setDisLikeActive(true)
      setDisLike(disLike + 1)
      if (likeActive) {
        setLikeActive(false)
        setDisLike(disLike + 1)
        setLike(like - 1)
      }
    }
  }

  return (
    <div className={'container flex items-center justify-between'}>
      <p>Did you like this blog ?</p>
      <div className={'flex items-center gap-4'}>
        <div className={'flex gap-1 items-center'}>
          <ThumbsUp onClick={handleLikes} className={'cursor-pointer w-4'} />
          <span className={'text-[12px]'}>{like}</span>
        </div>
        <div className={'flex gap-1 items-center'}>
          <ThumbsDown onClick={handleDisLikes} className={'cursor-pointer w-4'} />
          <span className={'text-[12px]'}>{disLike}</span>
        </div>
      </div>
    </div>
  )
}

export default BlogLikesBtn
