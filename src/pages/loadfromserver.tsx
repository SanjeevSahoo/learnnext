import React from "react";

interface IUserData {
  id: number;
  name: string;
  role: string;
}

function LoadFromServer(userData: IUserData) {
  return <div>{JSON.stringify(userData)}</div>;
}

export async function getServerSideProps() {
  const data = [
    { id: 1, name: "Sanjeev", role: "admin" },
    { id: 2, name: "Srikant", role: "leader" },
  ];
  return { props: { data } };
}

export default LoadFromServer;
