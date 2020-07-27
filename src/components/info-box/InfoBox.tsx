import React, { FunctionComponent } from "react";
import { Box } from "@material-ui/core";
import { yellow } from "@material-ui/core/colors";
import BulbIcon from "@material-ui/icons/EmojiObjects";

interface Props {
  text: string;
}

const InfoBox: FunctionComponent<Props> = ({ text }) => {
  return (
    <Box boxShadow={4} mt={2} mb={4} p={2} borderRadius={4}>
      <Box display="flex" alignItems="center" mb={1}>
        <Box mr={0.5}>
          <BulbIcon htmlColor={yellow[700]} fontSize="default" />
        </Box>
        <Box fontSize={16} fontWeight="bold" component="h1" m={0}>
          Did you know
        </Box>
      </Box>
      <Box>{text}</Box>
    </Box>
  );
};

export default InfoBox;
