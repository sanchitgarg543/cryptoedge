import React from 'react';
import { makeStyles } from 'tss-react/mui';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const useStyles = makeStyles()((theme) => ({
    footer: {
        backgroundColor: '#14161a',
        padding: theme.spacing(2),
        textAlign: 'center',
        
        left: 0,
        bottom: 0,
        width: '100%',
        zIndex: 999,
        borderTop: `1px solid ${theme.palette.divider}`,
      },
      text: {
        marginTop: theme.spacing(1),
      },
      link: {
        color: theme.palette.text.secondary,
        marginLeft: theme.spacing(0.5),
      },
}));

function Footer() {
  const {classes} = useStyles();

  return (
    <footer className={classes.footer}>
      <Typography variant="body2" color="goldenrod">
        &copy; {new Date().getFullYear()} - <Link to="https://github.com/sanchitgarg543"> Sanchit Garg</Link>
      </Typography>
    </footer>
  );
}

export default Footer;
