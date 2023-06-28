
// button component, consuming props
const Button = ({
  className,
  children,
  onClick,
  variant = 'default',
  size = 'md',
  disabled,
  type,
  ...rest
}) => {
  return (
    <button
      type={type || 'button'}
      className={
        `btn ${variant} ${size} whitespace-nowrap` +
        (disabled ? ' disabled' : '') +
        (className ? ` ${className}` : '')
      }
      onClick={onClick}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
