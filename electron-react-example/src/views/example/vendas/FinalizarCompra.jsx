import './Vendas.css'
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core'

import TextField from '@material-ui/core/TextField';

import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles({
    root: {
        maxWidth: 500,
        display: 'flex',
        flexWrap: 'wrap',
    },
    media: {
        height: 40,
    },
});

function alerta() {
   alert("Compra Realizada!!!");
}

export default function MediaControlCard() {
    const classes = useStyles();

    const [state, setState] = React.useState({
        checkedA: true,
        checkedB: true,
        checkedF: true,
        checkedG: true,
    });

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };


    return (
        <Grid container spacing={6} className='Home'>
            <Grid item xs={6}>
                <h1>
                    Endereço de Entrega
                </h1>
                <br />
                <h4>Gustavo Rosano Teixeira</h4>
                <p>
                    Avenida dos Ourives, 600, Bloco 6 apto 72
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    Jardim São Savério
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    SP - São Paulo
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    CEP: 04194260
                </p>
                <br />
                <br />
                <br />
                <br />
                <br />
                <p>___________________________________________________________________________________________________________________________________</p>
                <h2>Opções de Entrega</h2>
                <FormGroup row>
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={state.checkedB}
                                onChange={handleChange}
                                name="checkedB"
                                color="primary"
                            />
                        }
                        label="Receba até 20 de Julho"
                    />
                    <FormControlLabel disabled control={<Checkbox name="checkedD" />} label="Retire na Loja" />
                </FormGroup>
                <br />
                <h3>Frete: R$ 12,00</h3>
                <p>___________________________________________________________________________________________________________________________________</p>
                <h2>Formas de Pagamento</h2>
                <br />
                <h3>Cartão de Crédito</h3>
                <div className={classes.root}>
                    <div>
                        <TextField
                            id="outlined-full-width"
                            label="Número do Cartão"
                            style={{ margin: 8 }}
                            placeholder="Número do Cartão"
                            fullWidth
                            margin="normal"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="outlined"
                        />
                        <TextField
                            id="outlined-full-width"
                            label="Nome Impresso no Cartão"
                            style={{ margin: 8 }}
                            placeholder="Nome Impresso no Cartão"
                            fullWidth
                            margin="normal"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="outlined"
                        />&nbsp;&nbsp;
                        <TextField
                            label="Validade"
                            placeholder="Validade"
                            id="outlined-margin-none"
                            className={classes.textField}
                            variant="outlined"
                        />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <TextField
                            label="CVV"
                            placeholder="CVV"
                            id="outlined-margin-none"
                            className={classes.textField}
                            variant="outlined"
                        />
                    </div>
                </div>
                <br />
                <br />
                <h2>
                    Total:
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    R$ 8.511,99
                </h2>
                <Button size="large" onClick={alerta}>
                    <a href="/">Finalizar Pedido</a>
                </Button>
            </Grid>
            <Grid item xs={5}>
                <br />
                <br />
                <br />
                <Card className={classes.root}>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h4">
                            Resumo da Compra
                        </Typography>
                        <br />
                        <br />
                        <Typography variant="body2" component="p">
                            1 produto(s)
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            R$ 8.499,99
                            </Typography>
                        <br />
                        <Typography variant="body2" component="p">
                            <br />
                                <hr/>
                        </Typography>
                        <div>
                            <br />
                            <br />
                            <Typography variant="h6" component="h6">
                                Total
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                R$ 8.499,99
                            </Typography>
                        </div>
                    </CardContent>
                </Card>
            </Grid>
        </Grid >
    );
}