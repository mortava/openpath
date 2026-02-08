import { useNavigate } from 'react-router-dom';
import { PageHeader } from '../../components/layout/page-header';
import { StatCard } from '../../components/shared/stat-card';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { StatusBadge } from '../../components/shared/status-badge';
import { usePipeline } from '../../hooks/use-pipeline';
import { FileText, DollarSign, Clock, CheckCircle, PlusCircle } from 'lucide-react';
import { formatCurrency, formatRelativeTime } from '../../lib/utils';

export function BrokerDashboard() {
  const navigate = useNavigate();
  const { loans, stats, isLoading } = usePipeline();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const recentLoans = loans.slice(0, 5);

  return (
    <div>
      <PageHeader
        title="Dashboard"
        description="Welcome back! Here's an overview of your pipeline."
        actions={
          <Button onClick={() => navigate('/broker/new-loan')}>
            <PlusCircle className="h-4 w-4 mr-2" />
            New Loan
          </Button>
        }
      />

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <StatCard
          title="Total Loans"
          value={stats.total}
          icon={FileText}
          trend={{ value: 12, label: 'vs last month' }}
        />
        <StatCard
          title="In Progress"
          value={stats.byStatus.submitted + stats.byStatus.in_review}
          icon={Clock}
        />
        <StatCard
          title="Approved"
          value={stats.byStatus.approved}
          icon={CheckCircle}
          trend={{ value: 8, label: 'vs last month' }}
        />
        <StatCard
          title="Total Volume"
          value={formatCurrency(stats.totalVolume)}
          icon={DollarSign}
          trend={{ value: 15, label: 'vs last month' }}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentLoans.map((loan) => (
                <div
                  key={loan.id}
                  className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
                  onClick={() => navigate(`/broker/loans/${loan.id}`)}
                >
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900">
                      {loan.borrower.firstName} {loan.borrower.lastName}
                    </p>
                    <p className="text-xs text-gray-500 truncate">
                      {loan.property.address}
                    </p>
                  </div>
                  <div className="flex items-center gap-3 ml-4">
                    <div className="text-right">
                      <p className="text-sm font-medium">
                        {formatCurrency(loan.loanDetails.loanAmount)}
                      </p>
                      <p className="text-xs text-gray-500">
                        {formatRelativeTime(loan.updatedAt)}
                      </p>
                    </div>
                    <StatusBadge status={loan.status} />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Pipeline by Stage</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {Object.entries(stats.byStage).map(([stage, count]) => (
                <div key={stage} className="flex items-center justify-between">
                  <span className="text-sm text-gray-700 capitalize">
                    {stage.replace(/_/g, ' ')}
                  </span>
                  <span className="text-sm font-semibold text-gray-900">
                    {count}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
