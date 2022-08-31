import { Typography } from '@material-ui/core';

const VaccineInformation = () => {

    return (
        <div style={{ flexgrow: 1 }}>
            <Typography paragraph>
                <h2>
                    Covid-19 Vaccine Information
                </h2>
                <div >
                <iframe src="https://www.cdc.gov/coronavirus/2019-ncov/vaccines/keythingstoknow.html" height="700" width="1200"/>
                </div>
            </Typography>
        
        </div >
    );
};


export default VaccineInformation;