import { useState, useEffect } from 'react';
import type { Loan } from '../types/loan';
import { mockLoans } from '../lib/mock-data';

export function useLoans() {
  const [loans, setLoans] = useState<Loan[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setLoans(mockLoans);
      setIsLoading(false);
    }, 500);
  }, []);

  return { loans, isLoading };
}

export function useLoan(id: string) {
  const [loan, setLoan] = useState<Loan | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      const foundLoan = mockLoans.find((l) => l.id === id);
      setLoan(foundLoan || null);
      setIsLoading(false);
    }, 500);
  }, [id]);

  return { loan, isLoading };
}
