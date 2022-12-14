import React from 'react';
import AdicionaFruta from './AdicionaFruta';
import Fruta from './Fruta';

const ListaFrutas = () =>{

    const frutas = [
        {id:1, nome: 'Morango', quantidade: 4},
        {id:2, nome: 'Maçã', quantidade: 3},
    ];

    return (
        <>
        <h1>Lista de Frutas</h1>

        <AdicionaFruta/>

        {frutas.map(fruta => {
            <Fruta key={fruta.id} fruta={fruta}/>
        })}
        </>
    )
}

export default ListaFrutas;