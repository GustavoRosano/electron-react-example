import './Vendas.css'
import './Carrinho.css'
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core'
import Input from '@material-ui/core/Input';

import TextField from '@material-ui/core/TextField';

import PS5 from '../../../assets/ps5.jpg'
import ProdPs4 from '../products/ProdPs4'

const useStyles = makeStyles({
    root: {
        maxWidth: 500,
    },
    media: {
        height: 40,
    },
});

const preco = 8499.99;
const frete = 12.00;

const total = preco + frete;

class Contador extends React.Component {

    state = {
        numero: 1
    }

    inc = () => {
        this.setState({
            numero: this.state.numero + 1
        })
    }

    dec = () => {
        this.setState({
            numero: this.state.numero - 1
        })
    }

    render() {
        return (

            <div>
                <Button className="btn" onClick={this.dec}>-</Button>
                <Input
                    className="Qtde"
                    value={this.state.numero}
                    readonly
                ></Input>
                <Button className="btn" onClick={this.inc}>+</Button>
            </div>

        )
    }
}

class Pedido extends React.Component {

    render() {
        return (
            <Typography variant="body2" color="textSecondary" component="p">
                1 produto(s)
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                {preco}
            </Typography>
        )
    }
}


function MediaControlCard() {
    const classes = useStyles();

    return (
        <Grid container spacing={6} className='Home'>
            <Grid item xs={8}>
                <h1>
                    Meu Carrinho
                </h1>
                <br />
                <h4>
                    Produto
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    Qtd.
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    Preço
                </h4>
                <h6><hr /></h6>
                <div>
                    <table>
                        <tr>
                            <td><img src={PS5} width="150" height="100" /></td>
                            <td> <h4>&nbsp;&nbsp;Playstation 5 &nbsp;&nbsp;&nbsp;&nbsp;</h4> </td>
                            <td>
                                <form className={classes.root} noValidate autoComplete="off">
                                    <div>
                                        <Contador />
                                    </div>
                                </form>
                            </td>
                            <td className="valor">
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                R$ {preco}
                            </td>
                        </tr>

                    </table>
                </div>
                <h6><hr /></h6>
                <br />
                
                <ProdPs4 />
                
            </Grid>
            <Grid item xs={4}>
                <br />
                <br />
                <br />
                <Card className={classes.root}>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h4">
                            Resumo do pedido
                        </Typography>
                        <br />
                        <br />
                        <Pedido />
                        <br />
                        <Typography variant="body2" component="p">
                            <br />
                            <hr />
                        </Typography>
                        <div>
                            <div>
                                <br />
                                <br />
                                <div className="Container-item">
                                    <div>
                                        <form className={classes.root} noValidate autoComplete="off">
                                            <div>
                                                <TextField id="cep" value="04194-260" />
                                                <Button>Ok</Button>
                                            </div>
                                            <div>
                                                <h4>
                                                    Receba até:
                                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                    Frete:
                                            </h4>
                                                <p>
                                                    20 de Junho
                                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                    {frete}
                                                </p>
                                            </div>
                                            <br />
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <br />
                            <br />
                            <Typography variant="h6" component="h6">
                                Total
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                R$ {total}
                            </Typography>
                        </div>
                        <Typography variant="body2" component="p">
                            <br />
                            <hr />
                        </Typography>
                        <div>
                            <br />
                            <Button size="large">
                                <a href="/finalizar-compra">Continuar</a>
                            </Button>
                        </div>
                    </CardContent>

                </Card>
            </Grid>
        </Grid >
    );
}

export default MediaControlCard