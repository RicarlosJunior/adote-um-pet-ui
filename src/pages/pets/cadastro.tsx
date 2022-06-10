import { NextPage } from 'next'
import { useCadastro } from '../../data/hooks/pages/pets/useCadastro';
import Titulo from '../../ui/components/Titulo/Titulo';
import { Paper, Grid, TextField, Button, Snackbar  } from '@mui/material'

const Cadastro: NextPage = () => {
    return (
        <>
            <Titulo 
                titulo={'Cadastro de Pets para Adoção'}
                subtitulo={'Preencha os dados do novo pet'} />
            <Paper sx={{ maxWidth: 970, mx: 'auto', p: 5}}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <TextField
                            label={'Nome'}
                            placeholder={'Digite o nome do pet'}
                            fullWidth />
                    </Grid>
                    <Grid item xs={12}>
                    <TextField
                            label={'História'}
                            multiline
                            fullWidth
                            rows={4} />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label={'Foto'}
                            placeholder={'Digite o endereço da imagem'}
                            fullWidth />

                        <Button variant={'contained'}
                            color={'secondary'}
                            sx={{mt:2}}
                            component={'a'}
                            href={'https://imgur.com/upload'}
                            target={'_blank'}>
                            Enviar Imagem
                        </Button>
                    </Grid>
                    <Grid item xs={12} sx={{textAlign: 'center'}}>
                        <Button 
                            variant={'contained'}
                            fullWidth
                            sx={{maxWidth: {md:200}, mt:4}}>
                            Cadastrar Pet    
                        </Button>
                    </Grid>
                </Grid>
            </Paper>
            <Snackbar open={false} message={'Pet Cadastrado'}/>
               
        </>
    )
}

export default Cadastro;