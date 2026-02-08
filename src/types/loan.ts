export type LoanPurpose = 'purchase' | 'refinance' | 'cashout';
export type PropertyType = 'sfr' | 'condo' | 'townhouse' | 'multi';
export type Occupancy = 'primary' | 'secondary' | 'investment';
export type IncomeDocType = 'full_doc' | 'bank_statement' | 'dscr' | 'no_doc' | 'stated';
export type LoanStatus = 'draft' | 'submitted' | 'in_review' | 'approved' | 'denied' | 'withdrawn' | 'closed';

export type PipelineStage =
  | 'lead'
  | 'application'
  | 'processing'
  | 'underwriting'
  | 'clear_to_close'
  | 'closing'
  | 'funded'
  | 'post_close';

export interface BorrowerInfo {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  ssn?: string;
  creditScore?: number;
  employerName?: string;
  jobTitle?: string;
  yearsEmployed?: number;
  isSelfEmployed: boolean;
  annualIncome?: number;
}

export interface PropertyInfo {
  address: string;
  city: string;
  state: string;
  zipCode: string;
  county?: string;
  propertyType: PropertyType;
  occupancy: Occupancy;
  propertyValue: number;
  yearBuilt?: number;
  units?: number;
}

export interface LoanDetails {
  purpose: LoanPurpose;
  loanAmount: number;
  loanTerm: number;
  amortization: number;
  interestRate?: number;
  paymentType: 'fixed' | 'arm';
  ltv: number;
  dti?: number;
  incomeDocType: IncomeDocType;
  dscrRatio?: number;
  monthlyRent?: number;
  monthlyExpenses?: number;
  isPPP?: boolean;
  entityType?: string;
}

export interface Loan {
  id: string;
  brokerId: string;
  brokerName: string;
  borrower: BorrowerInfo;
  property: PropertyInfo;
  loanDetails: LoanDetails;
  status: LoanStatus;
  stage: PipelineStage;
  createdAt: string;
  updatedAt: string;
  submittedAt?: string;
  lockedAt?: string;
  closingDate?: string;
  assignedTo?: string;
  notes?: string;
}
