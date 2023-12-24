import { useState } from "react";
import { UserAuth } from "../context/AuthContext";
import { serverTimestamp, addDoc, collection } from "firebase/firestore";
import { db } from "../Firebase";

function Sendmsg() {
  const [value, setValue] = useState("");
  const { currentUser } = UserAuth();

  const handleSendmsg = async (e) => {
    e.preventDefault();

    if (value.trim() === "") {
      alert("Enter a valid message");
      return;
    }

    try {
      const { uid, displayName, photoURL } = currentUser;
      await addDoc(collection(db, "messages"), {
        chatText: value,
        name: displayName,
        avatar: photoURL,
        createdAt: serverTimestamp(),
        uid: uid,
      });
      console.log(db);
    } catch (error) {
      console.log(error);
    }

    setValue("");
  };

  return (
    <div className="fixed bottom-0 w-full py-1 bg-[#1d232a] shadow lg">
      <form onSubmit={handleSendmsg} className="flex containerWrap">
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          type="text"
          className="flex-row w-full row-span-6 font-serif text-xl text-black bg-white rounded-s-2xl input focus:outline-none"
          id=""
        />
        <button
          type="submit"
          className="w-auto h-12 px-6 ml-1 text-black bg-[#25d366] rounded-xl "
        >
          Send
        </button>
      </form>
    </div>
  );
}

export default Sendmsg;
