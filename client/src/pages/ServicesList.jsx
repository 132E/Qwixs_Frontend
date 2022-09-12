const ServicesList = ({services}) => {
    return (
        <section className="page" id="services-list">
                <h1>Service List</h1>
            <div className="flex">   
                <div className="business-card">
                    {services?.map((service) => (
                        <div key={service._id}>
                                <h3>{service.name}</h3>
                                <p>{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    );
};
export default ServicesList;