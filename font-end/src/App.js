import './App.css';
import footer from './components/footer';
import header from './components/header';

function App() {
  return (
    <div className="App">
      {header()}
      {footer()}
    </div>
  );
}

export default App;