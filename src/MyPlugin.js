import React from 'react';
const MyPluginComponent = () => {
  return (
    <div>
      <h2>My Plugin Component</h2>
      <p>This is my plugin in action!</p>
    </div>
  );
};
const MyPlugin = {
  initialize: () => {
    console.log('My plugin initialized.');
  }
};

export default MyPlugin;
export { MyPluginComponent };
