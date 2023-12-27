import JustValidate from "just-validate";
const form = document.getElementById("form");
const validate = new JustValidate(form);
const fullName = document.getElementById("name");

validate.addField("#basic_name", [
  {
    rule: "required",
  },
  {
    rule: "minLength",
    value: 3,
  },
  {
    rule: "maxLength",
    value: 15,
  },
]);
// const sendButton = document.getElementById("btn-form");
// const emailAddress = document.getElementById("email");
// const subject = document.getElementById("subject");
// const message = document.getElementById("message");
// const wrongAlert = document.getElementById("alertMsg");
// const AlertDiv = document.getElementById("alertDiv");

// AlertDiv.addEventListener("click", () => {
//   AlertMsg();
// });
// //event listeners
// sendButton.addEventListener("click", () => {
//   if (fullName.value == "" || fullName.value.length <= 2) {
//     AlertMsg("Name Field is Empty", 1);
//     fullName.value = "";
//   } else {
//     emailChecking();
//   }
// });

// function emailChecking() {
//   let email = emailAddress.value;
//   if (emailAddress.value != "") {
//     console.log("Email", email.includes("@"));
//     let confirm_At = email.includes("@");
//     let confirm_dot = email.includes(".");
//     if (confirm_At == true && confirm_dot == true) {
//       AlertMsg();
//       console.log("Hello from confirm rate");
//       if (subject.value != "" && message.value != "") {
//         SendMessage();
//       } else {
//         AlertMsg("Subject & Message Field is Empty", 1);
//       }
//     } else {
//       AlertMsg("Invalid Email", 1);
//     }
//   } else {
//     AlertMsg("Email Field is Empty", 1);
//   }
// }

// function AlertMsg(msg, valid) {
//   if (valid == 1) {
//     wrongAlert.textContent = msg;
//     AlertDiv.classList.remove("hidden");
//   } else {
//     AlertDiv.classList.add("hidden");
//   }
// }

async function SendMessage() {
  const URL = `https://discord.com/api/webhooks/1185216973920026715/h9LPZjwb45ZoKKlRSy-yOAokdaxyscIaIxCGWaDuaDlC00NTDmO4XztFkvCfr7mX_RoF`;

  try {
    const senderMsg = await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        embeds: [
          {
            title: `Subject :\n${subject.value}`,
            description: `Description :\n${message.value}`,
            color: 15844367,
            fields: [
              {
                name: `Name :\n${fullName.value}\n`,
                value: `Email Address :\n${emailAddress.value}\n`,
              },
            ],
          },
        ],
      }),
    });
    const responce = await senderMsg.json();
    const data = await responce;
    console.log(data);
  } catch (error) {
    console.error("Error:", error.message);
  }
}
