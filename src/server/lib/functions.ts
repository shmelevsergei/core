import argon2 from 'argon2'

export const hashedPassword = async (password: string | null) => {
    if (!password) return
    return await argon2.hash(password)
}

export const verifyPassword = async (
    password: string,
    hashedPassword: string
) => {
    return await argon2.verify(hashedPassword, password)
}

export const formateDate = (date: Date) => {
    const day = date.getDate()
    const month = date.getMonth() + 1
    const year = date.getFullYear()

    const formattedDay = day < 10 ? `0${day}` : `${day}`
    const formattedMonth = month < 10 ? `0${month}` : `${month}`

    return `${formattedDay}-${formattedMonth}-${year}`
}
