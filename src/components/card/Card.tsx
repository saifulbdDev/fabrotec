"use client";
import styles from "./styles.module.css";
import { IProducts } from "@/types/product.type";
import {
  StarIcon,

  HeartIcon
} from "@heroicons/react/24/outline";
import Link from "next/link";


interface ProductPageProps {
  item: IProducts;
}

const ProductPage: React.FC<ProductPageProps> = ({ item }) => {

  return (
    <div key={`${item.id}-item`} className={styles.card} title={item.title}>
      <div className={styles.cardLink}>
        <button className={styles.favButton}>
          <HeartIcon className={styles.heartIcon} />
        </button>
        <Link href={`/product/${item.id}`}>
          <div className={styles.cardHeader}>
            <img className={styles.cardImg} src={item.thumbnail} alt="" />
          </div>
        </Link>
        <div className={styles.cardBody}>
          <div>
            <p className={styles.cardTitle} title={item.title}>
              <span className={styles.brand} title="Brand">
                Brand,
              </span>{" "}
              {item.title}
            </p>
          </div>
          <div className={styles.rating}>
            {[...Array(Math.round(item.rating))].map((e, i) => (
              <StarIcon
                key={`star-${i}`}
                className={styles.starIcon}
                aria-hidden="true"
              />
            ))}
            {[...Array(5 - Math.round(item.rating))].map((e, i) => (
              <StarIcon
                key={`empty-star-${i}`}
                className={styles.emptyStarIcon}
                aria-hidden="true"
              />
            ))}
            <p className="text-xs ml-1 font-light mt-0.5">
              ({item.rating})
            </p>
          </div>
          <div>
            <div className="my-auto" title={`$${item.price}`}>
              <span className={styles.priceSub}>$</span>
              <span className={styles.priceTop}>{Math.trunc(item.price)}</span>
              {parseInt((item.price % 1).toFixed(2).substring(2)) !== 0 ? (
                <span className={styles.priceSub}>
                  {parseInt((item.price % 1).toFixed(2).substring(2))}
                </span>
              ) : (
                ""
              )}
            </div>
          </div>
          {/* <div className={styles.addToCart}>
            <button className={styles.addToCartButton} onClick={addToCart}>
              <ShoppingCartIcon
                className={styles.shoppingCartIcon}
                aria-hidden="true"
              />
              <div className="flex flex-col self-center">
                <span className={styles.buttonText}>Add to Cart</span>
              </div>
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
