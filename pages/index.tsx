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
        <Category />
        <CategorySuggestion />
        <SuggestionSlider />
        <BestProduct />
      </div>

      <div className="w-full d-flex flex-wrap align-items-start flex-row p-4 d-none">
        <div className="col-lg-4 col-md-6 col-sm-12 p-2">
          <div className="card makeup-card">
            <Image
              src="/images/cards/card2.webp"
              className="card-img-top"
              alt="no-image"
              layout="fill"
            />
            <div className="card-body">
              <h5 className="card-title">ميكاپ</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the cards content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 p-2">
          <div className="card makeup-card ">
            <Image
              src="/images/cards/card3.webp"
              className="card-img-top"
              alt="no-image"
              layout="fill"
            />

            <div className="card-body">
              <h5 className="card-title">ميكاپ</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the cards content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 p-2">
          <div className="card makeup-card ">
            <Image
              src="/images/cards/card1.webp"
              className="card-img-top"
              alt="no-image"
              layout="fill"
            />
            <div className="card-body">
              <h5 className="card-title">ميكاپ</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the cards content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
