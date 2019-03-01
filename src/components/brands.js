import React from "react";
import BrandImageCenturyLink from "./brand-image-centurylink";
import BrandImageDish from "./brand-image-dish";
import BrandImageSpectrum from "./brand-image-spectrum";

const Brands = () => (
  <div className="bg-grey-lighter my-20 px-4 py-4">
    <div className="flex items-center justify-center -mx-4">
      <div className="w-1/5 px-4">
        <BrandImageCenturyLink />
      </div>
      <div className="w-1/5 px-4">
        <BrandImageDish />
      </div>
      <div className="w-1/5 px-4">
        <BrandImageSpectrum />
      </div>
    </div>
  </div>
);

export default Brands;
