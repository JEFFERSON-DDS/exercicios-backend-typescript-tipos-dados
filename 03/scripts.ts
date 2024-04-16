const listaDeNumeros = [1, 5, 2]

const tabuadas = (listaDeNumeros: number[]): string => {
    let resultado: string = ''

    for (const elemento of listaDeNumeros) {
        for (let i = 0; i <= 10; i++) {
            resultado += `${elemento} x ${i} = ${elemento * i} \n`;

            if (i === 10) {
                resultado += `--------------- \n`
            }
        }
    }

    return resultado;

}

console.log(tabuadas(listaDeNumeros));
