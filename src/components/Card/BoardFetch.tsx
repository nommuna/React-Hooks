import React, { Fragment, useState, useEffect } from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const BoardFetch: React.FC = () => {
    const [data, setData] = useState({items: []});

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

    useEffect(() => {
        async function fetchData() {
            const response = await fetch("https://hn.algolia.com/api/v1/search?query=react");
            const results = await response.json();
            setData({items: results.hits});

        }
        fetchData();
    },[]);

    //console.log(data);

    return(
        <Fragment>
            <Grid container spacing={3}>
                    {data.items.map((item:any, i) => (
                        <Grid key = {i} item xs={3}>
                            <br/>
                            <Card className={classes.card}>
                            <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image="/static/images/cards/contemplative-reptile.jpg"
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                {item.author}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                {item.url}
                                </Typography>
                            </CardContent>
                            </CardActionArea>
                        </Card>
                      </Grid>
                    ))}
                </Grid>
        </Fragment>

    );
}

export default BoardFetch;