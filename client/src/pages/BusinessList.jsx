const BusinessList = ({ businesses, chooseBusiness }) => {
    return (
        <section className="page" id="business-list">
                <h1>Business List</h1>
            <div className="flex">   
                <div className="business-card">
                    {businesses?.map((business) => (
                        <div 
                            // onClick={() => chooseBusiness(business)}
                            key={business._id}>
                                <h3>{business.name}</h3>
                                <p>{business.about}</p>
                            
                                { business.Services?.map((service) => (
                                    <h5 key={service.name}>{service.name}</h5>
                                ))}
                                <p>{business.phone}</p>
                                <p>{business.address}</p>
                                <p>{business.city}</p>
                                <p>{business.state}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
};
export default BusinessList;