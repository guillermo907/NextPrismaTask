"use client";

import Image from "next/image";
import { signOut } from "next-auth/react";
import { Box, Stack, Button } from "@mui/material";
import { User } from "@/types/User";

type SettingPageProps = {
  user: User;
};
const SettingsPage: React.FC<SettingPageProps> = ({ user }) => {
  return (
    <Stack alignItems={"center"}>
      <Image
        src={
          user?.image ||
          "https://images.unsplash.com/photo-1607336450706-353c1a64a0c4?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
        alt={user?.name + "pic"}
        width={300}
        height={300}
        style={{ borderRadius: "50%", objectFit: "cover" }}
      />
      <h2>Sesion activa, Bienvenido {user?.name}</h2>
      <Button variant="contained" color="error" onClick={() => signOut()}>
        Sign out
      </Button>
    </Stack>
  );
};

export default SettingsPage;
