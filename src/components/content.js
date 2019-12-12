import React from 'react'
import styled from 'styled-components'

const ContentStyle = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  max-width: 650px;
  text-align:justify;
  background: slateblue;
  margin-top:3rem;
  margin-bottom:3rem;
  border-radius:3rem;
  padding: 0 5rem;
`
const HStyle = styled.h1`
  text-align: center;
  margin-top: 2rem;
  margin-bottom:1rem;
  font-size: 2rem;
  color:aquamarine;
`
const PStyle = styled.p`
  margin-bottom:3rem;
  font-size:1.5rem;
  color:cadetblue;
`
const ContentBox = (props) => {
    return (
        <>
        <ContentStyle>
            <HStyle>Explanation</HStyle>
            <PStyle>{props.explanation}</PStyle>
        </ContentStyle>
        </>
    )
}

export default ContentBox