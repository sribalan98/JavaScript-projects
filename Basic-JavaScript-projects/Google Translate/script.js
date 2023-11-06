const buttonT = document.querySelector("#btn-search");

buttonT.addEventListener("click", function () {
  console.log("button Clicked");
  googleT()
});

async function googleT() {
  const LangValue = document.querySelector("#optionSel");
  const lV = LangValue.value
  const inputValue = document.querySelector(".justinput");
  const iV = inputValue.value
  const disPlayT = document.querySelector(".glass-display");
  const url = "https://google-translate1.p.rapidapi.com/language/translate/v2";
  const options = {
    method: "POST",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      "Accept-Encoding": "application/gzip",
      "X-RapidAPI-Key": "5037b0805fmshec9db43afb212edp1f8fcejsn66e4b26d76db",
      "X-RapidAPI-Host": "google-translate1.p.rapidapi.com",
    },
    body: new URLSearchParams({
      q: iV,
      target: lV,
    }),
  };
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    const translatedText = result.data.translations[0].translatedText;
    // console.log(translatedText);
    disPlayT.textContent = translatedText
  } catch (error) {
    console.error("Error fetching or parsing data:", error);
  }
}
