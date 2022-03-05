import MovingBox from './components/movingBox/MovingBox';
import ButtonBox from './components/button/ButtonsBox';

import './App.css';

function App() {
  return (
    <div className="App">
      <div className="box-moving-field">
        <MovingBox />
      </div>
      <ButtonBox />
    </div>
  );
}

export default App;
