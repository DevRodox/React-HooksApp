import { useFetch } from '../hooks/useFetch';
import { useCounter } from '../hooks/useCounter';

export const MultipleCustomHooks = () => {

    const {counter, increment } = useCounter(1);
    const { data, isLoading, hasError } = useFetch(`https://rickandmortyapi.com/api/character/${counter}`);
    const { name, species } = data || {};

    console.log(data);

    return (
        <>
            <h1> Rick & Morty Characters </h1>
            <hr />

            {
                isLoading ? ( 
                    <div className='alert alert-info text-center'>
                        Loading...
                    </div>
                ):
                (
                    <blockquote className='blockquote text-end'>
                    <p className='mb-1'>{ name }</p>
                    <footer className='blockquote-footer'>{ species }</footer>
                    </blockquote>
                )
            }

            <button 
                className='btn btn-primary' 
                onClick={ () => increment() }
                disabled={ isLoading }>
                Next Character
            </button>
        </>
    );
};
