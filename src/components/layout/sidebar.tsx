import { useState } from 'react';
import { useAuth } from '../../hooks/use-auth';
import { Logo } from '../shared/logo';
import { SidebarNavItem } from './sidebar-nav-item';
import { Button } from '../ui/button';
import {
  LayoutDashboard,
  FileText,
  PlusCircle,
  DollarSign,
  User,
  Users,
  Settings,
  BarChart3,
  FileCheck,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { cn } from '../../lib/utils';

export function Sidebar() {
  const { user } = useAuth();
  const [collapsed, setCollapsed] = useState(false);

  const brokerNavItems = [
    { to: '/broker/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
    { to: '/broker/new-loan', icon: PlusCircle, label: 'New Loan' },
    { to: '/broker/pipeline', icon: FileText, label: 'Pipeline', badge: 4 },
    { to: '/broker/pricing', icon: DollarSign, label: 'Pricing' },
    { to: '/broker/profile', icon: User, label: 'Profile' },
  ];

  const lenderNavItems = [
    { to: '/lender/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
    { to: '/lender/pipeline', icon: FileText, label: 'Pipeline', badge: 12 },
    { to: '/lender/brokers', icon: Users, label: 'Brokers' },
    { to: '/lender/pricing', icon: DollarSign, label: 'Pricing' },
    { to: '/lender/compliance', icon: FileCheck, label: 'Compliance' },
    { to: '/lender/reports', icon: BarChart3, label: 'Reports' },
    { to: '/lender/settings', icon: Settings, label: 'Settings' },
  ];

  const navItems = user?.role === 'broker' ? brokerNavItems : lenderNavItems;

  return (
    <aside
      className={cn(
        'glass-card border-r border-gray-200 flex flex-col transition-all duration-300 h-full',
        collapsed ? 'w-16' : 'w-64'
      )}
    >
      <div className="p-4 flex items-center justify-between">
        {!collapsed && <Logo />}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setCollapsed(!collapsed)}
          className={cn('shrink-0', collapsed && 'mx-auto')}
        >
          {collapsed ? (
            <ChevronRight className="h-4 w-4" />
          ) : (
            <ChevronLeft className="h-4 w-4" />
          )}
        </Button>
      </div>

      <nav className="flex-1 p-2 space-y-1 overflow-y-auto">
        {navItems.map((item) => (
          <SidebarNavItem key={item.to} {...item} collapsed={collapsed} />
        ))}
      </nav>

      {!collapsed && (
        <div className="p-4 border-t border-gray-200">
          <div className="text-xs text-gray-500">
            <p className="font-medium text-gray-900">{user?.firstName} {user?.lastName}</p>
            <p className="truncate">{user?.email}</p>
          </div>
        </div>
      )}
    </aside>
  );
}
