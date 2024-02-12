import { useState } from 'react'  
import { Link, useNavigate } from 'react-router-dom'
import KeyboardArrowRightIcon from '../components/svgs/KeyboardArrowRightIcon'
import VisibilityIcon from '../components/svgs/VisibilityIcon'
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { setDoc, doc, serverTimestamp } from "firebase/firestore";
import { db } from '../firebase.config'

function SignUp() {

  const [showPassword, setShowPassword] = useState(false)

  const [formData, setFormData] = useState({

    name: '',
    email: '',
    password: ''

  })

  const { name, email, password } = formData

  const navigate = useNavigate()

  const onSubmit = async (e) => {

    e.preventDefault()

    try {


      const auth = getAuth()

      const userCredential = await createUserWithEmailAndPassword(auth, email, password)

      const user = userCredential.user  

      updateProfile(auth.currentUser, {

        displayName: name 

      })

      const formDataCopy = {...formData}
  
      delete formDataCopy.password

      formDataCopy.timestamp = serverTimestamp()

      await setDoc(doc(db, "users", user.uid), formDataCopy)

      navigate('/')

    } catch (error) {

      console.log(error)

    }

  }

  const onChange = (e) => {

    setFormData((prevState) => ({

      ...prevState,
      [e.target.id]: e.target.value
      
      
    }))

  }

    return (
  
      <>
  
          <div className="pageContainer">

              <header>

                <p className="pageHeader">
                  Welcome Back!
                </p>


              </header>

              <main>

                <form onSubmit={onSubmit}>

                <input type="text" 
                         className="nameInput" 
                         placeholder="Name" 
                         id="name"
                         value={name}
                         onChange={onChange}/>

                  <input type="email" 
                         className="emailInput" 
                         placeholder="Email" 
                         id="email"
                         value={email}
                         onChange={onChange}/>

                  <div className="passwordInputDiv">

                    <input type={showPassword ? 'text' : 'password'}
                           className="passwordInput"
                           placeholder="Password"
                           id="password"
                           value={password}
                           onChange={onChange}/>

                    <div className="showPassword inline">

                      <VisibilityIcon onClick={() => setShowPassword( (prevState) => !prevState )} />

                    </div>
                    
                  </div>

                
                    <div className="signUpBar">

                      <p className="signUpText">

                        Sign Up

                      </p>

                      <button className="signUpButton">

                      <KeyboardArrowRightIcon fill="#ffffff" width='34px' height='34px'/>

                      </button>

                    </div>

                </form>

                {/* google OAuth */}

                <Link to="/sign-in" className="registerLink">

                  Sign In Instead

                </Link>

              </main>

          </div>
        
      </>
  
    )
  
  }
  
  export default SignUp