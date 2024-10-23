import FilterComp from "@/components/FilterComp";
import ShopCloths from "@/components/ShopCloths";
import ShopPageProductContent from "@/components/ShopPageProductContent";

function ShopPageContent() {
  return (
    <>
      <ShopCloths></ShopCloths>
      <FilterComp></FilterComp>
      <ShopPageProductContent></ShopPageProductContent>
    </>
  );
}

export default ShopPageContent;
