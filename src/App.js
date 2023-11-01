import "./App.css";
import Test from "./components/Map";
import Useref from "./components/useref";
import Memo from "./components/Memo";
import Home from "./components/Home";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

function App() {
  return (
    <>
      <h1> Welcome to Todo App</h1>
      <AddTodo />
      <Todos />
    </>
  );
}

export default App;
