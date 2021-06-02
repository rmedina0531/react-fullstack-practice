
import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Login from '../containers/Login'
import './Home.css'

function Home (){
    return (
        <>  
            <Jumbotron className='jub'>
                <h1>Hello, world!</h1>
                <p>
                    We are practicing stuffffff...
                </p>
                <Login/>
            </Jumbotron>
        </>
    )
}
  
export default Home;