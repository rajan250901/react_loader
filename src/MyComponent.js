import React, { useState } from 'react';
import Loader from './Loader';
const MyComponent = () => {
  const [loading, setLoading] = useState(false);
  const fetchData = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  };
  return (
    <div>
      {loading && <Loader />}
      <button onClick={fetchData}>Fetch Data</button>
      <h1>This is mycomponent file</h1>
      {!loading && <p>Content loaded!</p>}
    </div>
  );
};
export default MyComponent;
