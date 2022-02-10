import React from "react";

import { connect } from "react-redux";
import { selectCollection } from "../../redux/shop/shop.selectors";
import CollectionItem from "../../components/collection-item/collection-item.component";


import './collection.styles.scss'

// the match comes from the shopping page Route that called the CollectionPage i.e /shop/:categoryid
const CollectionsPage = ({collection}) => {
    //console.log(match)
   // console.log(match.params.collectionId);
   console.log(collection);

   const {title, items} = collection
    return(
    <div className="collection-page">
        <h2 className="title">{title}</h2>
        <div className="items">
            {
                items.map(item=> ( <CollectionItem key={item.id} item={item} /> ))
            }
        </div>
    </div>
    );
    }

// the ownProps is the props of the component with this we can access the match props to react the params
    const mapStateToProps = (state, ownProps) => ({
        collection: selectCollection(ownProps.match.params.collectionId)(state)
      });
      

export default  connect(mapStateToProps)(CollectionsPage);