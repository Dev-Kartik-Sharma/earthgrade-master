import React from "react";
import { makeStyles } from "@mui/styles";
import heartIcon from "../assets/images/heart.png";
import StyledButton from "./StyledButton";
import { Typography } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  cardBG: {
    display: "flex",
    width: "32%",
    flexDirection: "column",
    background: "#FFFFFF",
    gap: "1rem",
    padding: "0 1rem",
    borderRadius: "10px",
    boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.25)",
    paddingBottom: "1rem",
  },
  imageBG: {
    display: "flex",
    flexDirection: "column",
    background: "#F1F1F1",
    gap: "0.5rem",
    boxShadow: "0px 2px 6px rgba(151, 172, 198, 0.25)",
    borderRadius: "10px",
    marginTop: "-20px",
    paddingBottom: "2rem",
  },
  wishlistIcon: {
    display: "flex",
    justifyContent: "flex-end",
    padding: "0.5rem",
    cursor: "pointer",
  },
  productImageStyle: {
    display: "flex",
    justifyContent: "center",
  },
  cardText: {
    display: "flex",
    justifyContent: "center",
    gap: "1rem",
    alignItems: "center",
    flexDirection: "column",
    textAlign: "center",
  },
  buttonGroup: {
    display: "Flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "1rem",
    textAlign: "center",
  },
}));

const ProductCard = ({
  productImage,
  productHeading,
  productSubHeading,
  productPrice,
}) => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.cardBG}>
        <div className={classes.imageBG}>
          <div className={classes.wishlistIcon}>
            <img src={heartIcon} />
          </div>
          <div className={classes.productImageStyle}>
            <img src={productImage} width="100%" />
          </div>
        </div>
        <div className={classes.cardText}>
          <Typography variant="h3"> {productHeading} </Typography>
          <Typography variant="subtitle2"> {productSubHeading} </Typography>
          <div className={classes.buttonGroup}>
            <Typography variant="h4"> {productPrice} </Typography>
            <StyledButton buttonText="BUY NOW" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
