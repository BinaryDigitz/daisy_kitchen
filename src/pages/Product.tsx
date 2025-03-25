import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../providers/Context";
import { ProductTypes } from "../types";
import { ProductCard, Title } from "../components/exportComp";
import NewsLetter from "../components/home/NewsLetter";

function Product() {
  const [relatedProduct, setRelatedProduct] = useState<ProductTypes[]>([]);
  const [product, setProduct] = useState<ProductTypes>();
  const [viewImage, setViewImage] = useState("");
  const { products } = useContext(AppContext);
  const { productId } = useParams();

  useEffect(() => {
    const findedItem = products.find((item) => item.id === productId);

    if (findedItem) {
      const related = products
        .filter((item) => item.category === findedItem?.category)
        .slice(0, 5);
      setRelatedProduct(related);
      setViewImage(findedItem.image[0]);
      setProduct(findedItem);
    }
  }, [productId]);

  return (
    <div>
      {product ? (
        <div className="w-full grid place-items-center mt-10 p-5">
          <div className="flex flex-col md:flex-row w-full mb-5 lg:mb-10">
            <div className=" mx-auto w-full md:max-w-[50%] ">
              <div className=" ">
                <img
                  src={viewImage}
                  className=" bg-red-50 min-h-[400px] w-[85%] md:min-h-[350px] lg:min-h-[400px] lg:w-[340px] mx-auto rounded-tl-lg rounded-tr-lg"
                  alt={viewImage}
                />
                <div className="flex justify-around gap-1 mt-5 w-4/5 lg:w-1/2 mx-auto">
                  {product?.image.map((item) => (
                    <img
                      onClick={() => setViewImage(item)}
                      key={item}
                      src={item}
                      title="view image"
                      className="bg-red-50 min-h-24 w-20 rounded-sm hover:cursor-pointer"
                      alt={item}
                    />
                  ))}
                </div>
              </div>
            </div>
            {/* Right */}
            <div className=" py-10  ">
              <h3 className="heading3 text-red-950">{product?.name}</h3>
              <p className="flex gap-10 item-center text-lg lg:text-xl text-red-950">
                {product?.category}
                <span className="flex items-center">{"****"}(122)</span>
              </p>
              <p className="mt-2 font-medium text-red-950">
                Description <br />
                <span className="text-gray-600 font-normal">
                  {product?.description}
                </span>
              </p>
              <p className="font-medium mt-4 text-red-950">
                Ingredients <br />
                <span className="text-gray-600 font-normal">
                  Lorem text-sm ipsum dolor sit amet consectetur adipisicing
                  elit. Dolorem cum of
                </span>
              </p>
              <button className="px-6 py-3 bg-gradient-to-tr from-[var(--primary-color)] text-white rounded-sm hover:opacity-80 trans text-sm font-bold mt-5 to-[var(--secondary-color)]">
                ADD TO CART
              </button>
              <div className="border border-gray-500 p-2 mt-10">
                <h4 className="text-xl font-medium text-red-950">Review</h4>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit, autem nisi ab.
                </p>
              </div>
            </div>
          </div>
          <div className="my-5">
            <Title text1="RELATED" text2="PROUDUCTS" size="heading3" />
            <div className="grid grid-cols-2 mt-[var(--lg-margin)] md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 place-items-center gap-y-10 2xl:gap-y-14">
              {relatedProduct.map((item) => (
                <ProductCard product={item} />
              ))}
            </div>
          </div>
          <NewsLetter />
        </div>
      ) : (
        <div className="h-screen grid place-items-center">
          <div className="text-center text-4xl text-red-400">
            <h1>404</h1>
            <h2 className="heading3 text-red-400">NOT FOUND</h2>
          </div>
        </div>
      )}
    </div>
  );
}

export default Product;
