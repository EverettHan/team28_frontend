import React from 'react';
import Grid from '@material-ui/core/Grid';
import CovidSymptomsCard from './CovidSymptomsCard';
import EmergencySignsCard from './EmergencySignsCard';
import CovidMapCard from './CovidMapCard';
import VaccineInformationCard from './VaccineInformationCard';
import VaccineAppointmentCard from './VaccineAppointmentCard';
import RunTestCard from './RunTestCard';

function CovidInfo() {

    return (
        <div style={{ flexgrow: 1 }}>

            <Grid container spacing={3}>
                <Grid item xs={4}>
                    <CovidSymptomsCard />
                </Grid>
                <Grid item xs={4}>
                    <EmergencySignsCard />
                </Grid>
                <Grid item xs={4}>
                    <CovidMapCard />
                </Grid>
                <Grid item xs={4}>
                    <VaccineInformationCard />
                </Grid>
                <Grid item xs={4}>
                    <VaccineAppointmentCard />
                </Grid>
                <Grid item xs={4}>
                    <RunTestCard />
                </Grid>
            </Grid>
        </div >
    );
}

export default CovidInfo;