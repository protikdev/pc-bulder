import Footer from "../../shared/Footer";
import Navbar from "../../shared/Navbar";

export default function Layouts({ children }) {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
