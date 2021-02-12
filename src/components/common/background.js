import confirmLeft from '../../assets/illustrations/confirmLeft.png';
import confirmBottom from '../../assets/illustrations/confirmBottom.png';
import confirmRight from '../../assets/illustrations/confirmRight.png';
import { useMediaQuery } from '@material-ui/core';

const BoxBackground = ({
  className = '',
  left = true,
  right = true,
  bottom = true,
  children,
  ...rest
}) => {
  const matches = useMediaQuery(theme => theme.breakpoints.up('sm'));
  return (
    <div
      className={` w-100 h-100 overflow-scroll position-absolute  ${className}`}
      {...rest}
    >
      {left && matches && (
        <img src={confirmLeft} className="position-absolute w-10p mt-6" />
      )}
      {bottom && matches && (
        <img
          src={confirmBottom}
          className="position-absolute h-10vw fixed-bottom mx-5"
        />
      )}
      {right && matches && (
        <img src={confirmRight} className="position-absolute w-10p r-0 t-40p" />
      )}
      <div>{children}</div>
    </div>
  );
};

export default BoxBackground;
