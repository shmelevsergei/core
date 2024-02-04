export const dynamic = ({
    count,
    perCount,
}: {
    count: number
    perCount: number
}) => {
    return ((count - perCount) / perCount) * 100
}
