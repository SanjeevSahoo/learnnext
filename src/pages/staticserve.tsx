import { GetStaticProps } from 'next';

interface IBlogData {
    id: number;
    title: string;
}

function StaticServe(props: { data: IBlogData[] }) {
    return (
        <ul>
            {props.data.map((post) => (
                <li key={post.id}>{post.title}</li>
            ))}
        </ul>
    )
}

export const getStaticProps: GetStaticProps<{ data: IBlogData[] }> = async () => {
    const counterVal = Math.floor(Math.random() * 11);

    const data: IBlogData[] = [];

    for (let i = 0; i < counterVal; i += 1) {
        data.push({ id: i, title: `sanjeev ${i}` })
    }

    return { props: { data }, revalidate: 30 }
}

export default StaticServe
