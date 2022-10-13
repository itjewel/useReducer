import { useReducer, useRef } from "react"
import  {FromReducer,InitialState} from '../component/FromReducer'

const Forms = ()=>{
    const tagRef = useRef();
    const [state, dispatch] = useReducer(FromReducer, InitialState);
    const handleChange = (e) => {
    dispatch({
      type: "CHANGE_INPUT",
      payload: { name: e.target.name, value: e.target.value },
    });
  };

  const handleTags = () => {
    const tags = tagRef.current.value.split(",");
    tags.forEach((tag) => {
      dispatch({ type: "ADD_TAG", payload: tag });
    });
  };
    return(
        <div style={{marginLeft:"35%"}}>
        <form>
            <p>
                <label>Title</label><br/>
                <input type="text"  placeholder="Title"  onChange={handleChange}  name="title"  />
            </p>
            <p>
                <label>Description</label><br/>
                <input type="text" placeholder="Desc" onChange={handleChange}  name="desc"  />
            </p>
            <p>
                <label>Price</label><br/>
                <input type="number" placeholder="Price" onChange={handleChange} name="price" /> 
            </p>
            <p>Category:</p>
            <select onChange={handleChange} name="category">
                <option value="sneakers">Sneakers</option>
                <option value="tshirts">T-shirts</option>
                <option value="jeans">Jeans</option>
            </select>
            <p>Tags:</p>
            <p>
                <textarea ref={tagRef}  placeholder="Seperate tags with commas..."   ></textarea>
            </p>
            <p>
                <button onClick={handleTags} type="button">
                Add Tags
                </button>
            </p>
            <div className="tags">
            {state.tags.map((tag) => (
                <small
                onClick={() => dispatch({ type: "REMOVE_TAG", payload: tag })}
                key={tag}
                >
                {tag}
                </small>
            ))}
            </div>
            <div className="quantity">
            <button onClick={() => dispatch({ type: "DECREASE" })} type="button">
                -
            </button>
            <span>Quantity ({state.quantity})</span>
            <button onClick={() => dispatch({ type: "INCREASE" })} type="button">
                +
            </button>
            </div>
        </form>
        </div>
    )
}

export default Forms;