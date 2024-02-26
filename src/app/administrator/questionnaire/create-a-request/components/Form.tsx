'use client'
import React, {useEffect, useState} from 'react';
import Distributor from "@/app/questionnaire/create-a-request/components/distributor/Distributor";
import {Separator} from "@/components/ui/separator";
import {cn} from "@/lib/utils";
import DistributorEmployee
    from "@/app/questionnaire/create-a-request/components/distributor-employee/DistributorEmployee";
import DataSto from "@/app/questionnaire/create-a-request/components/data-sto/DataSto";
import ManagerDetails from "@/app/questionnaire/create-a-request/components/manager-details/ManagerDetails";
import Lifts from "@/app/questionnaire/create-a-request/components/lifts/Lifts";
import ConfirmationDetails
    from "@/app/questionnaire/create-a-request/components/confirmation-details/ConfirmationDetails";
import Comment from "@/app/questionnaire/create-a-request/components/comment/Comment";
import Photo from "@/app/questionnaire/create-a-request/components/Photo/Photo";
import {Button} from "@/components/ui/button";
import {useQuestionnaireState} from "@/app/questionnaire/store/questionnaire.context";
import {fetchDataDistributor} from "@/server/routs/portal_db/fetchQuestionnaire";
import {IUploadQuestionnaire} from "@/types/questionnaire/create-a-request/questionnaire";
import {toast} from "@/components/ui/use-toast";

const Form = () => {
    const { state } = useQuestionnaireState()
    const [isDisabled, setIsDisabled] = useState(false)
    const [isUpload, setIsUpload] = useState(false)


    const fetchFormData = async() => {
        const response = await fetchDataDistributor(state.questionnaire)
            if (response)
                return await response.json()
    }


    const handleClick = async () => {
        setIsDisabled(true)

        const fetchResult:IUploadQuestionnaire = await fetchFormData()

        if (fetchResult.success) {
            setIsUpload(true)
        }
    }

    useEffect(() => {
        setTimeout(() => {
            setIsDisabled(false)
            setIsUpload(false)
        }, 1000)
    }, [isDisabled])

    useEffect(() => {
        if (isUpload) {
            toast({
                description: 'Анкета успешно отправлена',
                duration: 3000
            })
        }
    }, [isUpload]);
    return (
        <form>
            <Distributor />
            <Separator className={cn('my-3 w-full')} />
            <DistributorEmployee />
            <Separator className={cn('my-3 w-full')} />
            <DataSto />
            <Separator className={cn('my-3 w-full')} />
            <ManagerDetails />
            <Separator className={cn('my-3 w-full')} />
            <Lifts />
            <Separator className={cn('my-3 w-full')} />
            <ConfirmationDetails />
            <Separator className={cn('my-3 w-full')} />
            <Comment />
            <Separator className={cn('my-3 w-full')} />
            <Photo />
            <Separator className={cn('my-3 w-full')} />
            <Button
                onClick={handleClick}
                disabled={isDisabled}
                className={cn(
                    'bg-blue-700 mx-auto w-max block mt-10 hover:bg-blue-600'
                )}
            >
                Отправить анкету
            </Button>
        </form>
    );
};

export default Form;