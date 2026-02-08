export type UserRole = 'broker' | 'lender';

export interface User {
  id: string;
  email: string;
  role: UserRole;
  firstName: string;
  lastName: string;
  createdAt: string;
  updatedAt: string;
}

export interface BrokerProfile {
  id: string;
  userId: string;
  companyName: string;
  nmls: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  status: 'pending' | 'approved' | 'suspended';
  approvedAt?: string;
  approvedBy?: string;
}

export interface LenderProfile {
  id: string;
  userId: string;
  companyName: string;
  department: string;
  phone: string;
  permissions: string[];
}
