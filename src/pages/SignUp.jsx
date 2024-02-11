import { useState } from 'react'  
import { Link, useNavigate } from 'react-router-dom'
import KeyboardArrowRightIcon from '../components/svgs/KeyboardArrowRightIcon'
import VisibilityIcon from '../components/svgs/VisibilityIcon'

function SignUp() {

  const [showPassword, setShowPassword] = useState(false)

  const [formData, setFormData] = useState({

    name: '',
    email: '',
    password: ''

  })

  const { name, email, password } = formData

  const navigate = useNavigate()

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

                <form>

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