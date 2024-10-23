import { LayoutGrid } from "lucide-react";
import { Button } from "./ui/button";

function FilterComp() {
  return (
    <>
      <div className="flex flex-col items-center justify-around space-y-4 p-4 md:flex-row md:space-y-0 md:space-x-6">
        <div>
          <h6 className="text-[#737373] font-semibold">Showing all 12 results</h6>
        </div>
        <div
          className="flex items-center gap-4
      "
        >
          <span className="text-[#737373] font-semibold">Views:</span>
          <button className="p-2 bg-gray-200 rounded">
            <LayoutGrid className="h-5 w-5" />
          </button>
          <button className="p-2 bg-gray-200 rounded">
            <i className="fa-solid fa-list fa-md text-[#737373] font-semibold"></i>
          </button>
        </div>

        <div className="flex items-center space-x-2">
          <select className="p-2 border border-[#DDDDDD] text-[#737373] bg-[#F9F9F9] rounded focus:border-[#DDDDDD] focus:outline-none cursor-pointer">
            <option>Popularity</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Newest</option>
          </select>
          <Button
            size="default"
            variant="default"
            className=" bg-[#23A6F0] text-white "
          >
            Filter
          </Button>
        </div>
      </div>
    </>
  );
}

export default FilterComp;
