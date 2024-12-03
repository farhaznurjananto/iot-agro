import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import RegisterForm from "../components/form/RegisterForm";
import RegisterImage from "../assets/images/register.svg";

function Home() {
  return (
    <main className="h-screen flex flex-col justify-between">
      <Navbar />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-24 px-6 md:px-32 justify-items-center">
        <img src={RegisterImage} alt="register" className="w-2/3 md:w-full" />
        <RegisterForm />
      </div>
      <Footer />
    </main>
  );
}

export default Home;
