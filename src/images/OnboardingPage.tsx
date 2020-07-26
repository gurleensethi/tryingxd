import React, { FunctionComponent } from "react";
import { Box, Button, useTheme } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const OnboardingPage: FunctionComponent = () => {
  const theme = useTheme();
  const history = useHistory();

  const handleClick = React.useCallback(() => {}, []);

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      p={2}
      height="100%"
    >
      <Box flex="1"></Box>
      <Box fontSize={32}>44</Box>
      <Box
        color={theme.palette.primary.main}
        mb={4}
        fontSize={16}
        fontWeight="fontWeightLight"
        px={4}
        mt={1}
      >
        Connections Welcome you to the City of Bridges.
      </Box>
      <Button variant="contained" color="primary" fullWidth>
        <Box p={1}>Let's go</Box>
      </Button>
    </Box>
  );
};

export default OnboardingPage;
