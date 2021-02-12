import React from 'react';
import PropTypes from 'prop-types';
import { Button, useMediaQuery } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import { Spinner } from 'react-bootstrap';

/**
 * label --> Change the label of the button; default is 'Save'
 * variant --> default variant is 'contained', other options are 'text' and 'outlined'
 * isDisabled --> Control enabled and disabled state of the button
 * handleSubmit --> Function reference to be passed to 'onClick' event
 * buttonSize --> Size of the button 'small', 'medium' or 'large'
 * startIcon --> Icon to be placed before text in button
 * endIcon --> Icon to be placed after text in button
 */

const useStyles = makeStyles(theme => ({
  root: {
    textTransform: 'none',
    minWidth: 'fit-content',
    lineHeight: 'unset',
  },

  label: {
    whiteSpace: 'nowrap',
  },

  containedPrimary: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,

    '&:hover': {
      backgroundColor: theme.palette.primary.hover,
    },

    '&:disabled': {
      backgroundColor: theme.palette.primary.disabled,
      color: theme.palette.common.white,
      cursor: 'not-allowed',
    },
  },
  containedSecondary: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.common.white,

    '&:hover': {
      backgroundColor: theme.palette.secondary.hover,
    },

    '&:disabled': {
      backgroundColor: theme.palette.secondary.disabled,
      color: theme.palette.common.white,
      cursor: 'not-allowed',
    },
  },
  containedBlue: {
    backgroundColor: theme.palette.primary.A15,
    color: theme.palette.primary.main,

    '&:hover': {
      backgroundColor: theme.palette.primary.A40,
    },
  },
  containedOrange: {
    backgroundColor: theme.palette.error.light,
    color: theme.palette.error.main,

    '&:hover': {
      backgroundColor: theme.palette.error.hover,
    },
  },
  containedGreen: {
    backgroundColor: 'transparent',
    borderColor: theme.palette.success.main,
    color: theme.palette.success.main,

    '&:hover': {
      backgroundColor: 'transparent',
      borderColor: theme.palette.success.main,
      color: theme.palette.success.hover,
    },

    '&:active': {
      borderColor: theme.palette.success.active,
      color: theme.palette.primary.active,
    },

    '&:disabled': {
      borderColor: theme.palette.success.disabled,
      color: theme.palette.success.disabled,
      cursor: 'not-allowed',
    },
  },
  outlinedPrimary: {
    backgroundColor: 'transparent',
    border: '1px',
    borderStyle: 'solid',
    borderColor: theme.palette.primary.main,
    color: theme.palette.primary.main,
    '&:hover': {
      backgroundColor: 'transparent',
      borderColor: theme.palette.primary.hover,
      color: theme.palette.primary.hover,
    },
    '&:active': {
      borderColor: theme.palette.primary.active,
      backgroundColor: 'transparent',
      color: theme.palette.primary.active,
    },
    '&:disabled': {
      backgroundColor: 'transparent',
      borderColor: theme.palette.primary.disabled,
      color: theme.palette.primary.disabled,
      cursor: 'not-allowed',
    },
  },
  outlinedSecondary: {
    backgroundColor: 'transparent',
    border: '1px',
    borderStyle: 'solid',
    borderColor: theme.palette.secondary.main,
    color: theme.palette.secondary.main,
    '&:hover': {
      backgroundColor: 'transparent',
      borderColor: theme.palette.secondary.hover,
      color: theme.palette.secondary.hover,
    },
    '&:active': {
      borderColor: theme.palette.secondary.active,
      backgroundColor: 'transparent',
      color: theme.palette.secondary.active,
    },
    '&:disabled': {
      backgroundColor: 'transparent',
      borderColor: theme.palette.secondary.disabled,
      color: theme.palette.secondary.disabled,
      cursor: 'not-allowed',
    },
  },
  outlinedGreen: {
    backgroundColor: 'transparent',
    border: '1px',
    borderStyle: 'solid',
    borderColor: theme.palette.success.main,
    color: theme.palette.success.main,
    '&:hover': {
      backgroundColor: 'transparent',
      borderColor: theme.palette.success.hover,
      color: theme.palette.success.hover,
    },
    '&:active': {
      borderColor: theme.palette.success.active,
      backgroundColor: 'transparent',
      color: theme.palette.success.active,
    },
    '&:disabled': {
      backgroundColor: 'transparent',
      borderColor: theme.palette.success.disabled,
      color: theme.palette.success.disabled,
      cursor: 'not-allowed',
    },
  },
  text: {
    backgroundColor: 'transparent',
    color: theme.palette.primary.main,
    '&:hover': {
      color: theme.palette.primary.hover,
    },
    '&:active': {
      color: theme.palette.primary.active,
    },
    '&:disabled': {
      color: theme.palette.primary.disabled,
      cursor: 'not-allowed',
    },
  },
  textPrimary: {
    backgroundColor: 'transparent',
    color: theme.palette.primary.main,
    '&:hover': {
      color: theme.palette.primary.hover,
      backgroundColor: 'transparent',
    },
    '&:active': {
      color: theme.palette.primary.active,
      backgroundColor: 'transparent',
    },
    '&:disabled': {
      color: theme.palette.primary.disabled,
      cursor: 'not-allowed',
      backgroundColor: 'transparent',
    },
  },
  textSecondary: {
    backgroundColor: 'transparent',
    color: theme.palette.secondary.main,
    '&:hover': {
      color: theme.palette.secondary.hover,
      backgroundColor: 'transparent',
    },
    '&:active': {
      color: theme.palette.secondary.active,
      backgroundColor: 'transparent',
    },
    '&:disabled': {
      color: theme.palette.secondary.disabled,
      cursor: 'not-allowed',
      backgroundColor: 'transparent',
    },
  },
  textGrey: {
    backgroundColor: 'transparent',
    color: theme.palette.grey[500],
    '&:hover': {
      color: theme.palette.grey[500],
      backgroundColor: theme.palette.grey[700],
    },
    '&:active': {
      color: theme.palette.grey[500],
      backgroundColor: theme.palette.grey[700],
    },
    '&:disabled': {
      color: theme.palette.grey[500],
      cursor: 'not-allowed',
      backgroundColor: theme.palette.grey[700],
    },
  },
}));

const CustomButton = ({
  label,
  variant = 'contained',
  color = 'primary',
  isDisabled,
  handleSubmit,
  buttonSize,
  startIcon,
  endIcon,
  className,
  fullWidth,
  spinner,
  disableRipple,
  ...props
}) => {
  const propClasses = clsx(className);
  const classes = useStyles();

  const customClass = variant + color.charAt(0).toUpperCase() + color.slice(1);
  const buttonLabel = label || 'Save';
  const lgBreakpoint = useMediaQuery(theme => theme.breakpoints.up('sm'));
  buttonSize = lgBreakpoint ? buttonSize : 'small';

  let buttonSizeCSS = '';
  switch (buttonSize) {
    case 'small':
      buttonSizeCSS = 'custom-button-small';
      break;
    case 'medium':
      buttonSizeCSS = 'custom-button-medium';
      break;
    case 'large':
      buttonSizeCSS = 'custom-button-large';
      break;
    default:
      buttonSizeCSS = 'custom-button-medium';
  }

  return (
    <Button
      color={'primary'}
      variant={variant}
      type="submit"
      disabled={isDisabled || spinner}
      onClick={handleSubmit}
      disableElevation
      fullWidth={fullWidth ? true : false}
      disableRipple={disableRipple ? true : false}
      classes={{
        root: classes.root,
        containedPrimary: classes[customClass],
        textPrimary: classes[customClass],
        outlinedPrimary: classes[customClass],
        label: classes.label,
      }}
      className={`${propClasses} ${buttonSizeCSS}`}
      startIcon={startIcon}
      endIcon={endIcon}
      {...props}
    >
      {spinner ? <Spinner className={classes[customClass]} /> : buttonLabel}
    </Button>
  );
};

CustomButton.propTypes = {
  variant: PropTypes.string,
  label: PropTypes.any,
  isDisabled: PropTypes.bool,
  isSubmitting: PropTypes.bool,
  handleSubmit: PropTypes.func,
  className: PropTypes.string,
  buttonSize: PropTypes.string,
  startIcon: PropTypes.object,
  endIcon: PropTypes.string,
  fullWidth: PropTypes.bool,
  spinner: PropTypes.bool,
  disableRipple: PropTypes.bool,
  color: PropTypes.string,
  classes: PropTypes.object,
  spinnerVariant: PropTypes.string,
};

export default CustomButton;
