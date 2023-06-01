import Postagem from "./Postagem"

interface UserLogin {
    token: string
    id: number
    nome: string
    usuario: string
    senha: string
    foto: string
    postagens?: Postagem[];
}

export default UserLogin;