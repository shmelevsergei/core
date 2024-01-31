import React from 'react';
import Title from "@/app/questionnaire/create-a-request/components/Title";
import {Textarea} from "@/components/ui/textarea";
import {cn} from "@/lib/utils";

const Comment = () => {
    return (
        <div>
            <Title text={'Комментарий'} />
            <Textarea id={'comment'} placeholder={'Оставьте комментарий...'} rows={4} className={cn('mt-4')}/>

        </div>
    );
};

export default Comment;