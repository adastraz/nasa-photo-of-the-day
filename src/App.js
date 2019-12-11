import React, {useEffect, useState} from "react"
import axios from 'axios'
import "./App.css"
import Photo from './components/Photo.js'
import NavBar from './components/navBar.js'

function App() {

  const [photo, setPhoto] = useState("")
  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=34a6Fg3WFnhFpRJNICb3XfUx77gYHBXUO0hy9f2A&date=2018-03-28')
      .then(response => {
        console.log(response.data.url)
        setPhoto(response.data)
      })
      .catch(err => {
        console.log(err)
      })
  },[])

  return (
    <div className="App">
      <NavBar 
       title = {photo.title}
       />
      <Photo 
      photo = {photo.url}
      title = {photo.title}
      />
     
    </div>
  );
}

export default App;
