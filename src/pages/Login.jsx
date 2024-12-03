import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import LoginForm from "../components/form/LoginForm";
import LoginImage from "../assets/images/login.svg";

function Login() {
  return (
    <main className="h-screen flex flex-col justify-between">
      <Navbar />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-24 px-6 md:px-32 justify-items-center">
        <img src={LoginImage} alt="login" className="w-2/3 md:w-full" />
        <LoginForm />
      </div>
      <Footer />
    </main>
  );
}

export default Login;
