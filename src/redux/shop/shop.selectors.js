import { createSelector } from 'reselect';

const selectShop = state => state.shop;

const COLLECTION_ID_MAP ={
  hats:1,
  sneakers:2,
  jackets:3,
  womens:4,
  mens:5
}

export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
);

// convert the object back to arrary for shop component-overview
export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  collections => Object.keys(collections).map(key => collections[key])
);


//collectionUrlParam will be the category string passed to this selector
// so we can get the list of the category from the collections objects using the category string which is mapped in the COLLECTION_ID_MAP
export const selectCollection = (collectionUrlParam)=>
  createSelector(
    [selectCollections],
    // not necessary anymore since its no longer an array instead
   // collections => collections.find(collection => collection.id === COLLECTION_ID_MAP[collectionUrlParam])
    collections=> collections[collectionUrlParam]
   );


  // import memoize from 'lodash.memoize';
//Memoizing the selector so it wont rerender everytime any object re renders
//   export const selectCollection = memoize((collectionUrlParam) =>
//   createSelector(
//     [selectCollections],
//     (collections) => collections[collectionUrlParam]
//   )
// );