export interface UsuarioModel{
    id: string;
    realm: string;
    username: string;
    email: string;
    password: string;
    rol: number;
    user: UsuarioModel;
}