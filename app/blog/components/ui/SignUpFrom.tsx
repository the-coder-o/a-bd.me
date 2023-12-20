import axios from 'axios'

import { useState } from 'react'
import { motion } from 'framer-motion'

import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

const SignUpFrom = () => {
  const [email, setEmail] = useState<string>('')
  const [success, setSuccess] = useState<boolean | undefined>()

  const onSubmit = async (e: any) => {
    e.preventDefault()
    try {
      const data = await axios.post('/api/subscribe', { user_email: email }).then((res) => {
        setSuccess(true)
      })
    } catch (error) {
      setSuccess(false)
    }
  }

  if (success === false) {
    return (
      <div className="flex flex-col items-center justify-center gap-4 rounded-lg bg-tertiary p-8 text-center bg-[#efefef] dark:bg-[#222222]">
        <p>mhh, something went wrong...</p>
      </div>
    )
  }

  if (success) {
    return (
      <div className="flex flex-col items-center justify-center gap-4 rounded-lg bg-tertiary p-8 text-center bg-[#efefef] dark:bg-[#222222]">
        <p className="font-medium text-primary">You&apos;re in!</p>
        <p className="max-w-lg text-[#b4b4b4] dark:text-[#646464]">Thank you for subscribing to The Modern Blueprint! Good reads coming your way. Be on the lookout for the confirmation email.</p>
      </div>
    )
  }

  return (
    <motion.div
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 4 * 0.1 }}
      className="flex flex-col items-center justify-center gap-4 rounded-lg bg-tertiary p-6 text-center lg:p-8 bg-[#efefef] dark:bg-[#222222]"
    >
      <p className="font-medium text-primary">Subscribe to my newsletter</p>
      <p className="max-w-md dark:text-[#b4b4b4]">The Modern Blueprint —monthly readings on topics like tech, design, productivity, programming, and more!</p>
      <form onSubmit={onSubmit} className="mt-2 flex  w-full max-w-md flex-col items-center gap-2 md:flex-row">
        <div className="w-full">
          <label htmlFor="email" className="sr-only">
            Email
          </label>
          <Input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            id="email"
            className="block !w-full !rounded-md !text-[#eeeeee]  px-4 py-2 !border !border-primary !placeholder:!text-tertiary !outline-none-inset bg-[#fcfcfc] dark:!bg-[#111111]"
            placeholder="you@example.com"
          />
        </div>
        <Button
          variant={'default'}
          className="w-full whitespace-nowrap rounded-md bg-neutral-800 text-white hover:bg-neutral-900 !outline-none border-none
                 focus:ring-inset focus:ring-indigo-600 focus-visible:outline focus-visible:outline-2 dark:bg-neutral-300 dark:text-black hover:dark:bg-neutral-100 md:w-fit "
        >
          Sign up
        </Button>
      </form>
      <p className="text-sm text-tertiary">Join the {email?.length} other readers.</p>
    </motion.div>
  )
}

export default SignUpFrom
