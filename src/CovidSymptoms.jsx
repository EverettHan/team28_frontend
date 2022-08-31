import { Typography } from '@material-ui/core';

const CovidSymptoms = () => {

    return (
        <div style={{ flexgrow: 1 }}>
            <Typography paragraph>
                <h2 >Watch for symptoms</h2>
                <div class="public-symptoms">
                    <div class=""><p>People with COVID-19 have had a wide range of symptoms reported &ndash; ranging from mild symptoms to severe illness. Symptoms may appear <strong>2-14 days after exposure</strong> <strong>to the virus.</strong> People with these symptoms may have COVID-19:</p>
                        <ul>
                            <li>Fever or chills</li>
                            <li>Cough</li>
                            <li>Shortness of breath or difficulty breathing</li>
                            <li>Fatigue</li>
                            <li>Muscle or body aches</li>
                            <li>Headache</li>
                            <li>New loss of taste or smell</li>
                            <li>Sore throat</li>
                            <li>Congestion or runny nose</li>
                            <li>Nausea or vomiting</li>
                            <li>Diarrhea</li>
                        </ul>
                        <p>This list does not include all possible symptoms. CDC will continue to update this list as we learn more about COVID-19.</p>
                    </div>
                </div>
            </Typography>
            
        </div >
    );
};


export default CovidSymptoms;