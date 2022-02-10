import React from 'react';
import { Route} from 'react-router-dom'; // since we want to initiate a sub route of the shop page
// eg localhost:3000/shop/:ItemCategory


import CollectionsOverview from '../../components/collection-overview/collection-overview.component'
import CollectionsPage from '../collection/collection.component';

// match, location, history are automatically passed as props to the ShopPage since Route from App.js called the /shop Route to render the ShopPage
const ShopPage = ({match}) =>{
    console.log(match.path);
        return(
            <div className='shop-page'>
                
                    <Route exact path={`${match.path}`} component={CollectionsOverview} />
                    <Route  path={`${match.path}/:collectionId`} component={CollectionsPage} />
               
            </div>
        )
    }

export default ShopPage;