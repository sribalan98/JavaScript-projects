import "./style.css";
import Calculator from "./Calculator";

const app = "#app";
const Btn_Class =
  "btn text-[24px] flex items-center justify-center font-roboto font-bold";
const Input_Class =
  "input col-span-4 text-[2rem] py-[32px] pr-3 text-right font-roboto font-bold";

document.querySelector(app).innerHTML = `
    <h1 class="text-[5rem] font-roboto font-bold">Simple Calculator</h1>
    <div class="flex flex-col min-w-[300px] min-h-[300px] p-[10px] bg-gray-500 rounded-[12px]">
      <input type="text" disabled  id="input" class="${Input_Class} " />
      <div class="grid grid-cols-4 gap-3 w-min-[30px] mt-3">
        <button class="${Btn_Class}" value="1">1</button>
        <button class="${Btn_Class}" value="2">2</button>
        <button class="${Btn_Class}" value="3">3</button>
        <button class="${Btn_Class}" value="+">+</button>
        <button class="${Btn_Class}" value="4">4</button>
        <button class="${Btn_Class}" value="5">5</button>
        <button class="${Btn_Class}" value="6">6</button>
        <button class="${Btn_Class}" value="-">-</button>
        <button class="${Btn_Class}" value="7">7</button>
        <button class="${Btn_Class}" value="8">8</button>
        <button class="${Btn_Class}" value="9">9</button>
        <button class="${Btn_Class}" value="*">x</button>
        <button class="${Btn_Class}" value=".">.</button>
        <button class="${Btn_Class}" value="0">0</button>
        <button class="${Btn_Class}" value="/">/</button>
        <button class="${Btn_Class} hover:bg-secondary hover:text-[#2A303C]" value="c">C</button>
        <button class="${Btn_Class} text-[#2A303C] hover:text-slate-50 bg-primary hover:bg-secondary col-span-4" value="=">=</button>
        </div>
    </div>
  `;
const btnID = document.querySelectorAll(".btn");
const inputID = document.querySelector("#input");
inputID.style.cursor = "default";
inputID.style.color = "#9FE88D";
Calculator(btnID, inputID);
