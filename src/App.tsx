
import './App.css';
import Footer from './presentation/components/footer';
import Header from './presentation/components/header';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Routes from './presentation/routes';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { initApplication } from './presentation/redux/actions/general/appInitiation';
import { useEffect } from 'react';

function App({propsData}: any) {
  useEffect(() => {
    console.log(propsData);

  }, []);
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


const mapStateToProps = (state: any) => {
  return {
      propsData: state
  }
}

const mapDispatchToProps = (dispatch: any) => bindActionCreators(
  {
    initApplication
  },
  dispatch
)

export default connect(mapStateToProps, mapDispatchToProps)(App);
