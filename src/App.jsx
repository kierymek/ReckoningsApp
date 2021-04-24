import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import HotelDetailPage from './routes/HotelDetailPage';
import UpdatePage from './routes/UpdatePage';
import Home from "./routes/Home";
import { HotelsContextProvider } from './context/HotelsContext';
import ReservationPage from './routes/ReservationPage';
import UserPanel from './routes/UserPanel';
import CheckReservations from './routes/CheckReservations';
import Register from './components/Register';

const App = () => {
    return (
        <HotelsContextProvider>
            <div className="container">
                <Router>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/users/:idClient" component={UserPanel}/>
                        <Route exact path="/register" component={Register}/>
                    </Switch>
                </Router>
            </div>
        </HotelsContextProvider>
 
    )
};

export default App;