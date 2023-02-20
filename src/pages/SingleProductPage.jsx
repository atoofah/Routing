import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axiosInstance from "../api/axios.config";
import ImageSkeleton from "./shared/ImageSekeleton";
import Spinner from "./shared/Spinner";

const SingleProductPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isSpinner, setIsSpinner] = useState(true);
  const [error, setError] = useState(null);
  const [products, setProducts] = useState(null);
  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    // if (isNaN(id)) {
    //   navigate("/");
    // }

    axiosInstance
      .get(`/products/${id}`)
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        //setError(err.response.data.message ?? err.response.data);
        //   navigate("/");
      })
      .finally(() => {
        setIsLoading(false);
        setIsSpinner(false);
      });
  }, [id]);

  if (isLoading)
    return (
      <div className="grid grid-cols-grid-layout gap-4">
        {Array(20)
          .fill(1)
          .map((_, idx) => (
            <ImageSkeleton key={idx} />
          ))}

        {isSpinner ? <Spinner /> : null}
      </div>
    );
  if (error) return <h2>{error}</h2>;
  return (
    <div>
      {/* {isSpinner ? <Spinner /> : null} */}
      {products?.description}
    </div>
  );
};

export default SingleProductPage;
