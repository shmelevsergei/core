import { prismaPortal } from '@/lib/db'
import { IImageProps } from '@/types/questionnaire/create-a-request/photo'

export const Questionnaire = async ({ path, description }: IImageProps) => {
    const addImage = await prismaPortal.images.create({
        data: {
            path: path,
            description: description,
        },
    })
}
