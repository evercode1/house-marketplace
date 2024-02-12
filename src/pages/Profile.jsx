import { useEffect, useState } from 'react'
import { getAuth } from 'firebase/auth'

function Profile() {

  const [user, setUser] = useState(null)


  useEffect(() => {

    const auth = getAuth()

    const user = auth.currentUser

    setUser(user)

    console.log(user)

   

  }, [])

    return (
  
      user ? <h1>{user.displayName}</h1> : "You are not Logged in."
  
    )
  
  }
  
  export default Profile
  