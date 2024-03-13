const SupportPage = () => {
  return (
    <>
      <div className="grid grid-cols-12 grid-rows-12 gap-4">
        <div className="col-span-10 col-start-2 row-start-2">1</div>
        <div className="col-span-3 row-span-5 col-start-2 row-start-3">2</div>
        <div className="col-span-3 row-span-4 col-start-2 row-start-8">3</div>
        <div className="col-span-3 row-span-4 col-start-5 row-start-6">4</div>
        <div className="col-span-3 row-span-4 col-start-9 row-start-6">5</div>
        <div className="col-span-7 row-span-3 col-start-5 row-start-3">6</div>
        <div className="col-span-7 row-span-2 col-start-5 row-start-10">7</div>
        <div className="row-span-4 col-start-8 row-start-6">8</div>
      </div>
    </>
  );
};

export default SupportPage;
