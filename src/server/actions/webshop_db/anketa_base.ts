import { cache } from "react";
import { prismaWebShop } from "@/lib/db";
import { IAnketaBaseRepository } from "@/repository/anketaBase.repository";

// const transformData = async (data: Prisma.PrismaPromise<GetResult<Prisma.$GA_ANKETA_BASEPayload<DefaultArgs>,
//     {},
//     "findMany">>): Promise<IAnketaBaseRepository[]> => {
//     const items = await data;
//     return items.map((item) => ({
//         ABA_WSU_ID: item.ABA_WSU_ID as unknown as bigint,
//         ABA_STO_NAME: item.ABA_STO_NAME as unknown as string,
//         ABA_STO_ID1: item.ABA_STO_ID1 as unknown as string,
//         ABA_REMZONA_QTY: item.ABA_REMZONA_QTY as unknown as number,
//         ABA_ENABLED: item.ABA_ENABLED as unknown as boolean,
//         ABA_PHONE: item.ABA_PHONE as unknown as string,
//         ABA_INN: item.ABA_INN as unknown as string,
//         ABA_DATETIME_CREATED: item.ABA_DATETIME_CREATED as unknown as Date,
//         ABA_DATETIME_UPDATED: item.ABA_DATETIME_UPDATED as unknown as Date,
//         ABA_ID: item.ABA_ID as unknown as bigint,
//         ABA_DATETIME: item.ABA_DATETIME as unknown as Date,
//         ABA_STO_ID2: item.ABA_STO_ID2 as unknown as string,
//         ABA_STO_NAME_FIND: item.ABA_STO_NAME_FIND as unknown as string | null,
//     }));
// };

class AnketaBase {
	getAnketaBaseEnabled = cache(
		(): Promise<IAnketaBaseRepository[]> =>
			prismaWebShop.gA_ANKETA_BASE.findMany({
				where: {
					ABA_ENABLED: true,
				},
			})
	);

	getAnketaBaseEnabledCurrentMonth = cache(
		(): Promise<IAnketaBaseRepository[]> =>
			prismaWebShop.gA_ANKETA_BASE.findMany({
				where: {
					ABA_ENABLED: true,
					ABA_DATETIME_CREATED: {
						gte: new Date(
							new Date().setMonth(new Date().getMonth() - 1)
						),
						lte: new Date(),
					},
				},
			})
	);
}

export const anketaBase = new AnketaBase();
