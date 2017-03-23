import React from 'react';

function Loader() {
  return <div className="loader">Loading...</div>;
}

export const MyLoadingComponent = ({ isLoading, error, pastDelay }, props) => {
  if (isLoading) {
    return pastDelay ? <div className="container-fluid text-center"><Loader /></div> : null;
  } else if (error) {
    return <div>Error! Component failed to load</div>;
  } else {
    return null;
  }
};

export default Loader;
