import './style/common.css';
import './style/App.css';
import Header from './components/layout/Header';
import Hero from './components/layout/Hero';
import Main from './components/layout/Main';
import Footer from './components/layout/Footer';

function App() {
  return (
    <div className='App container'>
      <Header />
      <Hero />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
