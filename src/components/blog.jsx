import { useState } from 'react';

  const Blog =()=>{
      const [blog, setBlog] = useState("")
      const [blogHistory, setBlogHistory] = useState([])
      
      const handleSubmit = () => {
          setBlogHistory([...blogHistory, blog])
          setBlog("")
        }
        const handleSearch = () => {
          const search = blogHistory.filter(item => item.includes(blog))
          setBlog("")
          console.log(search)
        }
      return(
          <div>
              <div>
        <input type="text" onChange={(e) => setBlog(e.target.value)} value={blog} />
        <button onClick={() => handleSubmit()}>Submit</button>
        <button onClick={() => handleSearch()}>Search</button>
      </div>
      <div>{blogHistory.map(blog => <p>{blog}</p>)}</div>
          </div>

      )}
      export default Blog