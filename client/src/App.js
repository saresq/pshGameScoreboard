import './App.css';
import TopTen from './components/TopTen'

function App() {
  return (
    <div className="container">
      <div className="row h-100">
        <div className="col-md-6 offset-md-3 bg-white">
          <div className="score-title text-center">
            <h1 className="logo">
              <i className="fa fa-dragon"></i>
              <br />
              Hall of fame</h1>
            <p>-All time Top 10 scores-</p>
          </div>
          <TopTen />
        </div>
      </div>
    </div>
  );
}

export default App;
