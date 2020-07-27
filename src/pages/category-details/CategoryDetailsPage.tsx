import React, { FunctionComponent } from "react";
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  Container,
  Button,
  List,
  ListItem,
  IconButton,
  makeStyles,
} from "@material-ui/core";
import { RouteComponentProps, useHistory } from "react-router-dom";
import categories from "../../data/categories";
import InfoBox from "../../components/info-box/InfoBox";
import ArrowBack from "@material-ui/icons/ArrowBack";

const useStyles = makeStyles({
  galleryImages: {
    display: "flex",
    overflowX: "scroll",
  },
  galleryImageItem: {
    height: 200,
    marginRight: 16,
  },
  iconImages: {
    display: "flex",
    flexWrap: "wrap",
  },
  iconImageItem: {
    height: 80,
  },
});

export const CategoryDetailsPage: FunctionComponent<RouteComponentProps<{
  categoryId: string;
}>> = ({ match }) => {
  const history = useHistory();
  const styles = useStyles();

  const {
    params: { categoryId },
  } = match;

  const category = categories[categoryId];

  const handleGoBack = React.useCallback(() => {
    history.goBack();
  }, [history]);

  if (!category) {
    throw new Error(`Category with id ${categoryId} not found`);
  }

  return (
    <Box>
      <AppBar>
        <Toolbar>
          <IconButton onClick={handleGoBack}>
            <ArrowBack htmlColor="white" />
          </IconButton>
          <Typography variant="h6">{category.name}</Typography>
        </Toolbar>
      </AppBar>
      <Toolbar />
      <Container>
        <InfoBox text={category.description} />
        <List>
          {category.options.map((option) => (
            <ListItem key={option.name}>
              <Button
                variant="contained"
                fullWidth
                color="primary"
                onClick={() => {
                  if (option.category) {
                    history.push(`/category/${option.category}`);
                  }
                }}
              >
                <Box p={1} fontSize={16}>
                  {option.name}
                </Box>
              </Button>
            </ListItem>
          ))}
        </List>
        <List className={styles.galleryImages}>
          {category.galleryImages &&
            category.galleryImages.map((image) => (
              <img
                src={image}
                alt="gallery"
                className={styles.galleryImageItem}
              />
            ))}
        </List>
        <List className={styles.iconImages}>
          {category.iconImages &&
            category.iconImages.map((image) => (
              <img src={image} alt="gallery" className={styles.iconImageItem} />
            ))}
        </List>
      </Container>
    </Box>
  );
};

export default CategoryDetailsPage;
