import {
  Box,
  Container,
  Grid,
  Typography,
  Divider,
  Stack,
} from "@mui/material";
import {
  Facebook,
  Instagram,
  Twitter,
  LinkedIn,
  YouTube,
} from "@mui/icons-material";

const Footer = () => {
  return (
    <Box
      sx={{
        borderTop: "0.5px solid rgba(255, 255, 255, 0.25)",
        backgroundSize: "300%",
        p: 5,
      }}
    >
      <Stack
        direction={"row"}
        justifyContent="space-evenly"
        alignItems={"center"}
        maxWidth={"false"}
        spacing={3}
        flexWrap="wrap"
      >
        <div>
          <Typography variant="h6" gutterBottom>
            Column1
          </Typography>
          {/* Add your content here */}
        </div>
        <Divider
          orientation="vertical"
          flexItem
          /* sx={{ bgcolor: "primary.main" }} */
        />
        <div>
          <Typography variant="h6" gutterBottom>
            Column2
          </Typography>
          {/* Add your content here */}
        </div>
        <Divider
          orientation="vertical"
          flexItem
          /* sx={{ bgcolor: "primary.main" }} */
        />
        <div>
          <Stack direction={"row"} spacing={2}>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedIn />
            </a>
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <YouTube />
            </a>
          </Stack>
        </div>
      </Stack>
    </Box>
  );
};

export default Footer;
