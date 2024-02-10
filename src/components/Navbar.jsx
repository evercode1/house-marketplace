import { NavLink } from 'react-router-dom'  
import LocalOfferIcon from '../components/svgs/LocalOfferIcon.jsx'
import ExploreIcon from '../components/svgs/ExploreIcon.jsx'
import  PersonOutlineIcon from '../components/svgs/PersonOutlineIcon.jsx'


function Navbar() {

  return (

    <footer className="navbar">

        <nav className="navbarNav">

            <ul className="navbarListItems">

                <li className="navbarListItem">

                    <NavLink to="/" className="navbarListItem">

                    {( { isActive } ) => (
                        <>
                            <ExploreIcon
                                fill={
                                isActive ? '#2c2c2c' : '#8f8f8f'}
                                width='36px'
                                height='36px'
                            />
                            <p
                                className={
                                isActive
                                ? 'navbarListItemNameActive'
                                : 'navbarListItemName'
                                }
                            >
                                Explore

                            </p>

                        </>

                    )}


                    </NavLink>

                </li>

                <li className="navbarListItem">

                <NavLink to="/offers" className="navbarListItem">

                    {( { isActive } ) => (

                    <>
                        <LocalOfferIcon
                            fill={isActive ? '#2c2c2c' : '#8f8f8f'}
                            width='36px'
                            height='36px'
                        />

                        <p className={
                           isActive
                           ? 'navbarListItemNameActive'
                           : 'navbarListItemName'
                           }
                        >
            
                            Offers

                        </p>

                    </>

                    )}


                </NavLink>

                </li>

                <li className="navbarListItem">

                <NavLink to="/profile" className="navbarListItem">

                    {( { isActive } ) => (

                        <>
                            <PersonOutlineIcon
                                fill={isActive ? '#2c2c2c' : '#8f8f8f'}
                                width='36px'
                                height='36px'
                            />

                            <p className={
                               isActive
                               ? 'navbarListItemNameActive'
                               : 'navbarListItemName'
                               }
                            >

                                Profile

                            </p>

                        </>

                    )}

                </NavLink>

                </li>

            </ul>

        </nav>
      
    </footer>

  )

}

export default Navbar
