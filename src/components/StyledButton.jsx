import React from "react";
import { styled } from "@mui/styles";

const Button = styled("button")({
  backgroundColor: "#D68328",
  color: "#FFFFFF",
  borderRadius: "18px",
  minHeight: "40px",
  cursor: "pointer",
  width: "140px",
});

const StyledButton = ({ buttonText }) => {
  return <Button> {buttonText} </Button>;
};

export default StyledButton;
