import { Route } from 'react-router-dom';
import Home from './components/Home';
import ABM from './components/OpsABM';

function App() {
  return (
    <div>
      <Route exact path="/" component={Home} />
      <Route exact path="/operations" component={ABM} />
    </div>
  );
}

export default App;
