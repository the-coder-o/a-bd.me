'use client'

import { useEffect, useState } from 'react'
import { signInWithPopup, GoogleAuthProvider, GithubAuthProvider } from 'firebase/auth'
import { auth } from '@/firebase/firebase'

export default function Home() {
  const [user, setUser] = useState<any>(null)
  const [messages, setMessages] = useState([])

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user)
    })

    return () => unsubscribe()
  }, [])

  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, new GoogleAuthProvider())
    } catch (error) {
      console.error(error)
    }
  }

  const signInWithGithub = async () => {
    try {
      const result = await signInWithPopup(auth, new GithubAuthProvider())
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div>
      {user ? (
        <div>
          <p>Welcome, {user.displayName}!</p>
          {/* Add the guestbook form here */}
        </div>
      ) : (
        <div>
          <p>Please sign in to leave a message.</p>
          <button onClick={signInWithGoogle}>Sign in with Google</button>
          <button onClick={signInWithGithub}>Sign in with GitHub</button>
        </div>
      )}
    </div>
  )
}
