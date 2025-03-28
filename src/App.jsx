import { useEffect, useState } from "react"

const api_url = 'http://localhost:3003'
const post_endpoint = '/posts'

export default function App() {
  const [posts, setPosts] = useState([])

  useEffect(() => {

    fetchData(api_url + post_endpoint)
  }, [])

  function fetchData(url) {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setPosts(data)
      })
  }

  return (
    <>

      <main>
        <section className="posts">
          <div className="container mt-4">
          <h1 className="mb-3">I nostri dolci</h1>

            <div className="row">

              {posts.map(post => (
                <div className="col" key={`post-${post.slug}`}>
                  <div className="card">
                    <img className="card-img-top" src={post.image} alt={post.title} />
                    <div className="card-body">
                      {post.title}
                    </div>
                  </div>
                </div>
              ))}

            </div>
          </div>
        </section>
      </main>
    </>
  )
}
