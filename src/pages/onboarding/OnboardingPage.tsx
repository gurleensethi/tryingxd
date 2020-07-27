import React, { FunctionComponent } from "react";
import { Box, Button, useTheme, List } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import OnboardingPlaceholder from "../../images/onboarding_placeholder.png";

const OnboardingPage: FunctionComponent = () => {
  const theme = useTheme();
  const history = useHistory();

  const handleClick = React.useCallback(() => {
    history.push("/home");
  }, [history]);

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      p={2}
      height="100%"
    >
      <Box>
        <img
          src={OnboardingPlaceholder}
          alt="placeholder"
          style={{ objectFit: "fill" }}
        />
      </Box>
      <Box fontSize={40}>44</Box>
      <Box
        color={theme.palette.primary.main}
        mb={4}
        fontSize={16}
        fontWeight="fontWeightLight"
        px={4}
        mt={1}
        textAlign="center"
      >
        Connections Welcome you to the City of Bridges.
      </Box>
      <Button
        variant="contained"
        color="primary"
        fullWidth
        onClick={handleClick}
      >
        <Box p={1}>Let's go</Box>
      </Button>
    </Box>
  );
};

export default OnboardingPage;
