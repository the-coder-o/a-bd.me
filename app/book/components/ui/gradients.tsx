import React from 'react'

export const Gradients = () => {
  return (
    <>
      <div className="absolute inset-x-0 top-[40%] max-sm:top-[25%] z-0 transform-gpu overflow-hidden blur-3xl" aria-hidden="true">
        <div
          className="relative aspect-[1155/678] w-[40rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-40 left-[calc(48%)] max-sm:w-[72.1875rem] rotate-[30deg] max-sm:rounded-[90deg] max-md:opacity-20"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div className="absolute inset-x-0 top-[60%] z-0 transform-gpu overflow-hidden blur-3xl md:hidden" aria-hidden="true">
        <div
          className="relative left-[calc(60%)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[270deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
    </>
  )
}
