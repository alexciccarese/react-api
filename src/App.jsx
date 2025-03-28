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

  const handleDeletePost = (slug) => {
    setPosts(posts.filter(post => post.slug !== slug))
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
                  <div className="card border-0">
                    <button onClick={() => handleDeletePost(post.slug)} className="btn btn-danger"><i className="bi bi-trash"></i></button>
                    <img className="card-img-top" src={api_url + post.image} alt={post.title} />
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
