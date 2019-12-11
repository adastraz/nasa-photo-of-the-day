import React from 'react'

const Photo = (props) => {
    console.log(props)
    return (
        <>
        <img 
        src = {props.photo.url} 
        alt = {props.photo.title}
        />
        </>
    )
}

export default Photo