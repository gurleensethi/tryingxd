import React, { FunctionComponent } from "react";
import { Box, makeStyles } from "@material-ui/core";
import SocialButton from "../../components/social-buttons/SocialButton";
import EmailIcon from "../../images/email.png";
import { grey } from "@material-ui/core/colors";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  container: {},
  bgImage: {
    position: "absolute",
    zIndex: -1,
    overflow: "hidden",
    height: "100%",
    width: "100%",
    objectFit: "cover",
  },
});

const AuthenticationPage: FunctionComponent = () => {
  const styles = useStyles();
  const history = useHistory();

  const handleAuth = React.useCallback(() => {
    history.push("/onboarding");
  }, [history]);

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height="100%"
      className={styles.container}
      overflow="hidden"
    >
      {/* <img
        src="https://thebase.org/wp-content/uploads/2018/07/BASE-Pittsburgh-Group-Widest-Shot.jpg-870x580.jpeg"
        className={styles.bgImage}
        alt="background"
      /> */}
      <Box fontSize={40} fontWeight="bold" mb={2}>
        Welcome
      </Box>
      <Box fontSize={16} mb={8}>
        Please login or sign up to continue
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
            onClick={handleAuth}
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
            onClick={handleAuth}
          />
        </Box>
        <Box mb={2}>
          <SocialButton
            text="Login with LinkedIn"
            icon={
              <img
                src="https://cdn4.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-linkedin-circle-512.png"
                alt="google"
                height="24px"
              />
            }
            onClick={handleAuth}
          />
        </Box>
        <Box display="flex" justifyContent="center" alignItems="center" mb={2}>
          <Box height="1px" bgcolor={grey[500]} flex="1" />
          <Box mx={1} color={grey[500]}>
            OR
          </Box>
          <Box height="1px" bgcolor={grey[500]} flex="1" />
        </Box>
        <Box>
          <SocialButton
            text="Login with Email"
            icon={<img src={EmailIcon} alt="google" height="24px" />}
            onClick={handleAuth}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default AuthenticationPage;
