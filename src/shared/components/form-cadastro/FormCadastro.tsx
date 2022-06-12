import { Form } from '@unform/web'

import { VTextField } from '../../forms';


import React from 'react';
import { Box } from '@mui/system';
import { Button, FormControl, Grid, InputLabel, MenuItem, Select, Stack, Typography } from '@mui/material';

import './FormCadastro.css';

/*interface Ficha{
    nome: string;
    dataInicial: string;
    dataFinal: string;
    infosPropriedade: {
        id: number;
        nome: string;
    }
    cnpj: string,
    laboratorio: {
        id: number;
        nome: string;
    }
    observacoes: string;
}*/


export const FormCadastro: React.FC = () => {


    return (

        <Stack direction="column" spacing={2} boxShadow={2} width="93%" margin="0 auto">
            <Stack direction="row" style={{background: '#00796b'}} sx={{p:2}}>
                <Typography color="#ffffff" variant="h6" sx={{flexGrow: 1}}>Test front-end</Typography>
                <Button variant="text" color="primary">Salvar</Button>
            </Stack>
                <Form onSubmit={(dados) => console.log(dados)}>            
                    <Box margin={2} display="flex" flexDirection="column">
                        <Grid container direction="column" spacing={2}>
                            <Grid container item direction="row" spacing={2}>
                                <Grid item xs={6}>
                                    <VTextField
                                        fullWidth
                                        name='nomeCompleto'
                                        label='Nome*'/>
                                </Grid>
                                <Grid item xs={3}>
                                    <VTextField
                                        fullWidth
                                        name='dataInicial'
                                        label='Data Inicial*'/>
                                </Grid>
                                <Grid item xs={3}>
                                    <VTextField
                                        fullWidth
                                        name='dataFinal'
                                        label='Data Final*'/>
                                </Grid>
                            </Grid>
                            <Grid container item direction="row" spacing={2}>
                                <Grid item xs={6}>
                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">Propriedades*</InputLabel>
                                        <Select
                                            variant="standard"
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label="Laboratório">
                                            <MenuItem value={10}>Ten</MenuItem>
                                            <MenuItem value={20}>Twenty</MenuItem>
                                            <MenuItem value={30}>Thirty</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={6}>
                                    <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Laboratório*</InputLabel>
                                    <Select
                                        variant="standard"
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        label="Laboratório">
                                        <MenuItem value={10}>Ten</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
                                    </Select>
                                    </FormControl>
                                </Grid>                    
                            </Grid>
                            <Grid container item direction="row" spacing={2}>
                                <Grid item xs={12}>
                                    <VTextField
                                        fullWidth
                                        multiline
                                        rows={3}
                                        name='observacoes'
                                        label='Observações'/>
                                </Grid>                    
                            </Grid>
                        </Grid>            
                        
                    </Box>
                </Form>    
        </Stack>
        
    );
};