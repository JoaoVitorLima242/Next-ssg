import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";

export default function Member({ user }: any) {
    const { isFallback } = useRouter();

    if(isFallback) {
        return(
            <div>
                Carregando...
            </div>
        )
    }

    return (
        <div>
            <p>{user?.name}</p>
        </div>
    )
};

export const getStaticPaths: GetStaticPaths = async () => {

    const response = await fetch('https://api.github.com/orgs/rocketseat/members');
    const data = await response.json();

    console.log(data)

    const paths = data?.map((member: any) => {
        return {params: {login: member.login}}
    });

    return {
        paths,
        fallback: true, 
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