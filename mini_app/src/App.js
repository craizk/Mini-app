import React, { useEffect, useState } from 'react'

const App = () => {

const [movies,setMovies]=useState([])

useEffect(()=>{

  fetch("http://localhost:3001")
  .then(res=>res.json())
  .then(data=>setMovies(data))

},[])


console.log(movies)
 return(


  <div>
    {"Hello"}
    {movies.map(elem=>{ return <div> {"title: "}{elem.title}</div>})}
  </div>
 )
}



export default App
