import reactIcon from "../../assets/react.svg";
import viteIcon from "../../assets/vite.svg";
import { Typography, Link, Box } from "@mui/material";

const Footer = () => {
  return (
    <>
      <Box component="section" sx={{ p: 2 }}>
        <Typography variant="body1" gutterBottom>
          Made with ❤️ by{" "}
          <Link
            href="https://github.com/jcari-dev"
            target="_blank"
            underline="none"
          >
            jcari-dev
          </Link>{" "}
          and{" "}
          <Link
            href="https://github.com/jzhupan"
            target="_blank"
            underline="none"
          >
            jzhupan
          </Link>
        </Typography>
      </Box>
    </>
  );
};

export default Footer;
