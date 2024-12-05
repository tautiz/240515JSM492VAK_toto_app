export interface LoginRequestDto {
    email: string;
    password: string;
}

export interface LoginResponseDto {
    token: string;
    user: {
        id: string;
        username: string;
    };
}
