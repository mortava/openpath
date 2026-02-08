import { useParams } from 'react-router-dom';
import { PageHeader } from '../../components/layout/page-header';
import { useLoan } from '../../hooks/use-loans';

export function BrokerLoanDetail() {
  const { id } = useParams<{ id: string }>();
  const { loan, isLoading } = useLoan(id!);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!loan) {
    return <div>Loan not found</div>;
  }

  return (
    <div>
      <PageHeader
        title={`Loan #${loan.id}`}
        description={`${loan.borrower.firstName} ${loan.borrower.lastName}`}
      />
      <p>Loan detail page placeholder</p>
    </div>
  );
}
