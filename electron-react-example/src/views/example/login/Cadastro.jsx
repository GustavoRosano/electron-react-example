import './Cadastro.css'
import React, { useState } from 'react'
import { Grid } from '@material-ui/core'
import { Button } from '@material-ui/core'

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

import clsx from 'clsx';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

export default props => {

    const currencies = [
        {
            value: 'Rondônia',
            label: 'RO',
        },
        {
            value: 'Acre',
            label: 'AC',
        },
        {
            value: 'Amazonas',
            label: 'AM',
        },
        {
            value: 'Roraima',
            label: 'RR',
        },
        {
            value: 'Pará',
            label: 'PA',
        },
        {
            value: 'Amapá',
            label: 'AP',
        },
        {
            value: 'Tocantins',
            label: 'TO',
        },
        {
            value: 'Maranhão',
            label: 'MA',
        },
        {
            value: 'Piauí',
            label: 'PI',
        },
        {
            value: 'Ceará',
            label: 'CE',
        },
        {
            value: 'Rio Grande do Norte',
            label: 'RN',
        },
        {
            value: 'Paraíba',
            label: 'PB',
        },
        {
            value: 'Pernambuco',
            label: 'PE',
        },
        {
            value: 'Alagoas',
            label: 'AL',
        },
        {
            value: 'Sergipe',
            label: 'SE',
        },
        {
            value: 'Bahia',
            label: 'BA',
        },
        {
            value: 'Minas Gerais',
            label: 'MG',
        },
        {
            value: 'Espírito Santo',
            label: 'ES',
        },
        {
            value: 'Rio de Janeiro',
            label: 'RJ',
        },
        {
            value: 'São Paulo',
            label: 'SP',
        },
        {
            value: 'Paraná',
            label: 'PR',
        },
        {
            value: 'Santa Catarina',
            label: 'SC',
        },
        {
            value: 'Rio Grande do Sul',
            label: 'RS',
        },
        {
            value: 'Mato Grosso do Sul',
            label: 'MS',
        },
        {
            value: 'Mato Grosso',
            label: 'MT',
        },
        {
            value: 'Goiás',
            label: 'GO',
        },
        {
            value: 'Distrito Federal',
            label: 'DF',
        }
    ];

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

    const [valuesP, setValuesP] = React.useState({
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

    const handleChangesP = (prop) => (event) => {
        setValuesP({ ...valuesP, [prop]: event.target.value });
    };

    const handleClickShowPasswordP = () => {
        setValuesP({ ...valuesP, showPassword: !valuesP.showPassword });
    };

    const handleMouseDownPasswordP = (event) => {
        event.preventDefault();
    };

    const [nome, setNome] = useState('')
    const [sobrenome, setSobrenome] = useState('')
    const [value, setValue] = useState('')
    const [telefone, setTelefone] = useState('')
    const [endereco, setEndereco] = useState('')
    const [complemento, setComplemento] = useState('')
    const [num, setNum] = useState('')
    const [cep, setCep] = useState('')
    const [ref, setRef] = useState('')
    const [cidade, setCidade] = useState('')

    function mudar(e) {
        setValue(e.target.value)
    }
    function mudarNome(e) {
        setNome(e.target.value)
    }
    function mudarSobrenome(e) {
        setSobrenome(e.target.value)
    }
    function mudarTelefone(e) {
        setTelefone(e.target.value)
    }
    function mudarEndereco(e) {
        setEndereco(e.target.value)
    }
    function mudarComplemento(e) {
        setComplemento(e.target.value)
    }
    function mudarNum(e) {
        setNum(e.target.value)
    }
    function mudarCep(e) {
        setCep(e.target.value)
    }
    function mudarRef(e) {
        setRef(e.target.value)
    }
    function mudarCidade(e) {
        setCidade(e.target.value)
    }

    return (
        <div>
            <h1>Cadastre-se</h1>
            <h2>__________________________________________________________________________________________</h2>
            <br />
            <Grid container className="Cadastro">
                <Grid>

                    <div>
                        <form className={classes.root} noValidate autoComplete="off">
                            <TextField required id="standard-basic" onChange={mudarNome} label="Nome:" />
                        </form>
                    </div>
                    <div>
                        <form className={classes.root} noValidate autoComplete="off">
                            <TextField required id="standard-basic" type="email" onChange={mudar} label="e-mail:" />
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
                    <br />
                    <p>____________________________________________________________________</p>
                    <div>
                        <form className={classes.root} noValidate autoComplete="off">
                            <TextField required id="standard-basic" onChange={mudarEndereco} label="Endereço:" />
                        </form>
                    </div>
                    <div>
                        <form className={classes.root} noValidate autoComplete="off">
                            <TextField id="standard-basic" onChange={mudarComplemento} label="Complemento:" />
                        </form>
                    </div>
                    <div>
                        <form className={classes.root} noValidate autoComplete="off">
                            <TextField id="standard-basic" onChange={mudarRef} label="Referência:" />
                        </form>
                    </div>
                    <div>
                        <form className={classes.root} noValidate autoComplete="off">
                            <TextField required id="standard-basic" onChange={mudarCidade} label="Cidade:" />
                        </form>
                    </div>
                    <br />
                    <div className="Btn">
                        <Button>
                            <a href="/login">Cadastre-se</a>
                        </Button>
                    </div>
                </Grid>
                <Grid>
                    <div>
                        <form className={classes.root} noValidate autoComplete="off">
                            <TextField required id="standard-basic" onChange={mudarSobrenome} label="Sobrenome:" />
                        </form>
                    </div>
                    <div>
                        <form className={classes.root} noValidate autoComplete="off">
                            <TextField required id="telefone" onChange={mudarTelefone} label="Telefone:" />
                        </form>
                    </div>
                    <div>
                        <div className={classes.root}>
                            <div>
                                <FormControl className={clsx(classes.margin, classes.textField)}>
                                    <InputLabel htmlFor="standard-adornment-password">Confirmar Senha:</InputLabel>
                                    <Input
                                        required
                                        id="standard-adornment-password"
                                        type={valuesP.showPassword ? 'text' : 'password'}
                                        value={valuesP.password}
                                        onChange={handleChangesP('password')}
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={handleClickShowPasswordP}
                                                    onMouseDown={handleMouseDownPasswordP}
                                                >
                                                    {valuesP.showPassword ? <Visibility /> : <VisibilityOff />}
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                    />
                                </FormControl>
                            </div>
                        </div>
                    </div>
                    <br />
                    <p>__________________________________________________________________</p>
                    <div>
                        <form className={classes.root} noValidate autoComplete="off">
                            <TextField required id="standard-basic" onChange={mudarNum} label="Nº:" />
                        </form>
                    </div>
                    <div>
                        <form className={classes.root} noValidate autoComplete="off">
                            <TextField required id="cep" onChange={mudarCep} label="CEP:" />
                        </form>
                    </div>
                    <div>
                        <form className={classes.root} noValidate autoComplete="off">
                            <div>
                                <TextField
                                    required
                                    id="standard-select-currency"
                                    select
                                    label="UF"
                                    value={currency}
                                    onChange={handleChange}
                                    helperText="Selecione a UF referente ao Estado em que você mora."
                                >
                                    {currencies.map((option) => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </div>
                        </form>
                    </div>
                </Grid>
            </Grid>
        </div>
    )

}