import PropTypes from "prop-types";

export default function ExclamationCircle({
  width = 20,
  color = "var(--caution-icon-color)",
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
        d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
      />
    </svg>
  );
}

ExclamationCircle.propTypes = {
  width: PropTypes.number,
  color: PropTypes.string,
};
