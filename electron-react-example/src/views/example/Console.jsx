import './Home.css'
import React from 'react'
import PS5 from '../../assets/ps5.jpg'
import PS4 from '../../assets/ps4.jpg'
import PS4Jogos from '../../assets/ps4+jogos.jpg'
import PS4Spider from '../../assets/ps4-spiderman.jpg'
import ControlePs4Preto from '../../assets/controle-ps4-preto.jpg'
import ControlePs4Camuflado from '../../assets/controle-ps4-camuflado.jpg'
import ContorlePs5 from '../../assets/controle-ps5.jpg'
import CarregadorControle from '../../assets/carregador-controle.jpg'

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
            <h1>Consoles</h1>
            <hr />
            <br />
            <br />
            <Grid container spacing={3} className='Home'>
                <Grid item xs={6}>
                    <Card className={classes.root}>
                        <img src={PS5} width="500" height="300" />
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image="/static/images/cards/contemplative-reptile.jpg"
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h4" component="h2">
                                    Playstation 5
                            </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Jogar Não Tem Limites Desfruta de um carregamento de jogos quase instantâneo com um SSD ultrarrápido, envolvimento mais profundo com suporte para feedback háptico, gatilhos...
                            </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    R$ 8.499,99
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
                                <Typography variant="body2" color="textSecondary" component="p">
                                    R$ 2.519,99
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small">
                                <a href="/venda-ps4">Compre já o seu!!!</a>
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>

                <Grid item xs={6}>
                    <Card className={classes.root}>
                        <img src={PS4Jogos} width="500" height="300" />
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
                                    Console Playstation 4 Hits 1TB Bundle 15 - Games Spider-Man: Goty + Horizon Zero Dawn: Complete Edition + Ratchet-e-Clank
                                    </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    R$ 3.299,99
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small">
                                <a href="/venda-ps4-jogos">Compre já o seu!!!</a>
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>

                <Grid item xs={6}>
                    <Card className={classes.root}>
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        <img src={PS4Spider} width="300" height="300" />
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
                                    Console PS4 Slim 500GB com 2 Anos de Garantia e Jogo Spiderman
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    R$ 2.999,99
                                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small">
                                <a href="/venda-ps4-spider">Compre já o seu!!!</a>
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
            <br />
            <br />
            <br />
            <h1>Acessórios</h1>
            <hr />
            <br />
            <br />
            <Grid container spacing={3} className='Home'>
                <Grid item xs={6}>
                    <Card className={classes.root}>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <img src={CarregadorControle} width="400" height="300" />
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image="/static/images/cards/contemplative-reptile.jpg"
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h4" component="h2">
                                    Carregador de Controle Playstation 4
                            </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Carregador de Controle Playstation 4
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    R$ 163,40
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
                        <img src={ControlePs4Preto} width="500" height="300" />
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image="/static/images/cards/contemplative-reptile.jpg"
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h4" component="h2">
                                    Controle Ps4 PRETO - Dualshock 4
                            </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Controle para Playstation 4 na cor preta.
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    R$ 299,99
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
                        <img src={ControlePs4Camuflado} width="500" height="300" />
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image="/static/images/cards/contemplative-reptile.jpg"
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h4" component="h2">
                                    Controle sem fio Dualshock Ps4 - Camuflado Verde
                            </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Controle sem fio Dualshock Ps4 - Camuflado Verde
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    R$ 439,34
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
                        <img src={ContorlePs5} width="500" height="300" />
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image="/static/images/cards/contemplative-reptile.jpg"
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h4" component="h2">
                                    Controle Dualsense - PS5
                            </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Controle Dualsense - PS5
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    R$ 445,55
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
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
            </Grid>
        </Container>
    );
}