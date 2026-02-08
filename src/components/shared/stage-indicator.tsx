import type { PipelineStage } from '../../types/loan';
import { PIPELINE_STAGES } from '../../lib/constants';
import { cn } from '../../lib/utils';

interface StageIndicatorProps {
  currentStage: PipelineStage;
  className?: string;
}

export function StageIndicator({ currentStage, className }: StageIndicatorProps) {
  const currentIndex = PIPELINE_STAGES.findIndex((s) => s.value === currentStage);

  return (
    <div className={cn('flex items-center gap-2', className)}>
      {PIPELINE_STAGES.map((stage, index) => {
        const isActive = index === currentIndex;
        const isCompleted = index < currentIndex;

        return (
          <div
            key={stage.value}
            className="flex flex-col items-center gap-1 flex-1"
            title={stage.label}
          >
            <div
              className={cn(
                'h-2 w-full rounded-full transition-all',
                isCompleted && 'bg-green-500',
                isActive && 'bg-primary-600',
                !isActive && !isCompleted && 'bg-gray-200'
              )}
              style={{
                backgroundColor: isActive ? stage.color : undefined,
              }}
            />
            <span
              className={cn(
                'text-xs text-center hidden md:block',
                isActive ? 'text-gray-900 font-medium' : 'text-gray-500'
              )}
            >
              {stage.label}
            </span>
          </div>
        );
      })}
    </div>
  );
}
