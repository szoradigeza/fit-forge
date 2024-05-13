import { createSignal } from "solid-js";

interface IFBResponse {
  name: string;
}

const HomePage = () => {
  const [user, setUser] = createSignal<undefined | IFBResponse>();

  (window as any).FB.api(
    "/me",
    { fields: "name, email" },
    function (response: any) {
      // TODO: update to redirect
      console.log(JSON.stringify(response));
      setUser(response);
    },
  );
  return <h1>{user() ? user()?.name : "nope"}</h1>;
};

export default HomePage;
