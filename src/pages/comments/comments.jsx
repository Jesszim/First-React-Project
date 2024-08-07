import Counts from "../../components/counts"
import Blog from "../../components/blog"
import { useState } from "react"
import "./comments.css"


const Comments=()=>{
    const [modal, setModal] = useState(false)
    return(
        <div id="comments">
        <h1>Leave a comment or rate me below</h1>
        <button onClick={() => setModal(!modal)}>Click Here To Comment:</button>
        {modal && <Blog/>}
        <br/>
        <hr/>
        <br/>
        <Counts />
        </div>
    )
}

export default Comments