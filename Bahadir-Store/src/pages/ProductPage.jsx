import Header from "@/layout/Header"
import ShopClients from "@/components/ShopClients"
import Footer from "./Footer"
import ProductPageContent from "@/layout/ProductPageContent"

function ProductPage(){
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