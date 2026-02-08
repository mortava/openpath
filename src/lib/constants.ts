import type { PipelineStage, LoanStatus } from '../types/loan';

export const PIPELINE_STAGES: { value: PipelineStage; label: string; color: string }[] = [
  { value: 'lead', label: 'Lead', color: '#8b5cf6' },
  { value: 'application', label: 'Application', color: '#3b82f6' },
  { value: 'processing', label: 'Processing', color: '#f59e0b' },
  { value: 'underwriting', label: 'Underwriting', color: '#f97316' },
  { value: 'clear_to_close', label: 'Clear to Close', color: '#10b981' },
  { value: 'closing', label: 'Closing', color: '#06b6d4' },
  { value: 'funded', label: 'Funded', color: '#22c55e' },
  { value: 'post_close', label: 'Post-Close', color: '#6b7280' },
];

export const LOAN_STATUSES: { value: LoanStatus; label: string; variant: string }[] = [
  { value: 'draft', label: 'Draft', variant: 'secondary' },
  { value: 'submitted', label: 'Submitted', variant: 'default' },
  { value: 'in_review', label: 'In Review', variant: 'warning' },
  { value: 'approved', label: 'Approved', variant: 'success' },
  { value: 'denied', label: 'Denied', variant: 'destructive' },
  { value: 'withdrawn', label: 'Withdrawn', variant: 'secondary' },
  { value: 'closed', label: 'Closed', variant: 'success' },
];

export const STAGE_TRANSITIONS: Record<PipelineStage, PipelineStage[]> = {
  lead: ['application'],
  application: ['processing', 'lead'],
  processing: ['underwriting', 'application'],
  underwriting: ['clear_to_close', 'processing'],
  clear_to_close: ['closing', 'underwriting'],
  closing: ['funded', 'clear_to_close'],
  funded: ['post_close'],
  post_close: [],
};

export const PROPERTY_TYPES = [
  { value: 'sfr', label: 'Single Family Residence' },
  { value: 'condo', label: 'Condominium' },
  { value: 'townhouse', label: 'Townhouse' },
  { value: 'multi', label: 'Multi-Family' },
];

export const OCCUPANCY_TYPES = [
  { value: 'primary', label: 'Primary Residence' },
  { value: 'secondary', label: 'Second Home' },
  { value: 'investment', label: 'Investment Property' },
];

export const LOAN_PURPOSES = [
  { value: 'purchase', label: 'Purchase' },
  { value: 'refinance', label: 'Refinance' },
  { value: 'cashout', label: 'Cash-Out Refinance' },
];

export const INCOME_DOC_TYPES = [
  { value: 'full_doc', label: 'Full Documentation' },
  { value: 'bank_statement', label: 'Bank Statement' },
  { value: 'dscr', label: 'DSCR (Debt Service Coverage Ratio)' },
  { value: 'no_doc', label: 'No Documentation' },
  { value: 'stated', label: 'Stated Income' },
];

export const LOAN_TERMS = [
  { value: 30, label: '30 Years' },
  { value: 20, label: '20 Years' },
  { value: 15, label: '15 Years' },
  { value: 10, label: '10 Years' },
];

export const US_STATES = [
  { value: 'AL', label: 'Alabama' },
  { value: 'AK', label: 'Alaska' },
  { value: 'AZ', label: 'Arizona' },
  { value: 'AR', label: 'Arkansas' },
  { value: 'CA', label: 'California' },
  { value: 'CO', label: 'Colorado' },
  { value: 'CT', label: 'Connecticut' },
  { value: 'DE', label: 'Delaware' },
  { value: 'FL', label: 'Florida' },
  { value: 'GA', label: 'Georgia' },
  { value: 'HI', label: 'Hawaii' },
  { value: 'ID', label: 'Idaho' },
  { value: 'IL', label: 'Illinois' },
  { value: 'IN', label: 'Indiana' },
  { value: 'IA', label: 'Iowa' },
  { value: 'KS', label: 'Kansas' },
  { value: 'KY', label: 'Kentucky' },
  { value: 'LA', label: 'Louisiana' },
  { value: 'ME', label: 'Maine' },
  { value: 'MD', label: 'Maryland' },
  { value: 'MA', label: 'Massachusetts' },
  { value: 'MI', label: 'Michigan' },
  { value: 'MN', label: 'Minnesota' },
  { value: 'MS', label: 'Mississippi' },
  { value: 'MO', label: 'Missouri' },
  { value: 'MT', label: 'Montana' },
  { value: 'NE', label: 'Nebraska' },
  { value: 'NV', label: 'Nevada' },
  { value: 'NH', label: 'New Hampshire' },
  { value: 'NJ', label: 'New Jersey' },
  { value: 'NM', label: 'New Mexico' },
  { value: 'NY', label: 'New York' },
  { value: 'NC', label: 'North Carolina' },
  { value: 'ND', label: 'North Dakota' },
  { value: 'OH', label: 'Ohio' },
  { value: 'OK', label: 'Oklahoma' },
  { value: 'OR', label: 'Oregon' },
  { value: 'PA', label: 'Pennsylvania' },
  { value: 'RI', label: 'Rhode Island' },
  { value: 'SC', label: 'South Carolina' },
  { value: 'SD', label: 'South Dakota' },
  { value: 'TN', label: 'Tennessee' },
  { value: 'TX', label: 'Texas' },
  { value: 'UT', label: 'Utah' },
  { value: 'VT', label: 'Vermont' },
  { value: 'VA', label: 'Virginia' },
  { value: 'WA', label: 'Washington' },
  { value: 'WV', label: 'West Virginia' },
  { value: 'WI', label: 'Wisconsin' },
  { value: 'WY', label: 'Wyoming' },
];
