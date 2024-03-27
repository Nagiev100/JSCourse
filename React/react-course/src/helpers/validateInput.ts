export const validationInputPassword = {
    required: 'Password is required',
    pattern: {
        value: /^(?=.*[A-Z])(?=.*[0-9]).+$/,
        message: "Password must contain at least one uppercase letter and one digit",
    },
    minLength: {
        value: 8,
        message: 'The minimum password length should be 8 characters'
    },
    maxLength: {
        value: 14,
        message: 'The maximum password length should be 14 characters'
    }
}
export const validationInputLogin = {
    required: 'Login is required',
    minLength: {
        value: 6,
        message: 'The minimum login length should be at least 6 characters'
    },
    maxLength: {
        value: 12,
        message: 'The maximum login length should be no more than 12 characters'
    }
}