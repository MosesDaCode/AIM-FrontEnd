import ArameansInMedicinePngLogo from "@/assets/ArameansInMedicine";
import Link from "next/link";
import Navbar from "./Navbar";

const Header = () => {
  const linkClass = "hover:underline";

  return (
    <header className="py-2 px-2 bg-slate-200">
      <Navbar />
      {/* <ArameansInMedicinePngLogo />
      <nav>
        <ul className="flex gap-2">
          <li className={linkClass}>
            <Link href="/">Home</Link>
          </li>
          <li className={linkClass}>
            <Link href="/about">About</Link>
          </li>
          <li className={linkClass}>
            <Link href="/contact">Contact</Link>
          </li>
          <li className={linkClass}>
            <Link href="/article">Article</Link>
          </li>
        </ul>
      </nav> */}
    </header>
  );
};

export default Header;
