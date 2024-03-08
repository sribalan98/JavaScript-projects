import AdminPostInput from "../componets/AdminPostInput";
import inputFields from "../dataConditions/InputFields";
import { useForm } from "react-hook-form";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SearchInput from "../componets/SearchInput";

const AdminPostPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
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

  const PostData = async (data) => {
    try {
      const response = await fetch(
        "http://192.168.1.2:3080/movieland/postmovie",
        {
          method: "POST",
          body: JSON.stringify(data),
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const result = await response.json();
      toast.success("Successfully Posted in Server", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
      console.log(result);

      reset();
    } catch (error) {
      console.error("Error posting data:", error);
    }
  };

  const splitAndTrim = (str) => str.split(",").map((item) => item.trim());
  const onSubmit = (data) => {
    const RecivedData = {
      Tittle: data.Tittle,
      Genre: splitAndTrim(data.Genre),
      Discription: data.Discription,
      Language: splitAndTrim(data.Language),
      Director: splitAndTrim(data.Director),
      MoviePosters: data.MoviePosters,
      StreamingPlatforms: splitAndTrim(data.StreamingPlatforms),
    };

    PostData(RecivedData);
    // console.log(RecivedData);
  };

  return (
    <div className="bg-slate-800 min-h-screen flex items-center flex-col justify-center">
      <h1 className="text-4xl font-semibold text-white font-protestRevolution">
        Movieland
      </h1>
      <SearchInput value={SearchVal} SearchOnClick={SearchOnClick} />
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
      <ToastContainer />
    </div>
  );
};

export default AdminPostPage;
