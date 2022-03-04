import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { signIn, signOut, useSession } from "next-auth/react";

const Home: NextPage = () => {
  const { data: session } = useSession();

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {session ? (
          <>
            <h1>{session?.user?.name}</h1>
            <button onClick={() => signOut()}>Sair</button>
          </>
        ) : (
          <button onClick={() => signIn("github")}>Entrar</button>
        )}
      </main>
    </div>
  );
};

export default Home;
