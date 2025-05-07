import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { StoreProvider } from './context';
import LoginView from './views/LoginView';
import AuthenticatedView from './views/AuthenticatedView';
import HomeView from './views/HomeView';
import RegisterView from './views/RegisterView';
import ProtectedRoutes from './utils/ProtectedRoutes';

function App() {
  return (
    <StoreProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/register" element={<RegisterView />} />
          <Route path="/login" element={<LoginView />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="/authenticated" element={<AuthenticatedView />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </StoreProvider>
  )
}

export default App
