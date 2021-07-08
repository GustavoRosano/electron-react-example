import './Home.css'
import React from 'react'
import PS5 from '../../assets/ps5.jpg'
import Notebook from '../../assets/notebook.png'
import Eletronicos from '../../assets/eletronicos-teste.jpg'
import NotebookLenovo from '../../assets/notebook-lenovo.jpg'
import Iphone12ProMax from '../../assets/iphone12-pro-max.jpg'
import PS4Jogos from '../../assets/ps4+jogos.jpg'
import CarregadorControle from '../../assets/carregador-controle.jpg'
import ControlePs4Camuflado from '../../assets/controle-ps4-camuflado.jpg'
import ContorlePs5 from '../../assets/controle-ps5.jpg'

import { Link } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles({
    root: {
        maxWidth: 500,
    },
});

export default props => {
    const classes = useStyles();

    return (
        <Grid container spacing={3} className='Home'>
            <Grid item xs={12}>
                <div>
                    <form className={classes.root} noValidate autoComplete="off">
                        <div>
                            <TextField id="standard-search" label="Pesquisar..." type="search" />
                            <Button>
                                <SearchIcon />
                            </Button>
                            <Button>
                                <Link to="/login">
                                    <AccountCircleIcon fontSize="large" />
                                </Link>
                            </Button>
                        </div>
                    </form>
                </div>
                <br />
                <br />
                <h2>Seja Bem Vindo!!!</h2>
                <p>Venha Conferir nosso produtos já...</p>
                <br />
                <br />
                <img src={Eletronicos} width="1000" height="300" />
                <br/>
                <br/>
                <h2><hr/></h2>
            </Grid>
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
                    <img src={Notebook} width="500" height="300" />
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image="/static/images/cards/contemplative-reptile.jpg"
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h4" component="h2">
                                Notebook Acer Aspire 5
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Potência e agilidade para todas as tarefas! Desenvolvido para não deixar você parar, o Aspire 5 tem a tecnologia que acompanha seu estilo de vida.
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                R$ 4.084,05
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
                        <img src={NotebookLenovo} width="500" height="300" />
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image="/static/images/cards/contemplative-reptile.jpg"
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h4" component="h2">
                                    Notebook IdeaPad S145 AMD
                            </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                Notebook IdeaPad S145 AMD
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    R$ 3.299,00
                                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
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
                                <a href="/venda-ps">Compre já o seu!!!</a>
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>

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

    );
}