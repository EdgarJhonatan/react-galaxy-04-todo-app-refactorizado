import PropTypes from "prop-types";

export const TaskPropType = PropTypes.shape({
   id: PropTypes.number.isRequired,
   name: PropTypes.string.isRequired,
   complete: PropTypes.bool.isRequired,
});
