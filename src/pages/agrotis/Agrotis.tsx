import { Box } from "@mui/system";
import { MenuHeader } from "../../shared/components";
import { FormCadastro } from "../../shared/components/form-cadastro/FormCadastro";



export const Agrotis = () => {

    return (
        <Box height="100%" display="flex" flexDirection="column" gap={1}>
            <Box padding={4} display="flex" alignItems="center">
              <MenuHeader/>
            </Box>
            <Box>
              <FormCadastro/>
            </Box>
        </Box>
    );
};