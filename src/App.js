import React, {useEffect, useState} from "react"
import axios from 'axios'
import "./App.css"
import Photo from './components/Photo.js'
import NavBar from './components/navBar.js'
import ContentBox from './components/content.js'
import styled from 'styled-components'

const AppStyle = styled.div`
  display:flex;
  align-items:center;
  flex-direction:column;
  justify-content:center;
  max-width:900px;
  width:100%;
`
function App() {

  const [photo, setPhoto] = useState("")
  const [date,setDate] = useState(28)
  const [year, setYear] = useState(1999)
  const [month, setMonth] = useState(3)
  
  let dayPlusClick= () => {
    if (date<29){
      setDate(date+1)
    }
  }
  let dayMinusClick= () => {
    if (date>1){
      setDate(date-1)
    }
  }
  let yearPlusClick= () => {
    if (year<2019){
      setYear(year+1)
    }
  }
  let yearMinusClick= () => {
    if (year>1999){
      setYear(year-1)
    }
  }
  let monthPlusClick= () => {
    if (month<12){
      setMonth(month+1)
    }
  }
  let monthMinusClick= () => {
    if (month>1){
      setMonth(month-1)
    }
  }
  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=34a6Fg3WFnhFpRJNICb3XfUx77gYHBXUO0hy9f2A&date=${year}-${month}-${date}`)
      .then(response => {
        console.log(response.data)
        setPhoto(response.data)
      })
      .catch(err => {
        console.log(err)
        setPhoto({
          copyright:'none',
          date:'',
          explanation: 'You have selected an invalid state. Try again',
          hdurl: 'https://images.unsplash.com/photo-1532003885409-ed84d334f6cc',
          media_type: 'image',
          service_version:'yes',
          title:'error 404 Photo not found',
          url:'https://images.unsplash.com/photo-1532003885409-ed84d334f6cc'
        })
      })
  },[date, year, month])

  return (
    <AppStyle>
      <NavBar 
       title = {photo.title}
       date = {photo.date}
       class = "button"
       plusBut = {dayPlusClick}
       minusBut = {dayMinusClick}
       yearPlus = {yearPlusClick}
       yearMinus = {yearMinusClick}
       monthPlus = {monthPlusClick}
       monthMinus = {monthMinusClick}
       />
      <Photo 
      photo = {photo.url}
      title = {photo.title}
      />
     <ContentBox
      explanation = {photo.explanation}
     />
    </AppStyle>
  );
}

export default App;
