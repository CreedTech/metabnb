import '../src/styles/tailwind.css';
import '../src/styles/slick.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Layout />} />
        <Route exact path="/place-to-stay" element={<Layout />} />
      </Routes>
    </div>
  );
}

export default App;
