import { getServerSession } from "next-auth/next";
import { options } from "../api/auth/[...nextauth]/options";
import SettingsPage from "../components/SettingsPage";

const Settings = async () => {
  const session = await getServerSession(options);
  const user = session?.user;

  return (
    <div className="settings page">
      {session ? (
        <div>
          <SettingsPage user={user} />
        </div>
      ) : (
        <h2>Sesion no iniciada</h2>
      )}
    </div>
  );
};

export default Settings;
