import axios from "axios";
import React, { useEffect, useState } from "react";
import Styles from "../../Styles/Page-Section-Styles/Personel/Personel.module.css";

const options = {
  method: "GET",
  url: "https://random-user.p.rapidapi.com/getuser",
  headers: {
    "X-RapidAPI-Key": "c249750e5cmshf834de1d4b8bbb9p170a09jsn9237c26994e6",
    "X-RapidAPI-Host": "random-user.p.rapidapi.com",
  },
};

const Personel = () => {
  const [data, setData] = useState({});

  const url = `https://random-data-api.com/api/v2/users?size=10&is_xml=true`;

  useEffect(() => {
    const fetchData = () => {
      axios
        .get(url)
        .then((result) => {
          setData(result.data);
          console.table(result.data);
        })
        .catch(function (error) {
          console.error(error);
        });
    };

    fetchData();
  }, [url]);

  return (
    <div className={Styles.Personel}>
      <div className={Styles.Header}>
        <h3 className={Styles.Section_Title}>Personel</h3>
        <p className={Styles.Section_Description}>These are company personel</p>
      </div>

      <div className={Styles.Card}>
        <p>{data[0]?.password}</p>
      </div>
    </div>
  );
};

export default Personel;
