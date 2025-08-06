// shared/components/CustomerFooter.tsx
export default function Footer() {
  return (
    <footer className="bg-gray-100 p-4 text-center text-sm text-gray-600">
      © {new Date().getFullYear()} My Company – Customer Portal
    </footer>
  );
}
