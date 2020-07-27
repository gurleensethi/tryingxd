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
import BulbIcon from "@material-ui/icons/EmojiObjects";
import { yellow, grey } from "@material-ui/core/colors";
import ProfessionalDevelopment from "../../images/professional_dev.png";
import CommuteConnectivity from "../../images/commute_connectivity.png";
import DiversityInclusion from "../../images/diversity_inclusion.png";
import HealthWellness from "../../images/health_wellness.png";
import LearningGrowth from "../../images/learning_growth.png";
import Neighborhood from "../../images/neighborhood.png";
import Recreation from "../../images/recreation.png";
import WorkBalance from "../../images/work_balance.png";

interface MenuList {
  name: string;
  image: string;
}

const menuItems: MenuList[] = [
  { name: "Professional Development", image: ProfessionalDevelopment },
  { name: "Diversity and Inclusion", image: DiversityInclusion },
  { name: "Learning and Growth", image: LearningGrowth },
  { name: "Recreation", image: Recreation },
  { name: "Neighborhood", image: Neighborhood },
  { name: "Work Life Balance", image: WorkBalance },
  { name: "Health and Wellness", image: HealthWellness },
  { name: "Commute and Connectivity", image: CommuteConnectivity },
];

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
  },
});

const HomePage: FunctionComponent = () => {
  const styles = useStyles();

  return (
    <Box>
      <AppBar>
        <Toolbar>
          <Typography variant="h6">Hello John</Typography>
        </Toolbar>
      </AppBar>
      <Toolbar />
      <Container>
        <Box boxShadow={4} mt={2} mb={4} p={2} borderRadius={4}>
          <Box display="flex" alignItems="center" mb={1}>
            <Box mr={0.5}>
              <BulbIcon htmlColor={yellow[700]} fontSize="default" />
            </Box>
            <Box fontSize={16} fontWeight="bold" component="h1" m={0}>
              Did you know
            </Box>
          </Box>
          <Box>
            Pittsburgh has recently been ranked 2nd most livable city in the US.
          </Box>
        </Box>
        <GridList>
          {menuItems.map((item) => (
            <GridListTile>
              <img
                src={item.image}
                alt="icon_image"
                className={styles.menuListImage}
              />
              <GridListTileBar key={12} title={item.name} />
            </GridListTile>
          ))}
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
            <Box borderRadius={4} p={2} boxShadow={4} position="relative">
              <img
                className={styles.testimonialListItemImage}
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                alt="placeholder"
              />
              <Box color={grey[700]} mt={8}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </Box>
            </Box>
          </ListItem>
          <ListItem className={styles.testimonialsListItem}>
            <Box borderRadius={4} p={2} boxShadow={4} position="relative">
              <img
                className={styles.testimonialListItemImage}
                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
                alt="placeholder"
              />
              <Box color={grey[700]} mt={8}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </Box>
            </Box>
          </ListItem>
          <ListItem className={styles.testimonialsListItem}>
            <Box borderRadius={4} p={2} boxShadow={4} position="relative">
              <img
                className={styles.testimonialListItemImage}
                src="https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                alt="placeholder"
              />
              <Box color={grey[700]} mt={8}>
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
