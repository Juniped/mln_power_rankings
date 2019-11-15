import React, {Component} from 'react';
import {
    Grid, Paper, Typography, Card, CardContent, TextField, Box
} from '@material-ui/core';
import { withStyles } from "@material-ui/core/styles";
import { TEAMS } from "../teams";


const useStyles = theme => ({
    root: {
      flexGrow: 1
    },
    paper: {
      padding: 5,
      margin: 5,
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
    card: {
        padding:1,
        backgroundColor:"#F7F7F7",
    }
  });

function TeamPaper(props){
    console.log(props);
    return(
        <Paper style={{padding:2,textAlign:"center", margin:3,backgroundColor:"#515151"}}>
            <Typography varient="h5" style={{color:"#FFFFFF"}}>
                {props.team.name} ({props.team.record}) {props.team.runDiff}
            </Typography>
        </Paper>
    );
}

class PRForm extends Component{
    constructor(props) {
        super(props);
        this.state = {
            teams: TEAMS
        }
    }

    render() {
        const { classes } = this.props;
        return(

            <Grid
                container
                direction="row"
                justify="left"
                alignItems="center"
                spacing={3}
            >
                <Grid item xs={1}></Grid> 
                <Grid item xs={10}>
                    <Card className={classes.card} >
                        <CardContent>
                            <TeamPaper team={this.state.teams[0]}/>
                            <TeamPaper team={this.state.teams[1]}/>
                            <TeamPaper team={this.state.teams[2]}/>
                            <TeamPaper team={this.state.teams[3]}/>
                            <TeamPaper team={this.state.teams[4]}/>
                            <TeamPaper team={this.state.teams[5]}/>
                            <TeamPaper team={this.state.teams[6]}/>
                            <TeamPaper team={this.state.teams[7]}/>
                            <TeamPaper team={this.state.teams[8]}/>
                            <TeamPaper team={this.state.teams[9]}/>
                            <TeamPaper team={this.state.teams[10]}/>
                            <TeamPaper team={this.state.teams[11]}/>
                            <TeamPaper team={this.state.teams[12]}/>
                            <TeamPaper team={this.state.teams[13]}/>
                            <TeamPaper team={this.state.teams[14]}/>
                            <TeamPaper team={this.state.teams[15]}/>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={1}></Grid>
                <br />
                <Grid item xs={1}></Grid>
                <Grid item xs={5}>
                    <Card>
                        <CardContent>
                            <TextField 
                                label="Player Name"
                                // margin="normal"
                                // variant="filled"
                            />
                        </CardContent>
                    </Card>
                </Grid>

            </Grid>
            
        )
    }
}

export default withStyles(useStyles)(PRForm);