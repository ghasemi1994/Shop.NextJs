import type { NextPage } from "next";
import Head from "next/head";
import Swipper from "../components/common/sliders/Swipper";
import Image from "next/image";
import Category from "../components/common/widgetcategory/Category";
import PupolarBrands from "../components/common/brands/PupolarBrands";
import SuggestionSlider from "../components/common/sliders/SuggestionSlider";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>فروشگاه بیوتی | صفحه اصلی</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Swipper />

      <div className="container">
        <PupolarBrands />
        <hr />
        <SuggestionSlider />
        <hr />
        <Category />
        <hr />
      </div>

      <div className="container">
        <div className="row mt-4">
          <div className="col-lg-4 col-md-6 col-sm-12">
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
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="card makeup-card">
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
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="card makeup-card">
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
      </div>
    </>
  );
};

export default Home;
