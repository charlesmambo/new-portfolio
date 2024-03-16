
import './App.css';
import Header from './components/header/Header';
import Icons from './components/sideicons/Icons';
import Phone from './components/phone/Phone';



function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Header />
       <Phone />
       <Icons />
      </header>
    </div>
  );
}

export default App;