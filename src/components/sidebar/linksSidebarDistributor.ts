export const questionnaires = {
    id: 'headingOne',
    activeElement: 'element1',
    linkButton: 'Анкеты',
    linksList: [
        {
            href: '/distributor/questionnaire/create-a-request/',
            text: 'Добавить',
            status: '',
        },
        {
            href: '/distributor/questionnaire/questionnaires-sent/',
            text: 'В очереди',
            status: 'sent',
        },
        {
            href: '/distributor/questionnaire/questionnaires-accepted/',
            text: 'Согласовано',
            status: 'accepted',
        },
        {
            href: '',
            text: 'Отклоненные',
            status: 'rejected',
        },
        {
            href: '',
            text: 'Черновики',
            status: 'draft',
        },
        {
            href: '',
            text: 'Корзина',
            status: 'cart',
        },
    ],
}

export const dataSto = {
    id: 'headingTwo',
    activeElement: 'element2',
    linkButton: 'Данные по СТО',
    linksList: [
        {
            href: '',
            text: 'ЛК СТО',
        },
        {
            href: '',
            text: 'СТО без закупок',
        },
        {
            href: '',
            text: 'Выпали из выгрузки',
        },
    ],
}
