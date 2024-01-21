
export const handleEmailValidation = (value: string) => {

    const valid = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i).test(value)

    if (valid) {
        return ""
    } else {
        return "Please enter a valid email address"
    }

}

export const handlePasswordValidation = (value: string) => {

    const valid = value.length >= 6

    if (valid) {
        return ""
    } else {
        return "Your password needs to be at least 6 characters long"
    }
}

export const handleLengthValidation = (value: string) => {

    const valid = value.length > 0

    if (valid) {
        return ""
    } else {
        return "Please enter at least 1 character"
    }

}