
export const Character = ({ data, increment }) => {

    const { name, species, image } = data;

    return(
        <div className="bg-body-tertiary me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden character-container">
            <div className="my-3 py-3">
                <h2 className="display-5">{ name }</h2>
                <p className="lead">{ species }</p>
                <button 
                    className='btn btn-primary' 
                    onClick={ () => increment() }>
                    Next Character
                </button>
            </div>
            <div className="bg-body shadow-sm mx-auto character-img" >
                <img src={ image } alt={ name } />
                
            </div>
        </div>
    );
};