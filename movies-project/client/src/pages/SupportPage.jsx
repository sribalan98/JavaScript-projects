import NavBar from "../componets/NavBar";

const SupportPage = () => {
  return (
    <>
      <div>
        <NavBar />
      </div>
      <div className="grid grid-cols-12 grid-rows-12 gap-4 h-screen">
        <div className="col-span-10 col-start-2 row-start-2 bg-blue-500">1</div>
        <div className="col-span-3 row-span-5 col-start-2 row-start-3 bg-red-400">
          2
        </div>
        <div className="col-span-3 row-span-4 col-start-2 row-start-8 bg-emerald-800">
          3
        </div>
        <div className="col-span-3 row-span-4 col-start-5 row-start-6 bg-orange-400">
          4
        </div>
        <div className="col-span-3 row-span-4 col-start-9 row-start-6 bg-violet-500">
          5
        </div>
        <div className="col-span-7 row-span-3 col-start-5 row-start-3 bg-fuchsia-300">
          6
        </div>
        <div className="col-span-7 row-span-2 col-start-5 row-start-10 bg-zinc-600">
          7
        </div>
        <div className="row-span-4 col-start-8 row-start-6 bg-slate-400">8</div>
      </div>
    </>
  );
};

export default SupportPage;
