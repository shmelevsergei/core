import {prismaPortal, prismaWebShop} from "@/lib/db";
import {IUser} from "@/types/questionnaire/users/users";

class Users {
    postPassNameUser = async ({name, password}:IUser) => await prismaPortal.user.create({
        data: {
            name,
            password
        }
    })


}

export const users = new Users()