import { AppBar, Toolbar, Typography, Container, IconButton } from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';

const Navbar = () => {
    const theme = useTheme();

    return (
        <AppBar position="sticky" elevation={0}>
            <Container maxWidth="lg">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{
                            flexGrow: 1,
                            fontWeight: 'bold',
                            cursor: 'pointer'
                        }}
                    >
                        TechNews
                    </Typography>
                    <IconButton color="inherit">
                        {theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
                    </IconButton>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Navbar;

