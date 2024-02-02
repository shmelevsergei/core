import React from 'react';
import Title from "@/app/questionnaire/create-a-request/components/Title";
import {Textarea} from "@/components/ui/textarea";
import {cn} from "@/lib/utils";

const Comment = () => {
    return (
        <div className={'mt-4'}>
            <Title text={'Комментарий'} />
            <div className={'px-1'}>
                <Textarea id={'comment'} placeholder={'Оставьте комментарий...'} rows={4} className={cn('mt-4')}/>
            </div>
        </div>
    );
};

export default Comment;