import products from "@/datas/productData";
import { Link } from "react-router-dom";

function Products() {
  return (
    <>
      <div className="w-full mt-16 md:mt-[-80px] flex flex-col justify-center items-center mb-16">
        <div className="w-2/5 flex flex-col text-center justify-center items-center gap-2 ">
          <h4 className="text-[#737373] text-lg font-semibold">
            Featured Products
          </h4>
          <h3 className="font-montserrat text-[#252B42] font-bold text-lg">
            BESTSELLER PRODUCTS
          </h3>
          <p className="text-[#737373] text-xs font-semibold">
            Problems trying to resolve the conflict between
          </p>
        </div>
        <div className="w-[85%] mx-auto mt-8 md:mt-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {products.map((product) => (
              <div key={product.id} className="">
                <Link to={`/products/${product.id}`}>
                  <img
                    src={product.imageUrl}
                    alt={product.title}
                    className="w-full h-98 object-cover mb-4 md:h-85"
                  />
                  <h3 className="text-lg font-bold text-center">
                    {product.title}
                  </h3>
                  <p className="text-sm text-[#BDBDBD] text-center">
                    {product.department}
                  </p>
                  <div className="mt-2 flex justify-center gap-2">
                    <span className="line-through text-[#BDBDBD]">
                      ${product.price}{" "}
                    </span>
                    <span className="text-[#23856D]">
                      {" "}
                      ${product.salePrice}
                    </span>
                  </div>
                  <div className="mt-4 flex justify-center space-x-2">
                    {product.colors.map((color, index) => (
                      <div
                        key={index}
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: color }}
                      ></div>
                    ))}
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
export default Products;

//TODO Maybe ı should change the images
