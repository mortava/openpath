# OpenPath - Claude Memory File 🧠

**Last Updated:** February 8, 2026
**Project Type:** Wholesale Mortgage Origination Platform
**Status:** Production - Deployed on Vercel

---

## 🎯 Project Overview

**OpenPath** is a modern wholesale mortgage origination portal that connects mortgage brokers with wholesale lenders. It streamlines the loan application, submission, and pipeline management process.

### Key Value Propositions
- **For Brokers:** Submit loans, track pipeline, access pricing tools, manage profiles
- **For Lenders:** Review submissions, manage broker relationships, track underwriting pipeline
- **Platform Benefits:** Real-time collaboration, document management, automated workflows

---

## 🛠️ Tech Stack

### Core Framework
- **React 19.2.0** - Latest React with concurrent features
- **TypeScript 5.9.3** - Type-safe development
- **Vite 7.2.4** - Fast build tooling with HMR

### Routing & State
- **React Router DOM 7.13.0** - Client-side routing with nested routes
- **React Hook Form 7.71.1** - Performant form management
- **Zod 4.3.6** - Schema validation

### UI Layer
- **Tailwind CSS 4.1.18** - Utility-first styling
- **Radix UI** - Accessible component primitives (Avatar, Dialog, Dropdown, Select, etc.)
- **Framer Motion 12.33.0** - Animation library
- **Lucide React 0.563.0** - Icon library
- **Sonner 2.0.7** - Toast notifications

### Data & Backend
- **Supabase 2.95.3** - PostgreSQL database, authentication, real-time subscriptions
- **TanStack React Table 8.21.3** - Powerful table/data grid

### Development Tools
- **ESLint 9.39.1** - Code linting
- **PostCSS 8.5.6** - CSS processing
- **Autoprefixer 10.4.24** - CSS vendor prefixing

---

## 📁 Project Architecture

```
OpenPath/
├── src/
│   ├── components/
│   │   ├── auth/              # Authentication components
│   │   │   ├── login-form.tsx
│   │   │   ├── register-form.tsx
│   │   │   └── protected-route.tsx
│   │   ├── layout/            # App layout components
│   │   │   ├── app-shell.tsx
│   │   │   ├── header.tsx
│   │   │   ├── sidebar.tsx
│   │   │   ├── sidebar-nav-item.tsx
│   │   │   ├── mobile-nav.tsx
│   │   │   └── page-header.tsx
│   │   ├── shared/            # Reusable business components
│   │   │   ├── confirm-dialog.tsx
│   │   │   ├── empty-state.tsx
│   │   │   ├── file-upload.tsx
│   │   │   ├── loading-state.tsx
│   │   │   ├── logo.tsx
│   │   │   ├── search-input.tsx
│   │   │   ├── stage-indicator.tsx
│   │   │   ├── stat-card.tsx
│   │   │   └── status-badge.tsx
│   │   ├── ui/                # Base UI primitives (Radix + custom)
│   │   │   ├── avatar.tsx
│   │   │   ├── badge.tsx
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── checkbox.tsx
│   │   │   ├── dialog.tsx
│   │   │   ├── dropdown-menu.tsx
│   │   │   ├── input.tsx
│   │   │   ├── label.tsx
│   │   │   ├── progress.tsx
│   │   │   ├── select.tsx
│   │   │   ├── separator.tsx
│   │   │   ├── sheet.tsx
│   │   │   ├── skeleton.tsx
│   │   │   ├── switch.tsx
│   │   │   ├── table.tsx
│   │   │   ├── tabs.tsx
│   │   │   ├── textarea.tsx
│   │   │   ├── toast.tsx
│   │   │   └── tooltip.tsx
│   │   └── wizard/fields/     # Multi-step form wizard components
│   ├── context/
│   │   └── auth-context.tsx   # Global authentication state
│   ├── hooks/                 # Custom React hooks
│   │   ├── use-auth.ts
│   │   ├── use-documents.ts
│   │   ├── use-loans.ts
│   │   ├── use-media-query.ts
│   │   └── use-pipeline.ts
│   ├── lib/                   # Utilities & configuration
│   │   ├── api-client.ts      # API wrapper functions
│   │   ├── constants.ts       # App-wide constants
│   │   ├── mock-data.ts       # Development mock data
│   │   ├── supabase.ts        # Supabase client initialization
│   │   ├── utils.ts           # Utility functions (cn, formatters)
│   │   └── validators.ts      # Zod schemas for form validation
│   ├── pages/
│   │   ├── auth/
│   │   │   ├── login.tsx
│   │   │   └── register.tsx
│   │   ├── broker/            # Broker-specific pages
│   │   │   ├── dashboard.tsx
│   │   │   ├── new-loan.tsx
│   │   │   ├── loan-detail.tsx
│   │   │   ├── pipeline.tsx
│   │   │   ├── pricing-tool.tsx
│   │   │   └── profile.tsx
│   │   └── lender/            # Lender-specific pages
│   │       ├── dashboard.tsx
│   │       ├── pipeline.tsx
│   │       ├── brokers.tsx
│   │       └── settings.tsx
│   ├── router/
│   │   └── index.tsx          # React Router configuration
│   ├── types/                 # TypeScript definitions
│   │   ├── api.ts
│   │   ├── document.ts
│   │   ├── loan.ts
│   │   ├── pipeline.ts
│   │   └── user.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── public/                    # Static assets
├── dist/                      # Build output (git ignored)
├── node_modules/              # Dependencies (git ignored)
├── .env.local                 # Environment variables (git ignored)
├── package.json
├── vite.config.ts
├── tailwind.config.js
├── tsconfig.json
└── DONT_FORGET.md            # This file!
```

---

## 🔐 Authentication System

### Current Implementation (Mock Auth)
- **Location:** `src/context/auth-context.tsx`
- **Storage:** LocalStorage (`openpath_user` key)
- **Mock Logic:**
  - Email contains "lender" → Login as Lender
  - Any other email → Login as Broker
- **Protected Routes:** Role-based access control via `ProtectedRoute` component

### User Roles
```typescript
type UserRole = 'broker' | 'lender' | 'admin';
```

### Mock Users
```typescript
// Broker: broker@example.com (any password)
// Lender: lender@example.com (any password)
```

### Production TODO
- [ ] Replace mock auth with Supabase Auth
- [ ] Implement real password validation
- [ ] Add email verification
- [ ] Implement password reset flow
- [ ] Add multi-factor authentication
- [ ] Implement session management with JWT

---

## 📊 Data Models

### Loan Type Definitions

#### Core Loan Object
```typescript
interface Loan {
  id: string;
  brokerId: string;
  brokerName: string;
  borrower: BorrowerInfo;
  property: PropertyInfo;
  loanDetails: LoanDetails;
  status: LoanStatus;
  stage: PipelineStage;
  createdAt: string;
  updatedAt: string;
  submittedAt?: string;
  lockedAt?: string;
  closingDate?: string;
  assignedTo?: string;
  notes?: string;
}
```

#### Loan Status Flow
```typescript
type LoanStatus =
  | 'draft'        // Initial creation
  | 'submitted'    // Sent to lender
  | 'in_review'    // Under lender review
  | 'approved'     // Approved for funding
  | 'denied'       // Rejected
  | 'withdrawn'    // Broker withdrew
  | 'closed';      // Successfully closed
```

#### Pipeline Stages
```typescript
type PipelineStage =
  | 'lead'              // Initial contact
  | 'application'       // Application submitted
  | 'processing'        // Document gathering
  | 'underwriting'      // Underwriter review
  | 'clear_to_close'    // Final approval
  | 'closing'           // Closing in progress
  | 'funded'            // Loan funded
  | 'post_close';       // Post-closing activities
```

#### Stage Transitions
Stages can only move to specific next stages (defined in `constants.ts`):
```typescript
lead → application
application → processing | lead
processing → underwriting | application
underwriting → clear_to_close | processing
clear_to_close → closing | underwriting
closing → funded | clear_to_close
funded → post_close
post_close → (terminal state)
```

#### Borrower Information
```typescript
interface BorrowerInfo {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  ssn?: string;
  creditScore?: number;
  employerName?: string;
  jobTitle?: string;
  yearsEmployed?: number;
  isSelfEmployed: boolean;
  annualIncome?: number;
}
```

#### Property Information
```typescript
interface PropertyInfo {
  address: string;
  city: string;
  state: string;
  zipCode: string;
  county?: string;
  propertyType: 'sfr' | 'condo' | 'townhouse' | 'multi';
  occupancy: 'primary' | 'secondary' | 'investment';
  propertyValue: number;
  yearBuilt?: number;
  units?: number;
}
```

#### Loan Details
```typescript
interface LoanDetails {
  purpose: 'purchase' | 'refinance' | 'cashout';
  loanAmount: number;
  loanTerm: number;              // Years
  amortization: number;          // Years
  interestRate?: number;
  paymentType: 'fixed' | 'arm';
  ltv: number;                   // Loan-to-Value ratio
  dti?: number;                  // Debt-to-Income ratio
  incomeDocType: IncomeDocType;
  dscrRatio?: number;            // For DSCR loans
  monthlyRent?: number;
  monthlyExpenses?: number;
  isPPP?: boolean;               // Prepayment Penalty
  entityType?: string;
}
```

#### Income Documentation Types
```typescript
type IncomeDocType =
  | 'full_doc'         // Full income documentation
  | 'bank_statement'   // Bank statement loans
  | 'dscr'            // Debt Service Coverage Ratio
  | 'no_doc'          // No documentation
  | 'stated';         // Stated income
```

---

## 🧭 Routing Structure

### Route Hierarchy
```
/ → /login (redirect)

/login                          # Public: Login page
/register                       # Public: Registration page

/broker                         # Protected: Broker role only
├── /dashboard                  # Broker home
├── /new-loan                   # Create new loan
├── /pipeline                   # View all loans in pipeline
├── /loans/:id                  # Loan detail view
├── /pricing                    # Rate pricing tool
└── /profile                    # Broker profile settings

/lender                         # Protected: Lender role only
├── /dashboard                  # Lender home
├── /pipeline                   # Review submitted loans
├── /brokers                    # Manage broker relationships
└── /settings                   # Lender settings
```

### Route Protection
- Implemented via `ProtectedRoute` wrapper component
- Checks user role against `allowedRoles` prop
- Redirects to `/login` if unauthorized
- Uses `AuthContext` for user state

---

## 🎨 Component Patterns

### UI Component Structure
```
components/
├── ui/           → Base primitives (buttons, inputs, dialogs)
├── shared/       → Business-specific reusable components
├── layout/       → Page structure components (shell, header, sidebar)
├── auth/         → Authentication-specific components
└── wizard/       → Multi-step form components
```

### Component Naming Conventions
- **Pages:** `BrokerDashboard`, `LenderPipeline` (PascalCase with role prefix)
- **Components:** `StatCard`, `StatusBadge` (PascalCase)
- **UI Primitives:** `Button`, `Input`, `Dialog` (PascalCase, generic names)
- **Files:** `kebab-case.tsx` for all files

### Styling Patterns
- **Tailwind CSS:** Utility-first approach
- **cn() helper:** Combines class names with `clsx` and `tailwind-merge`
- **Component variants:** Use `class-variance-authority` for variant-based styling
- **Responsive:** Mobile-first design with Tailwind breakpoints

---

## 🔧 Environment Setup

### Required Environment Variables

Create `.env.local` in project root:

```bash
# Supabase Configuration
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key

# MeridianLink API (Future Integration)
VITE_MERIDIANLINK_API_URL=https://api.meridianlink.com
VITE_MERIDIANLINK_API_KEY=your-api-key
```

### Supabase Setup
1. Create project at https://supabase.com
2. Copy URL and anon key from project settings
3. Update `.env.local` with real values
4. Run database migrations (TBD)

### Local Development
```bash
# Install dependencies
npm install

# Start dev server (http://localhost:5173)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

---

## 🚀 Deployment

### GitHub Repository
- **URL:** https://github.com/mortava/openpath
- **Branch:** `master`
- **Last Commit:** Initial commit with full application

### Vercel Deployment
- **Status:** ✅ Deployed
- **Platform:** Vercel
- **Auto-deploy:** Enabled on push to `master`

### Deployment Checklist
- [x] Code pushed to GitHub
- [x] Vercel project created and deployed
- [ ] Environment variables configured in Vercel dashboard
- [ ] Custom domain configured (if applicable)
- [ ] Supabase production database set up
- [ ] MeridianLink API integration configured

### Environment Variables in Vercel
Add these in Vercel Dashboard → Settings → Environment Variables:
- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`
- `VITE_MERIDIANLINK_API_URL`
- `VITE_MERIDIANLINK_API_KEY`

---

## 📚 Key Files to Remember

### Configuration Files
- **vite.config.ts** - Vite build configuration
- **tailwind.config.js** - Tailwind CSS customization
- **tsconfig.json** - TypeScript compiler options
- **package.json** - Dependencies and scripts
- **.env.local** - Environment variables (git ignored)
- **.gitignore** - Git ignore patterns

### Critical Source Files
- **src/main.tsx** - App entry point
- **src/App.tsx** - Root component
- **src/router/index.tsx** - Route definitions
- **src/context/auth-context.tsx** - Authentication state
- **src/lib/supabase.ts** - Supabase client
- **src/lib/constants.ts** - App-wide constants
- **src/types/loan.ts** - Core data type definitions

---

## 🔨 Development Patterns

### State Management
- **Global State:** React Context API (AuthContext)
- **Form State:** React Hook Form with Zod validation
- **Server State:** Supabase queries (to be implemented with React Query)
- **Local State:** useState for component-level state

### Data Fetching Pattern
```typescript
// Custom hooks pattern (see hooks/ directory)
export function useLoans(brokerId: string) {
  const [loans, setLoans] = useState<Loan[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch from Supabase
    // Handle loading/error states
  }, [brokerId]);

  return { loans, isLoading };
}
```

### Form Validation Pattern
```typescript
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

const { register, handleSubmit } = useForm({
  resolver: zodResolver(schema),
});
```

### Component Composition
- **Layout Components:** Wrap pages with `AppShell`
- **Protected Pages:** Wrap with `ProtectedRoute`
- **Forms:** Compose with `react-hook-form` + Zod
- **Tables:** Use TanStack Table for complex data grids

---

## 🎯 Feature Completeness Status

### ✅ Completed Features
- Authentication system (mock implementation)
- Role-based routing (Broker/Lender)
- Page layouts and navigation
- UI component library (Radix UI + custom)
- TypeScript type definitions
- Form validation schemas
- Pipeline stage management
- Responsive design foundation

### 🚧 In Progress / Mock Data
- Loan submission workflow (uses mock data)
- Pipeline management (uses mock data)
- Document uploads (UI only)
- Broker profile management (UI only)
- Lender broker management (UI only)

### 📋 TODO / Future Implementation
- [ ] Real Supabase authentication
- [ ] Database schema & migrations
- [ ] Real-time pipeline updates (Supabase Realtime)
- [ ] Document upload to Supabase Storage
- [ ] MeridianLink LOS integration
- [ ] Email notifications
- [ ] Advanced search & filtering
- [ ] Export functionality (PDF, Excel)
- [ ] Analytics dashboard
- [ ] Audit logging
- [ ] Rate pricing engine integration
- [ ] Automated underwriting rules
- [ ] Compliance checks (TRID, RESPA)
- [ ] E-signature integration
- [ ] Mobile app (React Native)

---

## 🐛 Known Issues & Considerations

### Current Limitations
1. **Mock Authentication** - LocalStorage-based, not secure for production
2. **No Real Database** - All data is in-memory mock data
3. **No File Upload** - File upload UI exists but not functional
4. **No Real-time Updates** - Pipeline changes don't sync across users
5. **No Email Notifications** - Email triggers not implemented
6. **Missing Validations** - Some business rule validations need to be added

### Security Considerations
- [ ] Implement HTTPS-only in production
- [ ] Add CSRF protection
- [ ] Implement rate limiting
- [ ] Add input sanitization
- [ ] Secure sensitive data (SSN, bank info)
- [ ] Add audit trail for compliance
- [ ] Implement row-level security in Supabase

### Performance Optimizations Needed
- [ ] Implement code splitting
- [ ] Add React.lazy for route-based code splitting
- [ ] Optimize bundle size
- [ ] Add service worker for offline capability
- [ ] Implement virtualization for large tables
- [ ] Add skeleton loaders for better UX

---

## 🔄 Git Workflow

### Branch Strategy
- **master** - Production branch (auto-deploys to Vercel)
- **develop** - Development branch (future)
- **feature/** - Feature branches (future)

### Commit Conventions
```
feat: Add new feature
fix: Bug fix
docs: Documentation changes
style: Code style changes (formatting)
refactor: Code refactoring
test: Adding tests
chore: Maintenance tasks
```

### Current Status
- **Latest Commit:** Initial commit with full application
- **Remote:** github.com/mortava/openpath
- **Deployment:** Auto-deploys from master to Vercel

---

## 💡 Tips for Future Development

### When Adding New Features
1. **Define Types First** - Add TypeScript types to `src/types/`
2. **Create Validation Schema** - Add Zod schemas to `src/lib/validators.ts`
3. **Build UI Components** - Reuse existing UI primitives from `components/ui/`
4. **Create Custom Hook** - Extract data logic to `hooks/`
5. **Add Route** - Update `src/router/index.tsx`
6. **Update Constants** - Add new options to `src/lib/constants.ts`

### Testing Strategy (To Implement)
- Unit tests: Vitest + React Testing Library
- E2E tests: Playwright or Cypress
- API tests: Supabase client mocking

### Code Quality Tools
- ESLint for linting
- Prettier for formatting (to be added)
- Husky for pre-commit hooks (to be added)
- TypeScript strict mode enabled

---

## 📖 Important Documentation Links

### Framework & Libraries
- React 19 Docs: https://react.dev
- TypeScript: https://www.typescriptlang.org/docs/
- Vite: https://vite.dev
- React Router: https://reactrouter.com
- Tailwind CSS: https://tailwindcss.com/docs

### UI & Components
- Radix UI: https://www.radix-ui.com
- Framer Motion: https://www.framer.com/motion/
- Lucide Icons: https://lucide.dev
- TanStack Table: https://tanstack.com/table/latest

### Backend & Auth
- Supabase: https://supabase.com/docs
- Supabase Auth: https://supabase.com/docs/guides/auth
- Supabase Storage: https://supabase.com/docs/guides/storage

### Form Management
- React Hook Form: https://react-hook-form.com
- Zod: https://zod.dev

---

## 🎓 Business Logic Reference

### Loan-to-Value (LTV) Calculation
```typescript
LTV = (Loan Amount / Property Value) * 100
```

### Debt-to-Income (DTI) Calculation
```typescript
DTI = (Total Monthly Debt / Gross Monthly Income) * 100
```

### DSCR Calculation
```typescript
DSCR = Net Operating Income / Total Debt Service
// DSCR > 1.0 means property generates enough income to cover debt
```

### Interest Rate Factors
- Credit Score
- LTV Ratio
- Loan Purpose (Purchase vs Refinance)
- Property Type
- Occupancy Type
- Documentation Type
- Loan Amount & Term

---

## 🚨 Critical Reminders

### Before Production Launch
1. ⚠️ Replace mock authentication with real Supabase Auth
2. ⚠️ Set up production database with proper security rules
3. ⚠️ Configure environment variables in Vercel
4. ⚠️ Test all user flows end-to-end
5. ⚠️ Review and implement security best practices
6. ⚠️ Set up error monitoring (Sentry or similar)
7. ⚠️ Configure backup strategy for database
8. ⚠️ Add terms of service and privacy policy
9. ⚠️ Implement GDPR/CCPA compliance if needed
10. ⚠️ Set up analytics (Google Analytics, Mixpanel, etc.)

### Maintenance Schedule
- Daily: Monitor error logs
- Weekly: Review security alerts
- Monthly: Update dependencies
- Quarterly: Performance audit
- Annually: Security audit

---

## 🤝 Team Context

### GitHub User
- **Username:** mortava
- **Repo:** openpath
- **Access:** Owner

### Deployment
- **Platform:** Vercel
- **Account:** Linked to GitHub (mortava)
- **Auto-deploy:** Enabled

---

## 📝 Quick Start Commands

```bash
# Clone repository
git clone https://github.com/mortava/openpath.git
cd openpath

# Install dependencies
npm install

# Set up environment variables
cp .env.local.example .env.local
# Edit .env.local with your Supabase credentials

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Deploy to Vercel
# (Already set up for auto-deploy from GitHub)
```

---

## 🎉 Project Milestones

- ✅ **Feb 8, 2026** - Initial commit, GitHub repo created
- ✅ **Feb 8, 2026** - Deployed to Vercel
- 🎯 **Next:** Implement real Supabase authentication
- 🎯 **Next:** Set up database schema and migrations
- 🎯 **Next:** Implement loan submission API

---

**Remember:** This file should be updated regularly as the project evolves. Keep it as a single source of truth for project context and critical information!

