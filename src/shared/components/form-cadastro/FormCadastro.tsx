import { Form } from '@unform/web'
import { VTextField } from '../../forms';


import './FormCadastro.css';

export const FormCadastro: React.FC = () => {

    return (
        <Form onSubmit={(dados) => console.log(dados)}>
            <VTextField
                name='nomeCompleto'
                label='Nome*'/>

            <button type='submit'>Submit</button>
        </Form>
    );
};