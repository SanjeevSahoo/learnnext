import { GetStaticProps } from 'next';

interface IBlogData {
    id: number;
    title: string;
}

function StaticServe(props:{data: IBlogData[]}) {
    return (
        <ul>
            {props.data.map((post) => (
                <li key={post.id}>{post.title}</li>
            ))}
        </ul>
    )
}

export const getStaticProps: GetStaticProps<{ data: IBlogData[] }> = async () => {
    const data: IBlogData[] = [
        { id: 1, title: "Sanjeev", },
        { id: 2, title: "Srikant", },
    ];

    return { props: { data } }
}

export default StaticServe
