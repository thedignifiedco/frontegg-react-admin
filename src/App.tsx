import { Admin, Resource, ListGuesser } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import { useAuth, useLoginWithRedirect } from "@frontegg/react";
import authProvider from "./authProvider";
import LoginPage from "./LoginPage";

const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");

const App = () => {
  const { isAuthenticated } = useAuth();
  const loginWithRedirect = useLoginWithRedirect();

  if (!isAuthenticated) {
    loginWithRedirect();
    return null; // Render nothing until authenticated
  }

  return (
    <Admin loginPage={LoginPage} authProvider={authProvider} dataProvider={dataProvider}>
      <Resource name="posts" list={ListGuesser} />
      <Resource name="comments" list={ListGuesser} />
    </Admin>
  );
};

export default App;
