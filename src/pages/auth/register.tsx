import { RegisterForm } from '../../components/auth/register-form';
import { Logo } from '../../components/shared/logo';

export function RegisterPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-primary-50 to-primary-100 p-4">
      <div className="mb-8">
        <Logo className="scale-150" />
      </div>
      <RegisterForm />
    </div>
  );
}
