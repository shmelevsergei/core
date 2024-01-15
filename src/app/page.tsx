import Link from "next/link";
import {Button} from "@/components/ui/button";


function Home() {


    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">

           <Link href={'/administrator'}>Administrator</Link>

        </main>
    );
}

export default Home;
