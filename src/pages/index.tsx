import { NextPage } from "next";
import { signOut, useSession } from "next-auth/react";
import { useEffect } from "react";
import Router from "next/router";

const Dashbaord: NextPage = (): JSX.Element => {
  const { status, data } = useSession();

  const handleSignOut = () => {
    signOut();
  };

  useEffect(() => {
    if (status === "unauthenticated") Router.replace("/auth/signin");
  }, [status]);

  if (status === "authenticated") {
    return (
      <div>
        This page is protected for special people.{" "}
        <button onClick={handleSignOut}>Sign Out</button>
      </div>
    );
  }
  return <h1>loading</h1>;
};
export default Dashbaord;
