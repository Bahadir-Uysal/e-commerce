import clothesOne from "../assets/clothesOne.jpeg"
import clothesTwo from "../assets/clothesTwo.jpeg"
import clothesThree from "../assets/clothesThree.jpeg"
import clothesFour from "../assets/clothesFour.jpeg"
import clothesFive from "../assets/clothesFive.jpeg"

const goods = [
    {id:1, title:"CLOTHS", item:5, image:clothesOne},
    {id:2, title:"CLOTHS", item:5, image:clothesTwo},
    {id:3, title:"CLOTHS", item:5, image:clothesThree},
    {id:4, title:"CLOTHS", item:5, image:clothesFour},
    {id:5, title:"CLOTHS", item:5, image:clothesFive},
]

function ShopCloths() {
    return(
        <>
        <div className="container mx-auto px-4 md:px-24 mt-4 bg-[#FAFAFA] pb-8">
      <div className='flex flex-col md:flex-row py-8 gap-8 md:justify-between text-center'>
      <h4 className="text-3xl font-bold mb-4">Shop</h4>
      <div className='flex text-center justify-center  gap-2 md:flex-row'>
      <h6 className='text-[#252B42] font-bold'>Home</h6>
      <h6 className='text-[#BDBDBD] font-bold'>&gt;</h6>
      <h6 className='text-[#BDBDBD] font-bold'>Shop</h6>
      </div>

      </div>
      <div className="flex flex-col md:flex-row md:flex-wrap md:justify-center"> 
        {goods.map((item) => (
          <div key={item.id} className="w-full md:w-1/3 lg:w-1/4 xl:w-1/5 md:px-1 mb-4">
            <div className="relative w-4/5 md:w-10/12 mx-auto pb-[80%] md:pb-[70%]">
              <div className="absolute inset-0 bg-gray-200 overflow-hidden shadow-md">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center">
                  <h2 className="text-white text-lg font-bold text-center">{item.title}</h2>
                  <p className="text-white text-sm text-center">{item.item} Items</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
        </>
    )
}

export default ShopCloths