import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      
      <div className="container"><Navigation /></div>
      <div className="container"><Body /></div>
      <div className="container"><ul><Buttons /></ul></div>
      <div className="container"><Footer /></div>
    </div>
  );
}

function Navigation() {
  return (
    <div>
      <nav>
    <div class="nav-wrapper indigo">
      <a href="#" class="brand-logo right">Alex Merced Test React Page</a>
      <ul id="nav-mobile" class="left hide-on-med-and-down">
        <li><a href="Alex">Home</a></li>
        <li><a href="https://www.sololearn.com/Profile/14782456">Sololearn</a></li>
        <li><a href="http://www.github.com/alexmercedcoder">Github</a></li>
      </ul>
    </div>
  </nav>
    </div>
  );
}

function Buttons() {
  return (
   
    <li>
    <button>button</button>
    </li>
     
  );
}



function Body() {
  return (
    <div>
        <div className="row">
    <div className="col s12 m12">
      <div className="card">
        <div className="card-content">
          <span className="card-title">About Alex Merced</span>
          <p>Alex Merced is shifting his career from over a decade in corporate training, marketing and small business to become a Full Stack Developer. Alex Merced is specializing in development using React, Materalize and Bootstrap on the front-end and Python/Django on the backend. Alex Merced also helps to learn about the .Net Core framework for backend development.</p>
        </div>
        <div className ="card-action indigo">
          <a className = "white-text" href="http://www.github.com/alexmercedcoder">Github</a>
          <a className = "white-text" href="https://codepen.io/AlexMercedCoder">Codepen</a>
        </div>
      </div>
    </div>
  </div>
    </div>
  );
}


function Footer() {
  return (
    <div>
      <footer class="page-footer indigo">
          <div class="container">
            <div class="row">
              <div class="col l6 s12">
                <h5 class="white-text">About This</h5>
                <p class="grey-text text-lighten-4">This page is me practicing React Development. As you can see the entire page is design with React Components while using Materialize for the style sheet.</p>
              </div>
              <div class="col l4 offset-l2 s12">
                <h5 class="white-text">Links</h5>
                <ul>
                  <li><a class="grey-text text-lighten-3" href="https://www.sololearn.com/Profile/14782456">Sololearn</a></li>
                  <li><a class="grey-text text-lighten-3" href="http://www.github.com/alexmercedcoder">Github</a></li>
                  <li><a class="grey-text text-lighten-3" href="https://www.hackerrank.com/alexmerced">HackRank</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="footer-copyright">
            <div class="container">
            © 2019 Alex Merced Coder
            <a class="grey-text text-lighten-4 right" href="http://www.linkedin.com/in/alexmerced">HIRE ME</a>
            </div>
          </div>
        </footer>
    </div>
  );
}

export default App;
