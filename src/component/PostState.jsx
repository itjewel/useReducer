import { useState } from "react";

const PostState = ()=>{
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [post, setPost] = useState({})
    const handleFetch = async ()=>{     
        setLoading(true)   
        try {
        await fetch('https://jsonplaceholder.typicode.com/posts/1')
            .then(response => response.json())
            .then(json => {
                setPost((prev)=>json)
               setLoading(false)
            })

        } catch (error) {
            setLoading(false)
            setError(true)
        }
        
    }
    return (
     <div>
         <div>
            <button onClick={handleFetch}>
                {loading ? "Wait..." : "Fetch the post"}
            </button>
            <p>{post?.title}</p>
            <span>{error && "Something went wrong!"}</span>
     </div>

     </div>
    )
}

export default PostState;