import type { NextPage } from "next";
import Head from "next/head";
import Swipper from "../components/common/sliders/main/Swipper";
import Image from "next/image";
import Category from "../components/common/widgetcategory/categories/Category";
import PupolarBrands from "../components/common/sliders/brands/PupolarBrands";
import SuggestionSlider from "../components/common/sliders/suggestionSpecialProduct/SuggestionSlider";
import CategorySuggestion from "../components/common/widgetcategory/suggestionCategoris/CategorySuggestion";
import BestProduct from "../components/common/sliders/bestSellingProduct/BestProduct";
import VisitProduct from "../components/common/widgetcategory/visitProduct/VisitProduct";
import ServiceMain from "../components/common/widget/services/ServiceMain";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>فروشگاه بیوتی | صفحه اصلی</title>
      </Head>

      <Swipper />

      <div className="container-2xl-w mx-auto px-4-lg px-0-2xl">
        <ServiceMain />
        <Category />
        <PupolarBrands />
        <CategorySuggestion />
        <VisitProduct />
        <SuggestionSlider />
        <BestProduct />
      </div>
    </>
  );
};

export default Home;
