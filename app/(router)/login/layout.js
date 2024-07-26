const LoginLayout = ({ children }) => {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-200">
        <div className="p-8 bg-white shadow-md rounded">
          {children}
        </div>
      </div>
    );
  };
  
  export default function LoginRootLayout({ children }) {
    return <LoginLayout>{children}</LoginLayout>;
  }