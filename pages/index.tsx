import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = ({ org }: any) => {
  return (
    <div >
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>{org?.login}</h1>
        <h3>{org?.description}</h3>
        <p>Site: <a href={org?.blog}>{org?.blog}</a></p>
      </main>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  
  const response = await fetch('https://api.github.com/orgs/rocketseat');
  const data = await response.json();

  return {
    props: {
      org: data
    },
    revalidate: 10, //Tempo de renderizacao
  }
};

export default Home
