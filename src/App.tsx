
import './App.css';
import Footer from './presentation/components/footer';
import Header from './presentation/components/header';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Routes from './presentation/routes';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
          <div>
            <Routes />
          </div>
        <Footer />

      </div>
    </BrowserRouter>
  );
}

export default App;
