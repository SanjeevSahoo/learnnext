import { NextPage } from "next";
import { signOut, useSession } from "next-auth/react";
import { useEffect } from "react";
import Router from "next/router";
import Link from "next/link";

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
      <div className="grid items-center justify-between p-4 text-xl">
        <h2>
          <Link href="/loadfromserver">Load From Server</Link>
        </h2>
        <h2>
          <Link href="/staticserve">Load Static Serve</Link>
        </h2>
        <h2>
          <Link href="/blog/1">Blog 1</Link>
        </h2>
        <h2>
          <Link href="/blog/2">Blog 2</Link>
        </h2>
        This page is protected for special people.{" "}
        <button onClick={handleSignOut}>Sign Out</button>
      </div>
    );
  }
  return <h1>loading</h1>;
};
export default Dashbaord;
