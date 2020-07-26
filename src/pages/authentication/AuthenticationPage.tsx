import React, { FunctionComponent } from "react";
import { Box } from "@material-ui/core";
import SocialButton from "../../components/social-buttons/SocialButton";

const AuthenticationPage: FunctionComponent = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height="100%"
    >
      <h1>Welcome</h1>
      <Box mb={4}>
        <h3>Please login or sign up to continue...</h3>
      </Box>
      <Box display="flex" flexDirection="column">
        <Box mb={2}>
          <SocialButton
            text="Login with Google"
            icon={
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"
                alt="google"
                height="24px"
              />
            }
          />
        </Box>
        <Box mb={2}>
          <SocialButton
            text="Login with Facebook"
            icon={
              <img
                src="https://image.flaticon.com/icons/png/512/124/124010.png"
                alt="google"
                height="24px"
              />
            }
          />
        </Box>
        <Box>
          <SocialButton
            text="Login with LinkedIn"
            icon={
              <img
                src="https://cdn4.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-linkedin-circle-512.png"
                alt="google"
                height="24px"
              />
            }
          />
        </Box>
      </Box>
    </Box>
  );
};

export default AuthenticationPage;
