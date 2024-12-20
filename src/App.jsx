import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import MainLayout from "./layouts/MainLayout";
import LoginPage from "./pages/LoginPage";
import AuthLayout from "./layouts/AuthLayout";
import ProductPage from "./pages/ProductPage";
import Dashboard from "./pages/Dashboard";
import ErrorPage from "./pages/ErrorPage";
import NotFoundPage from "./pages/NotFoundPage";
import Transporter from "./pages/Transporter";
import Driver from "./pages/Driver";
import Vehicles from "./pages/Vehicles";
import AddTransporter from "./pages/AddTransporter";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<MainLayout />} errorElement={<ErrorPage />}>
        <Route index element={<Dashboard />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/transporters" element={<Transporter />} />
        <Route path="/addTransporter" element={<AddTransporter />} />
        <Route path="/drivers" element={<Driver />} />
        <Route path="/vehicles" element={<Vehicles />} />
      </Route>
      <Route path="/" element={<AuthLayout />}>
        <Route path="/login" element={<LoginPage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </>,
  ),
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
