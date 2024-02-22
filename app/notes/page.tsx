import Card from "../components/Card";
import { PrismaClient } from "@prisma/client";
import { getServerSession } from "next-auth/next";
import { options } from "../api/auth/[...nextauth]/options";
import TaskInput from "../components/TaskInput";
import { revalidatePath } from "next/cache";

const prisma = new PrismaClient();

const Notes = async () => {
  const session = await getServerSession(options);
  const user = session?.user;

  const userInDb = await prisma.user.findUnique({
    where: { email: user?.email as string },
  });

  const fetchNotes = async () => {
    const fetchedNotes = await prisma.task.findMany({
      where: {
        authorId: userInDb?.id,
      },
    });
    return fetchedNotes;
  };

  const postNote = async (title: string, content: string) => {
    "use server";
    await prisma.task.create({
      data: {
        title: title,
        content: content,
        authorId: userInDb?.id as number,
      },
    });
    revalidatePath("/notes");
  };

  const updateNote = async (id: number, title: string, content: string) => {
    "use server";
    console.log("Recieved id: ", id);
    await prisma.task.update({
      where: {
        id: id,
      },
      data: {
        title: title,
        content: content,
      },
    });
    revalidatePath("/notes");
  };

  const deleteNote = async (title: string) => {
    "use server";
    const tasksToDelete = await prisma.task.findMany({
      where: {
        title: title,
      },
    });

    for (const task of tasksToDelete) {
      await prisma.task.delete({
        where: {
          id: task.id,
        },
      });
    }
    revalidatePath("/notes");
  };

  const renderNotes = async () => {
    const notes = await fetchNotes();
    return notes.map((note) => {
      return (
        <Card note={note} deleteNote={deleteNote} updateNote={updateNote} />
      );
    });
  };

  return (
    <div className="page">
      <h2>Notes</h2>
      <div
        style={{
          display: "grid",
          padding: "15px",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: "10px",
        }}
      >
        {renderNotes()}
      </div>
      <TaskInput postNote={postNote} />
    </div>
  );
};

export default Notes;
