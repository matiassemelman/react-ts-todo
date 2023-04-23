import { useState } from "react";
import { UserInterface } from "../../interfaces/UserInterface";

const tempUser: UserInterface = {
  uid: "12",
  name: "Adrian",
  email: "asda@gmail.com",
};
export const User = () => {
  const [user, setUser] = useState<UserInterface>({
    uid: "",
    name: "",
    email: "",
  });

  const login = () => {
    setUser({
      uid: "1",
      name: "Adrian",
      email: "matias@gmail.com",
    });
  };

  return (
    <div className="mt-5">
      <h3 className="text-2xl font-bold ">User: useState</h3>
      <button className="bg-red-700 text-white p-3" onClick={login}>
        Login
      </button>
      {user.name === "" ? (
        <pre>Must login!</pre>
      ) : (
        <pre>{JSON.stringify(user)}</pre>
      )}
    </div>
  );
};
