import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyA-f40eLP9zXzNKMCjRjiuOXrtMhNehs-o",
    authDomain: "reactprojectdb-55519.firebaseapp.com",
    projectId: "reactprojectdb-55519",
    storageBucket: "reactprojectdb-55519.appspot.com",
    messagingSenderId: "978316824694",
    appId: "1:978316824694:web:49be6fae7fcc22fbe80f57"
  };

  export const createUserProfileDocument = async (userAuth, additionalData) =>{
      if(!userAuth) return; // no user was logged on or returned by firebase auth
    

      // a user is found by firebase auth... check if this user exist and create it if not
      const userRef = firestore.doc(`users/${userAuth.uid}`); // returns a document reference
      const snapShot = await userRef.get();  // use the document reference to get(), set(), delete(), update() and it returns a snapshot
      console.log(snapShot);
        if(!snapShot.exists){
            const{ displayName, email} = userAuth;
            const createdAt = new Date();
            try{
                await userRef.set({
                    displayName,
                    email,
                    createdAt,
                    ...additionalData
                })
            }catch(error){
                console.log('error creating user', error.message);
            }
        }
        return userRef;   
  }


  firebase.initializeApp(firebaseConfig);

    export const auth = firebase.auth();
    export const firestore = firebase.firestore();

    const provider = new firebase.auth.GoogleAuthProvider();
    provider.setCustomParameters({prompt:'select_account'});
    

    export const signInWithGoogle = () => {
        //console.log('signin with google ');
       // console.log(auth);
        auth.signInWithPopup(provider).then((result) => {

        console.log(result);
       
        // const credential = GoogleAuthProvider.credentialFromResult(result);
        // const token = credential.accessToken;
        // const user = result.user;
    })
    .catch((error) => {
        console.log(error);
        // const errorCode= error.code;
        // const errorMessage = error.message;
        // const email = error.email;
        // const credential = GoogleAuthProvider.credentialFromError(error);
    })

}
  
    //auth.signInWithRedirect(provider);

    export default firebase;




    // import {initializeApp} from 'firebase/app'
    // import 'firebase/firestore';
    // import {getAuth, signInWithPopup, GoogleAuthProvider} from 'firebase/auth';
    
    //  const firebaseConfig = {
    //         apiKey: "AIzaSyA-f40eLP9zXzNKMCjRjiuOXrtMhNehs-o",
    //         authDomain: "reactprojectdb-55519.firebaseapp.com",
    //         projectId: "reactprojectdb-55519",
    //         storageBucket: "reactprojectdb-55519.appspot.com",
    //         messagingSenderId: "978316824694",
    //         appId: "1:978316824694:web:49be6fae7fcc22fbe80f57"
    //       };
    
    // const firebase = initializeApp(firebaseConfig);

    //   const provider = new firebase.auth.GoogleAuthProvider();
    //   provider.setCustomParameters({prompt: 'select_account'});
    
    //   export const auth = firebase.auth();
    //   export const firestore = firebase.firestore();

    //   export const signInWithGoogle = ()=> signInWithPopup(auth, provider)
    //     .then((result) => {
    //         console.log(result);
    //         // const credential = GoogleAuthProvider.credentialFromResult(result);
    //         // const token = credential.accessToken;
    //         // const user = result.user;
    //     })
    //     .catch((error) => {
    //         console.log(error);
    //         // const errorCode= error.code;
    //         // const errorMessage = error.message;
    //         // const email = error.email;
    //         // const credential = GoogleAuthProvider.credentialFromError(error);
    //     })
