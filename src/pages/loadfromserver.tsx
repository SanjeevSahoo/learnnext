import { GetServerSideProps } from "next";

interface IUserData {
  id: number;
  name: string;
  role: string;
}

function LoadFromServer(props: { data: IUserData[] }) {
  return (
    <ul>
      {props.data.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}

export const getServerSideProps: GetServerSideProps<{
  data: IUserData[];
}> = async ({ req, res }) => {
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59",
  );

  const counterVal = Math.floor(Math.random() * 11);

  const data: IUserData[] = [];

  for (let i = 0; i < counterVal; i += 1) {
    data.push({ id: i, name: `sanjeev ${i}`, role: "admin" });
  }

  return { props: { data } };
};

export default LoadFromServer;
