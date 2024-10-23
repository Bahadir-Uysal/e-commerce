import FilterComp from "@/components/FilterComp";
import ShopClients from "@/components/ShopClients";
import ShopCloths from "@/components/ShopCloths";
import ShopPageProductContent from "@/components/ShopPageProductContent";

function ShopPageContent() {
  return (
    <>
      <ShopCloths></ShopCloths>
      <FilterComp></FilterComp>
      <ShopPageProductContent></ShopPageProductContent>
      <ShopClients></ShopClients>
    </>
  );
}
export default ShopPageContent;
