import { Routes, Route } from 'react-router-dom';
import Home from './Views/Home';
import Configure from './Views/Configure';

const App = () => {
  return (
    <>
      <div className="h-screen flex justify-center items-center">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/config" element={<Configure />} />
        </Routes>
      </div>
    </>
  );
};

export default App;