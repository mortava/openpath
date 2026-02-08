import { PageHeader } from '../../components/layout/page-header';
import { StatCard } from '../../components/shared/stat-card';
import { usePipeline } from '../../hooks/use-pipeline';
import { FileText, Users, DollarSign, TrendingUp } from 'lucide-react';
import { formatCurrency } from '../../lib/utils';

export function LenderDashboard() {
  const { stats, isLoading } = usePipeline();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <PageHeader
        title="Lender Dashboard"
        description="Overview of all broker activity and loan pipeline"
      />

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <StatCard
          title="Active Brokers"
          value={8}
          icon={Users}
          trend={{ value: 2, label: 'new this month' }}
        />
        <StatCard
          title="Total Loans"
          value={stats.total}
          icon={FileText}
          trend={{ value: 18, label: 'vs last month' }}
        />
        <StatCard
          title="Total Volume"
          value={formatCurrency(stats.totalVolume)}
          icon={DollarSign}
          trend={{ value: 22, label: 'vs last month' }}
        />
        <StatCard
          title="Funded This Month"
          value={stats.fundedThisMonth}
          icon={TrendingUp}
          trend={{ value: 12, label: 'vs last month' }}
        />
      </div>

      <p className="text-gray-600">Additional dashboard content placeholder</p>
    </div>
  );
}
