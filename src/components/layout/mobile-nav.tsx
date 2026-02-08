import { useState } from 'react';
import { useAuth } from '../../hooks/use-auth';
import { Logo } from '../shared/logo';
import { SidebarNavItem } from './sidebar-nav-item';
import { Button } from '../ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '../ui/sheet';
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
  Menu,
} from 'lucide-react';

export function MobileNav() {
  const { user } = useAuth();
  const [open, setOpen] = useState(false);

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
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-64">
        <SheetHeader>
          <SheetTitle>
            <Logo />
          </SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col gap-1 mt-6">
          {navItems.map((item) => (
            <div key={item.to} onClick={() => setOpen(false)}>
              <SidebarNavItem {...item} />
            </div>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
