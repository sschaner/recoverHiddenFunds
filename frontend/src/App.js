import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import CompanyScreen from './screens/CompanyScreen';
import ProcessScreen from './screens/ProcessScreen';
import FAQScreen from './screens/FAQScreen';
import ContactScreen from './screens/ContactScreen';

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Container>
          <Route path='/' component={HomeScreen} exact />
          <Route path='/company' component={CompanyScreen} />
          <Route path='/process' component={ProcessScreen} />
          <Route path='/faq' component={FAQScreen} />
          <Route path='/contact' component={ContactScreen} />
        </Container>
      </main>

      <Footer />
    </Router>
  );
};

export default App;
