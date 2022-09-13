import axios from "axios";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { BASE_URL } from "../globals";


const AddBusiness = () => {

    let location = useLocation();
    let navigate = useNavigate();

    let owner = location.state.owner 


    const initialStateBusiness = {
        name: '',
        coverImage: '',
        about: '',
        aboutImage: '',
        adress: '',
        city: '',
        state: '',
        zipcode: '',
        phone: '',
    }

    const [businessFormState, setBusinessFormState] = useState(initialStateBusiness);

    const handleChangeBusiness = (event) => {
        setBusinessFormState({
            ...businessFormState,
            [event.target.id]: event.target.value
        })
    }

    const handleSubmitBusiness = async (event) => {
        event.preventDefault();
        let res = await axios.post(
            `${BASE_URL}/businesses/${owner.id}`,
            businessFormState
        )
        setBusinessFormState(initialStateBusiness);
        navigate(`/businesses/${res.data.id}/addservice`,{
            state: {businessId: res.data.id}
        })
    }

    return (
        <div className="main-container">

            <h1>Add Business</h1>

            <div className="form-container">
                <form onSubmit={handleSubmitBusiness}>
                    <input 
                        id="name"
                        type="text"
                        onChange={handleChangeBusiness}
                        value={businessFormState.name}
                        placeholder="Business Name"
                    />
                    <input 
                        id="coverImage"
                        type="text"
                        onChange={handleChangeBusiness}
                        value={businessFormState.coverImage}
                        placeholder="Cover Image URL"
                    />
                    <input 
                        id="about"
                        type="text"
                        onChange={handleChangeBusiness}
                        value={businessFormState.about}
                        placeholder="About"
                    />
                    <input
                        id="aboutImage"
                        type="text"
                        onChange={handleChangeBusiness}
                        value={businessFormState.aboutImage}
                        placeholder="About Image URL"
                    />
                    <input
                        id="adress"
                        type="text"
                        onChange={handleChangeBusiness}
                        value={businessFormState.adress}
                        placeholder="Adress"
                    />
                    <input
                        id="city"
                        type="text"
                        onChange={handleChangeBusiness}
                        value={businessFormState.city}
                        placeholder="City"
                    />
                    <select
                        id="state"
                        type="text"
                        onChange={handleChangeBusiness}
                        value={businessFormState.state}
                        placeholder="State"
                    >
                        <option value="default">Select a State</option>
                        <option value="AL">Alabama</option>
                        <option value="AK">Alaska</option>
                        <option value="AZ">Arizona</option>
                        <option value="AR">Arkansas</option>
                        <option value="CA">California</option>
                        <option value="CO">Colorado</option>
                        <option value="CT">Connecticut</option>
                        <option value="DE">Delaware</option>
                        <option value="DC">District Of Columbia</option>
                        <option value="FL">Florida</option>
                        <option value="GA">Georgia</option>
                        <option value="HI">Hawaii</option>
                        <option value="ID">Idaho</option>
                        <option value="IL">Illinois</option>
                        <option value="IN">Indiana</option>
                        <option value="IA">Iowa</option>
                        <option value="KS">Kansas</option>
                        <option value="KY">Kentucky</option>
                        <option value="LA">Louisiana</option>
                        <option value="ME">Maine</option>
                        <option value="MD">Maryland</option>
                        <option value="MA">Massachusetts</option>
                        <option value="MI">Michigan</option>
                        <option value="MN">Minnesota</option>
                        <option value="MS">Mississippi</option>
                        <option value="MO">Missouri</option>
                        <option value="MT">Montana</option>
                        <option value="NE">Nebraska</option>
                        <option value="NV">Nevada</option>
                        <option value="NH">New Hampshire</option>
                        <option value="NJ">New Jersey</option>
                        <option value="NM">New Mexico</option>
                        <option value="NY">New York</option>
                        <option value="NC">North Carolina</option>
                        <option value="ND">North Dakota</option>
                        <option value="OH">Ohio</option>
                        <option value="OK">Oklahoma</option>
                        <option value="OR">Oregon</option>
                        <option value="PA">Pennsylvania</option>
                        <option value="RI">Rhode Island</option>
                        <option value="SC">South Carolina</option>
                        <option value="SD">South Dakota</option>
                        <option value="TN">Tennessee</option>
                        <option value="TX">Texas</option>
                        <option value="UT">Utah</option>
                        <option value="VT">Vermont</option>
                        <option value="VA">Virginia</option>
                        <option value="WA">Washington</option>
                        <option value="WV">West Virginia</option>
                        <option value="WI">Wisconsin</option>
                        <option value="WY">Wyoming</option>
                    </select>
                    <input
                        id="zipcode"
                        type="text"
                        onChange={handleChangeBusiness}
                        value={businessFormState.zipcode}
                        placeholder="Zipcode"
                    />
                    <input
                        id="phone"
                        type="text"
                        onChange={handleChangeBusiness}
                        value={businessFormState.phone}
                        placeholder="Phone"
                    />
                    <button type="submit">Add Business</button>
                </form>
            </div>
        </div>
    )
};

export default AddBusiness;