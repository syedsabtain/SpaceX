import React from 'react';
import List from '../launchlist/index'
import Launchprofile from '../launchdetails/index'
import {useState} from 'react';
import '../../bootstrap.min.css';
import './App.css';


function App() {
    let [id,
        setId] = useState(1);
    const handleIdChange = (newid : number) : void => {
        setId(newid);
    }
    return (
        <div className=" ">
            <nav
                className="navbar navbar-expand-lg     navbar-light   bg-transparent custom-nav">
                <h2 className="navbar-brand">SpaceX</h2>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-aut0  ">
                        
                        <li className='nav-item text-white ml-5'>
                            <span className='nav-link text-white'>© Created By Syed Sabtain</span>
                        </li>
                        <li className='nav-item ml-5'>
                           <a  href='https://github.com/syedsabtain' target='blank'><i className="fab fa-github fa-2x"></i></a>
                        </li>


                    </ul>
                    
                </div>
            </nav>

            <div className='container mr-0 ml-0'>
                <div className='row '>
                    <div className='col-md-3 '>
                   
                        <List handleIdChange={handleIdChange}></List>

                    </div>
                    <div className='col-md-9 justify-content-start '>
                        <Launchprofile id={id}></Launchprofile>

                    </div>
                </div>
            </div>

        </div>
    );
}

export default App;
