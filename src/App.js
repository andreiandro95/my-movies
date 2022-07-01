
import './App.css';
import RecommendedMovie from './Components/RecommendedMovie';
import Rows from "./Components/Rows";
import Navigation from "./Components/Navigation"

function App() {
  
  return (
    <div className="App">
      <Navigation />  
      <RecommendedMovie />
      <Rows />
    </div>
  );
}

export default App;
