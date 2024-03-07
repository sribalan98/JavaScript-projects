import PropTypes from "prop-types";
const AdminPostInput = ({
  label,
  type,
  id,
  placeholder,
  name,
  errors,
  register,
  validation,
}) => {
  return (
    <div className="flex flex-col w-full gap-2">
      <div className="flex justify-between">
        <label htmlFor={id} className="font-semibold capitalize">
          {label}
        </label>
      </div>
      <input
        id={id}
        type={type}
        className="w-full p-5 font-medium border rounded-md border-slate-300 placeholder:opacity-60"
        placeholder={placeholder}
        name={name}
        {...register(id, validation)}
      />

      {errors && <span className="text-red-600">{errors.message}</span>}
    </div>
  );
};

export default AdminPostInput;

AdminPostInput.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  id: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  register: PropTypes.func,
  validation: PropTypes.object,
  errors: PropTypes.object,
};
