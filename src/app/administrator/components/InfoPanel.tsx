import Brands from "@/app/administrator/components/Brands";
import Mont from "@/app/administrator/components/mont/Mont";


const InfoPanel = () => {
    return (
        <div className={'flex justify-between'}>
            <div className={'text-[#020944] text-xl flex flex-col gap-3'}>
                <p className={' font-extrabold'}>ВСЕГО СТО - 4 415 (новички - 190)</p>
                <p className={'font-medium'}>Оферта подписана - 4 036 ( 91%)</p>
                <p className={'font-medium'}>Среднее кол-во подъемников - 4,36</p>
            </div>

            <div>
                <Brands/>
                <Mont/>
            </div>


        </div>
    );
};

export default InfoPanel;