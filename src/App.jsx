import React from "react";
import { useState } from "react";
import TodoInput from "./components/TodoInput";
import Header from "./components/Header";
import Footer from "./components/Footer";
import TodoList from "./components/TodoList";

function App(props) {
  const [listTodo, setlistTodo] = useState([])

  let addList = (inputText)=>{
    setlistTodo([...listTodo,inputText])
  }

  return (
    <>
      <center>
        <Header />
        <TodoInput addList={addList} />
        <h1 className="text-3xl text-violet-400 font-semibold my-4"> TO DOs</h1>
        {listTodo.map((listItem,i)=>{
          return(
            <TodoList item={listItem}/>
          )
        })}
        
        
      </center>
    </>
  );
}

export default App;
