import PropTypes from 'prop-types';

export default function Input(props) {
  const { id, label, classLabel, type, inputName, value, onChange, placeholder, classInput } = props;
  return (
    <label htmlFor={id} className={classLabel}>
      {label}
      <input
        id={id}
        name={inputName}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={classInput}
      />
    </label>
  );
}

Input.propTypes = {
  label: PropTypes.string,
  classLabel: PropTypes.string,
  type: PropTypes.string,
  inputName: PropTypes.string,
  id: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  classInput: PropTypes.string,
};

Input.defaultProps = {
  label: '',
  classLabel: '',
  type: '',
  inputName: '',
  id: '',
  value: '',
  onChange: () => { },
  placeholder: '',
  classInput: '',
};

