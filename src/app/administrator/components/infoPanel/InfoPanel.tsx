
import Brands from "@/app/administrator/components/infoPanel/Brands";
import Mont from "@/app/administrator/components/mont/Mont";
import {formattedNumber} from "@/lib/formatNumber";
import {anketaBase} from "@/actions/anketa_base";
import {anketaDogovor} from "@/actions/anketa_dogovor";
import AllBrands from "@/app/administrator/components/infoPanel/AllBrands";


const InfoPanel = async () => {



    return (
        <div className={'flex justify-between bg-[#FEFFFE] shadow-base mt-3 py-2 px-3'}>
            <AllBrands />

            <div className={'flex flex-col justify-between'}>
                <Brands/>
                <Mont/>
            </div>
        </div>
    );
};

export default InfoPanel;