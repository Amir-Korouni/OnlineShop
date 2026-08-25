import { useContext } from "react";
import { AuthContext } from "../Context/Context";

const Home = () => {
  const users = useContext(AuthContext);
  return (
    <>
      <div>
        <p>{users.users?.email}</p>
        <p>{users.users?.password}</p>
      </div>
    </>
  );
};

export default Home;
