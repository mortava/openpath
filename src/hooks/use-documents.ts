import { useState, useEffect } from 'react';
import type { LoanDocument } from '../types/document';
import { mockDocuments } from '../lib/mock-data';

export function useDocuments(loanId: string) {
  const [documents, setDocuments] = useState<LoanDocument[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      const filtered = mockDocuments.filter((doc) => doc.loanId === loanId);
      setDocuments(filtered);
      setIsLoading(false);
    }, 300);
  }, [loanId]);

  return { documents, isLoading };
}
