'use client'
import Link from 'next/link'
import {Button} from "@/components/ui/button";
import {NextResponse} from "next/server";
import {IUser} from "@/types/questionnaire/users/users";

function Home() {

    const handleClick = async () => {
        const response = await fetch('/api/create-password')
        if (response.ok){

            const dataWebshop:IUser[] = await response.json()

            dataWebshop.map(async (user) => {
               await fetchDataPortal(user)
            })
        }
    }

    async function fetchDataPortal(data: IUser) {
        try {
            const fetchData = await fetch('/api/create-password', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })

            if (fetchData.ok) {
                const result = await fetchData.json();
                console.log('Success:', result);
                return NextResponse.json({ success: true });
            } else {
                console.error('Error:', fetchData.status);
                return NextResponse.json({ success: false, error: 'Server error' });
            }
        } catch (error) {
            console.error('Error fetching data:', error)
            return NextResponse.json({ success: false, error: 'Network error' });
        }
    }


    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <Link href={'/reports'}>Administrator</Link>

            <Button onClick={handleClick}>Загрузить пароли</Button>

        </main>
    )
}

export default Home
