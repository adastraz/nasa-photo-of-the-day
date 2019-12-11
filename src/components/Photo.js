import React from 'react'

const Photo = (props) => {
    return (
        <>
        <div className='photoHolder'>
            <img 
            src = {props.photo} 
            alt = {props.title}
            />
        </div>
        </>
    )
}

export default Photo