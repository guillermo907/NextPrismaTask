"use client";
import Link from "next/link";
import Image from "next/image";
import { useSession } from "next-auth/react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Stack } from "@mui/material";
import { BorderColor, Brightness4, Brightness7 } from "@mui/icons-material";

function Header(props: any) {
  const { data: session, status } = useSession();
  console.log(session);

  return (
    <Box padding="10px 0px">
      <AppBar
        position="static"
        color="transparent"
        enableColorOnDark
        sx={{
          boxShadow: "none",
        }}
      >
        <Toolbar
          className="toolbar-container"
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Stack className="left" alignContent={"center"} direction={"row"}>
            <IconButton onClick={() => props.toggleDarkMode()}>
              {props.darkMode ? <Brightness7 /> : <Brightness4 />}
            </IconButton>
          </Stack>
          <Stack
            className="right"
            spacing={3}
            alignItems="center"
            direction={"row"}
          >
            <Link href="/">
              <Button color={props.darkMode ? "secondary" : "primary"}>
                Home
              </Button>
            </Link>
            <Link href="/notes">
              <Button color={props.darkMode ? "secondary" : "primary"}>
                Notes
              </Button>
            </Link>
            <Link href="/settings">
              {session ? (
                <Image
                  src={
                    session?.user?.image ||
                    "https://images.unsplash.com/photo-1607336450706-353c1a64a0c4?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  }
                  alt={session?.user?.name + "pic"}
                  width={50}
                  height={50}
                  style={{ borderRadius: "50%", objectFit: "cover" }}
                />
              ) : (
                <AccountCircleIcon sx={{ fontSize: "50px" }} />
              )}
            </Link>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
