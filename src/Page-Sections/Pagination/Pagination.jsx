import React, { useState, useEffect } from "react";
import axios from "axios";
import Styles from "../../Styles/Page-Section-Styles/Pagination-Styles/General/Pagination.module.css";

const Pagination = () => {
  const [personelData, setPersonelData] = useState({});

  const url = `https://jsonplaceholder.typicode.com/users/1`;

  useEffect(() => {
    const getPersonelData = () => {
      axios.get(url).then((res) => {
        setPersonelData(res.data);
        console.log("Personel Data");
        console.log(setPersonelData);
      });
    };
    getPersonelData();
  }, [url]);

  return (
    <div className={Styles.Paginate_Container}>
      <h2 className={Styles.Section_Title}>Personel</h2>
      <h2 className={Styles.Section_Description}>These are company personel</h2>
      {personelData.map((data) => {
        const { id, name, username, email, address, phone, website, company } =
          data;

        return (<></>);
      })}
      ;
    </div>
  );
};

export default Pagination;
