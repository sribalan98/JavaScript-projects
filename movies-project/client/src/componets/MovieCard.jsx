import "../css/CardMovie.css";
import PropTypes from "prop-types";

const MovieCard = ({
  id,
  poster,
  tittle,
  description,
  genre,
  rating,
  year,
  month,
  date,
  director,
  duration,
}) => {
  const getFormattedMonth = (month) => {
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
    const numericMonth = parseInt(month, 10);
    return numericMonth >= 1 && numericMonth <= 12
      ? monthNames[numericMonth - 1]
      : "";
  };

  const formattedDuration = `${parseInt(duration[0]) || 0} Hours ${
    parseInt(duration[1]) || 0
  } Minutes`;

  const descriptionLength = description.length;
  const fontSizeClass = descriptionLength > 100 ? "text-sm" : "text-base";
  const tittleLength = tittle.length;
  const tittleLengthSizeClass = tittleLength > 15 ? "text-lg" : "text-3xl";
  return (
    <div key={id} id={tittle} className="card w-[250px] h-[400px]">
      <div className="card-inner relative w-full h-full">
        <div className="card-front absolute w-full h-full backface-invisible bg-nore-blue object-cover transform rotate-y-0 flex items-center justify-center rounded-lg">
          <img src={poster} alt={tittle} className="rounded-lg" />
        </div>
        <div className="card-back absolute w-full h-full backface-invisible bg-nore-blue p-3 rounded-lg">
          <h1
            className={`text-white font-roboto  font-bold ${tittleLengthSizeClass}`}
          >
            {tittle}
          </h1>
          <h2
            className={`${fontSizeClass} text-white font-roboto font-semi-bold`}
          >
            <span className="font-bold">StoryPlot : </span>
            {description}
          </h2>
          <div
            id="Genre"
            className="flex flex-col gap-1 justify-center items-start w-full   rounded-lg"
          >
            <p className="font-semibold text-xl text-gray-300 mb-[2px]">
              Genre
            </p>
            <div className="flex flex-wrap gap-1">
              {genre.map((v, i) => (
                <span
                  className=" text-[12px] px-2  rounded bg-blue-100 text-nore-blue mb-[2px]"
                  key={i}
                >
                  {v}
                </span>
              ))}
            </div>
          </div>
          <h2 className="font-roboto text-white font-lightweight">
            <span className="font-bold">Rating : </span>⭐{rating}
          </h2>
          <h2 className="font-roboto text-white font-lightweight">
            <span className="font-bold">ReleaseDate : </span>
            {year} {getFormattedMonth(month)} {date}
          </h2>
          <h2 className="font-roboto text-white font-lightweight">
            <span className="font-bold">Director : </span>
            {director}
          </h2>
          <h2 className="font-roboto text-white font-lightweight">
            <span className="font-bold">Duration : </span>
            {formattedDuration}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;

MovieCard.propTypes = {
  id: PropTypes.number,
  poster: PropTypes.string,
  tittle: PropTypes.string,
  description: PropTypes.string,
  genre: PropTypes.array,
  rating: PropTypes.number,
  year: PropTypes.number,
  month: PropTypes.number,
  date: PropTypes.number,
  director: PropTypes.array,
  duration: PropTypes.array,
};
