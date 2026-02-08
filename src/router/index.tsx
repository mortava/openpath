import { createBrowserRouter, Navigate } from 'react-router-dom';
import { ProtectedRoute } from '../components/auth/protected-route';
import { AppShell } from '../components/layout/app-shell';

// Auth Pages
import { LoginPage } from '../pages/auth/login';
import { RegisterPage } from '../pages/auth/register';

// Broker Pages
import { BrokerDashboard } from '../pages/broker/dashboard';
import { NewLoanPage } from '../pages/broker/new-loan';
import { BrokerPipeline } from '../pages/broker/pipeline';
import { BrokerLoanDetail } from '../pages/broker/loan-detail';
import { BrokerPricingTool } from '../pages/broker/pricing-tool';
import { BrokerProfile } from '../pages/broker/profile';

// Lender Pages
import { LenderDashboard } from '../pages/lender/dashboard';
import { LenderPipeline } from '../pages/lender/pipeline';
import { LenderBrokers } from '../pages/lender/brokers';
import { LenderSettings } from '../pages/lender/settings';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/login" replace />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/register',
    element: <RegisterPage />,
  },
  {
    path: '/broker',
    element: (
      <ProtectedRoute allowedRoles={['broker']}>
        <AppShell />
      </ProtectedRoute>
    ),
    children: [
      {
        path: 'dashboard',
        element: <BrokerDashboard />,
      },
      {
        path: 'new-loan',
        element: <NewLoanPage />,
      },
      {
        path: 'pipeline',
        element: <BrokerPipeline />,
      },
      {
        path: 'loans/:id',
        element: <BrokerLoanDetail />,
      },
      {
        path: 'pricing',
        element: <BrokerPricingTool />,
      },
      {
        path: 'profile',
        element: <BrokerProfile />,
      },
    ],
  },
  {
    path: '/lender',
    element: (
      <ProtectedRoute allowedRoles={['lender']}>
        <AppShell />
      </ProtectedRoute>
    ),
    children: [
      {
        path: 'dashboard',
        element: <LenderDashboard />,
      },
      {
        path: 'pipeline',
        element: <LenderPipeline />,
      },
      {
        path: 'brokers',
        element: <LenderBrokers />,
      },
      {
        path: 'settings',
        element: <LenderSettings />,
      },
    ],
  },
]);
