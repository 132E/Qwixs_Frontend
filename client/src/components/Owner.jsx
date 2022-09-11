import {useLocation, useNavigate} from "react-router-dom";
import axios from "axios";
import {BASE_URL} from "../globals";

const Owner = ({businesses}) => {
    
    let location = useLocation();
    let navigate = useNavigate();

    let owner = location.state.owner; // this is the owner object that was passed in from the previous page
    let ownerBusinesses = businesses?.filter((business) => business.owner === owner.id)

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
                <h2>{owner.name}</h2>
                <button onClick={addBusiness}>Add Business</button>
            </section>
            <div className="page-title">
                <h2>Your Business Dashboard</h2>
            </div>
            <div className="businesses-container">
                {ownerBusinesses?.map((business) =>(
                    <div className="business-card">
                        <h2>{business.name}</h2>
                        <h3>About {business.name}</h3>
                        <p>{business.about}</p>
                        <h3>Address</h3>
                        <p>{business.address}</p>
                        <p>{business.city}, {business.state}</p>
                        <p>{business.zip}</p>

                    <div className="services-container">
                        <h3>Services</h3>
                            <div className="services-flex">
                                <p>{business.services?.name}</p>
                                <p>{business.services?.description}</p>
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