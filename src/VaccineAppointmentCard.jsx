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

const VaccineAppointmentCard = () => {
    const classes = useStyles();


    return (
        <div style={{flexgrow:1}}>
        <Card >
            <CardActionArea >
                <CardMedia
                    className={classes.media}
                    image="/static/images/cards/vaccineAppointment.jpg"
                    title="Covid-19"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                    Vaccine Appointment 
                            </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Based on Machine Learning (ML) model we developed, anyone can upload a lung CT scan image and know if the image can be classified as a Covid-19 lung image.
                            </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>            
                <Link href="/Vaccine Appointment">
                    Vaccine Appointment
                </Link>
            </CardActions>
        </Card>
        </div>
    );
};

export default VaccineAppointmentCard;