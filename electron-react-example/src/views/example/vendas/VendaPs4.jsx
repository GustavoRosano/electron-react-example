import './Vendas.css'
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core'

import TextField from '@material-ui/core/TextField';

import PS4 from '../../../assets/ps4.jpg'

const useStyles = makeStyles({
    root: {
        maxWidth: 500,
    },
    media: {
        height: 40,
    },
});

const value = "R$ 2.519,99"

function mostra() {
    document.getElementById('ma').style.display = 'block'
}

export default function MediaControlCard() {
    const classes = useStyles();

    return (
        <Grid container spacing={3} className='Home'>
            <Grid item xs={6}>
                <Card className={classes.root}>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    <img src={PS4} width="300" height="300" />
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image="/static/images/cards/contemplative-reptile.jpg"
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h4" component="h2">
                                Playstation 4
                        </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                O PlayStation®4 é o melhor lugar para jogar jogos dinâmicos e conectados, com gráfico rico e alta velocidade, personalização inteligente.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>

            <Grid item xs={6}>
                <Card className={classes.root}>

                    <CardContent>
                        <Typography gutterBottom variant="h3" component="h2">
                            {value}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            em até 12x sem juros no cartão de crédito com ame e receba R$ 9,40 de volta.
                            </Typography>
                        <br />
                        <Typography variant="body2" color="textSecondary" component="p">
                            {value} em até 15x sem juros no cartão Americanas com Ame e receba R$ 9,40 de volta.
                            </Typography>
                        <Typography variant="h5" component="h3">
                            <br />
                            <hr />
                        </Typography>
                        <div>
                            <br />
                            <br />
                            <br />
                            <div className="Container-item">
                                <div>
                                    <form className={classes.root} noValidate autoComplete="off">
                                        <div>
                                            <TextField id="cep" label="Digite o CEP" />
                                            <Button onClick={mostra}>Ok</Button>
                                        </div>
                                        <div id='ma' className="Container">
                                            <h4>
                                                Receba até :
                                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                Frete:
                                            </h4>
                                            <p>
                                                20 de Julho
                                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                R$ 12,00
                                            </p>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <Typography variant="h5" component="h3">
                            <br />
                            <hr />
                        </Typography>
                        <div>
                            <br />
                            <Button size="large">
                                <a href="/carrinho">Comprar</a>
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
}