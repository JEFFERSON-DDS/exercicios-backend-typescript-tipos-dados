const items = {
    produto: 'CPU Dual Core 3.0GHZ',
    lote: 321,
    ano: 2022,
    qtd: 5
}


const geradorDeEtiquetas = (item: { produto: string, lote: number, ano: number, qtd: number }): string[] => {
    const resultado: string[] = []

    for (let i = 0; i <= items.qtd; i++) {
        resultado.push(`${items.lote}-${items.ano}-${i.toString().padStart(3, '0')}`)

    }

    return resultado;
}

console.log(geradorDeEtiquetas(items));
