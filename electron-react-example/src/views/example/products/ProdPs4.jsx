import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Grid } from '@material-ui/core'
import Input from '@material-ui/core/Input';

import PS4 from '../../../assets/ps4.jpg'
import Contador from '../Contador/Qtde'

const useStyles = makeStyles({
    root: {
        maxWidth: 500,
    },
    media: {
        height: 40,
    },
});

const precoPs4 = 2519.99;

function MediaControlCard() {
    const classes = useStyles();

    return (
        <Grid container spacing={6} className='Home'>
            <Grid item xs={8}>
                <div>
                    <table>
                        <tr>
                            <td><img src={PS4} width="100" height="100" /></td>
                            <td> <h4>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                Playstation 4
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </h4> </td>
                            <td>
                                <form className={classes.root} noValidate autoComplete="off">
                                    <div>
                                        <Contador />
                                    </div>
                                </form>
                            </td>
                            <td className="valor">
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                R$ {precoPs4}
                            </td>
                        </tr>

                    </table>
                </div>
            </Grid>
        </Grid >
    );
}

export default MediaControlCard