import Header from "./Header";
import UsersList from './UsersList';
import UserPage from './UserPage';
import Home from './Home';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header /> 
        <Routes>
          <Route path="/" element={<Home />} />        
          <Route path="/users" element={<UsersList />} />
          <Route path="/users/:id" element={<UserPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
