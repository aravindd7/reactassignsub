import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar'; 

function App() {
  console.log("In app");
  return (
    <div className="App">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
