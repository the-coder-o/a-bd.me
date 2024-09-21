'use client'

import { useEffect, useState } from 'react'
import { Listbox } from '@headlessui/react'

import clsx from 'clsx'
import { useTheme } from 'next-themes'
import { motion, AnimatePresence } from 'framer-motion'

import { SunIcon } from '@heroicons/react/24/outline'
import { MoonIcon, CheckIcon } from '@heroicons/react/20/solid'

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme, resolvedTheme, themes } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <>
      <Listbox value={theme} onChange={(value) => setTheme(value)}>
        {({ open }) => {
          const iconClassName = clsx('w-5 h-5 dark:text-[#B4B4B4] text-black hover:!text-primary cursor-pointer transition-colors', open ? 'text-primary' : 'text-secondary')
          return (
            <div className="relative">
              <Listbox.Button className={clsx('relative w-8 h-8 cursor-default rounded-full flex items-center justify-center focus:outline-none ')}>
                {resolvedTheme === 'dark' ? <MoonIcon className={iconClassName} /> : <SunIcon className={'w-5 h-5 dark:text-[#B4B4B4] text-black hover:!text-primary cursor-pointer transition-colors'} />}
              </Listbox.Button>
              <AnimatePresence>
                {open && (
                  <Listbox.Options
                    as={motion.ul}
                    static
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ type: 'spring', bounce: 0.3, duration: 0.3 }}
                    className="absolute right-0 p-2 mt-2 overflow-auto text-base origin-top-right shadow-lg max-h-60 w-42 rounded-xl dark:bg-[#000] focus:outline-none sm:text-sm capitalize"
                  >
                    {themes.map((theme) => (
                      <Listbox.Option key={theme} className={({ active }) => clsx('relative cursor-default select-none py-2 pl-10 pr-4 rounded-md', active ? 'bg-secondary' : '')} value={theme}>
                        {({ selected }) => (
                          <>
                            <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>{theme == 'system' ? 'Automatic' : theme}</span>
                            {selected ? (
                              <span className="absolute inset-y-0 left-0 flex items-center pl-3 dark:text-neutral-50">
                                <CheckIcon className="w-5 h-5" aria-hidden="true" />
                              </span>
                            ) : null}
                          </>
                        )}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                )}
              </AnimatePresence>
            </div>
          )
        }}
      </Listbox>
    </>
  )
}
