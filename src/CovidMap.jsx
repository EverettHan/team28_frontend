import { Typography } from '@material-ui/core';

const CovidMap = () => {

    return (
        <div style={{ flexgrow: 1 }}>
            <Typography paragraph>
                <h2>
                    Covid-19 US Cases by County
                </h2>
                <div >
                <iframe src="https://coronavirus.jhu.edu/us-map" height="700" width="1200"/>
                </div>
            </Typography>
        
        </div >
    );
};


export default CovidMap;