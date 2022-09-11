import {useLocation, useNavigate} from "react-router-dom";
import axios from "axios";
import {BASE_URL} from "../globals";

const Owner = ({businesses}) => {
    
    let location = useLocation();
    let navigate = useNavigate();

    let owner = location.state.owner
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

        </div>
    )
};
export default Owner;