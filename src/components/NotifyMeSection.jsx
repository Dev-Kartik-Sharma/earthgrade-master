import React from "react";
import ProductDisplayRound from "./ProductDisplayRound";
import StyledButton from "./StyledButton";
import { Container, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useStaticQuery, graphql } from "gatsby";

const useStyles = makeStyles((theme) => ({
  sectionBG: {
    padding: "4rem 3rem",
  },
  sectionFlex: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "3rem",
  },
  displayProducts: {
    display: "flex",
    gap: "3rem",
    margin: "1rem 0",
  },
  sectionContentBG: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "4rem",
    padding: "2rem",
    backgroundColor: "#F1F1F1",
    width: "90vw",
  },
  sectionImage: {
    display: "flex",
    width: "30%",
  },
  sectionContent: {
    display: "flex",
    flexDirection: "column",
    width: "45%",
    gap: "1rem",
  },
}));

const NotifyMeSection = () => {
  const classes = useStyles();

  const data = useStaticQuery(graphql`
    query {
      strapiNotifymeSection {
        notifymeSectionImage {
          url
        }
        sectionHeading {
          data {
            internal {
              content
            }
          }
        }
        sectionSubHeading {
          data {
            internal {
              content
            }
          }
        }
        sectionTitle {
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
      allStrapiProductsDisplayCircular {
        nodes {
          productImage {
            url
          }
          productTitle {
            data {
              internal {
                content
              }
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
            <div className={classes.displayProducts}>
              {data.allStrapiProductsDisplayCircular.nodes.map((product) => {
                return (
                  <ProductDisplayRound
                    productImage={product.productImage.url}
                    productTitle={product.productTitle.data.internal.content}
                  />
                );
              })}
            </div>
            <div className={classes.sectionContentBG}>
              <div className={classes.sectionImage}>
                <img
                  src={data.strapiNotifymeSection.notifymeSectionImage.url}
                />
              </div>
              <div className={classes.sectionContent}>
                <Typography variant="h4">
                  {
                    data.strapiNotifymeSection.sectionTitle.data.internal
                      .content
                  }
                </Typography>
                <Typography variant="h2">
                  {
                    data.strapiNotifymeSection.sectionHeading.data.internal
                      .content
                  }
                </Typography>
                <Typography variant="subtitle1">
                  {
                    data.strapiNotifymeSection.sectionSubHeading.data.internal
                      .content
                  }
                </Typography>
                <StyledButton
                  buttonText={
                    data.strapiNotifymeSection.buttonText.data.internal.content
                  }
                />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default NotifyMeSection;
