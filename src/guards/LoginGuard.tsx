import Login from "../pages/Login";

const LoginGuard = ({ children }: { children: React.ReactNode }) => {
  const accessToken = localStorage.getItem("jwt");
  if (!accessToken) {
    return <Login />;
  }
  return <>{children}</>;
};
export default LoginGuard;
