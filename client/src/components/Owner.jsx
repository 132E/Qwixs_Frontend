import {useLocation, useNavigate} from "react-router-dom";
import axios from "axios";
import {BASE_URL} from "../globals";



const Owner = ({businesses}) => {
    
    let location = useLocation();
    let navigate = useNavigate();

    let owner = location.state.owner
    let ownerBusinesses = businesses?.filter((business) => business.ownerId === owner.id)

    const addBusiness = () => {
        navigate(`/owner/${owner.id}/addbusiness`, {state: {owner: owner}});
    }

    const editBusiness = (business) => {
        navigate(`/owner/${owner.id}/editbusiness`, {state: {business: business}});
    }

    const deleteBusiness = async (business) => {
        await axios.delete(`${BASE_URL}/businesses/${business.id}`);
        navigate(`/owner/${owner.id}`, {state: {owner: owner}});
        console.log("Business deleted");
        window.location.reload(false);
    }



    return(
        <div>
            <section className="hero-section">
                <h1>Hello</h1>
                <h2>{owner.username}</h2>
                <button onClick={addBusiness}>Add Business</button>
            </section>
            <div className="page-title">
                <h2>Welcome to your Dashboard</h2>
            </div>
            <div className="businesses-container">
                {ownerBusinesses?.map((business) =>(
                    <div>
                        <h2>{businesses.name}</h2>
                        <img src={businesses.coverImage} alt="business-coverImage" />
                        <img src={businesses.aboutImage} alt="business-aboutImage" />
                        <h3>About {business.name}</h3>
                        <p>{business.about}</p>
                        <h3>Address</h3>
                        <p>{business.address}</p>
                        <p>{business.city}, {business.state}</p>
                        <p>{business.zip}</p>

                    <div className="services-container">
                        <h3>Services</h3>
                            <div className="services-flex">
                                {business.services?.map((service) => (
                                    <div className="service-card" key = {service.name}>
                                        <h4>{service.name}</h4>
                                        <p>{service.description}</p>
                                    </div>
                                ))}
                            </div>
                    </div>

                    <div className="business-card-buttons">
                        <button onClick={() => editBusiness(business)}>Edit</button>
                        <button onClick={() => deleteBusiness(business)}>Delete</button>
                    </div>

                    </div>
                ))}
            </div>

            </div>
        )
};
export default Owner;