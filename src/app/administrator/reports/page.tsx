import Divider from '@/components/ui/divider'
import { cn } from '@/lib/utils'
import { AdministratorProvider } from './store/administrator.context'
import InfoPanel from './components/infoPanel/InfoPanel'
import Content from './components/content/Content'
import Info from './components/info/Info'
import Branding from './components/branding/Branding'
import Competition from './components/competition/Competition'
import Points from './components/points/Points'
import Online from './components/online/Online'

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
