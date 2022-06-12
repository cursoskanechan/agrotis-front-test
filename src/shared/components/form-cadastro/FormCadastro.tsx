import { Form } from '@unform/web'

import { VTextField } from '../../forms';


import React, { useRef } from 'react';
import { Box } from '@mui/system';
import { Button, FormControl, Grid, InputLabel, MenuItem, Select, Stack, Typography } from '@mui/material';

import { FormHandles } from '@unform/core';
import { FormInputText } from '../../forms/FormInputText';
import { FormInputDate } from "../../forms/FormInputDate";
import { FormProvider, useForm } from "react-hook-form";
import { FormInputDropdown } from '../../forms/FormInputDropdown';
import './FormCadastro.css';

interface IFormInput {
    textValue: string;
    radioValue: string;
    checkboxValue: string[];
    dateValue: Date;
    dropdownValue: string;
    sliderValue: number;
  }

  const defaultValues = {
    textValue: "",
    radioValue: "",
    checkboxValue: [],
    dateValue: new Date(),
    dropdownValue: "",
    sliderValue: 0,
  };

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

    const formRef = useRef<FormHandles>(null);

    const methods = useForm<IFormInput>({ defaultValues: defaultValues });
    const { handleSubmit, reset, control, setValue, watch } = methods;
    const onSubmit = (data: IFormInput) => console.log(data);


    return (

        <Stack direction="column" spacing={2} boxShadow={2} width="93%" margin="0 auto">
            <Stack direction="row" style={{background: '#00796b'}} sx={{p:2}}>
                <Typography color="#ffffff" variant="h6" sx={{flexGrow: 1}}>Test front-end</Typography>
                <Button 
                    variant="text" 
                    color="primary" 
                    onClick={handleSubmit(onSubmit)}>
                        {" "}
                        Salvar{" "}
                    </Button>
            </Stack>
                <Stack>
                    <Box margin={2} display="flex" flexDirection="column">
                        <Grid container direction="column" spacing={2}>
                            <Grid container item direction="row" spacing={2}>
                                <Grid item xs={6}>
                                    <FormInputText
                                        name='nomeCompleto'
                                        label='Nome*'
                                        control={control}/>
                                </Grid>
                                <Grid item xs={3}>
                                    data inicial
                                </Grid>
                                <Grid item xs={3}>
                                    data final
                                </Grid>
                            </Grid>
                            <Grid container item direction="row" spacing={2}>
                                <Grid item xs={6}>
                                    <FormInputDropdown
                                        name="infosPropriedades"
                                        control={control}
                                        label="Propriedades*"
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <FormInputDropdown
                                        name="laboratorio"
                                        control={control}
                                        label="Laboratorio*"
                                    />
                                </Grid>                    
                            </Grid>
                            <Grid container item direction="row" spacing={2}>
                                <Grid item xs={12}>
                                    <FormInputText
                                        name='observacoes'
                                        label='Observações*'
                                        control={control}
                                        />
                                </Grid>                    
                            </Grid>
                        </Grid>            
                        
                    </Box>
                </Stack>              
        </Stack>
        
    );
};