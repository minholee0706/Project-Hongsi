
import './App.css';
import Main from './components/Main';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Main2 from './components/Main2';

function App() {
  return (
    <div className="App">
        <Router >
                <Routes>
                    <Route exact path="/" element={<Main />} />
                    <Route exact path="/Main2" element={<Main2 />} />
                </Routes>
            </Router>
    </div>
  );
}

export default App;
