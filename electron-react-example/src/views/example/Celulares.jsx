import './Home.css'
import React from 'react'
import Iphone12ProMax from '../../assets/iphone12-pro-max.jpg'
import MotoG10 from '../../assets/moto-g10.jpg'
import SamsungA31 from '../../assets/samsung-a31.jpg'
import XiaomiMi9TPro from '../../assets/xiaomi-mi9T-pro.jpg'

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';

import { Container } from '@material-ui/core'

import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles({
    root: {
        maxWidth: 500,
    },
});

export default props => {
    const classes = useStyles();

    return (
        <Container>
            <div>
                <form className={classes.root} noValidate autoComplete="off">
                    <div>
                        <TextField id="standard-search" label="Pesquisar..." type="search" />
                        <Button>
                            <SearchIcon />
                        </Button>
                    </div>
                </form>
            </div>
            <br />
            <br />
            <br />
            <br />
            <h1>Celulares</h1>
            <hr />
            <br />
            <br />
            <Grid container spacing={3} className='Home'>
                <Grid item xs={6}>
                    <Card className={classes.root}>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <img src={Iphone12ProMax} width="300" height="300" />
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image="/static/images/cards/contemplative-reptile.jpg"
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h4" component="h2">
                                    IPhone 12 Pro Max Apple
                            </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    IPhone 12 Pro Max Apple 128GB Grafite Tela de 6,7”, Câmera Tripla de 12MP, iOS.
                            </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    R$ 8.183,07
                                    <br />
                                    <br />
                                    <br />
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small">
                                <a href="/venda-ps">Compre já o seu!!!</a>
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>

                <Grid item xs={6}>
                    <Card className={classes.root}>
                        <img src={MotoG10} width="500" height="300" />
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image="/static/images/cards/contemplative-reptile.jpg"
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h4" component="h2">
                                    Motorola Moto G10
                            </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Smartphone Motorola Moto G10 Azul 64GB, 4GB Ram, Tela de 6.5”, Câmera Traseira Quádrupla, Android 11 e Processador Qualcomm 460 Octa-Core.
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    R$ 2.749,00
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small">
                                <a href="/venda-notebook">Compre já o seu!!!</a>
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>

                <Grid item xs={6}>
                    <Card className={classes.root}>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <img src={SamsungA31} width="350" height="300" />
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image="/static/images/cards/contemplative-reptile.jpg"
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h4" component="h2">
                                    Samsung Galaxy A31
                            </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Smartphone Samsung Galaxy A31 - 128 GB - Preto
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    R$ 1.394,10
                                    <br />
                                    <br />
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small">
                                <a href="/venda-ps">Compre já o seu!!!</a>
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>

                <Grid item xs={6}>
                    <Card className={classes.root}>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <img src={XiaomiMi9TPro} width="250" height="300" />
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image="/static/images/cards/contemplative-reptile.jpg"
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h4" component="h2">
                                    XIAOMI MI 9T PRO 128GB
                            </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    SMARTPHONE XIAOMI MI 9T PRO 128GB 6GB RAM VERSÃO GLOBAL BRANCO
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    R$ 2.151,00</Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small">
                                <a href="/venda-notebook">Compre já o seu!!!</a>
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
            <br />
            <br />
            <br />
        </Container>
    );
}