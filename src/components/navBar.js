import React from 'react'

const NavBar = (props) => {
    console.log(props)
    return(
        <nav>
            <p>
                NASA Photo of the Day: {props.title}
            </p>
        </nav>
    )
}

export default NavBar