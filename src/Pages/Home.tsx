import { useContext } from "react";
import { AuthContext } from "../Context/ContextProvider";

const Home = () => {
  const Users = useContext(AuthContext);
  return (
    <>
      <div>
        <p>Welcome {Users.users?.email}</p>
        <p>{Users.users?.password}</p>
      </div>
    </>
  );
};

export default Home;
