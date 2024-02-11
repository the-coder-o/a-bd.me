'use client'

import React, { useEffect } from 'react'

import { fetchEntries, selectAllEntries } from '@/redux/slice/message-slice'

import { format } from 'date-fns'

import { motion } from 'framer-motion'

import { useDispatch, useSelector } from 'react-redux'

const GuestbookItem = () => {
  const dispatch = useDispatch()
  const entries = useSelector(selectAllEntries)

  useEffect(() => {
    // @ts-ignore
    dispatch(fetchEntries())
  }, [dispatch])

  return (
    <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.4, delay: 3 * 0.1 }}>
      <ul className={'space-y-8'}>
        {entries.map((entry: any) => (
          <li key={entry.id} className={'mt-4 space-y-8'}>
            <div className="flex flex-col space-y-2">
              <div className="prose w-full break-words dark:text-gray-200">{entry?.message}</div>
              <div className="flex items-center space-x-3">
                <p className="text-sm text-gray-600 dark:text-[#c2c2c2] max-sm:text-[14px]">{entry?.name}</p>
                <span className="text-gray-600 dark:text-[#c2c2c2]">/</span>
                <p className="text-sm text-gray-600 dark:text-[#c2c2c2] max-sm:text-xs">{format(new Date(entry?.createdAt), 'MMM eeee, yyyy, HH:mm p')}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

export default GuestbookItem
