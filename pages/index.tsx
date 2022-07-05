import type { NextPage } from "next";
import Head from "next/head";
import Swipper from "../components/common/sliders/Swipper";
import Image from "next/image";
import Category from "../components/common/widgetcategory/Category";
import PupolarBrands from "../components/common/brands/PupolarBrands";
import SuggestionSlider from "../components/common/sliders/SuggestionSlider";
import CategorySuggestion from "../components/common/widgetcategory/CategorySuggestion";
import BestProduct from "../components/common/sliders/best-product/BestProduct";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>فروشگاه بیوتی | صفحه اصلی</title>
      </Head>

      <Swipper />

      <div className="container-2xl-w mx-auto px-4-lg px-0-2xl">
        <PupolarBrands />
        <Category />
        <CategorySuggestion />
        <SuggestionSlider />
        <BestProduct />
      </div>
      
    </>
  );
};

export default Home;
