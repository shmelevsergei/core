import React from 'react'
import UiBranding from './ui-branding'
import { useAdministratorState } from '../../store/administrator.context'

const Branding = () => {
    const {
        state: { branding, allSto },
    } = useAdministratorState()

    const dataBranding = {
        branding,
        allSto,
    }
    return <UiBranding dataBranding={dataBranding} />
}

export default Branding
