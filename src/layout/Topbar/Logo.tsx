import { Typography } from "@mui/material";

interface LogoProps {
  label: string;
}

const Logo: React.FC<LogoProps> = ({ label }) => {
  return (
    <Typography
      variant="h6"
      noWrap
      component="a"
      href="/"
      sx={{
        mr: 2,
        display: { xs: "none", md: "flex" },
        fontFamily: "monospace",
        fontWeight: 700,
        letterSpacing: ".3rem",
        color: "inherit",
        textDecoration: "none",
      }}
    >
      {label}
    </Typography>
  );
};

export default Logo;
