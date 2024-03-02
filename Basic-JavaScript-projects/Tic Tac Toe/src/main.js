import "./styles/style.css";

const btnClass = ` class="btn bg-white w-[100px] h-[100px] hover:bg-slate-300 text-center text-slate-900 text-[100px] font-bold "`;
const app = document.getElementById("app");
app.innerHTML = `
<h1 class="text-[5rem] font-roboto text-slate-600 font-bold">Tic Tac Toe</h1>
<div class="bg-slate-600 w-auto h-auto grid grid-cols-3 gap-4 p-5 rounded">
    <div id="1" ${btnClass}></div>
    <div id="2" ${btnClass}></div>
    <div id="3" ${btnClass}></div>
    <div id="4" ${btnClass}></div>
    <div id="5" ${btnClass}></div>
    <div id="6" ${btnClass}></div>
    <div id="7" ${btnClass}></div>
    <div id="8" ${btnClass}></div>
    <div id="9" ${btnClass}></div>
</div>
<h1 id="titleWinner" class=" text-[5rem] font-roboto text-slate-600 font-bold"></h1>`;

export const titleWinner = document.getElementById("titleWinner");
export const btn = document.querySelectorAll(".btn");
