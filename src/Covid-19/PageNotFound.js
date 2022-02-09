import React from 'react';

const PageNotFound = () => {
  return (<>

      <div className='pt-5' style={{backgroundColor:"#ff5c33",
        height:'115vh',
        marginTop:'-70px',
        fontSize:'50px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'}}>
        <h1 class="display-1 text-center mt-5"><strong>Oops! <br /></strong></h1>
        <h1 class="display-5 text-center"><strong>404 Not Found <br /></strong></h1>
        <h1 class="display-6 text-center"><strong>Sorry, an error has occured, Requested page not found!<br /></strong></h1>
      </div>

  </>);
};

export default PageNotFound;
