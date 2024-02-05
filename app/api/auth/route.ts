// pages/api/auth.ts
import { NextApiRequest, NextApiResponse } from 'next'
import { getAuth, signInWithPopup, GoogleAuthProvider, GithubAuthProvider } from 'firebase/auth'
import firebase from '@/firebase/firebase'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const auth = getAuth(firebase)

  if (req.method === 'POST') {
    const { provider } = req.body

    try {
      let authProvider: any
      if (provider === 'google') {
        authProvider = new GoogleAuthProvider()
      } else if (provider === 'github') {
        authProvider = new GithubAuthProvider()
      }

      const result = await signInWithPopup(auth, authProvider)
      res.status(200).json({ user: result.user })
    } catch (error) {
      console.error(error)
      res.status(500).json({ error: 'Authentication failed' })
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' })
  }
}
