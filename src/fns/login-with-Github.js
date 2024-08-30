import { auth } from './../firebaseConfig'
import { GithubAuthProvider, signInWithPopup } from 'firebase/auth'

async function login_with_Github() {
  const provider = new GithubAuthProvider()

  try {
    const result = await signInWithPopup(auth, provider)

    const user = result.user

    const credential = GithubAuthProvider.credentialFromResult(result)
    const access_token = credential.accessToken
    return { user, access_token }
  } catch (error) {
    console.error('Error:', error)
  }
}

export default login_with_Github
