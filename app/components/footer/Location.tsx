"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { locationKey, locationUrl } from "@/utils/useful";

const Location = () => {
  const [loading, setLoading] = useState(true);
  const [location, setLocation] = useState("Earth");

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${locationUrl}?key=${locationKey}`)
      .then((res) => {
        setLocation(res.data.country);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  }, []);

  return (
    <div className="py-3 px-6">
      {loading ? (
        <div className="py-[2px]">
          <div className="loading loading-s"></div>
        </div>
      ) : (
        <p>{location}</p>
      )}
    </div>
  );
};

export default Location;
