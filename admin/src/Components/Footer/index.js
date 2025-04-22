import { Typography } from "antd";
import "./index.css";
import { HeartFilled, GithubFilled } from "@ant-design/icons";
import Privacy from "../Privacy";
import Termsnuse from "../Termsnuse";

const Footer = () => {
  return (
    <div className="footer">
      <div className="rulesbook">
        <Typography.Link href="tel:+123456789">+123456789</Typography.Link>
        <Privacy />
        <Termsnuse />
      </div>
      <div className="madeby">
        <Typography.Title level={5} style={{ fontWeight: 500 }}>
          Made with <HeartFilled style={{ color: "red" }} /> by justin
        </Typography.Title>
        <Typography.Link
          href="https://github.com/justin444-png"
          target="_blank"
        >
          <GithubFilled style={{ color: "black", fontSize: 25 }} />
        </Typography.Link>
      </div>
    </div>
  );
};

export default Footer;
