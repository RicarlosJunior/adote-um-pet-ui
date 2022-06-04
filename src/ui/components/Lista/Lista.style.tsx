import { styled } from "@mui/material";

export const ListaStyled = styled('ul')`
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
    padding: ${({theme}) => theme.spacing(2)};
`
    
export const ItemLista = styled('li')`
    display: grid;
    grid-template-columns: repeat(2, 1fr); //fr e de fração nesse casao e metade para cada uma
    gap: ${({theme}) => theme.spacing(5)};
    margin-bottom: ${({theme}) => theme.spacing(5)};

    //Pontos de quebra aqui definimos regras css
    //temos isso no thema
    //na linha abaixo a regra e aplicada quanto a tela estiver
    //abaixo (down) do tamanho medio (md)
    ${({theme}) => theme.breakpoints.down('md')} {
        grid-template-columns: 1fr;
        gap: ${({theme}) => theme.spacing(2)};
        margin-bottom: ${({theme}) => theme.spacing(10)};
    }



`
    
export const Foto = styled('img')`
    width: 100%;
`
    
export const Informacoes = styled ('div')`
    display: flex;
    flex-direction: column;
    gap: ${({theme}) => theme.spacing(2)}
`
    
export const Nome = styled('h2')`
    margin: 0;
`

export const Descricao = styled('p')`
    margin: 0;
    word-break: break-word;
`
