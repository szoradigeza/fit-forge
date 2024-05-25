import { useAtom } from "jotai";
import userAtom from "../atoms/user.atom";

interface UserDetails {
  name: string;
  password: string;
}

const useAuth = () => {
  const [user, setUser] = useAtom(userAtom);

  const login = (userDetails: UserDetails) => {
    fetch("http://localhost:3200/api/login", {
      method: "POST",
      body: JSON.stringify(userDetails),
    })
      .then((r) => r.json())
      .then((data) => {
        setUser(data);
      });
  };

  return {
    login,
    user,
    setUser,
  };
};

export default useAuth;
