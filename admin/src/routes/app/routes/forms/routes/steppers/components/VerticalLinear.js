import React from 'react';
import {
  Step,
  Stepper,
  StepLabel,
  StepContent,
} from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';

class VerticalLinearStepper extends React.Component {

  state = {
    finished: false,
    stepIndex: 0,
  };

  handleNext = () => {
    const {stepIndex} = this.state;
    this.setState({
      stepIndex: stepIndex + 1,
      finished: stepIndex >= 2,
    });
  };

  handlePrev = () => {
    const {stepIndex} = this.state;
    if (stepIndex > 0) {
      this.setState({stepIndex: stepIndex - 1});
    }
  };

  renderStepActions(step) {
    const {stepIndex} = this.state;

    return (
      <div style={{margin: '12px 0'}}>
        <RaisedButton
          label={stepIndex === 2 ? 'Finish' : 'Next'}
          disableTouchRipple
          disableFocusRipple
          primary
          onTouchTap={this.handleNext}
          style={{marginRight: 12}}
        />
        {step > 0 && (
          <FlatButton
            label="Back"
            disabled={stepIndex === 0}
            disableTouchRipple
            disableFocusRipple
            onTouchTap={this.handlePrev}
          />
        )}
      </div>
    );
  }

  render() {
    const {finished, stepIndex} = this.state;

    return (
      <article className="article">
        <h2 className="article-title">Vertical linear stepper</h2>
        <div className="box box-default">
          <div className="box-body padding-xl">

            <div style={{maxWidth: 380, height: 400, margin: 'auto'}}>
              <Stepper activeStep={stepIndex} orientation="vertical">
                <Step>
                  <StepLabel>Select campaign settings</StepLabel>
                  <StepContent>
                    <p>
                      For each ad campaign that you create, you can control how much
                      you're willing to spend on clicks and conversions, which networks
                      and geographical locations you want your ads to show on, and more.
                    </p>
                    {this.renderStepActions(0)}
                  </StepContent>
                </Step>
                <Step>
                  <StepLabel>Create an ad group</StepLabel>
                  <StepContent>
                    <p>An ad group contains one or more ads which target a shared set of keywords.</p>
                    {this.renderStepActions(1)}
                  </StepContent>
                </Step>
                <Step>
                  <StepLabel>Create an ad</StepLabel>
                  <StepContent>
                    <p>
                      Try out different ad text to see what brings in the most customers,
                      and learn how to enhance your ads using features like ad extensions.
                      If you run into any problems with your ads, find out how to tell if
                      they're running and how to resolve approval issues.
                    </p>
                    {this.renderStepActions(2)}
                  </StepContent>
                </Step>
              </Stepper>
              {finished && (
                <p style={{margin: '20px 0', textAlign: 'center'}}>
                  <a
                    href="javascript:;"
                    onClick={(event) => {
                      event.preventDefault();
                      this.setState({stepIndex: 0, finished: false});
                    }}
                  >
                      Click here
                  </a> to reset the example.
                </p>
              )}
            </div>
            <div style={{maxWidth: 380, margin: 'auto'}}>
              <div className="divider divider-xl" />
              <div className="callout callout-info">
                <p>Vertical steppers are designed for narrow screen sizes. They are ideal for mobile.</p>
              </div>
            </div>
          </div>
        </div>
      </article>
    );
  }
}

export default VerticalLinearStepper;
