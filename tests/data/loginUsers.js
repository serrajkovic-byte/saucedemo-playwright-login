const users = {
    standard: {
        username: 'standard_user',
        password: 'secret_sauce'
    },
    lockedOut: {
        username: 'locked_out_user',
        password: 'secret_sauce'
    },
    unknown: {
        username: 'not_a_real_user',
        password: 'secret_sauce'
    },
    wrongPassword: {
        username: 'standard_user',
        password: 'wrong_password'
    }
};

const errorMessages = {
    usernameRequired: 'Epic sadface: Username is required',
    passwordRequired: 'Epic sadface: Password is required',
    invalidCredentials:
        'Epic sadface: Username and password do not match any user in this service',
    lockedOut: 'Epic sadface: Sorry, this user has been locked out.'
};

export default { users, errorMessages };