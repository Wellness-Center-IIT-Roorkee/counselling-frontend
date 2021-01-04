import confirmLeft from '../../assets/illustrations/confirmLeft.png';
import confirmBottom from '../../assets/illustrations/confirmBottom.png';
import confirmRight from '../../assets/illustrations/confirmRight.png';

const BoxBackground = ({
  className = '',
  left = true,
  right = true,
  bottom = true,
  children,
  ...rest
}) => {
  return (
    <div className={`position-absolute w-100 h-100 ${className}`} {...rest}>
      {left && <img src={confirmLeft} className="position-absolute mt-6" />}
      {bottom && (
        <img
          src={confirmBottom}
          className="position-absolute fixed-bottom mx-5"
        />
      )}
      {right && (
        <img src={confirmRight} className="position-absolute r-0 t-50p" />
      )}
      <div>{children}</div>
    </div>
  );
};

export default BoxBackground;
