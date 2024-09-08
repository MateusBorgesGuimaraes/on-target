type StarProps = {
  color?: string;
  size?: string;
  fillPercentage?: number;
};

const StarSmooth = ({
  color = '#8B8B8B',
  size = '24',
  fillPercentage = 30,
}: StarProps = {}) => {
  const clipPathId = `clip-${fillPercentage}`;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: 'inline-block' }}
    >
      <defs>
        <clipPath id={clipPathId}>
          <rect x="0" y="0" width={`${fillPercentage}%`} height="100%" />
        </clipPath>
      </defs>

      <path
        d="M9.15301 5.408C10.42 3.136 11.053 2 12 2C12.947 2 13.58 3.136 14.847 5.408L15.175 5.996C15.535 6.642 15.715 6.965 15.995 7.178C16.275 7.391 16.625 7.47 17.325 7.628L17.961 7.772C20.421 8.329 21.65 8.607 21.943 9.548C22.235 10.488 21.397 11.469 19.72 13.43L19.286 13.937C18.81 14.494 18.571 14.773 18.464 15.117C18.357 15.462 18.393 15.834 18.465 16.577L18.531 17.254C18.784 19.871 18.911 21.179 18.145 21.76C17.379 22.341 16.227 21.811 13.925 20.751L13.328 20.477C12.674 20.175 12.347 20.025 12 20.025C11.653 20.025 11.326 20.175 10.672 20.477L10.076 20.751C7.77301 21.811 6.62101 22.341 5.85601 21.761C5.08901 21.179 5.21601 19.871 5.46901 17.254L5.53501 16.578C5.60701 15.834 5.64301 15.462 5.53501 15.118C5.42901 14.773 5.19001 14.494 4.71401 13.938L4.28001 13.43C2.60301 11.47 1.76501 10.489 2.05701 9.548C2.34901 8.607 3.58001 8.328 6.04001 7.772L6.67601 7.628C7.37501 7.47 7.72401 7.391 8.00501 7.178C8.28601 6.965 8.46501 6.642 8.82501 5.996L9.15301 5.408Z"
        stroke={color}
      />

      <path
        d="M9.15301 5.408C10.42 3.136 11.053 2 12 2C12.947 2 13.58 3.136 14.847 5.408L15.175 5.996C15.535 6.642 15.715 6.965 15.995 7.178C16.275 7.391 16.625 7.47 17.325 7.628L17.961 7.772C20.421 8.329 21.65 8.607 21.943 9.548C22.235 10.488 21.397 11.469 19.72 13.43L19.286 13.937C18.81 14.494 18.571 14.773 18.464 15.117C18.357 15.462 18.393 15.834 18.465 16.577L18.531 17.254C18.784 19.871 18.911 21.179 18.145 21.76C17.379 22.341 16.227 21.811 13.925 20.751L13.328 20.477C12.674 20.175 12.347 20.025 12 20.025C11.653 20.025 11.326 20.175 10.672 20.477L10.076 20.751C7.77301 21.811 6.62101 22.341 5.85601 21.761C5.08901 21.179 5.21601 19.871 5.46901 17.254L5.53501 16.578C5.60701 15.834 5.64301 15.462 5.53501 15.118C5.42901 14.773 5.19001 14.494 4.71401 13.938L4.28001 13.43C2.60301 11.47 1.76501 10.489 2.05701 9.548C2.34901 8.607 3.58001 8.328 6.04001 7.772L6.67601 7.628C7.37501 7.47 7.72401 7.391 8.00501 7.178C8.28601 6.965 8.46501 6.642 8.82501 5.996L9.15301 5.408Z"
        stroke={color}
        fill={color}
        clipPath={`url(#${clipPathId})`}
      />
    </svg>
  );
};

const StarMedium = ({
  color = '#8B8B8B',
  size = '24',
  fillPercentage = 30,
}: StarProps = {}) => {
  const clipPathId = `clip-${fillPercentage}`;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: 'inline-block' }}
    >
      <defs>
        <clipPath id={clipPathId}>
          <rect x="0" y="0" width={`${fillPercentage}%`} height="100%" />
        </clipPath>
      </defs>

      <path
        d="M12 17.75L5.828 20.995L7.007 14.122L2.007 9.255L8.907 8.255L11.993 2.002L15.079 8.255L21.979 9.255L16.979 14.122L18.158 20.995L12 17.75Z"
        stroke={color}
      />

      <path
        d="M12 17.75L5.828 20.995L7.007 14.122L2.007 9.255L8.907 8.255L11.993 2.002L15.079 8.255L21.979 9.255L16.979 14.122L18.158 20.995L12 17.75Z"
        stroke={color}
        fill={color}
        clipPath={`url(#${clipPathId})`}
      />
    </svg>
  );
};

const StarPointed = ({
  color = '#8B8B8B',
  size = '24',
  fillPercentage = 30,
}: StarProps = {}) => {
  const clipPathId = `clip-${fillPercentage}`;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: 'inline-block' }}
    >
      <defs>
        <clipPath id={clipPathId}>
          <rect x="0" y="0" width={`${fillPercentage}%`} height="100%" />
        </clipPath>
      </defs>
      <path
        opacity="0.3"
        d="M12 15.4L8.24001 17.67L9.24001 13.39L5.92001 10.51L10.3 10.13L12 6.10001L13.71 10.14L18.09 10.52L14.77 13.4L15.77 17.68L12 15.4Z"
        fill="none"
      />
      <path
        d="M22 9.24L14.81 8.62L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27L18.18 21L16.55 13.97L22 9.24ZM12 15.4L8.24 17.67L9.24 13.39L5.92 10.51L10.3 10.13L12 6.1L13.71 10.14L18.09 10.52L14.77 13.4L15.77 17.68L12 15.4Z"
        fill={color}
      />

      <path
        d="M12 15.4L8.24001 17.67L9.24001 13.39L5.92001 10.51L10.3 10.13L12 6.10001L13.71 10.14L18.09 10.52L14.77 13.4L15.77 17.68L12 15.4Z"
        fill={color}
        clipPath={`url(#${clipPathId})`}
      />
      <path
        d="M22 9.24L14.81 8.62L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27L18.18 21L16.55 13.97L22 9.24ZM12 15.4L8.24 17.67L9.24 13.39L5.92 10.51L10.3 10.13L12 6.1L13.71 10.14L18.09 10.52L14.77 13.4L15.77 17.68L12 15.4Z"
        fill={color}
        clipPath={`url(#${clipPathId})`}
      />
    </svg>
  );
};

type StarsRatingProps = StarProps & {
  percent?: string;
  type?: 'pointed' | 'smooth';
};

export const StarsRating = ({
  percent = '0',
  type,
  ...props
}: StarsRatingProps = {}) => {
  const percentValue = Math.max(0, Math.min(100, Number(percent)));
  const stars = Array.from({ length: 5 }, (_, index) => {
    const fillPercentage =
      Math.min(Math.max(percentValue - index * 20, 0), 20) * 5;
    if (type === 'pointed') {
      return (
        <StarPointed key={index} fillPercentage={fillPercentage} {...props} />
      );
    }
    if (type === 'smooth') {
      return (
        <StarSmooth key={index} fillPercentage={fillPercentage} {...props} />
      );
    }
    return (
      <StarMedium key={index} fillPercentage={fillPercentage} {...props} />
    );
  });

  return <>{stars}</>;
};

export default StarsRating;
