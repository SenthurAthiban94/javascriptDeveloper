import React,{Fragment} from "react";
import Route from 'react-router-dom/Route';

const categories = [{
    logo:'',
    path:'',
    displayName: 'Non Traditional',
},{
    logo:'',
    path:'',
    displayName: 'Digital',
},{
    logo:'',
    path:'',
    displayName: 'Outdoor',
},{
    logo:'',
    path:'',
    displayName: 'Magazine',
},{
    logo:'',
    path:'',
    displayName: 'NewsPaper',
},{
    logo:'',
    path:'',
    displayName: 'Radio',
},{
    logo:'',
    path:'',
    displayName: 'Television',
},{
    logo:'',
    path:'',
    displayName: 'Cinema',
},{
    logo:'',
    path:'',
    displayName: 'Airlines',
}];

export default {
    admin: ()=>{
        // login
        // list categories
        // add categories
        // remove categories
        // delete categories
        // list sub categories
        // add sub categories
        // remove sub categories
        // delete sub categories
        // list publishers
        // add publishers
        // edit publishers
        // remove publishers
        // list properties
        // add properties
        // remove properties
        // delete properties
        // list agents
        // add agent
        // edit agent
        // remove agent
        // list agent publishers
        // add agent publishers
        // edit agent publishers
        // remove agent publishers
        // list advertisers
        // add advertiser
        // edit advertiser
        // remove advertiser
        // change Page Contents ( SEO )
            // Home
            // Categories
            // Products 
            // Product
            // Terms&Conditions
            // PrivacyPolicy
            // AboutUs
            // ContactUs
        // orders across all agents and all publishers
        // create/Update/Cancel orders
        // generate invoice


        return <Fragment>
            <Route></Route>
        </Fragment>
    },
    agent: ()=>{
        // login
        // My profile
        // myOrders
        // Publishers
        // list/create/edit/delete Publishers
        // agent/publisher/ list/add/edit/delete property
        return <Fragment>
            <Route></Route>
        </Fragment>
    },
    publisher: ()=>{
        // login
        // My profile
        // list/add/edit/delete property
        // myOrders
        return <Fragment>
            <Route></Route>
        </Fragment>
    },
    advertiser: ()=>{
        // login
        // myprofile
        // myOrders
        // categories products
        // filtered or sub categories products
        // productDetails
        // query
        // cart
        // checkout
        // ordersummary
        // contact-us
        // about-us
        return <Fragment>
            {
                categories.map(category=>category.path && <Route path={category.path} name={category.displayName}>
                    <Category id={category.id} name={category.displayName}/>
                </Route>)
            }
        </Fragment>
    },
}