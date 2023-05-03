import React from "react";
import {
  AppBar,
  Box,
  Container,
  TextField,
  InputAdornment,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Search } from "@mui/icons-material";
import { useStaticQuery, graphql, Link } from "gatsby";
import avatar from "../assets/images/avatar.png";
import cart from "../assets/images/cart.png";

const useStyles = makeStyles((theme) => ({
  navBarContainerStyle: {
    display: "flex",
    justifyContent: "space-between",
    padding: "1rem 5rem",
  },
  navBarMenuContainerStyle: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: "2rem",
  },
  menuStyle: {
    color: "#FFF2D9",
    fontWeight: "300",
    marginRight: "1rem",
    cursor: "pointer",
    "&:hover": {
      fontWeight: "600",
    },
  },
  searchFieldStyle: {
    background: "#FFFFFF",
    border: "1px solid rgba(154, 200, 183, 0.3)",
    borderRadius: "8px",
    height: "45px",
  },
  iconStyle: {
    display: "flex",
    gap: "1.5rem",
    cursor: "pointer",
  },
}));

const NavBar = () => {
  const classes = useStyles();

  const data = useStaticQuery(graphql`
    query {
      strapiNavbar {
        logo {
          id
          url
        }
        navBarMenu {
          menu
        }
      }
    }
  `);

  return (
    <>
      <AppBar position="static">
        <Container>
          <Box className={classes.navBarContainerStyle}>
            <Box>
              <img src={data.strapiNavbar.logo.url} />
            </Box>
            <Box className={classes.navBarMenuContainerStyle}>
              <div>
                {data.strapiNavbar.navBarMenu.map((list) => {
                  return <Link className={classes.menuStyle}>{list.menu}</Link>;
                })}
              </div>
              <div>
                <TextField
                  id="filled-search"
                  label="Search"
                  type="search"
                  variant="filled"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment>
                        <Search sx={{ marginBottom: "10px" }} />
                      </InputAdornment>
                    ),
                  }}
                  className={classes.searchFieldStyle}
                />
              </div>
              <div className={classes.iconStyle}>
                <img src={avatar} />
                <img src={cart} />
              </div>
            </Box>
          </Box>
        </Container>
      </AppBar>
    </>
  );
};

export default NavBar;
