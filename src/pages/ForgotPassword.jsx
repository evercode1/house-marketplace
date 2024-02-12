
import {useState} from 'react'
import { Link } from 'react-router-dom'
import {getAuth, sendPasswordResetEmail} from 'firebase/auth'
import {toast} from 'react-toastify'
import KeyboardArrowRightIcon from '../components/svgs/KeyboardArrowRightIcon'

function ForgotPassword() {

  const [email, setEmail] = useState('')

  const onChange = (e) => setEmail(e.target.value)

  const onSubmit = async (e) => {

    e.preventDefault()

    try {

      const auth = getAuth()
      await sendPasswordResetEmail(auth, email)
      toast.success('Password reset link sent to your email')

    } catch {

      toast.error('Could not send reset email link')

    }

  }

  return (

    <div className="pageContainer">

        <header>

            <p className="pageHeader">Forgot Password</p>

        </header>

        <main>


            <form onSubmit={onSubmit}>

              <input type="email"
                     className="emailInput"
                     placeholder="Email"
                     id="email"
                     value={email}
                     onChange={onChange} />

              <Link to="/sign-in" className="forgotPasswordLink">Sign in</Link>

                <div className="signInBar">

                  <div className="signInText">Send Reset Link</div>

                  <button className="signInButton">


                    <KeyboardArrowRightIcon fill='#fffff' width='34' height='34' />

                  </button>


                </div>

              </form>
        </main>
      
    </div>

  )

}

export default ForgotPassword
