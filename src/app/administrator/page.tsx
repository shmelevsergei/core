

import Content from "@/app/administrator/components/content/Content";
import InfoPanel from "@/app/administrator/components/infoPanel/InfoPanel";
import Info from "@/app/administrator/components/info/Info";
import Branding from "@/app/administrator/components/branding/Branding";
import Competition from "@/app/administrator/components/competition/Competition";
import Points from "@/app/administrator/components/points/Points";
import Online from "@/app/administrator/components/online/Online";

const Page = () => {

    return (
        <main>
            <div className={'flex flex-col gap-4 '}>
                <InfoPanel/>
                <Content/>
                <Info/>
                <div className={'grid grid-cols-3 gap-3 px-3'}>
                    <Branding/>
                    <Competition/>
                    <div className={'grid grid-rows-2 gap-3'}>
                        <Points/>
                        <Online/>
                    </div>
                </div>
            </div>

        </main>
    );
};

export default Page;