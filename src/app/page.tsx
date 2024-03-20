import Form from '@/components/form/Form'
import { getCookies } from '@/components/form/cookiesAction'
import DistributorLayout from './distributor/layout'
import AdministratorLayout from './administrator/layout'
import StoLayout from './sto/layout'
import AdministratorPage from './administrator/page'
import StoPage from './sto/page'
import DistributorPage from './distributor/page'

export interface IUserData {
    user: string
    status: string
}

async function Home() {
    const userRole = await getCookies()

    switch (userRole?.role) {
        case 'distributor':
            return (
                <DistributorLayout>
                    <DistributorPage />
                </DistributorLayout>
            )
        case 'admin':
            return (
                <AdministratorLayout>
                    <AdministratorPage />
                </AdministratorLayout>
            )
        case 'sto':
            return (
                <StoLayout>
                    <StoPage />
                </StoLayout>
            )
    }

    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-24">
            <Form />
        </main>
    )
}

export default Home
