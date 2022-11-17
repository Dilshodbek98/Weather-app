import React, { useEffect, useState } from "react";
import { Cold, Container, Cool, Warm } from "./style";
import img from "../../assets/air-balloon.png";
import { CiSearch } from "react-icons/ci";
import { regions } from "../../utils/regions";
import { BsFillSunFill, BsSunFill } from "react-icons/bs";
import { BsFillCloudSunFill } from "react-icons/bs";
import { BsSnow } from "react-icons/bs";
import { BsFillCloudRainFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../redux/slice";

const Hero = () => {
  const [location, setLocation] = useState("");
  const dispatch = useDispatch();
  let time = new Date();

  useEffect(() => {
    dispatch(fetchData({ location: "Tashkent" }));
  }, []);
  const data = useSelector((state) => state.info);
  return (
    data.status === "success" && (
      <Container>
        {data?.data?.main?.temp - 273 < 0 && <Cold />}
        {data?.data?.main?.temp - 273 < 10 && <Cool />}
        {data?.data?.main?.temp - 273 < 20 && <Warm />}
        <div className="logo">
          <h2>the.weather</h2>
          <img src={img} alt="" />
        </div>

        <div className="info">
          <p className="temperature">
            {data?.data?.main?.temp
              ? Math.round(data?.data?.main?.temp - 273)
              : "Not found"}
            <sup>o</sup> C
          </p>
          <div className="location">
            <p className="city">
              {data?.data?.name ? data?.data?.name : "city"}
            </p>
            <p className="time">
              {time?.getHours()}:{" "}
              {time?.getMinutes() < 10
                ? "0" + time.getMinutes()
                : time.getMinutes()}{" "}
              - {time.toDateString()}
            </p>
          </div>
          <div className="icon">
            <BsSunFill color="white" size={40} />
          </div>
        </div>
      </Container>
    )
  );
};

export default Hero;
