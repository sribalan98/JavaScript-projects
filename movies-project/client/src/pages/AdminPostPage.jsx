import AdminPostInput from "../componets/AdminPostInput";
import inputFields from "../dataConditions/InputFields";
import { useForm } from "react-hook-form";
const AdminPostPage = () => {
  const { register, handleSubmit } = useForm();
  // register,
  const renderedInputs = inputFields.map((value, index) => {
    return (
      <AdminPostInput
        key={index}
        label={value.label}
        type={value.type}
        id={value.id}
        placeholder={value.placeholder}
        // error={errors[value.id]}
      />
    );
  });
  const onSubmit = (data) => {
    console.log(data);
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
            className="bg-blue-600 text-white font-semibold px-5 py-1 rounded"
          />
        </div>
      </form>
    </div>
  );
};

export default AdminPostPage;
