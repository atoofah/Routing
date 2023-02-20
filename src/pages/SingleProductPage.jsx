import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const SingleProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (isNaN(id)) {
      navigate("/");
    }
  }, []);

  return <div>SingleProductPage</div>;
};

export default SingleProductPage;
