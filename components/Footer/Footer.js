import Link from "next/link";
import { InstagramOutlined } from "@ant-design/icons";
import Styles from "./FooterStyles";

export default function Footer() {
  return (
    <footer>
      <div className="socials">
        <div className="insta">
          <InstagramOutlined className="icon" />
          <Link
            className="link"
            href={"https://www.instagram.com/vyreca.creations"}
          >
            vyreca.creations
          </Link>
        </div>
      </div>
      <style jsx>{Styles}</style>
    </footer>
  );
}
