import React, {useEffect, useState} from "react"
import axios from 'axios'
import "./App.css"
import Photo from './components/Photo.js'
import NavBar from './components/navBar.js'

function App() {

  const [photo, setPhoto] = useState("")
  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=34a6Fg3WFnhFpRJNICb3XfUx77gYHBXUO0hy9f2A&date=1999-03-28')
      .then(response => {
        console.log(response.data.url)
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
