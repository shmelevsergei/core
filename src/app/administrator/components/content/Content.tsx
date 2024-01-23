import Card from "./Card";
import Oborot from "./Oborot";
import PurchasePerMoney from "./PurchasePerMoney";
import WithPurchaseSto from "./WithPurchaseSto";
import PurchasePerCount from "./PurchasePerCount";
const Content = () => {

    return (
        <div className={'grid grid-cols-3 gap-y-3 gap-x-4 justify-center items-center px-3'}>
            <Oborot />
            <PurchasePerMoney />
            <PurchasePerCount/>
            <WithPurchaseSto />
            <Card text={'Средняя закупка на 1 подъемник, руб. (динамика)'} count={'81 967'} percent={0} />
            <Card text={'Средняя закупка на 1 подъемник, шт. (динамика)'} count={'685'} percent={0} />
        </div>

    );
};

export default Content;