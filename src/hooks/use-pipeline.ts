import { useState, useEffect, useMemo } from 'react';
import type { Loan, PipelineStage } from '../types/loan';
import type { PipelineFilters, PipelineStats } from '../types/pipeline';
import { mockLoans } from '../lib/mock-data';

export function usePipeline(filters?: PipelineFilters) {
  const [loans, setLoans] = useState<Loan[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      let filtered = [...mockLoans];

      if (filters?.search) {
        const search = filters.search.toLowerCase();
        filtered = filtered.filter(
          (loan) =>
            loan.borrower.firstName.toLowerCase().includes(search) ||
            loan.borrower.lastName.toLowerCase().includes(search) ||
            loan.property.address.toLowerCase().includes(search)
        );
      }

      if (filters?.stage && filters.stage !== 'all') {
        filtered = filtered.filter((loan) => loan.stage === filters.stage);
      }

      if (filters?.status && filters.status !== 'all') {
        filtered = filtered.filter((loan) => loan.status === filters.status);
      }

      setLoans(filtered);
      setIsLoading(false);
    }, 300);
  }, [filters]);

  const stats = useMemo<PipelineStats>(() => {
    const byStage: Record<PipelineStage, number> = {
      lead: 0,
      application: 0,
      processing: 0,
      underwriting: 0,
      clear_to_close: 0,
      closing: 0,
      funded: 0,
      post_close: 0,
    };

    loans.forEach((loan) => {
      byStage[loan.stage]++;
    });

    return {
      total: loans.length,
      byStage,
      byStatus: {
        draft: loans.filter((l) => l.status === 'draft').length,
        submitted: loans.filter((l) => l.status === 'submitted').length,
        in_review: loans.filter((l) => l.status === 'in_review').length,
        approved: loans.filter((l) => l.status === 'approved').length,
        denied: loans.filter((l) => l.status === 'denied').length,
        withdrawn: loans.filter((l) => l.status === 'withdrawn').length,
        closed: loans.filter((l) => l.status === 'closed').length,
      },
      avgDaysInPipeline: 14,
      closingThisMonth: loans.filter((l) => l.stage === 'closing').length,
      fundedThisMonth: loans.filter((l) => l.stage === 'funded').length,
      totalVolume: loans.reduce((sum, l) => sum + l.loanDetails.loanAmount, 0),
    };
  }, [loans]);

  return { loans, stats, isLoading };
}
