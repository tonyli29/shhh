import logo from "./logo.svg";
import "./App.css";
import Title from "./components/Title";
import CenterDiv from "./components/CenterDiv";
import Popup from "./components/Popup";
import DropDownContainer from "./components/DropDown/DropDownContainer";
import Todo from "./components/Todo";
import Calculator from "./components/Calculator";
import Navbar from "./components/CUI/NavBar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <DropDownContainer />
      <Calculator />
      <CenterDiv />
      <Popup />
      <Todo />
    </div>
  );
}

export default App;
