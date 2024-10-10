import Filter from "./Filter";

const AllCollections = () => {
    return (
        <div>
            <h2>JEWELRY:</h2>
            {['COLLECTIONS', 'Rings', 'Bracelets', 'Earrings', 'Necklaces', 'Set of Two', 'Set of Three']
                .map((category, index) => (
                    <Filter key={index} category={category} />
                ))
            }
        </div>
    );
};

export default AllCollections;
