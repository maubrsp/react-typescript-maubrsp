import * as React from 'react';
import * as _ from 'lodash';
import { AppState } from 'src/state/AppState';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';

import {
  withStyles,
  Theme,
  Grid,
  Typography,
  Chip,
  Paper,
  Button
} from '@material-ui/core';
import DoneIcon from '@material-ui/icons/Done';

import { actions as OppotunityActionCreators } from '../../data/opportunity';
import * as AppActionCreators from '../../actions/App.Actions';
import { Link } from 'react-router-dom';

interface IJobProps {
  match?: any;
  location?: any;
  classes?: any;
  opportunity?: any;
  fetchOpportunitys?: (context?: any, actions?: any) => void;
}

const LinkVoltar = uiProps => {
  return <Link to="/jobs/" {...uiProps} />;
};

class JobPage extends React.Component<IJobProps> {
  public componentWillMount() {
    if (!this.props.opportunity.isFetching) {
      if (this.props.fetchOpportunitys) {
        this.props.fetchOpportunitys({
          id: this.props.location.pathname.split('obs/')[1]
        });
      }
    }
  }

  public render(): JSX.Element {
    const { classes, opportunity } = this.props;

    if (opportunity.items.length === 0 || opportunity.isFetching) {
      return null;
    }
    const element = opportunity.items[0];

    return (
      <div className={classes.root}>
        <Grid
          item={true}
          key={'griditens'}
          xs={12}
          justify="center"
          container={true}
        >
          <div className={classes.sectionArea}>
            <Typography className={classes.title} component="h3">
              {element.title} - {element.brand}
            </Typography>

            <Typography className={classes.backJobs} component={LinkVoltar}>
              {'<'} voltar
            </Typography>
            <img className={classes.image} src={element.image} />
          </div>
          <div className={classes.optionsJob}>
            <span className={classes.jobIten}>
              {'local: ' + element.location}
            </span>
            <span className={classes.jobIten}>
              {'empresa: ' + element.brand}
            </span>
            <span className={classes.jobIten}>
              {'criado em: ' + element.createdAt}
            </span>
          </div>
          <Grid
            item={true}
            key={'description'}
            xs={8}
            justify="center"
            container={true}
          >
            <Typography component="h2">{element.description}</Typography>
          </Grid>
          <Grid
            item={true}
            key={'extras'}
            xs={8}
            justify="space-evenly"
            container={true}
            style={{ padding: 20 }}
          >
            <Chip
              deleteIcon={<DoneIcon />}
              label={'salario: ' + element.salary}
            />
            <Chip
              deleteIcon={<DoneIcon />}
              label={'contrato: ' + element.contract}
            />
            <Chip
              deleteIcon={<DoneIcon />}
              label={'horário: ' + element.workinHours}
            />
          </Grid>
          <Paper>
            {element.benefits.forEach(benefit => {
              return <Chip deleteIcon={<DoneIcon />} label={benefit} />;
            })}
          </Paper>
          <Grid
            item={true}
            key={'action'}
            xs={8}
            justify="center"
            container={true}
            style={{ padding: 20 }}
          >
            <Button variant="contained" size="large" color="primary">
              Candidatar-se
            </Button>
          </Grid>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  opportunity: state.opportunity
});

const mapDispatchtoProps = (dispatch: Dispatch) =>
  bindActionCreators(
    _.assign({}, AppActionCreators, OppotunityActionCreators),
    dispatch
  );

const styles = (theme: Theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: 24,
    position: 'relative'
  },
  sectionArea: {
    width: '100%',
    position: 'relative',
    minHeight: 250,
    backgroundColor: '#2196f3a8'
  },
  optionsJob: {
    backgroundColor: '#2196f3a8',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    padding: 20,
    marginBottom: 25
  },
  jobIten: {
    color: 'white',
    padding: '0px 25px'
  },
  title: {
    position: 'absolute',
    top: '25px',
    right: '25px',
    fontSize: '22px',
    color: '#2196f3',
    padding: '12px',
    backgroundColor: 'white',
    borderRadius: '3px',
    fontWheight: '800',
    boxShadow:
      '0px 1px 3px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12)'
  },
  backJobs: {
    position: 'absolute',
    top: '25px',
    left: '25px',
    fontSize: '15px',
    color: '#2196f3',
    padding: '16px',
    backgroundColor: 'white',
    borderRadius: '3px',
    fontWheight: '800',
    boxShadow:
      '0px 1px 3px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12)'
  },
  image: {
    width: '100%',
    minHeight: 60
  }
});

export default connect(
  mapStateToProps,
  mapDispatchtoProps
)(withStyles(styles as any, { withTheme: true })(JobPage as any)) as any;
