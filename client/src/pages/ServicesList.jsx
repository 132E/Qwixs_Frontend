const ServicesList = ({services}) => {
    return (
        <section className="page" id="services-list">
            <div className="flex">   
                <h1>Service List</h1>
                <div className="business-card">
                    {services?.map((service) => (
                        <div key={service._id}>
                                <h3>{service.name}</h3>
                                <p>{service.discription}</p>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    );
};
export default ServicesList;