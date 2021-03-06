import { Route } from 'react-router-dom';
import Home from './components/home/Home';
import ABM from './components/abm/OpsABM';

function App() {
  return (
    <div className="flex flex-col justify-start items-center w-screen h-screen">
      <Route exact path="/" component={Home} />
      <Route exact path="/operations" component={ABM} />
    </div>
  );
}

export default App;
