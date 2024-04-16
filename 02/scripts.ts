const listagemUsuarios = [
    {
        nome: "Guido",
        idade: 32,
        status: true,
    },
    {
        nome: "Dani",
        idade: 30,
        status: true,
    },
    {
        nome: "João",
        idade: 40,
        status: false,
    },
    {
        nome: "Guilherme",
        idade: 29,
        status: true,
    },
    {
        nome: "Ana",
        idade: 18,
        status: false,
    },
    {
        nome: "José",
        idade: 28,
        status: false,
    },
]

const filtrarUsuarios = (listagemUsuarios: { nome: string, idade: number, status: boolean }[], usuario: string)
    : { nome: string, idade: number, status: boolean }[] => {

    const resultado = listagemUsuarios.filter((usuarioLista) => {
        return usuarioLista.nome.toLocaleLowerCase().includes(usuario.toLocaleLowerCase())
    })
    return resultado;
}


console.log(filtrarUsuarios(listagemUsuarios, 'jo'));
