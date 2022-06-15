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
                    setMensagem(error.response?.data.message);
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
