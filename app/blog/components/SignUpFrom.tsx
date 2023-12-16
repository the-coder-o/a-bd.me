import { motion } from 'framer-motion'

import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

const SignUpFrom = () => {
  return (
    <motion.div
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 4 * 0.1 }}
      className="flex flex-col items-center justify-center gap-4 rounded-lg bg-tertiary p-6 text-center lg:p-8 bg-[#efefef] dark:bg-[#222222]"
    >
      <p className="font-medium text-primary">Subscribe to my newsletter</p>
      <p className="max-w-md dark:text-[#b4b4b4]">The Modern Blueprint —monthly readings on topics like tech, design, productivity, programming, and more!</p>
      <form className="mt-2 flex  w-full max-w-md flex-col items-center gap-2 md:flex-row">
        <div className="w-full">
          <label htmlFor="email" className="sr-only">
            Email
          </label>
          <Input
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
      <p className="text-sm text-tertiary">Join the other readers.</p>
    </motion.div>
  )
}

export default SignUpFrom
