import * as React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';
import Grid from '@mui/material/Grid';

const variants = ['h3', 'body1', 'caption'];

function TypographyDemo(props) {
  const { loading = false } = props;
  return (
    <div>
      {variants.map((variant) => (
        <Typography component="div" key={variant} variant={variant}>
          {loading ? <Skeleton /> : variant}
        </Typography>
      ))}
    </div>
  );
}

TypographyDemo.propTypes = {
  loading: PropTypes.bool,
};

export default function UserItem() {
  return (
    <>
      <Grid container px={2} spacing={2}>
        <Grid item xs>
          <TypographyDemo loading />
        </Grid>
      </Grid>
      <Grid container px={2} spacing={2}>
        <Grid item xs>
          <TypographyDemo loading />
        </Grid>
      </Grid>
      <Grid container px={2} spacing={2}>
        <Grid item xs>
          <TypographyDemo loading />
        </Grid>
      </Grid>
      <Grid container px={2} spacing={2}>
        <Grid item xs>
          <TypographyDemo loading />
        </Grid>
      </Grid>
      <Grid container px={2} spacing={2}>
        <Grid item xs>
          <TypographyDemo loading />
        </Grid>
      </Grid>
    </>
  );
}