import { useLocation, useNavigate } from 'react-router-dom'
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { doc, getDoc, setDoc, serverTimestamp } from 'firebase/firestore'
import { db } from '../firebase.config'
import { toast } from 'react-toastify'
import GoogleIcon from './svgs/GoogleIcon'

function OAuth() {

    const navigate = useNavigate()
    const location = useLocation()

    const onGoogleClick = async () => {


        try {

            const auth = getAuth()
            const provider = new GoogleAuthProvider()

            const userResult = await signInWithPopup(auth, provider)
            const user = userResult.user

            // check for user
            const docRef = doc(db, 'users', user.uid)
            const docSnap = await getDoc(userRef)

            // if user doesn't exist, create user

            if (!docSnap.exists()) {

                await setDoc( doc(db, 'users', user.uid), {

                    name: user.displayName,
                    email: user.email,
                    timestamp: new Date(),
                })

                const { displayName, email, photoURL } = user

                const userData = {

                    name: displayName,
                    email,
                    photoURL,
                    timestamp: serverTimestamp()

                }

            }

            navigate('/')

        } catch (error) {

            toast.error('Could not authorize with Google')

        }

       

            

    }

  return (

    <div className="socialLogin">

        <p>Sign {location.pathname === '/sign-up' ? 'Up' : 'In'} with</p>

        <button className="socialIconDiv" onClick={onGoogleClick}>

            <GoogleIcon />
        </button>
      
    </div>

  )

}

export default OAuth
