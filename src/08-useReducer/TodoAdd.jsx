import { useForm } from "../hooks/";

export const TodoAdd = ({ onNewTodo }) => {

    const {formState, description, onInputChange} = useForm({ 
        id: new Date().getTime(), 
        description: '', 
        done: false 
    });

    return(
        <>
            <form onSubmit={ () => onNewTodo( formState ) }>
                <input 
                    type="text" 
                    placeholder="Que hay que hacer?"
                    className="form-control"
                    name="description"
                    value={ description }
                    onChange={ onInputChange }
                />

                <button 
                    type="submit"
                    className="btn btn-outline-primary mt-1"
                >
                    Agregar
                </button>
            </form>
        </>
    );
};