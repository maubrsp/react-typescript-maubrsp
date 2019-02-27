import * as React from 'react';
import * as _ from 'lodash';
import { Route, withRouter } from 'react-router-dom';
import { bindActionCreators, Dispatch } from 'redux';
const classNames = require('classnames');
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { styles } from './styles';
import { IApplicationProps } from '../actions/App.Actions';
import * as AppActionCreators from '../actions/App.Actions';
import { AppState } from '../state/AppState';
import { connect } from 'react-redux';
import { actions as JobsActionCreators } from '../data/jobs';
import { actions as OpportunityActionCreators } from '../data/opportunity';
import { actions as MaterialActionCreators } from '../data/material';
import { getMaterialChartItems } from '../selectors';
import HomePage from '../pages/Home';
import JobPage from '../pages/job/JobContainer';

interface IAppProps extends IApplicationProps {
  classes: any;
  theme?: any;
}

interface IState {
  anchorEl: any;
  notificationEl: any;
}

class MiniDrawer extends React.Component<IAppProps, IState> {
  public state: IState = {
    anchorEl: null,
    notificationEl: null
  };

  public componentWillMount() {
    this.props.fetchJobs();
    this.props.fetchMaterials();
  }

  private renderAppBar() {
    const { classes } = this.props;
    return (
      <AppBar position="fixed" className={classNames(classes.appBar)}>
        <Toolbar>
          <Typography
            className={classes.fillSpace}
            variant="title"
            color="inherit"
            noWrap={true}
          >
            Vagas
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }

  public render() {
    const { classes } = this.props;
    const HomeContainer = (props: any): any => {
      return <HomePage jobs={this.props.jobs} />;
    };

    const JobPageContainer = (props: any): any => {
      return (
        <JobPage
          fetchOpportunitys={this.props.fetchOpportunitys}
          opportunity={this.props.opportunity}
          location={this.props.location}
        />
      );
    };

    return (
      <div className={classes.root}>
        {this.renderAppBar()}
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Route path="/" exact={true} component={HomeContainer} />
          <Route path="/jobs" exact={true} component={HomeContainer} />
          <Route path="/jobs/:id" exact={true} component={JobPageContainer} />
        </main>
      </div>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  jobs: state.jobs,
  materials: state.materials,
  materialCharts: getMaterialChartItems(state)
});

const mapDispatchtoProps = (dispatch: Dispatch) =>
  bindActionCreators(
    _.assign(
      {},
      AppActionCreators,
      JobsActionCreators,
      MaterialActionCreators,
      OpportunityActionCreators
    ),
    dispatch
  );

export default withRouter(connect(
  mapStateToProps,
  mapDispatchtoProps
)(withStyles(styles as any, { withTheme: true })(MiniDrawer as any)) as any);
