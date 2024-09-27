import './App.css';
import footer from './components/footer';
import header from './components/header';
import termos from './pages/termos';
import politicas from './pages/politica-privacidade';

function App() {
  return (
    <div className="App">
      {header()}
      {termos()}
      {politicas()}
      {footer()}
    </div>
  );
}

export default App;