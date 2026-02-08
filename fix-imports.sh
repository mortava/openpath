#!/bin/bash
# Fix type-only imports in TypeScript files

# Fix imports in various files
sed -i "s/import { User } from/import type { User } from/g" src/context/auth-context.tsx
sed -i "s/, mockBrokerProfile//g" src/context/auth-context.tsx
sed -i "s/password: string/_ password: string/g" src/context/auth-context.tsx

sed -i "s/import { LoanStatus }/import type { LoanStatus }/g" src/components/shared/status-badge.tsx
sed -i "s/import { PipelineStage }/import type { PipelineStage }/g" src/components/shared/stage-indicator.tsx
sed -i "s/import { LucideIcon,/import type { LucideIcon };\nimport {/g" src/components/shared/stat-card.tsx
sed -i "s/import { LucideIcon }/import type { LucideIcon }/g" src/components/shared/empty-state.tsx
sed -i "s/import { LucideIcon }/import type { LucideIcon }/g" src/components/layout/sidebar-nav-item.tsx
sed -i "s/import { UserRole }/import type { UserRole }/g" src/components/auth/protected-route.tsx
sed -i "s/import { ReactNode }/import type { ReactNode }/g" src/components/layout/page-header.tsx

# Fix imports in hook files
sed -i "s/import { Loan }/import type { Loan }/g" src/hooks/use-loans.ts
sed -i "s/import { LoanDocument }/import type { LoanDocument }/g" src/hooks/use-documents.ts
sed -i "s/import { Loan, PipelineStage }/import type { Loan, PipelineStage }/g" src/hooks/use-pipeline.ts
sed -i "s/import { PipelineFilters, PipelineStats }/import type { PipelineFilters, PipelineStats }/g" src/hooks/use-pipeline.ts

# Fix imports in lib files
sed -i "s/import { ApiResponse, PaginatedResponse, PaginationParams }/import type { ApiResponse, PaginatedResponse, PaginationParams }/g" src/lib/api-client.ts
sed -i "s/import { PipelineStage, LoanStatus }/import type { PipelineStage, LoanStatus }/g" src/lib/constants.ts
sed -i "s/import { User, BrokerProfile, LenderProfile }/import type { User, BrokerProfile, LenderProfile }/g" src/lib/mock-data.ts
sed -i "s/import { Loan }/import type { Loan }/g" src/lib/mock-data.ts
sed -i "s/import { LoanDocument, LoanCondition }/import type { LoanDocument, LoanCondition }/g" src/lib/mock-data.ts
sed -i "s/import { AuditLogEntry, Message }/import type { AuditLogEntry, Message }/g" src/lib/mock-data.ts

# Fix imports in types files
sed -i "s/import { PipelineStage, LoanStatus }/import type { PipelineStage, LoanStatus }/g" src/types/pipeline.ts

# Fix search input
sed -i "s/import { debounce } from '..\/..\/lib\/utils';//g" src/components/shared/search-input.tsx

echo "Type imports fixed!"
