import { Typography } from '@material-ui/core';

const VaccineAppointment = () => {

    return (
        <div style={{ flexgrow: 1 }}>
            <Typography paragraph>
                <h2>
                    Covid-19 Vaccine Appointment Finder
                </h2>
                <div >
                <iframe src="https://www.macovidvaccines.com/" height="700" width="1200"/>
                </div>
            </Typography>
        
        </div >
    );
};


export default VaccineAppointment;