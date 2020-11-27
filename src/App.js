
import './App.css';
import {Input} from "./components/Input"
import card from './components/credit-card.jpg';
import { Form } from './components/Form'


function App() {
  return (
    <div className="app-container">
      <img src={card} alt="card" className="app-container__card"  />
      <div className="app-container__input">
        <Form />  
    </div>
    </div>
  );
}

export default App;
