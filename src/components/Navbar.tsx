import Link from "next/link";
import Image from "next/image";
import { navLinks } from "@/constant";
import AuthProviders from "./AuthProviders";

function NavBar() {
  const session = null;
  return (
    <nav className="flexBetween navbar">
      <div className="flex-1 flexStart gap-10">
        <Link href="/">
          <Image src="/logo.svg" width={115} height={43} alt="Flexible" />
        </Link>
        <ul className="xl:flex hidden text-small gap-7">
          {navLinks.map((link) => (
            <Link href={link.href} key={link.key}>
              {link.text}
            </Link>
          ))}
        </ul>
      </div>
      <div className="flexCenter gap-4">
        {session ? (
          <>
            User photo
            <Link href="/create-project">Share Work</Link>
          </>
        ) : (
          <AuthProviders />
        )}
      </div>
    </nav>
  );
}

export default NavBar;
