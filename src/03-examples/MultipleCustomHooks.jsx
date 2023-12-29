import { useFetch, useCounter } from '../hooks';
import { Character, LoadingCharacter } from './';

export const MultipleCustomHooks = () => {

    const {counter, increment } = useCounter(1);
    const { data, isLoading, hasError } = useFetch(`https://rickandmortyapi.com/api/character/${counter}`);

    return (
        <>
            <h1> Rick & Morty Characters </h1>
            <hr />
            {
                isLoading 
                    ? ( <LoadingCharacter />)
                    : ( <Character 
                            data = { data } 
                            increment = { increment }/> )
            }
        </>
    );
};
