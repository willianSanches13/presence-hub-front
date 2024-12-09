import React, { useEffect, useState } from "react";
import "./HomePage.css";
import Navbar from "../../components/Navbar/Navbar";
import apiGetAllAlunos from "../../api/Alunos/apiGetAllAlunos";

const HomePage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiGetAllAlunos();
        if (response.ok) {
          const data = await response.json();
          setData(data);
        } else {
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }
      } catch (err) {
        console.error(err.message);
      }
    };

    fetchData();
  }, []);

  console.log(data);
  return (
    <>
      <Navbar />
      <div className="home">
        <h1>Welcome to My Website</h1>
        <p>This is a simple homepage with a navigation bar.</p>
      </div>
    </>
  );
};

export default HomePage;
