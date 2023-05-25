import { Link } from "react-router-dom";
import "../NavbarWithBtn/NavbarWithBtn.css";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const NavbarWithBtn = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed" className="app-bar">
          <Toolbar>
            <Typography
              className="header"
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
            >
              <Link className="links" to="/">
                <span className="the">The</span>
                <span className="title">Siren</span>
              </Link>
            </Typography>
            <Button color="inherit">Get Started</Button>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default NavbarWithBtn;
