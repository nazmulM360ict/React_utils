import "./App.css";
import CheckBoxs from "./components/CheckBoxs";
import DisableRightClick from "./components/DisableRightClick";
import DisableTwo from "./components/DisableTwo";
import FileInput from "./components/FileInput";

function App() {
  return (
    <div className="App">
      <FileInput />
      <CheckBoxs />
      <DisableRightClick />
      <DisableTwo />
    </div>
  );
}

export default App;
