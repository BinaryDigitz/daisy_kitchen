import { useState } from "react";
import type { ProductTypes } from "../types";
import { Link } from "react-router-dom";
interface Props {
  product: ProductTypes;
}
function ProductCard({ product }: Props) {
  const [isLiked, setLike] = useState(false);
  const [isAdded, setAdded] = useState(false);

  const starIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="size-3 md:size-4 opacity-80"
      height="24px"
      viewBox="0 -960 960 960"
      width="24px"
      fill="#d2042d"
    >
      <path d="m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-350Z" />
    </svg>
  );
  const threeStar = Array.from({ length: 3 }, (_, i) => (
    <span key={i}>{starIcon}</span>
  ));
  const fourStar = Array.from({ length: 4 }, (_, i) => (
    <span key={i}>{starIcon}</span>
  ));
  const fiveStar = Array.from({ length: 5 }, (_, i) => (
    <span key={i}>{starIcon}</span>
  ));

  const unlikeIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="size-5 opacity-40"
      height="24px"
      viewBox="0 -960 960 960"
      width="24px"
      fill="[var(--black-color2)]"
    >
      <path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z" />
    </svg>
  );
  const likeIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="size-5"
      height="24px"
      viewBox="0 -960 960 960"
      width="24px"
      fill="#d2042d"
    >
      <path d="M718-313 604-426l57-56 57 56 141-141 57 56-198 198ZM440-501Zm0 381L313-234q-72-65-123.5-116t-85-96q-33.5-45-49-87T40-621q0-94 63-156.5T260-840q52 0 99 22t81 62q34-40 81-62t99-22q81 0 136 45.5T831-680h-85q-18-40-53-60t-73-20q-51 0-88 27.5T463-660h-46q-31-45-70.5-72.5T260-760q-57 0-98.5 39.5T120-621q0 33 14 67t50 78.5q36 44.5 98 104T440-228q26-23 61-53t56-50l9 9 19.5 19.5L605-283l9 9q-22 20-56 49.5T498-172l-58 52Z" />
    </svg>
  );
  return (
    <article className=" w-[190px] h-[390px] md:w-[300px] md:h-[470px]  lg:h-[470px] z-0 bg-[var(--white-color)] rounded-md shadow-md overflow-hidden relative trans ">
      {isAdded && (
        <span
          title="Go to cart"
          className="absolute right-0 cursor-pointer bg-[var(--black-color5655)] font-bold size-6 grid place-items-center text-md shadow-md rounded-full text-[var(--white-color)]"
        >
          1
        </span>
      )}
      <Link to={`/product/${product.id}`}>
        <img
          src={product.image[0]}
          className="w-full object-cover cursor-pointer hover:scale-110 h-[250px] md:h-[300px] trans"
          alt={product.name}
          title="See details"
        />
      </Link>
      <div className="px-2 py-4">
        <div className="flex justify-between  ">
          <h2 className=" text-md md:text-lg font-bold text-[var(--black-color2)]">
            {product.name}
          </h2>
          <span
            className=" cursor-pointer trans"
            onClick={() => setLike(!isLiked)}
            title={!isLiked ? `Like ${product.name}` : `Unlike ${product.name}`}
            aria-label="Like cake"
          >
            {!isLiked ? unlikeIcon : likeIcon}
          </span>
        </div>
        <div className="py-1">
          <div className="flex justify-between items-center">
            <p className="py-1 text-md opacity-80 md:text-lg text-[var(--black-color2)]">
              {product.price} fCFA
            </p>
            <span className="flex items-center ">
              {product.score <= 3 && threeStar}
              {product.score >= 3.5 && product.score < 4.5 && fourStar}
              {product.score >= 4.5 && fiveStar}
            </span>
          </div>

          {/* CTA BUTTON */}
          <div className="grid place-items-center">
            <button
              onClick={() => {
                setAdded(!isAdded);
              }}
              title={`Add ${product.name} to cart`}
              className={` rounded-lg hover:opacity-100 opacity-80 text-sm md:text-lg border-2 py-2 mt-2   w-[95%] bg-[var(--primary-color)] m-auto shadow-md  ${
                isAdded
                  ? "text-[var(--primary-color)] bg-inherit border-[var(--primary-color)] opacity-100"
                  : "bg-[var(--primary-color)] text-[var(--white-color)]"
              } trans`}
            >
              {isAdded ? "Added" : "Add to cart"}
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;
