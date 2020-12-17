export const User = {
    Key: 'LoginUse',
    Auth: 'AuthToken',
    RememberLogin: 'RememberTokenLogin'
}

interface ITokenType {
    [key: string]: any;
}

export const TokenType: ITokenType  = {
    Customer: 'Customer',
    Admin: 'Admin',
    DeviceToken: 'DeviceToken',
    User: 'User',
    access_token: 'access_token'
}