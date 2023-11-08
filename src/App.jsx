import React from "react";
import TodoInput from "./components/TodoInput";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [listTodo, setlistTodo] = useState([])

  return (
    <>
      <center>
        <Header />
        <TodoInput />
        <Footer />
      </center>
    </>
  );
}

export default App;
