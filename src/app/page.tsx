import Link from "next/link";


function Home() {


    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">

           <Link href={'/administrator'}>Administrator</Link>

        </main>
    );
}

export default Home;
