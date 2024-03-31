import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  selectAdditivies,
  fetchAdditive,
} from "../../redux/slices/additiveSlice";

const AdditiveInfo = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const slug = params.additiveSlug;
  const additivies = useSelector(selectAdditivies);
  const additive = additivies.find((additive) => additive.code === slug);
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/additivies");
  };

  useEffect(() => {
    if (additivies.length === 0) {
      dispatch(fetchAdditive("http://localhost:4000/additivies-list-delayed"));
    }
  }, [dispatch, additivies.length]);

  if (!additive) {
    return <div>Loading product details...</div>;
  }

  return <div>{additive.code}</div>;
};

export default AdditiveInfo;
