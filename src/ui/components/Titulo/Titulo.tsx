import { TituloStyled,
         Subtitulo
} from "./Titulo.style";


interface TituloProps {
    titulo: string
    //? indica que a variavel e opcional vai poder rececer uma string ou  elemento html
    subtitulo?: string | JSX.Element
}

export default function Titulo(props: TituloProps){
    return (
        <>
            <TituloStyled>{props.titulo}</TituloStyled>
            <Subtitulo>{props.subtitulo}</Subtitulo>
        </>
    )
}