import React, {useState} from 'react';

const AdicionaFruta = () =>{

    const [nome, setNome] = useState('')
    const [quantidade, setQuantidade] = useState(0)




    const adicionarfruta = event =>{
        event.preventDefault();

        const fruta ={
            id:new Date(),
            nome,
            quantidade
        }

        console.log('adicionado',fruta);
    }


    return (
        <form onSubmit={adicionarfruta}>
            <input 
                type="text" 
                name={nome} 
                placeholder="fruta" 
                required 
                onChange={event => setNome(event.target.value)}
            />
            <input 
                type="number" 
                name={quantidade} 
                placeholder="0" 
                required 
                onChange={event => setQuantidade(event.target.value)}
            />

            <button type="submit">Adicionar</button>
        </form>
    )
}


export default AdicionaFruta;