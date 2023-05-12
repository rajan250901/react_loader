import React, { Component } from 'react';
import MyPlugin, {MyPluginComponent} from './MyPlugin'; 
class App extends Component {
  componentDidMount() {
    MyPlugin.initialize();
  }
  render() {
    return (
      <div>
        <h1>React Plugin Example</h1>
        <MyPluginComponent />
      </div>
    );
  }
}

export default App;
