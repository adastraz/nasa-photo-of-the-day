import React from 'react'
import styled from 'styled-components'

const ButtonCSS = styled.button`
  background-color: lightcoral
  border: none;
  color: mediumorchid;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  border-radius:3rem;
  font-weight:bold;
  margin: 0 1rem;
`
const SectionSpace = styled.section`
display:flex;
justify-content:space-evenly;
align-items:center;
`

const ButtonCreator = (props) => {
    return(
        <SectionSpace>
            <ButtonCSS 
            className = {props.class} 
            onClick = {props.plusBut}
            >
                {props.textPlus}
            </ButtonCSS>
            <ButtonCSS 
            className = {props.class} 
            onClick = {props.minusBut}
            >
                {props.textMinus}
            </ButtonCSS>
        </SectionSpace>
    )
}
export default ButtonCreator