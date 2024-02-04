import Oborot from './Oborot'
import PurchasePerMoney from './PurchasePerMoney'
import WithPurchaseSto from './WithPurchaseSto'
import PurchasePerCount from './PurchasePerCount'
import PurchasePerMoneyQty from '@/app/reports/components/content/PurchasePerMoneyQty'
import PurchasePerCountQty from './PurchasePerCountQty'
const Content = () => {
    return (
        <div
            className={
                'grid grid-cols-3 gap-y-3 gap-x-4 justify-center items-center px-3'
            }
        >
            <Oborot />
            <PurchasePerMoney />
            <PurchasePerCount />
            <WithPurchaseSto />
            <PurchasePerMoneyQty />
            <PurchasePerCountQty />
        </div>
    )
}

export default Content
