import React, { useEffect } from "react";
import Layout from "@/components/Layout";
import BreadcumbMenu from "@/components/Common/BreadcumbMenu";
const wishlist = () => {
  useEffect(() => {
    function shapeMockup(elements) {
      elements.forEach(function (element) {
        const shapeTop = element.getAttribute("data-top");
        const shapeRight = element.getAttribute("data-right");
        const shapeBottom = element.getAttribute("data-bottom");
        const shapeLeft = element.getAttribute("data-left");

        Object.assign(element.style, {
          top: shapeTop,
          right: shapeRight,
          bottom: shapeBottom,
          left: shapeLeft,
        });

        element.removeAttribute("data-top");
        element.removeAttribute("data-right");
        element.removeAttribute("data-bottom");
        element.removeAttribute("data-left");

        if (element.parentElement) {
          element.parentElement.classList.add("shape-mockup-wrap");
        }
      });
    }

    // Initialize on DOMContentLoaded
    // document.addEventListener("DOMContentLoaded", function () {
    const shapeElements = document.querySelectorAll(".shape-mockup");

    if (shapeElements.length > 0) {
      shapeMockup(Array.from(shapeElements));
    }
    // });
  }, []);

  useEffect(() => {
    // Background image
    document.querySelectorAll("[data-bg-src]").forEach((el) => {
      const src = el.getAttribute("data-bg-src");
      el.style.backgroundImage = `url(${src})`;
      el.removeAttribute("data-bg-src");
      el.classList.add("background-image");
    });

    // Background color
    document.querySelectorAll("[data-bg-color]").forEach((el) => {
      const color = el.getAttribute("data-bg-color");
      el.style.backgroundColor = color;
      el.removeAttribute("data-bg-color");
    });

    // Theme color (CSS variable)
    document.querySelectorAll("[data-theme-color]").forEach((el) => {
      const color = el.getAttribute("data-theme-color");
      el.style.setProperty("--theme-color", color);
      el.removeAttribute("data-theme-color");
    });

    // Border color as CSS variable
    document.querySelectorAll("[data-border]").forEach((el) => {
      const borderColor = el.getAttribute("data-border");
      el.style.setProperty("--th-border-color", borderColor);
    });

    // Mask image
    document.querySelectorAll("[data-mask-src]").forEach((el) => {
      const mask = el.getAttribute("data-mask-src");
      el.style.maskImage = `url(${mask})`;
      el.style.webkitMaskImage = `url(${mask})`; // For Safari
      el.classList.add("bg-mask");
      el.removeAttribute("data-mask-src");
    });
  }, []);
  const breadCumData = {
    title: "Wishlist",
    page: "Wishlist",
    baseUrl: "/",
    base: "Home",
  };
  return (
    <Layout>
      <BreadcumbMenu breadCumData={breadCumData} />
      <div class="space">
        <div class="container">
          <div class="tinv-wishlist woocommerce tinv-wishlist-clear">
            <div class="tinv-header">
              <h2 class="mb-30">Wishlist</h2>
            </div>
            <form action="#" method="post" autocomplete="off">
              <table class="tinvwl-table-manage-list">
                <thead>
                  <tr>
                    <th class="product-cb">
                      <input
                        type="checkbox"
                        class="global-cb"
                        title="Select all for bulk action"
                      />
                    </th>
                    <th class="product-remove"></th>
                    <th class="product-thumbnail">&nbsp;</th>
                    <th class="product-name">
                      <span class="tinvwl-full">Product Name</span>
                      <span class="tinvwl-mobile">Product</span>
                    </th>
                    <th class="product-price">Unit Price</th>
                    <th class="product-date">Date Added</th>
                    <th class="product-stock">Stock Status</th>
                    <th class="product-action">&nbsp;</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="wishlist_item">
                    <td class="product-cb">
                      <input
                        type="checkbox"
                        name="wishlist_pr[]"
                        value="58"
                        title="Select for bulk action"
                      />
                    </td>
                    <td class="product-remove">
                      <button
                        type="submit"
                        name="tinvwl-remove"
                        value="58"
                        title="Remove"
                      >
                        <i class="fal fa-times"></i>
                      </button>
                    </td>
                    <td class="product-thumbnail">
                      <a href="shop-details.html">
                        <img
                          src="/images/product/product_1_1.png"
                          class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                          alt="image"
                        />
                      </a>
                    </td>
                    <td class="product-name">
                      <a href="shop-details.html">Table Lamp</a>
                    </td>
                    <td class="product-price">
                      <span class="woocommerce-Price-amount amount">
                        <bdi>
                          <span class="woocommerce-Price-currencySymbol">
                            $
                          </span>
                          45.00
                        </bdi>
                      </span>
                    </td>
                    <td class="product-date">
                      <time class="entry-date" datetime="2021-11-21 03:54:24">
                        November 28, 2024
                      </time>
                    </td>
                    <td class="product-stock">
                      <p class="stock in-stock">
                        <span>
                          <i class="fas fa-check"></i>
                        </span>
                        <span class="tinvwl-txt">In stock</span>
                      </p>
                    </td>
                    <td class="product-action">
                      <button
                        class="button th-btn radius left-icon"
                        name="tinvwl-add-to-cart"
                        value="58"
                        title="Add to Cart"
                      >
                        <i class="fal fa-shopping-cart"></i>
                        <span class="tinvwl-txt">Add to Cart</span>
                      </button>
                    </td>
                  </tr>
                  <tr class="wishlist_item">
                    <td class="product-cb">
                      <input
                        type="checkbox"
                        name="wishlist_pr[]"
                        value="60"
                        title="Select for bulk action"
                      />
                    </td>
                    <td class="product-remove">
                      <button
                        type="submit"
                        name="tinvwl-remove"
                        value="60"
                        title="Remove"
                      >
                        <i class="fal fa-times"></i>
                      </button>
                    </td>
                    <td class="product-thumbnail">
                      <a href="shop-details.html">
                        <img
                          src="/images/product/product_1_2.png"
                          class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                          alt="image"
                        />
                      </a>
                    </td>
                    <td class="product-name">
                      <a href="shop-details.html">Comfort Sofa</a>
                    </td>
                    <td class="product-price">
                      <ins>
                        <span class="woocommerce-Price-amount amount">
                          <bdi>
                            <span class="woocommerce-Price-currencySymbol">
                              $
                            </span>
                            18.00
                          </bdi>
                        </span>
                      </ins>
                      <del>
                        <span class="woocommerce-Price-amount amount">
                          <bdi>
                            <span class="woocommerce-Price-currencySymbol">
                              $
                            </span>
                            20.00
                          </bdi>
                        </span>
                      </del>
                    </td>
                    <td class="product-date">
                      <time class="entry-date" datetime="2021-11-21 03:54:24">
                        November 28, 2024
                      </time>
                    </td>
                    <td class="product-stock">
                      <p class="stock in-stock">
                        <span>
                          <i class="fas fa-check"></i>
                        </span>
                        <span class="tinvwl-txt">In stock</span>
                      </p>
                    </td>
                    <td class="product-action">
                      <button
                        class="button th-btn radius left-icon"
                        name="tinvwl-add-to-cart"
                        value="60"
                        title="Add to Cart"
                      >
                        <i class="fal fa-shopping-cart"></i>
                        <span class="tinvwl-txt">Add to Cart</span>
                      </button>
                    </td>
                  </tr>
                  <tr class="wishlist_item">
                    <td class="product-cb">
                      <input
                        type="checkbox"
                        name="wishlist_pr[]"
                        value="60"
                        title="Select for bulk action"
                      />
                    </td>
                    <td class="product-remove">
                      <button
                        type="submit"
                        name="tinvwl-remove"
                        value="60"
                        title="Remove"
                      >
                        <i class="fal fa-times"></i>
                      </button>
                    </td>
                    <td class="product-thumbnail">
                      <a href="shop-details.html">
                        <img
                          src="/images/product/product_1_3.png"
                          class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                          alt="image"
                        />
                      </a>
                    </td>
                    <td class="product-name">
                      <a href="shop-details.html">Modern Chair</a>
                    </td>
                    <td class="product-price">
                      <ins>
                        <span class="woocommerce-Price-amount amount">
                          <bdi>
                            <span class="woocommerce-Price-currencySymbol">
                              $
                            </span>
                            18.00
                          </bdi>
                        </span>
                      </ins>
                      <del>
                        <span class="woocommerce-Price-amount amount">
                          <bdi>
                            <span class="woocommerce-Price-currencySymbol">
                              $
                            </span>
                            20.00
                          </bdi>
                        </span>
                      </del>
                    </td>
                    <td class="product-date">
                      <time class="entry-date" datetime="2021-11-21 03:54:24">
                        November 28, 2024
                      </time>
                    </td>
                    <td class="product-stock">
                      <p class="stock in-stock">
                        <span>
                          <i class="fas fa-check"></i>
                        </span>
                        <span class="tinvwl-txt">In stock</span>
                      </p>
                    </td>
                    <td class="product-action">
                      <button
                        class="button th-btn radius left-icon"
                        name="tinvwl-add-to-cart"
                        value="60"
                        title="Add to Cart"
                      >
                        <i class="fal fa-shopping-cart"></i>
                        <span class="tinvwl-txt">Add to Cart</span>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </form>
            <div class="social-buttons">
              <span>Share on</span>
              <ul>
                <li>
                  <a
                    href="https://www.facebook.com/sharer/sharer.php?u=permalink"
                    class="social social-facebook"
                    title="Facebook"
                  >
                    <i class="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/share?url=permalink"
                    class="social social-twitter "
                    title="Twitter"
                  >
                    <i class="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="http://pinterest.com/pin/create/button/?url=permalink"
                    class="social social-pinterest "
                    title="Pinterest"
                  >
                    <i class="fab fa-pinterest-p"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://api.whatsapp.com/send?text=permalink"
                    class="social social-whatsapp "
                    title="WhatsApp"
                  >
                    <i class="fab fa-whatsapp"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="http://vecurosoft.com/products/wordpress/foodelio/wishlist/974b61/"
                    class="social social-clipboard "
                    title="Clipboard"
                  >
                    <i class="far fa-clipboard"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:?body=permalink"
                    class="social social-email "
                    title="Email"
                  >
                    <i class="far fa-envelope"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default wishlist;
