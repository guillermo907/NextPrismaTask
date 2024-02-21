import Image from "next/image";
import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { getServerSession } from "next-auth";
import { options } from "./api/auth/[...nextauth]/options";

import WelcomeBanner from "./components/WelcomeBanner";

const prisma = new PrismaClient();

export default async function Home() {
  const session = await getServerSession(options);
  const user = session?.user;

  const userInDb = await prisma.user.findUnique({
    where: { email: user?.email as string },
  });

  const fetchNotesCount = async () => {
    const notesCount = await prisma.task.count({
      where: {
        authorId: userInDb?.id,
      },
    });
    return notesCount;
  };
  const notesCount = await fetchNotesCount();

  return (
    <div className="home-page">
      <WelcomeBanner notesCount={notesCount} />
    </div>
  );
}
