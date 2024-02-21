"use client";

import { CircularProgress } from "@mui/material";
import { Stack } from "@mui/material";

export default function Loading() {
  return (
    <Stack
      maxHeight={"false"}
      maxWidth={"false"}
      justifyContent={"center"}
      alignItems={"center"}
      sx={{ backgroundColor: "primary.main" }}
    >
      <CircularProgress color="secondary" size={5} />
      <h3>Loading.....</h3>
    </Stack>
  );
}
