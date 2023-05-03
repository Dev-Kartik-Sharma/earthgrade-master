import React from "react";
import { Container, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useStaticQuery, graphql } from "gatsby";

const useStyles = makeStyles((theme) => ({
  heroSectionBG: {
    backgroundColor: theme.palette.secondary.main,
  },
  heroSectionFlex: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "75vh",
    gap: "2rem",
  },
  heroSectionImage: {
    display: "flex",
  },
  heroSectionText: {
    display: "flex",
    flexDirection: "column",
  },
}));

const HeroSection = () => {
  const classes = useStyles();

  const data = useStaticQuery(graphql`
    query {
      strapiHeroSection {
        heroSectionSubHeading {
          data {
            internal {
              content
            }
          }
        }
        heroSectionImage {
          url
        }
        heroSectionHeading {
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
      <div className={classes.heroSectionBG}>
        <Container>
          <div className={classes.heroSectionFlex}>
            <div className={classes.heroSectionImage}>
              <img src={data.strapiHeroSection.heroSectionImage.url} />
            </div>
            <div className={classes.heroSectionText}>
              <Typography variant="h1">
                {
                  data.strapiHeroSection.heroSectionHeading.data.internal
                    .content
                }
              </Typography>
              <Typography variant="subtitle1">
                {
                  data.strapiHeroSection.heroSectionSubHeading.data.internal
                    .content
                }
              </Typography>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default HeroSection;
