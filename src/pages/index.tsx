import { Button, Dialog, DialogActions, Grid, Snackbar, TextField } from '@mui/material'
import type { NextPage } from 'next'
import Lista from '../ui/components/Lista/Lista'
import Titulo from '../ui/components/Titulo/Titulo'
import { useIndex } from '../data/hooks/pages/useIndex'

const Home: NextPage = () => {
  const {
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
  } = useIndex();


  return (
    <div>
     <Titulo 
     titulo="" 
     subtitulo={
      <span>
        Com um pequeno valor mensal, você <br/> pode <strong>adotar um PET virtualmente! </strong>
      </span>
     }/>
     <Lista 
        pets={listaPets}
        onSelect={(pet) => setPedSelecionado(pet)}
        />

          <Dialog open={petSelecionado !== null} fullWidth PaperProps={{ sx: { p: 5 } }} onClose={() => setPedSelecionado(null)}>
              <Grid container spacing={2}>
                  <Grid item xs={12}>
                      <TextField label={'E-mail'} fullWidth type={'email'} value={email} onChange={(e) => setEmail(e.target.value)}/>
                  </Grid>
                  <Grid item  xs={12}>
                      <TextField label={'Valor'} fullWidth type={'number'} value={valor} onChange={(e) => setValor(e.target.value)}/>
                  </Grid>
              </Grid>
              <DialogActions sx={{ mt: 5}}>
                  <Button color={'secondary'} onClick={() => setPedSelecionado(null)}>
                      Cancelar
                  </Button>
                  <Button variant={'contained'} onClick={() => adotar()}>
                      Confirmar Adoção
                  </Button>

              </DialogActions>
          </Dialog>
          <Snackbar open={mensagem.length > 0} message={mensagem} autoHideDuration={2500} onClose={() => setMensagem('')}/> 
    </div>
  )
}

export default Home
