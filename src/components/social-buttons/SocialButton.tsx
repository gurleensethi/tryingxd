import React, { FunctionComponent } from "react";
import { Box, Button, Theme, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => {
  return {
    button: {
      background: "white",
      display: "flex",
      justifyContent: "center",
      alignContent: "center",
      width: "100%",
    },
  };
});

interface Props {
  text: string;
  icon: React.ReactNode;
}

const SocialButton: FunctionComponent<Props> = ({ text, icon }) => {
  const styles = useStyles();

  return (
    <Button variant="contained" className={styles.button}>
      <Box
        borderRadius={4}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Box
          mr={2}
          display="flex"
          justifyContent="center"
          alignItems="center"
          py={1}
          px={0.5}
          flex="1"
        >
          {icon}
        </Box>
        <Box>{text}</Box>
      </Box>
    </Button>
  );
};

export default SocialButton;
