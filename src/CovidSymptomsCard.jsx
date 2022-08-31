import React from 'react';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    media: {
        height: 140,
    },
}));

const CovidSymptomsCard = () => {
    const classes = useStyles();

    return (
        <div style={{ flexgrow: 1 }}>
            <Card >
                <CardActionArea >
                    <CardMedia
                        className={classes.media}
                        image="/static/images/cards/covidSymptoms.jpg"
                        title="Covid-19"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Covid-19 Symptoms
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                        People with COVID-19 have had a wide range of symptoms reported &ndash; ranging from mild symptoms to severe illness. Symptoms may appear <strong>2-14 days after exposure</strong> <strong>to the virus.</strong> People with these symptoms may have COVID-19: 
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                <Link href="/Covid Symptoms" >
                Covid-19 Symptoms
                </Link>
                </CardActions>
            </Card>
        </div>
    );
};

export default CovidSymptomsCard;