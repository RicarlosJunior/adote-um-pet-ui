import { styled } from '@mui/material'

//passa o nome da tag html que deseja estilizar
//cuidado sempre usar a crase numca as aspas simples ou duplas
//Componente sempre se criar com nome maiusculo 'CabecalhoContainer

//Exemplo de variavel para ser utilizada no css
//const paddingSize = '20px';
//padding: ${paddingSize};

export const CabecalhoContainer =  styled('header')`
   display:flex;
   justify-content:center;
   border-bottom: 1px solid #f0f0f0;

   //Acessando o tema ({ theme})
   padding: ${({theme}) => theme.spacing(6)};

`;

export const Logo = styled('img')`
    width: 230px;
        
    
`;
