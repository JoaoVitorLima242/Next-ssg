import { useRouter } from "next/router"

export default function Member() {
    const { query } = useRouter();

    return (
        <h1>{query.login}</h1>
    )
}