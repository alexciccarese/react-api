import { useEffect, useState } from "react"
const api_url = 'http://localhost:3003/posts' 

export default function App() {
  const [posts, setPosts] = useState([])

  useEffect(() => {

    fetchData(api_url)
  }, [])

  function fetchData(url) {
    fetch(url)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      setPosts(data)
    })
  }

  return(
    <>
    <h1>Hello!</h1>
    </>
  )
}
