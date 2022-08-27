import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Liste from "./Component/Liste"
import Add from "./Component/Add.js"

function App() {
  return (
    <div className="App">
      <Add/>
      <Liste/>
    </div>
  );
}

export default App;
