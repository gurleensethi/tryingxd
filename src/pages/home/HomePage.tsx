import React, { FunctionComponent } from "react";
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  Container,
  makeStyles,
  GridList,
  GridListTile,
  GridListTileBar,
  Button,
  List,
  ListItem,
} from "@material-ui/core";
import { grey } from "@material-ui/core/colors";
import { useHistory } from "react-router-dom";
import InfoBox from "../../components/info-box/InfoBox";
import categories from "../../data/categories";

const useStyles = makeStyles({
  menuListItem: {},
  menuListImage: {},
  testimonialsList: {
    display: "flex",
    flexDirection: "row",
    overflowX: "scroll",
    paddingTop: "64px",
  },
  testimonialListItemImage: {
    height: 120,
    width: 120,
    borderRadius: "50%",
    objectFit: "cover",
    position: "absolute",
    top: -60,
    left: 0,
    right: 0,
    marginLeft: "auto",
    marginRight: "auto",
    boxShadow: "2px 2px 4px grey",
  },
  testimonialsListItem: {
    minWidth: "80%",
    display: "flex",
  },
});

const HomePage: FunctionComponent = () => {
  const styles = useStyles();
  const history = useHistory();

  return (
    <Box>
      <AppBar>
        <Toolbar>
          <Typography variant="h6">Hello John</Typography>
        </Toolbar>
      </AppBar>
      <Toolbar />
      <Container>
        <InfoBox text="Pittsburgh has recently been ranked 2nd most livable city in the US." />
        <GridList>
          {Object.keys(categories)
            .filter((key) => categories[key].isPrimary)
            .map((key) => {
              const category = categories[key];
              return (
                <GridListTile key={key}>
                  <img
                    src={category.image}
                    alt="icon_image"
                    className={styles.menuListImage}
                    onClick={() => history.push(`/category/${key}`)}
                  />
                  <GridListTileBar key={12} title={category.name} />
                </GridListTile>
              );
            })}
        </GridList>
        <Box my={4}>
          <Button variant="contained" fullWidth color="primary">
            <Box p={1} fontSize={16}>
              Compare Other Cities
            </Box>
          </Button>
        </Box>
        <Box fontSize={20} fontWeight="fontWeightBold" mb={2}>
          Testimonials
        </Box>
        <List className={styles.testimonialsList}>
          <ListItem className={styles.testimonialsListItem}>
            <Box
              borderRadius={4}
              p={2}
              boxShadow={4}
              position="relative"
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
            >
              <img
                className={styles.testimonialListItemImage}
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                alt="placeholder"
              />
              <Box
                mt={7}
                fontSize={20}
                color={grey[900]}
                mb={1}
                fontWeight={500}
              >
                Jessica Moore
              </Box>
              <Box color={grey[700]}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </Box>
            </Box>
          </ListItem>
          <ListItem className={styles.testimonialsListItem}>
            <Box
              borderRadius={4}
              p={2}
              boxShadow={4}
              position="relative"
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
            >
              <img
                className={styles.testimonialListItemImage}
                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
                alt="placeholder"
              />
              <Box
                mt={7}
                fontSize={20}
                color={grey[900]}
                mb={1}
                fontWeight={500}
              >
                Rob Martin
              </Box>
              <Box color={grey[700]}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </Box>
            </Box>
          </ListItem>
          <ListItem className={styles.testimonialsListItem}>
            <Box
              borderRadius={4}
              p={2}
              boxShadow={4}
              position="relative"
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
            >
              <img
                className={styles.testimonialListItemImage}
                src="https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                alt="placeholder"
              />
              <Box
                mt={7}
                fontSize={20}
                color={grey[900]}
                mb={1}
                fontWeight={500}
              >
                Eve
              </Box>
              <Box color={grey[700]}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </Box>
            </Box>
          </ListItem>
        </List>
      </Container>
    </Box>
  );
};

export default HomePage;
