import * as React from 'react';
import {
  Theme,
  withStyles,
  Grid,
  Typography,
  Card,
  CardContent,
  IconButton,
  CardActions,
  Button
} from '@material-ui/core';

import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';

interface IDashboardProps {
  jobs: any;
  classes?: any;
  theme?: any;
  children?: any;
}

interface IPageState {
  usersTablePage?: number;
  usersTableRowsPerPage: number;
}

class HomePage extends React.Component<IDashboardProps, IPageState> {
  public state: IPageState = {
    usersTablePage: 0,
    usersTableRowsPerPage: 5
  };

  public render(): JSX.Element {
    const { classes, jobs } = this.props;
    if (jobs.items.length === 0) {
      return null;
    }
    return (
      <div className={classes.root}>
        <Grid container={true} justify="space-between">
          {jobs.items.map((element, index) => {
            return (
              <Grid
                item={true}
                key={'griditens' + index}
                xs={4}
                justify="center"
                container={true}
                className={classes.cardContainer}
              >
                <Card key={'itens' + index} className={classes.card}>
                  <div className={classes.cardHeader}>
                    <Typography className={classes.cardTitle} component="h3">
                      {element.title}
                    </Typography>

                    <img className={classes.cardImage} src={element.image} />
                  </div>
                  <CardContent className={classes.contentDescription}>
                    <Typography component="p">{element.description}</Typography>
                  </CardContent>

                  <Grid
                    item={true}
                    key={'griditens' + index}
                    xs={12}
                    justify="center"
                    container={true}
                  >
                    <CardActions>
                      <IconButton aria-label="Add to favorites">
                        <FavoriteIcon />
                      </IconButton>
                      <Button
                        variant="contained"
                        color="primary"
                        className={classes.buttonGo}
                      >
                        Candidatar-se
                      </Button>
                      <IconButton aria-label="Share">
                        <ShareIcon />
                      </IconButton>
                    </CardActions>
                  </Grid>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </div>
    );
  }
}

const styles = (theme: Theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: 24
  },
  cardContainer: {
    marginBottom: 20
  },
  cardHeader: {
    '&:after': {
      content: '',
      backgroundColor: 'black',
      width: '40%',
      height: '40%'
    }
  },
  card: {
    width: '95%',
    position: 'relative'
  },
  contentDescription: {
    paddingTop: 10,
    paddingBottom: 10,
    height: 45,
    maxHeight: 45
  },
  cardTitle: {
    position: 'absolute',
    top: '15px',
    left: '15px',
    fontSize: '17px',
    color: '#2196f3',
    padding: '10px',
    backgroundColor: 'white',
    borderRadius: '3px',
    boxShadow:
      '0px 1px 3px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12)'
  },
  buttonGo: {},
  cardSubitle: {
    position: 'absolute',
    top: '57px',
    left: '18px',
    fontSize: '14px',
    padding: '6px 10px',
    backgroundColor: 'white'
  },
  cardImage: {
    maxWidth: '100%',
    minHeight: 60
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary
  },
  headerTiles: {
    overflowX: 'hidden',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRight: `5px solid ${theme.palette.secondary.main}`
  },
  headerTileIcon: {
    fontSize: 40,
    color: theme.palette.primary.main,
    paddingRight: 5
  },
  tileText: {
    fontSize: 20,
    color: theme.palette.grey['400']
  },
  sectionTitle: {
    paddingLeft: theme.spacing.unit * 2
  },
  jobs: {
    marginBottom: 24,
    overflowX: 'scroll'
  },
  chart: {
    width: '100%'
  }
});

export default withStyles(styles as any)(HomePage as any) as any;
