export const passwordValidator = (value: string) => {
    return value.length > 0
}
export const loginValidator = (value: string) => {
    return value.length > 0 && value.length < 15
}
