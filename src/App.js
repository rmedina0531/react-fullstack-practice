import logo from './logo.svg';
import Router from 'react'
import './App.css';
import Login from './containers/Login'

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path='/' component={Home}></Route>
      </Router>
      <Login/>
    </div>
  );
}

export default App;
