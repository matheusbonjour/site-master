import { Box } from "@mui/material";
import Footer from "./Footer";
import Topbar from "./Topbar";

const Layout: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <>
      <Topbar />
      <Box component="main" sx={{ flexGrow: 1, p: 3, pt: 10, display: "flex" }}>
        {children}
      </Box>
      <Footer />
    </>
  );
};

export default Layout;
