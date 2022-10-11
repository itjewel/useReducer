import { useReducer } from "react";
import { PostReducer, INITIAL_STATE } from "./PostReducer";
const Post = ()=>{
    const [state, dispatch] = useReducer(PostReducer, INITIAL_STATE);
    // console.log(state)
    const handleFetch = async ()=>{     
       dispatch({type:'FETCH_START'});
        try {
        await fetch('https://jsonplaceholder.typicode.com/posts/1')
            .then(response => response.json())
            .then(json => {
                dispatch({type:'FETCH_SUCCESS', payload: json});
            })

        } catch (error) {
            dispatch({type:'FETCH_ERROR'});
        }
        
    }
    return (
     <div>
         <div>
            <button onClick={handleFetch}>
                {state.loading ? "Wait..." : "Fetch the post"}
            </button>
            <p>{state.post?.title}</p>
            <span>{state.error && "Something went wrong!"}</span>
     </div>

     </div>
    )
}

export default Post