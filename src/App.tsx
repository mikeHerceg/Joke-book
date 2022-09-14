import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from 'react-router-dom';
import { Home } from './routes/home';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
