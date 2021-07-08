import './Input.css'
import React, { useState } from 'react'
import { Input } from '@material-ui/core'
import { Grid } from '@material-ui/core'
import { Button } from '@material-ui/core'

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import clsx from 'clsx';
import IconButton from '@material-ui/core/IconButton';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

export default props => {

    const useStyles = makeStyles((theme) => ({
        root: {
            '& > *': {
                margin: theme.spacing(1),
                width: '55ch',
                display: 'flex',
                flexWrap: 'wrap',
            },
        },
        margin: {
            margin: theme.spacing(1),
        },
        withoutLabel: {
            marginTop: theme.spacing(3),
        },
        textField: {
            width: '50ch',
        },
    }));

    const classes = useStyles();
    const [currency, setCurrency] = React.useState('EUR');

    const handleChange = (event) => {
        setCurrency(event.target.value);
    };

    const [values, setValues] = React.useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
    });

    const handleChanges = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const [value, setValue] = useState('')
    const [senha, setSenha] = useState('')

    function mudar(e) {
        setValue(e.target.value)
    }
    function mudarSenha(e) {
        setSenha(e.target.value)
    }

    return (
        <Grid container className="Input">
            <Grid item xl={6}>
                <h1>Login</h1>
                <h2>__________________________________________________________________________________________</h2>
                <div>
                    <form className={classes.root} noValidate autoComplete="off">
                        <TextField id="standard-basic" type="email" onChange={mudar} label="e-mail:" />
                    </form>
                </div>
                <div>
                    <div className={classes.root}>
                            <div>
                                <FormControl className={clsx(classes.margin, classes.textField)}>
                                    <InputLabel htmlFor="standard-adornment-password">Senha</InputLabel>
                                    <Input
                                        required
                                        id="standard-adornment-password"
                                        type={values.showPassword ? 'text' : 'password'}
                                        value={values.password}
                                        onChange={handleChanges('password')}
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={handleClickShowPassword}
                                                    onMouseDown={handleMouseDownPassword}
                                                >
                                                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                    />
                                </FormControl>
                            </div>
                        </div>
                </div>
                <div className="Btn">
                    <Button>
                        <a href="/">Entrar</a>
                    </Button>
                </div>
                <div className="Btn">
                    <Button>
                        <a href="/cadastro">Ainda Não Tenho Cadastro</a>
                    </Button>
                </div>
                <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            </Grid>
        </Grid>
    )
}