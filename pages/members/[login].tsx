import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router"
import { userInfo } from "os";

export default function Member({ user }: any) {
    const { query } = useRouter();

    return (
        <div>
            <p>{user?.name}</p>
        </div>
    )
};

export const getStaticPaths: GetStaticPaths = async () => {

    return {
        paths: [],
        fallback: false,
    }
} 

export const getStaticProps: GetStaticProps = async (context) => {

    const {login} = context.params;

    const response = await fetch(`https://api.github.com/users/${login}`);
    const data = response.json()

    return{
        props: {
            user: data,
        }
    }
}