import React, { useEffect, useState } from "react";
import { Container } from "./style";
import { CiSearch } from "react-icons/ci";
import { regions } from "../../utils/regions";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../redux/slice";

const Content = () => {
  const dispatch = useDispatch();
  const [location, setLocation] = useState("");
  useEffect(() => {
    dispatch(fetchData({ location: "Tashkent" }));
  }, []);
  const data = useSelector((state) => state.info);

  return (
    <Container>
      <div className="top">
        <input
          value={location}
          type="text"
          placeholder="Another location"
          onChange={(event) => setLocation(event.target.value)}
          onKeyDown={(event) => {
            if (event.code === "Enter") {
              setLocation(event.target.value);
              dispatch(fetchData({ location: location }));
              setLocation("")
            }
          }}
        />
        <ul>
          {regions.map((item) => {
            return (
              <li key={item.id}>
                <p
                  onClick={() => dispatch(fetchData({ location: item.region }))}
                >
                  {item.region}
                </p>
              </li>
            );
          })}
        </ul>
        <div
          className="icon"
          onClick={() => {
            dispatch(fetchData({ location: location }));
            setLocation("");
          }}
        >
          <CiSearch size={30} />
        </div>
      </div>

      {data.status === "success" && (
        <div className="bottom">
          <h2>Weather details</h2>
          <div className="row">
            <p>Cloudy</p>
            <span>
              {data?.data?.clouds?.all ? data?.data?.clouds?.all : "0"}%
            </span>
          </div>
          <div className="row">
            <p>Humidity</p>
            <span>
              {data?.data?.main?.humidity ? data?.data?.main?.humidity : "0"}%
            </span>
          </div>
          <div className="row">
            <p>Wind</p>
            <span>
              {data?.data?.wind?.speed ? data?.data?.wind?.speed : "0"} km/h
            </span>
          </div>
          <div className="row">
            <p>Rain</p>
            <span>{data?.data?.rain ? data?.data?.rain["1h"] : 0} mm</span>
          </div>
        </div>
      )}
    </Container>
  );
};

export default Content;
