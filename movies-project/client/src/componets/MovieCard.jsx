import "../css/CardMovie.css";
import obj from "../dataConditions/sampledata";

const MovieCard = () => {
  const TittleName = () => {
    return (
      <>
        <div id="Tittle">
          <h1 className="text-white font-roboto text-3xl font-lightwight">
            <span className="font-bold">Movie :</span> {obj.Tittle}
          </h1>
        </div>
      </>
    );
  };
  const Description = () => {
    return (
      <>
        <div id="Description">
          <h2 className="text-[15px] text-white font-roboto font-thin">
            <span className="font-bold">StoryPlot : </span>
            {obj.Description}
          </h2>
        </div>
      </>
    );
  };

  const Genre = () => {
    return (
      <>
        <div
          id="Genre"
          className="flex flex-col gap-1 justify-center items-start w-[280px] bg-white dark:bg-transparent px-4 py-4 shadow-xl rounded-lg"
        >
          <p className="font-semibold text-xl text-gray-300 mb-1">Genre</p>
          <div className="flex flex-wrap gap-2">
            {obj.Genre.map((v, i) => (
              <span
                className="px-3 py-1 text-[12px] bg-[#d9dfe3] max-w-max rounded font-semibold text-[#7281a3]"
                key={i}
              >
                {v}
              </span>
            ))}
          </div>
        </div>
      </>
    );
  };
  const Rating = () => {
    return (
      <>
        <div id="Rating" className="font-roboto  text-white ">
          <h2 className="font-lightweight">
            <span className="font-bold">Rating : </span>⭐{obj.Rating}
          </h2>
        </div>
      </>
    );
  };

  const ReleaseDate = () => {
    function getFormattedMonth(month) {
      const monthNames = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];

      // Ensure month is a valid number between 1 and 12
      const numericMonth = parseInt(month, 10);
      if (isNaN(numericMonth) || numericMonth < 1 || numericMonth > 12) {
        return "";
      }

      return monthNames[numericMonth - 1];
    }
    return (
      <>
        <div id="ReleaseDate" className="font-roboto text-white">
          <h2 className="font-lightweight">
            <span className="font-bold">ReleaseDate : </span>
            {obj.ReleaseDate.year} {getFormattedMonth(obj.ReleaseDate.month)}{" "}
            {obj.ReleaseDate.date}
          </h2>
        </div>
      </>
    );
  };

  const Director = () => {
    return (
      <>
        <div id="ReleaseDate" className="font-roboto text-white">
          <h2 className="font-lightweight">
            <span className="font-bold">Director : </span>
            {obj.Director}
          </h2>
        </div>
      </>
    );
  };
  const Duration = () => {
    const durationArray = ["2H", "21M"];

    // Convert H to Hours and M to Minutes
    const hours = parseInt(durationArray[0]) || 0;
    const minutes = parseInt(durationArray[1]) || 0;

    // Create the formatted duration string
    const formattedDuration = `${hours} ${
      hours === 1 ? "Hour" : "Hours"
    } ${minutes} ${minutes === 1 ? "Minute" : "Minutes"}`;
    return (
      <>
        <div id="Duration" className="font-roboto text-white">
          <h2 className="font-lightweight">
            <span className="font-bold">Duration : </span>
            {formattedDuration}
          </h2>
        </div>
      </>
    );
  };
  return (
    <>
      <div className="card w-72 h-96  ">
        <div className="card-inner relative w-full h-full ">
          <div className="card-front absolute w-full h-full backface-invisible object-cover transform rotate-y-0 flex items-center justify-center rounded-lg">
            <img
              src={obj.MoviePosters}
              alt={obj.Tittle}
              className="rounded-lg"
            />
          </div>
          <div className="card-back absolute w-full h-full backface-invisible bg-nore-blue p-3 rounded-lg">
            <TittleName />
            <Description />
            <Genre />
            <Rating />
            <ReleaseDate />
            <Director />
            <Duration />
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieCard;
