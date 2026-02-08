import { Badge } from '../ui/badge';
import type { LoanStatus } from '../../types/loan';

interface StatusBadgeProps {
  status: LoanStatus;
}

const statusConfig: Record<
  LoanStatus,
  { label: string; variant: 'default' | 'secondary' | 'destructive' | 'success' | 'warning' }
> = {
  draft: { label: 'Draft', variant: 'secondary' },
  submitted: { label: 'Submitted', variant: 'default' },
  in_review: { label: 'In Review', variant: 'warning' },
  approved: { label: 'Approved', variant: 'success' },
  denied: { label: 'Denied', variant: 'destructive' },
  withdrawn: { label: 'Withdrawn', variant: 'secondary' },
  closed: { label: 'Closed', variant: 'success' },
};

export function StatusBadge({ status }: StatusBadgeProps) {
  const config = statusConfig[status];

  return <Badge variant={config.variant}>{config.label}</Badge>;
}
