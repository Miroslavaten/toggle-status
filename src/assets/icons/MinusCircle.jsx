import PropTypes from "prop-types";

export default function MinusCircle({
  width = 20,
  color = "var(--critical-icon-color)",
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="2.2"
      stroke="currentColor"
      width={width}
      color={color}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
}

MinusCircle.propTypes = {
  width: PropTypes.number,
  color: PropTypes.string,
};
