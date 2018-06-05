import React, { Component } from 'react';
import Sender from './components/Sender';
import Recipient from './components/Recipient';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <div className="row">
              <div className="col-md-2">
                <h3>Sender</h3>
                <Sender fullName="Ezekiel" email="iamwebwiz@gmail.com" active={true} />
                <Sender fullName="Temitope" email="temitope@gmail.com" active={false} />
                <Sender fullName="Sammie" email="sammie@gmail.com" active={true} />
              </div>
              
              <div className="col-md-2">
                <h3>Recipient</h3>
                <Recipient fullName="Folake" email="folake@gmail.com" active={true} />
                <Recipient fullName="Shittu" email="shittu@gmail.com" active={false} />
                <Recipient fullName="Olamiposi" email="olamiposi@gmail.com" active={true} />
              </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
