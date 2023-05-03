import React from "react";
import ProductCard from "./ProductCard";
import { Container, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useStaticQuery, graphql } from "gatsby";

const useStyles = makeStyles((theme) => ({
  sectionBG: {
    backgroundColor: "#FFF2D9",
    padding: "3rem 2rem",
    paddingBottom: "5rem",
  },
  sectionFlex: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "4rem",
  },
  sectionHeading: {
    textAlign: "center",
    width: "550px",
  },
  cardsFlex: {
    display: "flex",
    justifyContent: "space-between",
  },
}));

const ProductCardsDisplaySection = () => {
  const classes = useStyles();

  const data = useStaticQuery(graphql`
    query {
      strapiProductsDisplaySection {
        sectionHeading {
          data {
            internal {
              content
            }
          }
        }
        productTitle {
          data {
            internal {
              content
            }
          }
        }
        productPrice {
          data {
            internal {
              content
            }
          }
        }
        productImage {
          url
        }
        productDescription {
          data {
            internal {
              content
            }
          }
        }
        buttonText {
          data {
            internal {
              content
            }
          }
        }
      }
    }
  `);

  return (
    <>
      <div className={classes.sectionBG}>
        <Container>
          <div className={classes.sectionFlex}>
            <div className={classes.sectionHeading}>
              <Typography variant="h2">
                {
                  data.strapiProductsDisplaySection.sectionHeading.data.internal
                    .content
                }
              </Typography>
            </div>
            <div className={classes.cardsFlex}>
              <ProductCard
                productImage={
                  data.strapiProductsDisplaySection.productImage.url
                }
                productHeading={
                  data.strapiProductsDisplaySection.productTitle.data.internal
                    .content
                }
                productSubHeading={
                  data.strapiProductsDisplaySection.productDescription.data
                    .internal.content
                }
                productPrice={
                  data.strapiProductsDisplaySection.productPrice.data.internal
                    .content
                }
              />
              <ProductCard
                productImage={
                  data.strapiProductsDisplaySection.productImage.url
                }
                productHeading={
                  data.strapiProductsDisplaySection.productTitle.data.internal
                    .content
                }
                productSubHeading={
                  data.strapiProductsDisplaySection.productDescription.data
                    .internal.content
                }
                productPrice={
                  data.strapiProductsDisplaySection.productPrice.data.internal
                    .content
                }
              />
              <ProductCard
                productImage={
                  data.strapiProductsDisplaySection.productImage.url
                }
                productHeading={
                  data.strapiProductsDisplaySection.productTitle.data.internal
                    .content
                }
                productSubHeading={
                  data.strapiProductsDisplaySection.productDescription.data
                    .internal.content
                }
                productPrice={
                  data.strapiProductsDisplaySection.productPrice.data.internal
                    .content
                }
              />
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default ProductCardsDisplaySection;
