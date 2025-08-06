import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export default function ProtectedRoute({ children, requiredRole, requiredPlan }) {
  const { user } = useSelector((state) => state.auth);
  const { plan } = useSelector((state) => state.subscription);

  if (!user) return <Navigate to="/login" />;

  // Check role
  if (requiredRole && user.role !== requiredRole) return <Navigate to="/unauthorized" />;

  // Check subscription
  if (requiredPlan && plan !== requiredPlan) return <Navigate to="/upgrade" />;

  return children;
}
