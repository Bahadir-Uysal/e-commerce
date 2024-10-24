import Header from "@/layout/Header"
import ShopClients from "@/components/ShopClients"
import Footer from "./Footer"
import ProductPageContent from "@/layout/ProductPageContent"
import { useParams } from "react-router-dom/cjs/react-router-dom.min"
import products from "@/datas/productData"

function ProductPage(){
    const { id } = useParams()
    const product = products.find((p) => p.id === parseInt(id))
    if (!product) {
        return <p>Product not found!</p>;
      }
    return(
        <>
        <Header></Header>
        <ProductPageContent></ProductPageContent>
        <ShopClients></ShopClients>
        <Footer></Footer>
        </>
    )
}
export default ProductPage