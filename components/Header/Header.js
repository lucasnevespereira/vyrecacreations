import Styles from "./HeaderStyles";
import Link from "next/link";
import { MailOutlined } from "@ant-design/icons";
import { background, Button } from "@chakra-ui/react";
import { useRouter } from "next/router";

export default function Header({ merchant }) {
  const router = useRouter();
  const sendEmail = () => {
    router.push("mailto:vyrecacreations@gmail.com");
  };
  return (
    <header
      id="banner"
      className={!merchant.has.cover && "no-cover"}
      style={{
        backgroundImage: merchant.has.cover
          ? `url('${merchant.images.cover.url}')`
          : "none",
      }}
    >
      <Link href={"/"}>
        <img src={merchant.images.logo.url} alt="logo" className="logo" />
      </Link>
      <h1 className="merchant-name">{merchant.name}</h1>
      <Button leftIcon={<MailOutlined />} variant="solid" onClick={sendEmail}>
        Email
      </Button>
      <style jsx>{Styles}</style>
    </header>
  );
}
