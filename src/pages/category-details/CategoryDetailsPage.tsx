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
} from "@material-ui/core";
import { RouteComponentProps, useHistory } from "react-router-dom";
import categories from "../../data/categories";
import InfoBox from "../../components/info-box/InfoBox";
import ArrowBack from "@material-ui/icons/ArrowBack";

export const CategoryDetailsPage: FunctionComponent<RouteComponentProps<{
  categoryId: string;
}>> = ({ match }) => {
  const history = useHistory();

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
            <ListItem>
              <Button variant="contained" fullWidth color="primary">
                <Box p={1} fontSize={16}>
                  {option.name}
                </Box>
              </Button>
            </ListItem>
          ))}
        </List>
      </Container>
    </Box>
  );
};

export default CategoryDetailsPage;
