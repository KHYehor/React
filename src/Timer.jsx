import React, { Component, Fragment } from 'react';
import { Button, Grid } from '@material-ui/core';
import ms from 'pretty-ms';
import './Timer.css';

export default class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0,
      start: 0,
      isOn: false,
      isPaused: false,
      laps: [],
      loaded: false,
      text: ''
    };
    this.timer = null;
  }

  handleStart = event => {
    this.setState({ isOn: true, isPaused: false, start: Date.now() - this.state.time });
    this.timer = setInterval(() => {
      this.setState((prevState, props) => {
        return { time: Date.now() - this.state.start };
      });
    }, 1);
  }

  handleStop = event => {
    this.setState({ time: 0.0, isOn: false, isPaused: false, laps: []});
    clearInterval(this.timer);
  }

  handlePause = event => {
    this.setState({ isOn: false, isPaused: true });
    clearInterval(this.timer);
  }

  handleResume = event => {
    this.setState({ isOn: true, isPaused: false });
    this.handleStart();
  }

  handleLap = event => {
    this.setState(prevState => {
      const { time, laps } = prevState;
      laps.push(<li key={laps.length}>{ms(time)}</li>);
      return { laps };
    });
  }

  componentDidMount() {
    this.setState({ loaded: true });
  }

  componentDidUpdate() {}

  render() {
    const defProps = { variant: "contained", color: "primary" };
    if (!this.state.loaded) {
      return (
        <div>
          Loading...
        </div>
      );
    } else {
      return (
        <div className="App">
          <h1>This is quite simple timer</h1>
          <Grid container direction="row" justify="center" alignItems="center" spacing={2}>
            <Grid item xs={12}>
              <Button { ...defProps } disabled={ (this.state.isOn || this.state.isPaused) ? true : false } onClick={ this.handleStart }>Start</Button>
            </Grid>
            <Grid item>
              <Button { ...defProps } disabled={ !this.state.isOn ? true : false } onClick={ this.handleStop }>Stop</Button>
              <Button { ...defProps } disabled={ !this.state.isOn ? true : false } onClick={ this.handlePause }>Pause</Button>
              <Button { ...defProps } disabled={ !this.state.isOn ? true : false } onClick={ this.handleLap }>Lap</Button>
            </Grid>
            <Grid item item xs={12}>
              <Button { ...defProps } disabled={ !this.state.isPaused ? true : false } onClick={ this.handleResume }>Resume</Button>
            </Grid>
          </Grid>
          <h4>{ms(this.state.time)}</h4>
          <h4 style={!this.state.laps.length ? {display: 'none'} : null}>Saved time</h4>
          <ul style={!this.state.laps.length ? {display: 'none'} : null}>
            {this.state.laps}
          </ul>
          <input type="text" value={this.state.text} onChange={e => this.setState({ text: e.target.value })}/>
        </div> 
      ); 
    }
  }
}
