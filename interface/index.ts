

export interface pwd {
    password: string;
    showPassword?: boolean;
}


export interface State extends pwd {
    firstname: string;
    lastname: string;
    birthday: Date | null;
    marketing: Date | null; // 마케팅수신동의날짜
}

export interface AccountData extends State {
    email: string;
    state: Date | null;
}