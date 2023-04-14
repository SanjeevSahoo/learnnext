
import { GetServerSideProps } from 'next';

interface IUserData {
  id: number;
  name: string;
  role: string;
}

function LoadFromServer(props: {data:IUserData[]}) {
 
  return <div>{JSON.stringify(props.data)}</div>;
}

export const getServerSideProps: GetServerSideProps<{data:IUserData[]}> = async ({ req, res }) => {
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  )

  const data: IUserData[] = [
    { id: 1, name: "Sanjeev", role: "admin" },
    { id: 2, name: "Srikant", role: "leader" },
  ];
  return { props:  {data}  };
}

export default LoadFromServer;
