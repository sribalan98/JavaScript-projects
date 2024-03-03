import AdminPostInput from "../componets/AdminPostInput";
import inputFields from "../dataConditions/InputFields";
import { useForm } from "react-hook-form";
const AdminPostPage = () => {
  const {
    register,
    handleSubmit,
    SetError,
    formState: { errors },
  } = useForm();
  // register,
  const renderedInputs = inputFields.map((value, index) => {
    return (
      <AdminPostInput
        key={index}
        label={value.label}
        type={value.type}
        id={value.id}
        name={value.id}
        placeholder={value.placeholder}
        register={register}
        validation={value.validation}
        errors={errors[value.id]}
      />
    );
  });
  // const onSubmit = (data) => {
  //   if (!isNaN(data.Duration)) {
  //     console.log(data);
  //     console.log(data.Duration);
  //   }
  // };
  const onSubmit = (data) => {
    // Define a regular expression pattern for numbers and colons only
    const validDurationPattern = /^[0-9:]+$/;

    // Check if the Duration matches the desired pattern
    if (validDurationPattern.test(data.Duration)) {
      console.log("Valid duration format");
      console.log(data);
      console.log(data.Duration);
    } else {
      console.log("Invalid duration format");
      SetError;
    }
  };
  return (
    <div className="bg-slate-800 min-h-screen flex items-center flex-col justify-center">
      <h1 className="text-4xl font-semibold text-white font-protestRevolution">
        Movieland
      </h1>
      <form
        className="w-1/2 grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-gray-400 rounded-lg"
        onSubmit={handleSubmit(onSubmit)}
      >
        {renderedInputs}
        <div className="col-span-2  m-auto text-center">
          <input
            type="submit"
            className="bg-blue-600 text-white font-semibold px-5 py-1 rounded cursor-pointer"
          />
        </div>
      </form>
    </div>
  );
};

export default AdminPostPage;
