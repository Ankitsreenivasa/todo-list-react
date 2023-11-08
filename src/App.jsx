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

  const deleteListItem = (key)=>{
    let newListTodo =[...listTodo]
    newListTodo.splice(key,1)
    setlistTodo([...newListTodo])
  }

  return (
    <>
      <center>
        <Header />
        <TodoInput addList={addList} />
        <h1 className="text-3xl text-violet-400 font-semibold my-4"> TO DOs</h1>
        <hr />
        {listTodo.map((listItem,i)=>{
          return(
            <TodoList key={i} deleteItem={deleteListItem} index={i} item={listItem}/>
          )
        })}
        
        
      </center>
    </>
  );
}

export default App;
