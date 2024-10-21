function ShopCards() {
  return (
    <>
      <div className="container mx-auto px-4 py-4 md:px-24 flex flex-col justify-center items-center bg-[#FAFAFA]	">
        <div className="text-center max-w-52 py-12 tracking-wide flex flex-col gap-4">
          <h3 className="text-2xl font-bold">EDITOR’S PICK</h3>
          <p className="font-extralight">
            Problems trying to resolve the conflict between{" "}
          </p>
        </div>
        <div className="flex flex-col gap-8 ">
          <div className="relative">
            <img src="../../public/erkek-sarımont.jpeg" alt="" />
            <div className="absolute inset-0 flex justify-center items-end">
              <h2 className="bg-white text-xl text-center py-2 px-16">MEN</h2>
            </div>
          </div>
          <div className="relative">
            <img src="../../public/kadın-kazak.jpeg" alt="" />
            <div className="absolute inset-0 flex justify-center items-end">
              <h2 className="bg-white text-xl text-center py-2 px-16">WOMEN</h2>
            </div>
          </div>
          <div className="relative">
            <img src="../../public/kadın-klasik.jpeg" alt="" />
            <div className="absolute inset-0 flex justify-center items-end">
              <h2 className="bg-white text-xl text-center py-2 px-16">ACCESSORIES</h2>
            </div>
          </div>
          <div className="relative">
            <img src="../../public/erkek-gölek.jpeg" alt="" />
            <div className="absolute inset-0 flex justify-center items-end">
              <h2 className="bg-white text-xl text-center py-2 px-16">KIDS</h2> 
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
}

export default ShopCards;
// TODO fix this
//TODO FİX THE GRİD u ll be needing to use grid