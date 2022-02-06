import './App.css';
import "./Todos.css"
import "./Input.css"
import { useState } from "react";

function App() {
  const [elements, setElements]=useState([]);

  const addElement = element =>{
      setElements(() => {
          return [...elements, element]
      });  
  }

  //partie input
    const [input,setInput] = useState("");
    const inputHandler =(event) =>{
        setInput(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        addElement(input);
        setInput('');
    };

    const removeElement = (value) =>{
      setElements(elements.filter((task)=>{
        return task!== value;
      }))
    }
  return (
    <div>
        <div className="header">
            <h1>ToDo List</h1>
            <div className="input">
            <input type="text" placeholder="task..." value={input} onChange={inputHandler} />
            <button type="submit" onClick={submitHandler}>Add</button>
            </div>
        </div>
        {elements.map((table)=>(
                <div className="container">
                    <h2>{table}</h2> 
                    <button type="submit" onClick={()=>removeElement(table)} className="b">X</button>
                </div>
        ))}
    </div>
  );
}

export default App;
