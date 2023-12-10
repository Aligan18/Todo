


export const stringValidation = (value: unknown, maxLength: number) => {
    if (value && typeof value === 'string' && value.length <= maxLength) {
        return true
    }

    return false
}