import { z } from 'zod';

export const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
});

export const registerSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  companyName: z.string().min(1, 'Company name is required'),
  nmls: z.string().min(1, 'NMLS number is required'),
  phone: z.string().min(10, 'Valid phone number is required'),
  address: z.string().min(1, 'Address is required'),
  city: z.string().min(1, 'City is required'),
  state: z.string().length(2, 'State must be 2 characters'),
  zipCode: z.string().regex(/^\d{5}(-\d{4})?$/, 'Invalid ZIP code'),
});

export const borrowerSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Valid phone number is required'),
  dateOfBirth: z.string().min(1, 'Date of birth is required'),
  ssn: z.string().optional(),
  creditScore: z.number().min(300).max(850).optional(),
  employerName: z.string().optional(),
  jobTitle: z.string().optional(),
  yearsEmployed: z.number().min(0).optional(),
  isSelfEmployed: z.boolean(),
  annualIncome: z.number().min(0).optional(),
});

export const propertySchema = z.object({
  address: z.string().min(1, 'Address is required'),
  city: z.string().min(1, 'City is required'),
  state: z.string().length(2, 'State must be 2 characters'),
  zipCode: z.string().regex(/^\d{5}(-\d{4})?$/, 'Invalid ZIP code'),
  county: z.string().optional(),
  propertyType: z.enum(['sfr', 'condo', 'townhouse', 'multi']),
  occupancy: z.enum(['primary', 'secondary', 'investment']),
  propertyValue: z.number().min(1, 'Property value is required'),
  yearBuilt: z.number().min(1800).max(new Date().getFullYear() + 1).optional(),
  units: z.number().min(1).optional(),
});

export const loanDetailsSchema = z.object({
  purpose: z.enum(['purchase', 'refinance', 'cashout']),
  loanAmount: z.number().min(1, 'Loan amount is required'),
  loanTerm: z.number().min(1, 'Loan term is required'),
  amortization: z.number().min(1, 'Amortization is required'),
  interestRate: z.number().min(0).max(100).optional(),
  paymentType: z.enum(['fixed', 'arm']),
  ltv: z.number().min(0).max(100),
  dti: z.number().min(0).max(100).optional(),
  incomeDocType: z.enum(['full_doc', 'bank_statement', 'dscr', 'no_doc', 'stated']),
  dscrRatio: z.number().min(0).optional(),
  monthlyRent: z.number().min(0).optional(),
  monthlyExpenses: z.number().min(0).optional(),
  isPPP: z.boolean().optional(),
  entityType: z.string().optional(),
});

export const loanApplicationSchema = z.object({
  borrower: borrowerSchema,
  property: propertySchema,
  loanDetails: loanDetailsSchema,
});

export type LoginFormData = z.infer<typeof loginSchema>;
export type RegisterFormData = z.infer<typeof registerSchema>;
export type BorrowerFormData = z.infer<typeof borrowerSchema>;
export type PropertyFormData = z.infer<typeof propertySchema>;
export type LoanDetailsFormData = z.infer<typeof loanDetailsSchema>;
export type LoanApplicationFormData = z.infer<typeof loanApplicationSchema>;
