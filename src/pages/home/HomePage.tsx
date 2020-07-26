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
} from "@material-ui/core";
import BulbIcon from "@material-ui/icons/EmojiObjects";
import { yellow } from "@material-ui/core/colors";
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
        <Box fontSize={20} fontWeight="fontWeightBold">
          Testimonials
        </Box>
      </Container>
    </Box>
  );
};

export default HomePage;
