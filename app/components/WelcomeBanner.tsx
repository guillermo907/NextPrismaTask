import { Box } from "@mui/material";

type WelcomeBannerProps = {
  notesCount: number;
};

const WelcomeBanner: React.FC<WelcomeBannerProps> = ({ notesCount }) => {
  return (
    <Box>
      <h1>welcome, </h1>
      <p>you have {notesCount} notes waiting for you</p>
    </Box>
  );
};

export default WelcomeBanner;
