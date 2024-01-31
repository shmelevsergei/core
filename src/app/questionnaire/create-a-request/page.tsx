import React from 'react';
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import { Separator } from '@/components/ui/separator';
import {cn} from "@/lib/utils";
import Distributor from "@/app/questionnaire/create-a-request/components/distributor/Distributor";
import DistributorEmployee
    from "@/app/questionnaire/create-a-request/components/distributor-employee/DistributorEmployee";
import DataSto from "@/app/questionnaire/create-a-request/components/data-sto/DataSto";
import ManagerDetails from "@/app/questionnaire/create-a-request/components/manager-details/ManagerDetails";
import Lifts from "@/app/questionnaire/create-a-request/components/lifts/Lifts";
import ConfirmationDetails
    from "@/app/questionnaire/create-a-request/components/confirmation-details/ConfirmationDetails";
import Comment from "@/app/questionnaire/create-a-request/components/comment/Comment";
import Photo from "@/app/questionnaire/create-a-request/components/Photo/Photo";



const Page = () => {
    return (
        <main>
            <Tabs defaultValue="distributor" className="w-full p-4 overflow-y-auto">
                <TabsList className={cn('gap-px flex-wrap  h-auto py-2 text-base')}>
                    <TabsTrigger value="distributor">Дистрибьютор</TabsTrigger>
                    <TabsTrigger value="distributor-employee">Сотрудник дистрибьютора</TabsTrigger>
                    <TabsTrigger value="data-sto">Данные СТО</TabsTrigger>
                    <TabsTrigger value="manager-details">Данные руководителя</TabsTrigger>
                    <TabsTrigger value="lifts">Подъемники в анкете</TabsTrigger>
                    <TabsTrigger value="confirmation-details">Данные для подтверждения</TabsTrigger>
                    <TabsTrigger value="comment">Комментарий</TabsTrigger>
                    <TabsTrigger value="photo">Фотографии</TabsTrigger>
                </TabsList>
                <Separator className={cn('my-3 w-full')}/>
                <TabsContent value="distributor"><Distributor/></TabsContent>
                <TabsContent value="distributor-employee"><DistributorEmployee/></TabsContent>
                <TabsContent value="data-sto"><DataSto/></TabsContent>
                <TabsContent value="manager-details"><ManagerDetails/></TabsContent>
                <TabsContent value="lifts"><Lifts/></TabsContent>
                <TabsContent value="confirmation-details"><ConfirmationDetails/></TabsContent>
                <TabsContent value="comment"><Comment/></TabsContent>
                <TabsContent value="photo"><Photo/></TabsContent>
            </Tabs>
        </main>
    );
};

export default Page;