import React, { Component } from "react";
import { Typography, Button, CircularProgress } from '@material-ui/core';
import { makeStyles, useTheme } from "@material-ui/core/styles";
import axios from "axios"




export default class UploadForm extends Component {
  constructor(props) {
    super(props);
    this.selectFile = this.selectFile.bind(this);
    this.upload = this.upload.bind(this);
    this.setTestPred = this.setTestPred.bind(this);
    this.setTestRunning = this.setTestRunning.bind(this);
    this.reset = this.reset.bind(this);

    this.state = {
      selectedFiles: undefined,
      fileURL: undefined,
      testPred: -1.0,
      testRunning: false
    };
  }

  setTestRunning(isRunning) {
    this.setState({
      testRunning: isRunning
    })
  }

  setTestPred(newPred) {
    this.setState({
      testPred: newPred
    })
  }

  selectFile(event) {
    this.setState({
      selectedFiles: event.target.files,
      fileURL: URL.createObjectURL(event.target.files[0])
    });
  }


  upload() {
    this.setTestRunning(true);

    const formData = new FormData();
    formData.append('image', this.state.selectedFiles[0]);

    console.log("in uploadFiles");
    console.log(formData);
    axios.post('http://localhost:8000/classify', formData)
      .then(response => {
        console.log(response.data);
        this.setTestRunning(false);
        this.setTestPred(response.data.covidPred);
      })
      .catch(error => {
        console.error(error);
      })
  }

  reset() {
    URL.revokeObjectURL(this.state.fileURL);
    this.setState({
      selectedFiles: undefined,
      fileURL: undefined,
      testPred: -1.0,
      testRunning: false
    });
  }


  render() {
    const {
      selectedFiles,
      fileURL,
      testPred,
      testRunning
    } = this.state;


    let bShowPreview = selectedFiles && selectedFiles.length && fileURL;
    let bTestRunning = testRunning;
    let bHasTestResult = testPred < 0 ? false : true;
    let bTestPositive = testPred > 0.8 ? true : false;
    let bEnableRunButton = !testRunning && !bHasTestResult && bShowPreview


    return (
      <div className="mg20">
        <Typography paragraph>
          <h2>
            Machine Learning Based Covid-19 Test
            </h2>
        </Typography>
        <label htmlFor="btn-upload">
          <input
            id="btn-upload"
            name="btn-upload"
            style={{ display: 'none' }}
            type="file"
            onChange={this.selectFile} />
          <Button
            className="btn-choose"
            variant="outlined"
            component="span" >
            Choose File
            </Button>
        </label>
        <div className="file-name">
          {!bShowPreview ? null : (
            <div>
              <Typography variant="h6" className="list-header">
                Image Preview: {selectedFiles[0].name}
              </Typography>
              <p> </p>
              <img src={fileURL} alt='empty' width="300" />
            </div>
          )
          }
        </div>
        


        <div>
          {!bHasTestResult ? null : (
            <div>
              { !bTestPositive && (
                <Typography variant="h6" className="list-header">
                  Test Result:  Congratuation, the test result is negative. The prediction number is {testPred}
                </Typography>
              )
              }
              { bTestPositive && (
                <Typography variant="h6" className="list-header">
                  Test Result:  Sorry, the test result is positive. The prediction number is {testPred}
                </Typography>
              )
              }
            </div>
          )
          }
        </div>

        <div>
          {bTestRunning ? (
            <div>
              <CircularProgress />
            </div>
          ) : (
            <div >
              <Button
                style={{ margin: 20 }}
                className="btn-upload"
                color="primary"
                variant="contained"
                component="span"
                disabled={!bEnableRunButton}
                onClick={this.upload}>
                Run Test
              </Button>
              <Button
                style={{ margin: 20 }}
                className="btn-upload"
                color="primary"
                variant="contained"
                component="span"
                disabled={bTestRunning}
                onClick={this.reset}>
                Reset Form
              </Button>
              {!bHasTestResult ? null : (
                <Button
                style={{ margin: 20 }}
                className="btn-upload"
                color="primary"
                variant="contained"
                component="span"
                onClick={this.reset}>
                Report Error
              </Button>
              )

              }
            </div>
          )}
        </div>

      </div >
    );
  }
}
