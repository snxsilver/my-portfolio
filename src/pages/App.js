import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomeProgrammer from './HomeProgrammer';
import HomeGeneral from './HomeGeneral';
import HomeFoodScience from './HomeFoodScience';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/my-portfolio' element={<HomeProgrammer />} />
          <Route path='/my-portfolio/general' element={<HomeGeneral />} />
          <Route path='/my-portfolio/food-science' element={<HomeFoodScience />} />
          {/* <Route path='/test-layout' element={<Layout />} />
          <Route path='/test-layout-form' element={<LayoutForm />} />
          <Route path='/test-select' element={<Select />} /> */}
        </Routes>
      </BrowserRouter>
  );
}

export default App;
