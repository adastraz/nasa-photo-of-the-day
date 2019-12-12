import React from 'react'
import styled from 'styled-components'

const PhotoHolder = styled.div `
  width:100%;
  display:flex;
  align-items:center;
  margin-top:5rem;
  justify-content:center;
`

const Photo = (props) => {
    return (
        <>
        <PhotoHolder>
            <img 
            src = {props.photo} 
            alt = {props.title}
            />
        </PhotoHolder>
        </>
    )
}

export default Photo