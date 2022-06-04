import { AxiosError } from './../../../../node_modules/axios/index.d';
import { ApiService } from './../../services/ApiService';
import { useEffect, useState } from "react";
import { Pet } from "../../@types/Pet";

export function useIndex(){
   
   const[listaPets, setListaPet] = useState<Pet[]>([]), 
    //petSelecionando e uma variavel e setPedSelecionando uma função
    [petSelecionado,setPedSelecionado] = useState<Pet | null>(null),
    [email,setEmail] = useState(''),
    [valor, setValor] = useState(''),
    [mensagem, setMensagem] = useState('');
    

    //Metodo vai ser execultado logo apos rendizar o componente e como so estamos passando
    //um array vazio vai ser execultado uma unica vez e nais, 
    //obs se nao passar nada toda vez que uma propriedade for alterada ele e execultado
    useEffect(() => {
        ApiService.get('/pets').then((resposta) => {
            setListaPet(resposta.data);
        })
    }, [])

    useEffect(() => {
        if(petSelecionado === null){
            limparFormulario();
        }
    }, [petSelecionado])

    function adotar(){
        if(petSelecionado !== null){
            if(validarAdocao()){
                ApiService.post('/adocoes', {
                    id_pet: petSelecionado.id,
                    email: email,
                    valor: valor
                }).then(() => {
                    setPedSelecionado(null);
                    setMensagem('Pet Adotado com sucesso!');
                }).catch((error: AxiosError) => {
                    setMensagem(error.response?.data.mensagem);
                })
            }else{
                setMensagem('Preencha os campos corretamente!');
            }
        }
    }

    function validarAdocao(){
        return email.length > 0 && valor.length > 0 
    }

    function limparFormulario(){
        setEmail('');
        setValor('');
    }

    return {
        listaPets, 
        petSelecionado,
        setPedSelecionado,
        email,
        setEmail,
        valor,
        setValor,
        mensagem,
        setMensagem,
        adotar

    };
}

/*{ 
    id: 1,
    nome: 'Puguinha',
    historia: 'Dog Caramelo original, cachorro bruto rustico e sistematico',
    foto: 'https://i.pinimg.com/736x/1d/71/96/1d7196c32a1b6ebdf886c357d7ed6599.jpg'

    },
    { 
    id: 2,
    nome: 'Pakito',
    historia: 'Cachorro...',
    foto: 'https://th.bing.com/th/id/R.3128b5dde9d6411582511d3c4dae75e5?rik=zotHKgC8l32F%2fw&riu=http%3a%2f%2fc1.quickcachr.fotos.sapo.pt%2fi%2fo46017d99%2f5895897_O7C8a.jpeg&ehk=n9KGFXf2l3WN8otkwauCt9iS9tP1A9VOV5g7FBL1m9Y%3d&risl=&pid=ImgRaw&r=0'
}*/