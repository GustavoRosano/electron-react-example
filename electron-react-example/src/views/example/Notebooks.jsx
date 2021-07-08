import './Home.css'
import React from 'react'
import PS4Spider from '../../assets/ps4-spiderman.jpg'
import Notebook from '../../assets/notebook.png'
import NotebookAcer from '../../assets/notebook-acer.jpg'
import NotebookSansung from '../../assets/notebook-sansung.jpg'
import NotebookLenovo from '../../assets/notebook-lenovo.jpg'

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
            <h1>Computadores</h1>
            <hr />
            <br />
            <br />
            <Grid container spacing={3} className='Home'>
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
                                <a href="/venda-ps">Compre já o seu!!!</a>
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>

                <Grid item xs={6}>
                    <Card className={classes.root}>
                        <img src={NotebookAcer} width="500" height="300" />
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image="/static/images/cards/contemplative-reptile.jpg"
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h4" component="h2">
                                    Notebook Acer - Aspire 3
                            </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Notebook Acer Aspire 3 A315-42-R1B0 AMD Ryzen 5 3500U 15,6" 12GB HD 1 TB Windows 10
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
                        <img src={NotebookSansung} width="500" height="300" />
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image="/static/images/cards/contemplative-reptile.jpg"
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h4" component="h2">
                                    Notebook Samsung Expert X30
                            </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Notebook Samsung Expert X30 Intel Core i5 8250U 15,6" 8GB HD 1 TB 8ª Geração Windows 10.
                                    </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    R$ 5.608,03
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
            </Grid>
            <br />
            <br />
            <br />
        </Container>
    );
}