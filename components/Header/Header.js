import Styles from "./HeaderStyles";
import Link from "next/link";

export default function Header({ merchant }) {
  return (
    <header id="banner" className="no-cover">
      <Link href={"/"}>
        <img src={merchant.images.logo.url} alt="logo" className="logo" />
      </Link>
      <h1 className="merchant-name">{merchant.name}</h1>
      <style jsx>{Styles}</style>
    </header>
  );
}
