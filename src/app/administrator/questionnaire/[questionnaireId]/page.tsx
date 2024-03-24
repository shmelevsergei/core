import {
    UpdateConfirmData,
    UpdateQuestionnaire,
    getQuestionnaireById,
    updateQuestionnaire,
} from '@/app/shared/actions/questionnaireAction'
import React, { FormEvent } from 'react'
import BackButton from '../../../../components/BackButton'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import Divider from '@/components/ui/divider'
import Title from './components/Title'
import SubTitle from './components/SubTitle'
import FormDataAccepted from './components/FormDataAccepted'
import { Textarea } from '@/components/ui/textarea'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

const Page = async ({ params }: { params: { questionnaireId: number } }) => {
    const data = await getQuestionnaireById(+params.questionnaireId)

    const getFormData = async (formData: FormData) => {
        'use server'

        const action = formData.get('action')

        const confirmData: UpdateConfirmData = {
            lifts:
                formData.get('confirmation-lifts') !== null &&
                formData.get('confirmation-lifts') !== undefined
                    ? +(formData.get('confirmation-lifts') as string)
                    : 0,
            loginOne:
                formData.get('confirmation-login-1') !== null
                    ? (formData.get('confirmation-login-1') as string)
                    : '',
            loginTwo:
                formData.get('confirmation-login-2') !== null
                    ? (formData.get('confirmation-login-2') as string)
                    : '',
        }

        const data: UpdateQuestionnaire = {
            id: +params.questionnaireId,
            comment: formData.get('comment')?.toString() ?? '',
            status: action === 'accepted' ? 'accepted' : 'rejected',
            confirmData: confirmData,
        }

        await updateQuestionnaire(data)
        revalidatePath('/')
        redirect('/administrator/questionnaire/questionnaire-sent')
    }

    return (
        <main className="pt-4 px-4">
            <div>
                <BackButton />
            </div>
            <form action={getFormData}>
                <Card className={cn('h-[calc(100vh-150px)] overflow-auto')}>
                    <CardHeader>
                        <CardTitle
                            className={cn('text-center')}
                        >{`Информация о "${data?.data_sto?.name}"`}</CardTitle>
                    </CardHeader>
                    <Divider />

                    <CardContent>
                        <div className="py-4">
                            <div className="flex gap-2 items-center">
                                <Title title="Дистрибьютор:" />
                                <p>{data?.distributor}</p>
                            </div>
                        </div>
                        <Divider />
                        <div className="py-4">
                            <Title title="Сотрудник дистрибьютора:" />

                            <div className="grid grid-cols-2 p-2">
                                <div className="pb-3">
                                    <SubTitle subTitle="Фамилия:" />
                                    <p>
                                        {data?.distributor_employee?.lastname}
                                    </p>
                                </div>

                                <div className="pb-3">
                                    <SubTitle subTitle="Имя:" />
                                    <p>{data?.distributor_employee?.name}</p>
                                </div>

                                <div className="pb-3">
                                    <SubTitle subTitle="Отчество:" />
                                    <p>{data?.distributor_employee?.surname}</p>
                                </div>

                                <div className="pb-3">
                                    <SubTitle subTitle="Контактный номер телефона:" />
                                    <p>{data?.distributor_employee?.phone}</p>
                                </div>

                                <div>
                                    <SubTitle subTitle="Email" />
                                    <p>{data?.distributor_employee?.email}</p>
                                </div>
                            </div>
                        </div>
                        <Divider />
                        <div className="p-4">
                            <Title title="Данные СТО:" />
                            <div className="grid grid-cols-2 p-2">
                                <div className="pb-3">
                                    <SubTitle subTitle="Название СТО:" />
                                    <p>{data?.data_sto?.name}</p>
                                </div>

                                <div className="pb-3">
                                    <SubTitle subTitle="Город:" />
                                    <p>{data?.data_sto?.city}</p>
                                </div>

                                <div className="pb-3">
                                    <SubTitle subTitle="Область:" />
                                    <p>{data?.data_sto?.area}</p>
                                </div>

                                <div className="pb-3">
                                    <SubTitle subTitle="Адрес:" />
                                    <p>{data?.data_sto?.address}</p>
                                </div>

                                <div>
                                    <SubTitle subTitle="Email" />
                                    <p>{data?.distributor_employee?.email}</p>
                                </div>
                            </div>
                        </div>
                        <Divider />
                        <div className="p-4">
                            <Title title="Код клиента:" />
                            <div className="grid grid-cols-2 p-2">
                                <div className="pb-3">
                                    <SubTitle subTitle="АВТО-ЕВРО" />
                                    <p>
                                        {!data?.data_sto
                                            ?.code_client_avtoevro && '-'}
                                    </p>
                                </div>

                                <div className="pb-3">
                                    <SubTitle subTitle="АВТОРУСЬ" />
                                    <p>
                                        {!data?.data_sto?.code_client_avtorus &&
                                            '-'}
                                    </p>
                                </div>

                                <div>
                                    <SubTitle subTitle="РОССКО" />
                                    <p>
                                        {!data?.data_sto?.code_client_rossko &&
                                            '-'}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <Divider />
                        <div className="py-4">
                            <Title title="Сотрудник дистрибьютора:" />

                            <div className="grid grid-cols-2 p-2">
                                <div className="pb-3">
                                    <SubTitle subTitle="Фамилия:" />
                                    <p>
                                        {data?.distributor_employee?.lastname}
                                    </p>
                                </div>

                                <div className="pb-3">
                                    <SubTitle subTitle="Имя:" />
                                    <p>{data?.distributor_employee?.name}</p>
                                </div>

                                <div className="pb-3">
                                    <SubTitle subTitle="Отчество:" />
                                    <p>{data?.distributor_employee?.surname}</p>
                                </div>

                                <div className="pb-3">
                                    <SubTitle subTitle="Контактный номер телефона:" />
                                    <p>{data?.distributor_employee?.phone}</p>
                                </div>

                                <div>
                                    <SubTitle subTitle="Email" />
                                    <p>{data?.distributor_employee?.email}</p>
                                </div>
                            </div>
                        </div>
                        <Divider />
                        <div className="p-4">
                            <Title title="Данные СТО:" />
                            <div className="grid grid-cols-2 p-2">
                                <div className="pb-3">
                                    <SubTitle subTitle="Название СТО:" />
                                    <p>{data?.data_sto?.name}</p>
                                </div>

                                <div className="pb-3">
                                    <SubTitle subTitle="Город:" />
                                    <p>{data?.data_sto?.city}</p>
                                </div>

                                <div className="pb-3">
                                    <SubTitle subTitle="Область:" />
                                    <p>{data?.data_sto?.area}</p>
                                </div>

                                <div className="pb-3">
                                    <SubTitle subTitle="Адрес:" />
                                    <p>{data?.data_sto?.address}</p>
                                </div>

                                <div>
                                    <SubTitle subTitle="Email" />
                                    <p>{data?.distributor_employee?.email}</p>
                                </div>
                            </div>
                        </div>
                        <Divider />
                        <div className="p-4">
                            <Title title="ИНН:" />
                            <div className="grid grid-cols-2 p-2">
                                {data?.inns.map((inn, idx) => (
                                    <div key={idx} className="pb-3">
                                        <SubTitle subTitle={`ИНН ${idx + 1}`} />
                                        <p>{inn.inn}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <Divider />
                        <div className="p-4">
                            <Title title="Данные руководителя/подписанта" />
                            <div className="grid grid-cols-2 p-2">
                                <div>
                                    <Title title="Руководитель СТО" />
                                    <div className="py-3">
                                        <SubTitle subTitle="Фамилия:" />
                                        <p>{data?.manager?.lastname}</p>
                                    </div>

                                    <div className="pb-3">
                                        <SubTitle subTitle="Имя:" />
                                        <p>{data?.manager?.name}</p>
                                    </div>

                                    <div className="pb-3">
                                        <SubTitle subTitle="Отчество:" />
                                        <p>{data?.manager?.surname}</p>
                                    </div>

                                    <div className="pb-3">
                                        <SubTitle subTitle="Контактный номер телефона:" />
                                        <p>{data?.manager?.phone}</p>
                                    </div>

                                    <div>
                                        <SubTitle subTitle="Email" />
                                        <p>{data?.manager?.email}</p>
                                    </div>
                                </div>
                                <div>
                                    <Title title="Подписант СТО" />
                                    <div className="py-3">
                                        <SubTitle subTitle="Фамилия:" />
                                        <p>
                                            {data?.signatoryManager?.lastname}
                                        </p>
                                    </div>

                                    <div className="pb-3">
                                        <SubTitle subTitle="Имя:" />
                                        <p>{data?.signatoryManager?.name}</p>
                                    </div>

                                    <div className="pb-3">
                                        <SubTitle subTitle="Отчество:" />
                                        <p>{data?.signatoryManager?.surname}</p>
                                    </div>

                                    <div className="pb-3">
                                        <SubTitle subTitle="Контактный номер телефона:" />
                                        <p>{data?.signatoryManager?.phone}</p>
                                    </div>

                                    <div>
                                        <SubTitle subTitle="Email" />
                                        <p>{data?.signatoryManager?.email}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Divider />
                        <div className="p-4">
                            <Title title="Подъемники в анкете:" />
                            <div className="grid grid-cols-2 p-2">
                                <div className="pb-3 flex gap-2 items-center">
                                    <SubTitle subTitle="2-х стоечный подъемник (ножницы):" />
                                    <p>{data?.lifts?.twoPostLiftScissors}</p>
                                </div>

                                <div className="pb-3 flex gap-2 items-center">
                                    <SubTitle subTitle="4-х стоечный подъемник:" />
                                    <p>{data?.lifts?.fourPostLift}</p>
                                </div>

                                <div className="pb-3 flex gap-2 items-center">
                                    <SubTitle subTitle="4-х стоечный подъемник с траверсом:" />
                                    <p>{data?.lifts?.fourPostLiftTraverse}</p>
                                </div>

                                <div className="pb-3 flex gap-2 items-center">
                                    <SubTitle subTitle="Ямы:" />
                                    <p>{data?.lifts?.pits}</p>
                                </div>

                                <div className="pb-3 flex gap-2 items-center">
                                    <SubTitle subTitle="Ямы, оборудованные траверсом" />
                                    <p>{data?.lifts?.pitsEquippedTraverse}</p>
                                </div>

                                <div className="pb-3 flex gap-2 items-center">
                                    <SubTitle subTitle="Пост электронно-диагностических работ:" />
                                    <p>
                                        {data?.lifts?.postElectronicDiagnostic}
                                    </p>
                                </div>

                                <div className="flex gap-2 items-center">
                                    <SubTitle subTitle="Пост установки дополнительного оборудования:" />
                                    <p>
                                        {data?.lifts?.postAdditionalEquipment}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <Divider />
                        <div className="p-4">
                            <FormDataAccepted />
                        </div>
                        <Divider />
                        <div className="p-4">
                            <Title title="Комментарий" />
                            <div className="pt-4">
                                <Textarea
                                    id={'comment'}
                                    placeholder={'Оставьте комментарий...'}
                                    rows={4}
                                    name="comment"
                                />
                            </div>
                        </div>
                        <Divider />
                        <div className="p-4">
                            <Title title="Фотографии" />
                            <div className="flex gap-4 flex-wrap mt-2">
                                {data?.images.map((image) => (
                                    <Card
                                        key={image.id}
                                        className={cn(
                                            'p-3 flex flex-col justify-between'
                                        )}
                                    >
                                        <Image
                                            width={200}
                                            height={350}
                                            src={image.path}
                                            alt={image.description}
                                        />
                                        <p className="mt-2">
                                            {image.description}
                                        </p>
                                    </Card>
                                ))}
                            </div>
                        </div>
                        <Divider />
                        <div className="pt-6">
                            <div className="flex justify-center gap-4">
                                <Button
                                    type="submit"
                                    name="action"
                                    value={'accepted'}
                                >
                                    Подтвердить
                                </Button>
                                {data?.status !== 'rejected' && (
                                    <Button
                                        type="submit"
                                        name="action"
                                        value={'rejected'}
                                    >
                                        Отклонить
                                    </Button>
                                )}
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </form>
        </main>
    )
}

export default Page
