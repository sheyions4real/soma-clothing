import React from 'react';


import Directory from '../../components/directory/directory.component.jsx';

const  HomePage= (props)=> {
   return( <div className="homepage">
      {/* Two ways to create links */}
      {/* <Link to='/hats'>Hats</Link>
      <Link to={`${props.match.url}/13`}>Hats</Link>
      <button onClick={()=> props.history.push('/hats')}>Click Me</button> */}
        <Directory />
    </div>
    )
 };

export default HomePage;