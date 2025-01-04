import { montserrat } from "@/assets/Fonts";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className={`${montserrat.className} h-16 py-2 px-2 bg-slate-200`}>
      <Navbar />
    </header>
  );
};

export default Header;
