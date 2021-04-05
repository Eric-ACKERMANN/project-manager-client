import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import Drawer from "./components/PermanentDrawer";
import TopNavigator from "./components/TopNavigator";

import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#171C24",
  },
  menu: {
    minHeight: "100vh",
    backgroundColor: "#222B36",
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

export default function Home() {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <TopNavigator />
      </Grid>
      <Grid item xs={2} className={classes.menu}>
        <Drawer>Drawer</Drawer>
      </Grid>
      <Grid item xs={10}>
        <Grid container>
          <Grid item>
            <Paper> Hello Main</Paper>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
