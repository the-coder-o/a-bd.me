import Card from '@/app/(home)/components/bento/card-template'

export default function Github() {
  return (
    <Card className="grid-rows-7 grid aspect-square grid-cols-7 gap-1 p-6">
      {Array.from({ length: 49 }).map((_, i) => (
        <div key={i} className="col-span-1 row-span-1 aspect-square rounded bg-primary"></div>
      ))}
    </Card>
  )
}
