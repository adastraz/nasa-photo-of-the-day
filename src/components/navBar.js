import React from 'react'
import ButtonCreator from './buttonCreator.js'
import styled from 'styled-components'

const ButtonExtra = styled.div`
display:flex;
justify-content:space-around;
margin-top:1rem;
margin-bottom:1rem;
width: 100%;
`
const DateAlign = styled.p`
text-align:center;
`
const NavStyle = styled.nav`
display:flex;
justify-content: space-evenly;
align-content:center;
width:100%;
height:3rem;
margin-top:5rem;
flex-direction:column
`
const NavBar = (props) => {
    console.log(props)
    return(
        <NavStyle>
            <DateAlign>
                NASA Photo of the Day: {props.title}
            </DateAlign>
            <DateAlign>
                {props.date}
            </DateAlign>
            <ButtonExtra>
                <ButtonCreator
                class={props.class}
                plusBut = {props.plusBut}
                minusBut = {props.minusBut}
                textPlus = 'Day +'
                textMinus = 'Day -'
                />
                <ButtonCreator
                class = {props.class}
                plusBut = {props.yearPlus}
                minusBut = {props.yearMinus}
                textPlus = 'Year +'
                textMinus = 'Year -'
                />
                <ButtonCreator
                class = {props.class}
                plusBut = {props.monthPlus}
                minusBut = {props.monthMinus}
                textPlus = 'Month +'
                textMinus = 'Month -'
                />
            </ButtonExtra>
        </NavStyle>
    )
}

export default NavBar