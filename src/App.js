import "./App.css";
import { Provider } from "react-redux";
import store from "./app/store";

import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./components/Cart";
function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
