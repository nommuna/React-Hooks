import React, { Fragment, useState, useEffect } from 'react';
import { Container } from '@material-ui/core';
//import Card from '../Card/Card';
import Grid from '@material-ui/core/Grid';
import data from '../../MOCK_DATA.json';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Menubar from '../MenuBar/Menubar';

const Board: React.FC = () => {

    const useStyles = makeStyles(
        createStyles({
          card: {
            maxWidth: 345,
          },
          media: {
            height: 140,
          },
        }),
      );

    const classes = useStyles();
    const [appInfo, setAppInfo] = useState({Name: "App Name"});

    // const changeTitle = (item: any) => {
    //   console.log(item);
    //   x = item;
    // }

    return (
        <Fragment>
            <Container fixed>
              <Menubar data = {appInfo}/>
                <Grid container spacing={3}>
                    {data.map((item, i) => (
                        <Grid key = {i} item xs={3}>
                            <br/>
                            <Card className={classes.card}>
                            <CardActionArea onClick= {() => setAppInfo(item as any)}>
                            <CardMedia
                                className={classes.media}
                                image="/static/images/cards/contemplative-reptile.jpg"
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                {item.Name}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                {item.Url}
                                </Typography>
                            </CardContent>
                            </CardActionArea>
                        </Card>
                      </Grid>
                    ))}
                </Grid>
            </Container>
        </Fragment>
    )
}

export default Board;