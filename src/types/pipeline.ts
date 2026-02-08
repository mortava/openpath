import type { PipelineStage, LoanStatus } from './loan';

export interface PipelineFilters {
  search?: string;
  stage?: PipelineStage | 'all';
  status?: LoanStatus | 'all';
  brokerId?: string;
  dateFrom?: string;
  dateTo?: string;
}

export interface PipelineStats {
  total: number;
  byStage: Record<PipelineStage, number>;
  byStatus: Record<LoanStatus, number>;
  avgDaysInPipeline: number;
  closingThisMonth: number;
  fundedThisMonth: number;
  totalVolume: number;
}

export type AuditAction =
  | 'created'
  | 'updated'
  | 'stage_changed'
  | 'status_changed'
  | 'document_uploaded'
  | 'document_reviewed'
  | 'condition_added'
  | 'condition_satisfied'
  | 'assigned'
  | 'note_added';

export interface AuditLogEntry {
  id: string;
  loanId: string;
  action: AuditAction;
  performedBy: string;
  performedByName: string;
  timestamp: string;
  previousValue?: string;
  newValue?: string;
  notes?: string;
}

export interface Message {
  id: string;
  loanId: string;
  senderId: string;
  senderName: string;
  senderRole: 'broker' | 'lender';
  message: string;
  createdAt: string;
  read: boolean;
}
