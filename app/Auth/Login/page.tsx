import { FiUser } from 'react-icons/fi';
import LoginForm from './LoginForm';

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-lg">
        <div className="text-center">
          <div className="mx-auto bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mb-4">
            <FiUser className="h-8 w-8" />
          </div>
          <h2 className="text-3xl font-bold text-gray-800">Welcome back</h2>
          <p className="mt-2 text-sm text-gray-600">Please sign in to your account</p>
        </div>
        
        <LoginForm />
        
        <p className="text-center text-sm text-gray-600">
          Don't have an account?{' '}
          <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}