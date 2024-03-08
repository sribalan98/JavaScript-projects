const inputFields = [
  {
    id: "Tittle",
    label: "Tittle",
    type: "text",
    placeholder: "Movie Name",
    validation: { required: "Field is required" },
  },
  {
    id: "Genre",
    label: "Genre",
    type: "text",
    placeholder: "Drama,Horror,Fantasy...ect",
    validation: { required: "Field is required" },
  },

  {
    id: "Description",
    label: "Description",
    type: "text",
    placeholder: "description about movie",
    validation: { required: "Field is required" },
  },
  {
    id: "Language",
    label: "Language",
    type: "text",
    placeholder: "MovieLanguage",
    validation: { required: "Field is required" },
  },

  // {
  //   id: "StreamingPlatforms",
  //   label: "StreamingPlatforms",
  //   type: "text",
  //   placeholder: "AmazonPrime,HotStar,Netflix...",
  //   validation: { required: "Field is required" },
  // },
  {
    id: "Director",
    label: "Director",
    type: "text",
    placeholder: "movie director",
    validation: { required: "Field is required" },
  },
  {
    id: "MoviePosters",
    label: "MoviePosters",
    type: "text",
    placeholder: "Image url link",
    validation: { required: "Field is required" },
  },
];

export default inputFields;
