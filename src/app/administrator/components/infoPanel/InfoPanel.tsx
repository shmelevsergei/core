import Brands from "@/app/administrator/components/infoPanel/Brands";
import Mont from "@/app/administrator/components/mont/Mont";
import {anketaOborot} from "@/api/anketa_oborot";
import {formattedNumber} from "@/lib/formatNumber";
import {anketaBase} from "@/api/anketa_base";
import {anketaDogovor} from "@/api/anketa_dogovor";


const InfoPanel = async () => {

    const allBrands = await anketaBase.getAnketaBaseEnabled();

    const allCurrentMonts = await anketaBase.getAnketaBaseEnabledCurrentMonth();

    const alDogovor = await anketaDogovor.getAnketaDogovor();

    const formattedAllBrands = formattedNumber(allBrands.length);
    const formattedAllMont = formattedNumber(allCurrentMonts.length);
    const formattedAllDogovor = formattedNumber(alDogovor.length);

    const allRemzona = allBrands.reduce((acc, item) => {
        return acc + item.ABA_REMZONA_QTY
    },0);

    return (
        <div className={'flex justify-between bg-[#FEFFFE] shadow-base mt-3 py-2 px-3'}>
            <div className={'text-[#020944] text-xl flex flex-col gap-3'}>
                <p className={' font-extrabold'}>ВСЕГО СТО - {formattedAllBrands} (новички - {formattedAllMont})</p>
                <p className={'font-medium'}>
                    Оферта подписана - {formattedAllDogovor} ({Math.round(alDogovor.length / allBrands.length * 100)}%) </p>
                <p className={'font-medium'}>Среднее кол-во подъемников - {(allRemzona / alDogovor.length).toFixed(2)}</p>
            </div>

            <div className={'flex flex-col justify-between'}>
                <Brands/>
                <Mont/>
            </div>
        </div>
    );
};

export default InfoPanel;