import PropTypes from "prop-types";

export default function Tick({
  width = 20,
  color = "var(--success-icon-color)",
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="2.2"
      stroke={color}
      width={width}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
}

Tick.propTypes = {
  width: PropTypes.number,
  color: PropTypes.string,
};
