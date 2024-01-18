export interface IAnketaBaseRepository {
    ABA_WSU_ID: bigint;
    ABA_STO_NAME: string;
    ABA_STO_ID1: string;
    ABA_REMZONA_QTY: number;
    ABA_ENABLED: boolean;
    ABA_PHONE: string;
    ABA_INN: string;
    ABA_DATETIME_CREATED: Date;
    ABA_DATETIME_UPDATED: Date;
    ABA_ID: bigint;
    ABA_DATETIME: Date;
    ABA_STO_ID2: string;
    ABA_STO_NAME_FIND: string | null;
}
