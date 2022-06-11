

import { AppBar } from '@mui/material';
import { Box } from '@mui/system';
import './MenuHeader.css';


export const MenuHeader: React.FC = () => {

    return (
        <AppBar className="MenuHeader" style={{background : '#ffffff'}}>
            <Box component="img" sx={{ height: 36,}} alt="your logo." src={"https://suporte.agrotis.com/media/cache/0b/52/0b52dca0e8972108e096edc49b433f20.jpg"}>
            </Box>
        </AppBar>
    );
};