import './style/common.css';
import './style/App.css';
import Header from './components/layout/Header';
import Hero from './components/layout/Hero';

function App() {
  return (
    <div className='App container'>
      <Header />
      <Hero />
    </div>
  );
}

export default App;
