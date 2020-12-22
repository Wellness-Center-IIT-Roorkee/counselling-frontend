import { createMuiTheme, makeStyles } from '@material-ui/core/styles';
import { variables_properties as variables } from '../../helpers/colors';
console.log(variables);
const fontFamilyArr = [
  '"Open Sans"',
  'sans-serif ',
  '-apple-system',
  'BlinkMacSystemFont',
  '"Segoe UI"',
  'Roboto',
  '"Helvetica Neue"',
  'Arial',
  '"Apple Color Emoji"',
  '"Segoe UI Emoji"',
  '"Segoe UI Symbol"',
];

export const theme = createMuiTheme({
  typography: {
    fontFamily: fontFamilyArr.join(','),
  },
  palette: {
    common: {
      black: variables.blue800,
      white: variables.white,
    },
    primary: {
      A15: variables.blue500A15,
      A40: variables.blue500A40,
      main: variables.blue500,
      hover: variables.blue600,
      active: variables.blue600,
      disabled: variables.blue300,
      blue: variables.blue200,
    },
    secondary: {
      main: variables.blue800,
      hover: variables.blue600,
      active: variables.blue600,
      disabled: variables.blue300,
    },
    error: {
      main: variables.orange500,
      light: variables.orange500A20,
      hover: variables.orange500A40,
    },
    text: {
      primary: '#212121',
      secondary: variables.blueGrey600heading,
    },
    success: {
      main: variables.green500,
      hover: variables.green500,
      active: variables.green500,
      disabled: variables.green500,
    },
    grey: {
      500: variables.blueGrey600,
      700: variables.blue200,
      800: variables.blueGrey700,
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 768,
      md: 960,
      lg: 1370,
      xl: 1920,
    },
  },
});

export const searchTheme = createMuiTheme({
  typography: {
    fontFamily: fontFamilyArr.join(','),
    fontSize: 12,
  },
  palette: {
    primary: { 500: variables.blue500 },
    action: {
      hover: variables.blueGrey600,
    },
    text: {
      primary: variables.blueGrey600heading,
      secondary: variables.blueGrey600heading,
    },
    divider: variables.blueGrey600,
  },
});

export const chipUseStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(0.5),
    width: 'fit-content !important',
    alignItems: 'center !important',
    fontSize: '.75rem !important',
  },
  menu: {
    padding: 20,
    borderRadius: 0.5,
  },
  colorPrimary: {
    color: `${variables.grey800} !important`,
    background: `${variables.grey100} !important`,
  },
}));

export const iconButtonUseStyles = makeStyles({
  root: {
    borderRadius: '2px !important',
    padding: '0.25rem !important',
  },
  colorPrimary: {
    background: `${variables.grey600A05} !important`,
  },
  colorSecondary: {
    color: `transparent !important`,
  },
});

export const iconUseStyles = makeStyles(theme => ({
  root: {
    color: variables.grey600,
    width: '1.5rem',
    height: '1.5rem',
  },
  colorPrimary: {
    color: `${variables.blue500} !important`,
  },
  colorSecondary: {
    color: `${variables.white} !important`,
  },
  colorError: {
    color: `${variables.red400} !important`,
  },
  colorAction: {
    color: theme.palette.grey[800],
    [theme.breakpoints.down('md')]: {
      width: '1rem',
      height: '1rem',
    },
  },
}));

export const largeIconUseStyles = makeStyles({
  root: {
    color: variables.blueGrey600heading,
    width: '3rem !important',
    height: '3rem !important',
  },
  colorPrimary: {
    color: `${variables.blue500} !important`,
  },
  colorSecondary: {
    color: `${variables.white} !important`,
  },
  colorError: {
    color: `${variables.red400} !important`,
  },
  colorAction: {
    padding: '0.5rem !important',
    color: `${variables.blue500} !important`,
  },
});

export const formControlLabel = makeStyles({
  root: {
    margin: '0 0.5625rem 0 0 !important',
  },
});

export const tooltipUseStyles = makeStyles(theme => ({
  arrow: {
    color: theme.palette.secondary.main,
  },
  tooltip: {
    color: theme.palette.common.black,
    backgroundColor: theme.palette.primary.blue,
    fontSize: '0.8rem',
  },
}));

export const tooltipDangerUseStyles = makeStyles(theme => ({
  arrow: {
    color: theme.palette.secondary.main,
  },
  tooltip: {
    color: theme.palette.common.white,
    backgroundColor: theme.palette.error.main,
    fontSize: '0.8rem',
  },
}));

export const rippleStyles = () => ({
  child: {
    backgroundColor: variables.blue500,
  },
  rippleVisible: {
    opacity: 0.5,
  },
  '@keyframes mui-ripple-enter': {
    '0%': {
      transform: 'scale(0)',
      opacity: 0.1,
    },
    '100%': {
      transform: 'scale(1)',
      opacity: 0.5,
    },
  },
});
