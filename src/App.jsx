import { useEffect } from "react"
const api_url = 'http://localhost:3003/posts' 

export default function App() {

  useEffect(() => {

    fetchData(api_url)
  }, [])

  function fetchData(url) {
    fetch(url)
    .then(res => res.json)
    .then(data => {
      console.log(data);
      
    })
  }

  return(

    <h1>Hello!</h1>
  )
}
