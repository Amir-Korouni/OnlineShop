import { useContext } from "react";
import { AuthContext } from "../Context/ContextProvider";

const Home = () => {
  const users = useContext(AuthContext);
  console.log("HOME:", users?.users);
  return (
    <>
      <div>
        <p>Welcome {users?.users?.email}</p>
        <p>{users?.users?.password}</p>
      </div>
    </>
  );
};

export default Home;
