import React from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CouponIssuesPage from './pages/CouponIssuesPage';
import ActiveCouponsPage from './pages/ActiveCouponsPage';
import ActiveBusinessesStreamPage from './pages/ActiveBusinessesStreamPage';
import MoreCouponRequestsPage from './pages/MoreCouponRequestsPage';
import CouponIssuesWithBusinessesPage from './pages/CouponIssuesWithBusinessesPage';
import WalletStreamPage from './pages/WalletStreamPage';
import ActiveDrawnPage from './pages/ActiveDrawnPage';
import TicketsStreamPage from './pages/TicketsStreamPage';
import ZonesStreamPage from './pages/ZonesStreamPage';
import BusinessBranchStreamPage from './pages/BusinessBranchStreamPage';
import UserCartsStreamPage from './pages/UserCartsStreamPage';
import UserNotificationsStreamPage from './pages/UserNotificationsStreamPage';
import EnvironmentStreamPage from './pages/EnvironmentStreamPage';


function App() {
  const location = useLocation();

  const streamLinks = [
    { path: '/', name: 'Home', component: <HomePage /> },
    { path: '/coupon-issues', name: 'Coupon Issues', component: <CouponIssuesPage /> },
    { path: '/active-coupons', name: 'Active Coupons', component: <ActiveCouponsPage /> },
    { path: '/active-businesses', name: 'Active Businesses', component: <ActiveBusinessesStreamPage /> },
    { path: '/more-coupon-requests', name: 'More Coupon Requests', component: <MoreCouponRequestsPage /> },
    { path: '/coupon-issues-with-businesses', name: 'Coupon Issues w/ Businesses', component: <CouponIssuesWithBusinessesPage /> },
    { path: '/wallet-stream', name: 'Wallet Stream', component: <WalletStreamPage /> },
    { path: '/active-drawn', name: 'Active Drawn', component: <ActiveDrawnPage /> },
    { path: '/tickets-stream', name: 'Tickets Stream', component: <TicketsStreamPage /> },
    { path: '/zones-stream', name: 'Zones Stream', component: <ZonesStreamPage /> },
    { path: '/business-branch-stream', name: 'Business Branch Stream', component: <BusinessBranchStreamPage /> },
    { path: '/user-carts-stream', name: 'User Carts Stream', component: <UserCartsStreamPage /> },
    { path: '/user-notifications-stream', name: 'User Notifications Stream', component: <UserNotificationsStreamPage /> },
    { path: '/environment-stream', name: 'Environment Stream', component: <EnvironmentStreamPage /> },
  ];

  return (
    <>
      <div className="sidebar">
        <h2>gRPC Streams</h2>
        <ul>
          {streamLinks.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                className={location.pathname === link.path ? 'active' : ''}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="content">
        <Routes>
          {streamLinks.map((link) => (
            <Route key={link.path} path={link.path} element={link.component} />
          ))}
        </Routes>
      </div>
    </>
  );
}

export default App;