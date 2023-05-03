import React from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  productFlexStyle: {
    display: "flex",
    flexDirection: "column",
    gap: "0.2rem",
    cursor: "pointer",
    "&:hover .productTitleStyle": {
      color: theme.palette.info.main,
    },
    "&:hover .productImageStyle": {
      backgroundColor: "#F1F1F1",
      borderRadius: "50px",
    },
  },
}));

const ProductDisplayRound = ({ productImage, productTitle }) => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.productFlexStyle}>
        <div
          className="productImageStyle"
          style={{
            width: "100px",
            height: "110px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img src={productImage} />
        </div>
        <div className="productTitleStyle" style={{ textAlign: "center" }}>
          {productTitle}
        </div>
      </div>
    </>
  );
};

export default ProductDisplayRound;
