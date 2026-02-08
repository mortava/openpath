import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PageHeader } from '../../components/layout/page-header';
import { SearchInput } from '../../components/shared/search-input';
import { StatusBadge } from '../../components/shared/status-badge';
import { StageIndicator } from '../../components/shared/stage-indicator';
import { Button } from '../../components/ui/button';
import { usePipeline } from '../../hooks/use-pipeline';
import { PlusCircle } from 'lucide-react';
import { formatCurrency, formatDate } from '../../lib/utils';

export function BrokerPipeline() {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const { loans, isLoading } = usePipeline({ search });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <PageHeader
        title="Pipeline"
        description="Manage and track all your loan applications"
        actions={
          <Button onClick={() => navigate('/broker/new-loan')}>
            <PlusCircle className="h-4 w-4 mr-2" />
            New Loan
          </Button>
        }
      />

      <div className="mb-6">
        <SearchInput
          placeholder="Search by borrower or property..."
          onSearch={setSearch}
        />
      </div>

      <div className="card-elevated overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Borrower
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Property
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Loan Amount
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Stage
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Updated
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {loans.map((loan) => (
              <tr
                key={loan.id}
                className="hover:bg-gray-50 cursor-pointer transition-colors"
                onClick={() => navigate(`/broker/loans/${loan.id}`)}
              >
                <td className="px-6 py-4 whitespace-nowrap">
                  <div>
                    <div className="text-sm font-medium text-gray-900">
                      {loan.borrower.firstName} {loan.borrower.lastName}
                    </div>
                    <div className="text-sm text-gray-500">{loan.borrower.email}</div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm text-gray-900">{loan.property.address}</div>
                  <div className="text-sm text-gray-500">
                    {loan.property.city}, {loan.property.state}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {formatCurrency(loan.loanDetails.loanAmount)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <StatusBadge status={loan.status} />
                </td>
                <td className="px-6 py-4">
                  <div className="w-32">
                    <StageIndicator currentStage={loan.stage} />
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {formatDate(loan.updatedAt)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
