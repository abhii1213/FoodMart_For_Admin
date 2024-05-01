import React from 'react';
import Sidebar from './components/Sidebar';
import { Routes, Route } from 'react-router-dom'; // Import Routes instead of BrowserRouter
import AddCategory from './components/AddCategory';
import AddFood from './components/AddFood';

const App = () => {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div style={{ marginTop: "70px" , width:'100%'}}> {/* Apply margin to the parent div */}
        <Routes>
          <Route path="/AddCategory" element={<AddCategory />} />
          <Route path="/AddFood" element={<AddFood />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
