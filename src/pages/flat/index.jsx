import BreadcumbMenu from "@/components/Common/BreadcumbMenu";
import Layout from "@/components/Layout";
import PropertyCard from "@/components/Pages/Property/PropertyCard";
import { animationMoving } from "@/utils/animation";
import Image from "next/image";
import { useLayoutEffect, useState } from "react";

const Property = (props) => {
  const { data } = props;
  const [flatList, setFlatList] = useState(data.flatList);
  const [facets, setFacets] = useState(data.facets);

  // const [] = useState(data.facents)
  useLayoutEffect(() => {
    animationMoving();
  }, []);

  const breadCumData = {
    title: "Properties",
    page: " Properties",
    baseUrl: "/",
    base: "Home",
  };

  return (
    <Layout>
      <BreadcumbMenu breadCumData={breadCumData} />
      <section className="th-blog-wrapper space-top space-extra-bottom">
        <div className="container">
          <div className="th-sort-bar property-style">
            <div className="row justify-content-between align-items-center">
              <div className="col-md">
                <h4
                  class="box-title text-start fadeinup wow"
                  data-wow-duration="1.5s"
                  data-wow-delay="0.1s"
                >
                  Properties List
                </h4>
              </div>
              <div className="col-md-auto">
                <div
                  class="sorting-filter-wrap fadeinup wow"
                  data-wow-duration="1.5s"
                  data-wow-delay="0.3s"
                >
                  {/* <div class="nav">
                    <a
                      class="active"
                      href="#"
                      id="tab-shop-list"
                      data-bs-toggle="tab"
                      data-bs-target="#tab-list"
                      role="tab"
                      aria-controls="tab-grid"
                      aria-selected="false"
                    >
                      <i class="fa-solid fa-list"></i>
                    </a>
                    <a
                      href="#"
                      id="tab-shop-grid"
                      data-bs-toggle="tab"
                      data-bs-target="#tab-grid"
                      role="tab"
                      aria-controls="tab-grid"
                      aria-selected="true"
                    >
                      {" "}
                      <i class="fa-light fa-grid-2"></i>
                    </a>
                  </div> */}
                  <form class="woocommerce-ordering" method="get">
                    <select
                      name="orderby"
                      class="orderby"
                      aria-label="Shop order"
                    >
                      <option value="default_sorting" selected="selected">
                        Default Sorting
                      </option>
                      <option value="asc">New To Old</option>
                      <option value="desc">Old To New</option>
                      <option value="price_asc">
                        Sort by price: low to high
                      </option>
                      <option value="price_desc">
                        Sort by price: high to low
                      </option>
                    </select>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="tab-content">
            <div
              class="tab-pane fade active show"
              id="tab-list"
              role="tabpanel"
              aria-labelledby="tab-shop-list"
            >
              <div class="row gy-40 justify-content-center">
                <div class="col-xl-4 col-lg-6">
                  <aside class="sidebar-area">
                    <div class="widget widget_search  ">
                      <h3 class="widget_title">search</h3>
                      <form class="search-form">
                        <input type="text" placeholder="Enter Keyword" />
                        <button type="submit">
                          <i class="far fa-search"></i>
                        </button>
                      </form>
                    </div>
                  </aside>
                </div>

                <div class="col-xl-8 col-lg-12">
                  <div class="row gy-30">
                    <div class="col-xl-12 fadeinup wow">
                      {flatList.map((singleFlatDetails, index) => {
                        return (
                          <PropertyCard
                            key={index}
                            singleFlatDetails={singleFlatDetails}
                          />
                        );
                      })}
                    </div>

                    <div class="th-pagination text-center pt-4">
                      <ul>
                        <li>
                          <a href="blog.html">
                            <i class="far fa-arrow-left"></i>
                          </a>
                        </li>
                        <li>
                          <a href="blog.html">1</a>
                        </li>
                        <li>
                          <a href="blog.html">2</a>
                        </li>
                        <li>
                          <a href="blog.html">3</a>
                        </li>
                        <li>
                          <a class="next-page" href="blog.html">
                            Next <i class="far fa-arrow-right"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export async function getStaticProps() {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_DOMAIN}/flat`);
    const data = await response.json();

    return {
      props: {
        data: data.data,
      },
    };
  } catch (error) {
    console.log(error);
  }
}

export default Property;
