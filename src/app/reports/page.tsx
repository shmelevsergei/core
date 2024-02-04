import Content from '@/app/reports/components/content/Content'
import InfoPanel from '@/app/reports/components/infoPanel/InfoPanel'
import Info from '@/app/reports/components/info/Info'
import Branding from '@/app/reports/components/branding/Branding'
import Competition from '@/app/reports/components/competition/Competition'
import Points from '@/app/reports/components/points/Points'
import Online from '@/app/reports/components/online/Online'
import { AdministratorProvider } from '@/app/reports/store/administrator.context'
import Divider from '@/components/ui/divider'
import { cn } from '@/lib/utils'

const Page = () => {
    return (
        <main>
            <AdministratorProvider>
                <div className={'flex flex-col gap-4'}>
                    <InfoPanel />
                    <Content />
                    <Info />
                    <div className={'px-3'}>
                        <div className={'grid grid-cols-3 gap-3'}>
                            <Branding />
                            <Competition />
                            <div className={'grid grid-rows-2 gap-3'}>
                                <Points />
                                <Online />
                            </div>
                        </div>
                        <Divider className={cn('my-5')} />
                    </div>
                </div>
            </AdministratorProvider>
        </main>
    )
}

export default Page
