import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/Home';
import MoviePage from './pages/Movie';
import CineplexPage from './pages/Cineplex';
import ShowtimePage from './pages/Showtime';
import MovieDetailPage from './pages/Movie/Detail';
import BookingPage from './pages/Booking';
import PaymentPage from './pages/Payment';
import ProfilePage from './pages/Profile';
import HistoryPage from './pages/History';
import PaymentDetailPage from './pages/Payment/Detail';
import LoginPage from './pages/Auth/Login';
import RegisterPage from './pages/Auth/Register';
import EnterCode from './pages/Auth/EnterCode';
import VerifiedEmail from './pages/Auth/VerifiedEmail';
import ForgotPassword from './pages/Auth/ForgotPassword';
import ResetPassword from './pages/Auth/ResetPassword';
import ChangePassword from './pages/Auth/ChangePassword';
import NotFound from './pages/NotFound';
import News from './pages/News/News';
import NewsDetail from './pages/News/NewsDetail';
import Dashboard from './pages/Admin/Dashboard';
import Login from './pages/Admin/Auth/Login';
import UserLayout from './layout/User';
import AdminLayout from './layout/Admin';

function App() {
  const users = localStorage.getItem('user');
  return (
    <>
      <Toaster />
      <Router>
        <Switch>
          <UserLayout exact from="/" component={HomePage} />
          <UserLayout exact from="/movies/:state" component={MoviePage} />
          <UserLayout exact from="/cineplexs" component={CineplexPage} />
          <UserLayout exact from="/showtimes" component={ShowtimePage} />
          <UserLayout exact from="/news" component={News} />
          <UserLayout exact from="/news/detail/:id" component={NewsDetail} />
          <UserLayout exact from="/movies/detail/:slug" component={MovieDetailPage} />
          <UserLayout exact from="/booking/tickets/:showtimeId" component={BookingPage} />
          <UserLayout exact from="/payment" component={PaymentPage} />
          <UserLayout exact from="/payment/:id" component={PaymentDetailPage} />
          <UserLayout exact from="/profile" component={ProfilePage} />
          <UserLayout exact from="/history" component={HistoryPage} />
          <UserLayout exact from="/login" component={LoginPage} />
          <UserLayout exact from="/register" component={RegisterPage} />
          <UserLayout exact from="/enter-code" component={EnterCode} />
          <UserLayout exact from="/verified-email" component={VerifiedEmail} />
          <UserLayout exact from="/forgot-password" component={ForgotPassword} />
          <UserLayout exact from="/reset-password" component={ResetPassword} />
          <UserLayout exact from="/change-password" component={ChangePassword} />

          <Route exact path="/auth/login" component={Login} />
          <AdminLayout path="/dashboard" component={Dashboard} />

          <Route component={NotFound} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
