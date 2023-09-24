const emailRegExp = new RegExp('^[\\w-.]+@([\\w-]+\\.)+[\\w-]{2,4}$')
export const emailInputValidator = (value: string) => {
    return emailRegExp.test(value)
}
