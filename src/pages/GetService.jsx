import Header from "./Header.jsx"
import axios from "axios";
import { useState } from "react";
import { useParams } from 'react-router-dom';
import Footer from "./Footer.jsx"
import About from "./About.jsx"

function GetService() {

  const [service, setService] = useState("");
  const params = useParams()
  const serviceId = params.id;

  const fetchServices = async () => {
      try {
          const response = await axios.get(`https://mi-linux.wlv.ac.uk/~XXXXXX/codeigniterbackend/getservice/${serviceId}`);
          if (response.status === 200) {
            setService(response.data)
              // alert("Services Successfully Loaded");
          } else {
              // alert('Failed to fetch services');
          }
      } catch (error) {
          console.log(error);
          // alert('Error occurred while fetching services');
      }
  };
  fetchServices()

  return (
    <div className="getservice_">
      <Header/>
      {<div className="col-c">
          <div className="conta_v">
            <div className="card text-center">
                <div className="card-header">
                    <h3>Service Plan {service.service}</h3>
                </div>
                <div className="card-body">
                    <h4 className="card-title">{service.cost}/Month</h4>
                    <p className="card-text">Financial Service </p>
                    <ul className="list-group">
                        <li className="list-group-item">
                            <i className="fa fa-check"></i> Feature One
                        </li>
                        <li className="list-group-item">
                            <i className="fa fa-check"></i> Feature Two
                        </li>
                        <li className="list-group-item">
                            <i className="fa fa-check"></i> Feature Three
                        </li>
                        <li className="list-group-item">
                            <i className="fa fa-check"></i> Feature Four
                        </li>
                        <li className="list-group-item">
                            <i className="fa fa-check"></i> Feature Five
                        </li>
                    </ul>
                </div>
                <div className="card-footer text-muted">1 Year Plan</div>
            </div>
          </div>
      </div>}
      <About/>
      <Footer/>
  </div>
  );
}

export default GetService