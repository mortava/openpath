export type DocumentCategory =
  | 'income'
  | 'asset'
  | 'property'
  | 'credit'
  | 'identity'
  | 'closing'
  | 'other';

export type DocumentStatus = 'pending' | 'received' | 'reviewed' | 'approved' | 'rejected';

export interface LoanDocument {
  id: string;
  loanId: string;
  name: string;
  category: DocumentCategory;
  status: DocumentStatus;
  fileUrl?: string;
  fileSize?: number;
  mimeType?: string;
  uploadedAt: string;
  uploadedBy: string;
  reviewedAt?: string;
  reviewedBy?: string;
  notes?: string;
}

export type ConditionStatus = 'open' | 'pending' | 'satisfied' | 'waived';
export type ConditionPriority = 'low' | 'medium' | 'high' | 'critical';

export interface LoanCondition {
  id: string;
  loanId: string;
  title: string;
  description: string;
  category: DocumentCategory;
  status: ConditionStatus;
  priority: ConditionPriority;
  dueDate?: string;
  createdAt: string;
  createdBy: string;
  resolvedAt?: string;
  resolvedBy?: string;
  notes?: string;
}
