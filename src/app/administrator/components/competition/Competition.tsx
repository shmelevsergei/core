import React from 'react'
import UiCompetition from '@/app/administrator/components/competition/ui-competition'
import { useAdministratorState } from '../../store/administrator.context'

const Competition = () => {
    const {
        state: { competitions, allSto },
    } = useAdministratorState()

    const dataCompetitions = {
        competitions,
        allSto,
    }
    return <UiCompetition dataCompetitions={dataCompetitions} />
}

export default Competition
