import {BrowserRouter, Routes,Route} from "react-router-dom"
import './App.css';
import Modal from "./components/Modal";
import Edit from "./components/Edit";

function App() {
  return (
    <div className="App">
   <BrowserRouter>
   <Routes>
    <Route path="/">
      <Route index element={<Modal/>}/>
      <Route path="/edit" element={<Edit/>}/>
    </Route>
   </Routes>
   </BrowserRouter>
    </div>
  );
}

export default App;
