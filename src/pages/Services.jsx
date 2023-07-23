import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";

import axios from "axios";

const Services = () => {
    const [services, setServices] = useState([]);
    const [updateServiceId, setUpdateServiceId] = useState(null);
    const [addNewService, setaddNewService] = useState(null);
    const [service, setService] = useState("");
    const [cost, setCost] = useState("");
    const [valid, setValid] = useState(false);

    const [newService, setNewService] = useState({
        service: "",
        cost: "",
        valid: ""
    });

    const handleNewServiceChange = (e) => {
        setNewService({
            ...newService,
            [e.target.name]: e.target.value
        });
    };


    const fetchServices = async () => {
        try {
            const response = await axios.get("https://mi-linux.wlv.ac.uk/~XXXXXX/codeigniterbackend/services");
            if (response.status === 200) {
                setServices(response.data);
                alert("Services Successfully Loaded");
            } else {
                alert('Failed to fetch services');
            }
        } catch (error) {
            console.log(error);
            alert('Error occurred while fetching services');
        }
    };

    const addService = async () => {
        try {
            await axios.post("https://mi-linux.wlv.ac.uk/~XXXXXX/codeigniterbackend/add_service", newService)
                .then((response) => {
                    console.log(response.data);
                    alert(response.data.message);
                })
                .catch((error) => {
                    console.error(error);
                    if (error.response && error.response.data) {
                        alert(error.response.data.message);
                    } else {
                        alert("An error occurred");
                    }
                });
            fetchServices();
            setNewService({
                service: "",
                cost: "",
                valid: ""
            });
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchServices();
    }, []);

    const deleteService = async (id) => {
        console.log('delete id',id)
        var header = [
            "Content-type:application/json",
            "Access-Control-Allow-Origin: *",
            "Access-Control-Allow-Methods: POST, GET, DELETE, PUT, PATCH, OPTIONS",
            "Access-Control-Allow-Headers: Origin,X-Requested-With,Content-Type,Accept,Access-Control-Request-Method,Authorization,Cache-Control"
        ]
        try {
            await axios.post(`https://mi-linux.wlv.ac.uk/~XXXXXX/codeigniterbackend/deleteservice/${id}`,header)
                .then((response) => {
                    console.log(response);
                    alert(response.data.message);
                })
                .catch((error) => {
                    console.error(error);
                    if (error.response && error.response.data) {
                        alert(error.response.data.message);
                    } else {
                        alert("Success");
                    }
                });
            fetchServices();
        } catch (error) {
            console.log(error);
        }
    };

    const updateService = async (id) => {
        // console.log('update id',id)
        var header = [
            "Content-type:application/json",
            "Access-Control-Allow-Origin: *",
            "Access-Control-Allow-Methods: POST, GET, DELETE, PUT, PATCH, OPTIONS",
            "Access-Control-Allow-Headers: Origin,X-Requested-With,Content-Type,Accept,Access-Control-Request-Method,Authorization,Cache-Control"
        ]
        var updateserveData = {
            service,
            cost,
            valid
        }
        try {
            console.log(updateserveData)
            await axios.post(`https://mi-linux.wlv.ac.uk/~XXXXXX/codeigniterbackend/updateservice/${id}`, updateserveData,header)
                .then((response) => {
                    console.log(response.data);
                    alert(response.data.message);
                })
                .catch((error) => {
                    console.error(error);
                    if (error.response && error.response.data) {
                        alert(error.response.data.message);
                    } else {
                        alert("An error occurred");
                    }
                });
            setUpdateServiceId(null);
            fetchServices();
        } catch (error) {
            console.log(error);
        }
    };

    const handleUpdate = (serviceId) => {
        setUpdateServiceId(serviceId);
    };

    const handleAddNewService = () => {
        setaddNewService(true)
    }

    const [formData, setFormData] = useState({
        service_name: '',
        service_cost: '',
        service_validity: '',
    });


    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };
    const baseUrl = 'https://mi-linux.wlv.ac.uk/~XXXXXX/codeigniterbackend/addservice';
    const handleSubmit = (e) => {
        e.preventDefault();
        var header = [
            "Content-type:application/json",
            "Access-Control-Allow-Origin: *",
            "Access-Control-Allow-Methods: POST, GET, DELETE, PUT, PATCH, OPTIONS",
            "Access-Control-Allow-Headers: Origin,X-Requested-With,Content-Type,Accept,Access-Control-Request-Method,Authorization,Cache-Control"
        ]
        axios.post(baseUrl, formData, header)
            .then(response => {
                // Handle success
                console.log(response.data);
                alert(response.data.message); // Displays an alert with the message from the server
                setaddNewService(null)
            })
            .catch(error => {
                // Handle error
                console.error(error);
                if (error.response && error.response.data) {
                    alert(error.response.data.message); // Displays an alert with the error message from the server
                } else {
                    alert("An error occurred");
                }
            });
    };



    return (
        <div>
            <header id="page-header">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 m-auto text-center">
                            <h1>Financial Services</h1>
                            <p>Helps to know the policies and financial status </p>
                        </div>
                    </div>
                </div>
            </header>

            {/* SERVICES SECTION */}
            <section id="services" className="py-5">
                <div className="container">
                    <div className="row">
                        {services.map((service) => (
                            <div className="col-md-4 mt-4" key={service.serv_id}>
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
                                        <div className="crude_btns">
                                            <button className="btn btn-danger btn-block mt-2"
                                                    onClick={() => deleteService(service.serv_id)}>Delete
                                            </button>
                                            <button className="btn btn-primary btn-block mt-2"
                                                    onClick={() => handleUpdate(service.serv_id)}>Update
                                            </button>
                                        </div>
                                        <div className="crude_btns2">
                                            <Link to={`/getservice/${service.serv_id}`} className="btn btn-warning btn-block mt-2">Get Service</Link>
                                            <button className="btn btn-success btn-block mt-2" onClick={() => handleAddNewService()}>Add Service</button>
                                        </div>
                                    </div>
                                    <div className="card-footer text-muted">1 Year Plan</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                
                {/* Popup form for update */}
                {updateServiceId && (
                    <div className="popup p-2 cont_ainer">
                        <div className="popup-content">
                            <h3 className="text-center mx-auto">Update Service</h3>
                            <form method="POST">
                                <div className="form-group">
                                    <label htmlFor="service">Service</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="service"
                                        name="service"
                                        value={service}
                                        onChange={(e) => setService(e.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="cost">Cost</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="cost"
                                        name="cost"
                                        value={cost}
                                        onChange={(e) => setCost(e.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="valid">Valid</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="valid"
                                        name="valid"
                                        value={valid}
                                        onChange={(e) => setValid(e.target.value)}
                                    />
                                </div>
                                <div className="crude_btns">
                                    <button
                                        type="button"
                                        className="btn btn-primary"
                                        onClick={() => updateService(updateServiceId)}
                                    >
                                        Update
                                    </button>
                                    <button className="btn btn-secondary" onClick={() => setUpdateServiceId(null)}>Cancel
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}

            
                {addNewService && (
                    <div className="cont_ainer addnewservice">
                    <h3 className="text-center mt-8">Add New Service</h3>
                    <hr/>
                    <form onSubmit={handleSubmit}>
                        <div className="row p-2">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Enter Service Name"
                                            name="service" value={formData.service}
                                            onChange={handleChange} required/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Cost"
                                            name="cost" value={formData.cost}
                                            onChange={handleChange} required/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Enter Valid"
                                            name="valid" value={formData.valid} onChange={handleChange}
                                            required/>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <input type="submit" className="btn btn-success btn-block"
                                        value="Submit"/>
                            </div>
                        </div>
                    </form>
                </div>
                )}
            </section>

            {/* FAQ */}
            <section id="faq" className="p-5 bg-dark text-white">
                <div className="container">
                    <h1 className="text-center">Frequently Asked Questions</h1>
                    <hr/>
                    <div className="row">
                        <div className="col-md-6">
                            <div id="accordion">
                                {/* FAQ items */}
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div id="accordion">
                                {/* FAQ items */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;
