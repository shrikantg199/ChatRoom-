import { UserAuth } from "../context/AuthContext";
import { IoLogoWhatsapp } from "react-icons/io5";
function Navbar() {
  const { currentUser, logout } = UserAuth();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="flex justify-between containerWrap navbar bg-base-300">
        <div className="p-6 ml-4 font-serif text-xl">
          <IoLogoWhatsapp className="mr-2 text-3xl font-bold hover:text-green-500" />
          SwiftChat
        </div>
        <div className="text-2xl "></div>
        {currentUser ? (
          <button className="btn btn-outline btn-error" onClick={handleLogout}>
            Log Out
          </button>
        ) : (
          ""
        )}
      </div>
    </>
  );
}

export default Navbar;
