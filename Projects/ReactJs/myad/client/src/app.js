import React, { lazy, Suspense } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';

const Home = lazy(()=>import('./pages/Home'));
const AboutUs = lazy(()=>import('./pages/AboutUs'));
const ContactUs = lazy(()=>import('./pages/ContactUs'));
const Cart = lazy(()=>import('./pages/Cart'));
const Checkout = lazy(()=>import('./pages/Checkout'));
const Terms = lazy(()=>import('./pages/Terms'));
const Query = lazy(()=>import('./pages/Query'));

export default ()=>{
    return <Router>
        <Suspense fallback={<div>Loading...</div>}>
            <Switch>
                <Route path="/about-us" exact><AboutUs/></Route>
                <Route path="/contact-us"><ContactUs/></Route>
                <Route path="/query"><Query/></Route>
                <Route path="/cart"><Cart/></Route>
                <Route path="/checkout"><Checkout/></Route>
                <Route path="/terms-and-conditions"><Terms/></Route>
                <Route path="/"><Home/></Route>
            </Switch>
        </Suspense>
    </Router>;
}