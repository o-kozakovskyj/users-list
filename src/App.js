import Header from "./components/Header";
import UsersList from './features/UsersList';
import UserPage from './components/UserPage';
import Home from './components/Home';
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
