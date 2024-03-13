import AdminPostInput from "../componets/AdminPostInput";
import inputFields from "../dataConditions/InputFields";
import { useForm } from "react-hook-form";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SearchInput from "../componets/SearchInput";
import { useState } from "react";

const AdminPostPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
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

      const result = await response.json();
      if (!response.ok) {
        // Handle server-side errors
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

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

      // if (
      //   error.response &&
      //   error.response.data &&
      //   error.response.data.duplicateTitle
      // ) {
      //   toast.error("Error on Posting Data Check Duplicate Entry ", {
      //     position: "top-right",
      //     autoClose: 5000,
      //     hideProgressBar: false,
      //     closeOnClick: true,
      //     pauseOnHover: true,
      //     draggable: true,
      //     progress: undefined,
      //     theme: "dark",
      //     transition: Bounce,
      //   });
      // }
      toast.error(error.message, {
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
    }
  };

  const splitAndTrim = (str) => str.split(",").map((item) => item.trim());
  const onSubmit = async (data) => {
    const RecivedData = {
      Tittle: data.Tittle,
      Genre: splitAndTrim(data.Genre),
      Description: data.Description,
      Duration: splitAndTrim(data.Duration),
      Director: splitAndTrim(data.Director),
      MoviePosters: data.MoviePosters,
      Rating: data.Rating,
      ReleaseDate: {
        year: Number(data.ReleaseDate.split("-")[0]),
        month: Number(data.ReleaseDate.split("-")[1]),
        date: Number(data.ReleaseDate.split("-")[2]),
      },
    };

    await PostData(RecivedData);
    // console.log(RecivedData);
  };

  const SearchData$ViaPOST = async (data) => {
    try {
      const response = await fetch(
        "http://localhost:3080/movieland/adminSearch",
        {
          method: "POST",
          body: JSON.stringify({ SearchID: data }),
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
      console.log(result);
      return result;
    } catch (error) {
      console.error("Error Searching data:", error);
    }
  };

  const [SearchVal, SetSearchVal] = useState("");
  const SearchOnClick = async () => {
    console.log(SearchVal);
    const { imbd$data } = await SearchData$ViaPOST(SearchVal);

    const fields = {
      Tittle: imbd$data.name,
      Genre: imbd$data.genre.join(", "),
      Description: imbd$data.description,
      Duration: imbd$data.durationArray.join(", "),
      Director: imbd$data.directorName.join(", "),
      MoviePosters: imbd$data.poster,
      Rating: imbd$data.ratingValue,
      ReleaseDate: imbd$data.dateArray.join("-"),
    };

    // for (let key in fields) {
    //   setValue(key, fields[key]);
    // }

    Object.keys(fields).map((key) => {
      setValue(key, fields[key]);
    });
  };

  const handleInputChange = (e) => {
    SetSearchVal(e.target.value);
  };
  return (
    <div className="bg-slate-800 min-h-screen flex items-center flex-col justify-center">
      <h1 className="text-4xl font-semibold text-white font-protestRevolution">
        Movieland
      </h1>
      <SearchInput
        value={SearchVal}
        SearchOnClick={SearchOnClick}
        onChange={handleInputChange}
      />
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
