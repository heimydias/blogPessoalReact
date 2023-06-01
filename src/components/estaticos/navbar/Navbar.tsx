import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToken } from '../../../store/token/Actions';
import { UserState } from '../../../store/token/Reducer';
import './Navbar.css';
import { toast } from 'react-toastify';

function Navbar() {
    // const [token, setToken] = useLocalStorage('token');
    let navigate = useNavigate();

    const dispatch = useDispatch()

    const token = useSelector<UserState, UserState["tokens"]>(
        (state) => state.tokens
    )

    function goLogout() {
        dispatch(addToken(''))
        toast.info('Usuário Desconectado!', {
            position: 'top-right',
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            theme: 'colored',
            progress: undefined,
        });
        navigate('/login')
    }

    var navbarComponent;

    if (token !== '') {
        navbarComponent =
            <AppBar position="static" style={{ backgroundColor: '#FF69B4' }}>
                <Toolbar variant="dense">
                    <Box mx={6} className='cursor'>
                        <Typography variant="h5" color="inherit">
                            BlogPessoal
                        </Typography>
                    </Box>
                    <Box display="flex" justifyContent="start">
                        <Link to="/home" className="text-decorator-none">
                            <Box mx={6} className='cursor'>
                                <Typography variant="h6" color="inherit">
                                    Home
                                </Typography>
                            </Box>
                        </Link>
                        {/* <Link to="/posts" className="text-decorator-none">
                            <Box mx={12} className='cursor'>
                                <Typography variant="h6" color="inherit">
                                    postagens
                                </Typography>
                            </Box>
                        </Link> */}
                        <Link to="/temas" className="text-decorator-none">
                            <Box mx={6} className='cursor'>
                                <Typography variant="h6" color="inherit">
                                    Temas
                                </Typography>
                            </Box>
                        </Link>
                        <Link to="/formularioTema" className="text-decorator-none">
                            <Box mx={6} className='cursor'>
                                <Typography variant="h6" color="inherit">
                                    Cadastrar Tema
                                </Typography>
                            </Box>
                        </Link>
                        <Link to="/perfil" className="text-decorator-none">
                            <Box mx={6} className='cursor'>
                                <Typography variant="h6" color="inherit">
                                    Perfil
                                </Typography>
                            </Box>
                        </Link>
                        <Box mx={6} className='cursor' onClick={goLogout}>
                            <Typography variant="h6" color="inherit">
                                Logout
                            </Typography>
                        </Box>
                    </Box>
                </Toolbar>
            </AppBar>
    }
    return (
        <>
            {navbarComponent    }
        </>
    )
}

export default Navbar;