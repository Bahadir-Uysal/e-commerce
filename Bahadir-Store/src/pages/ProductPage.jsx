import Header from "@/layout/Header"
import ShopClients from "@/components/ShopClients"
import Footer from "./Footer"
import ProductPageContent from "@/layout/ProductPageContent"
import { useParams } from "react-router-dom"
import products from "@/datas/productData"

function ProductPage(){
    const { id } = useParams()
    const product = products.find((p) => p.id === parseInt(id))
    if (!product) {
        return (
            <>
                <Header />
                <div className="container mx-auto py-20 text-center">
                    <p>Product not found!</p>
                </div>
                <Footer />
            </>
        );
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