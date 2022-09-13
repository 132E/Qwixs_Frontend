import {useState} from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import { BASE_URL } from '../globals';


const AddServices = ({getAllBusinesses}) => {

    let navigate = useNavigate();
    let location = useLocation();
    let businessId = location.state.businessId;

    const initialStateService = {
        name: '',
        description: '',
    }

    const [serviceFormState, setServiceFormState] = useState(initialStateService);

    const handleChangeService = (event) => {
        setServiceFormState({
            ...serviceFormState,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmitService = async (event) => {
        event.preventDefault();
        let res = await axios.post(
            `${BASE_URL}/services/${businessId}`,
            serviceFormState
        )
        setServiceFormState(initialStateService);
        getAllBusinesses();
        navigate(`/businesses/${businessId}`); // go back to business page
    }


    return (
        <div className='main-container'>
            <h1>Add Services</h1>
            <div className='form-container'>
                <form onSubmit={handleSubmitService}>
                    <input
                        id="name"
                        type="text"
                        onChange={handleChangeService}
                        value={serviceFormState.name}
                        placeholder="Name"
                    />
                    <input
                        id="description"
                        type="text"
                        onChange={handleChangeService}
                        value={serviceFormState.description}
                        placeholder="Description"
                    />
                    <button type="submit">Add Service</button>

                </form>
            </div>
        </div>
    );
};
export default AddServices;