export interface IUser {
    id: number;
    firstname: string;
    lastname: string;
    email: string;
    discord: string;
}

export interface IUserInput {
    firstname: string;
    lastname: string;
    email: string;
    discord?: string;
    password: string;
}