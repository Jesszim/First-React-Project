import Welcome from "../../components/welcome"
import { useState } from "react"
import "./home.css"

const Home= ()=>{
 
    let user = 'Everyone'
    const [username, setUsername] = useState("")
   
  
    return (
      <div id="home">
       
        <input type="text" placeholder='---Type name here---' onChange={(event) => setUsername(event.target.value)} value={username} />
        <Welcome user={user} username={username} />
 
      </div>
    )
 
}
export default Home