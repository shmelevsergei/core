import React from 'react'
import Title from '@/app/distributor/questionnaire/create-a-request/components/Title'
import { Textarea } from '@/components/ui/textarea'
import { cn } from '@/lib/utils'
import { useQuestionnaireState } from '@/app/distributor/questionnaire/store/questionnaire.context'

const Comment = () => {
    const { setState } = useQuestionnaireState()

    const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const newValue = e.target.value

        setState((prevState) => ({
            ...prevState,
            questionnaire: {
                ...prevState.questionnaire,
                comment: newValue,
            },
        }))
    }

    return (
        <div className={'mt-4'}>
            <Title text={'Комментарий'} />
            <div className={'px-1'}>
                <Textarea
                    id={'comment'}
                    placeholder={'Оставьте комментарий...'}
                    rows={4}
                    className={cn('mt-4')}
                    onChange={(e) => handleInputChange(e)}
                />
            </div>
        </div>
    )
}

export default Comment
