import { render, screen } from "@testing-library/react";
import { MultipleCustomHooks } from "../../src/03-examples";
import { useFetch } from "../../src/hooks/useFetch";

jest.mock('../../src/hooks/useFetch');

describe('Pruebas en <MultipleCustomHooks.test />', () => {

    test('debe de mostrar el componente por defecto', () => {

        useFetch.mockReturnValue({
            data: null,
            isLoading: true,
            hasError: null
        });

        render( <MultipleCustomHooks /> );
        const nextButton = screen.getByRole( 'button' );

        expect( screen.getByText('Loading...') ); 
        expect( screen.getByText('Rick & Morty Characters') );   
        expect( nextButton.disabled ).toBeTruthy();    
    });

    test('debe de mostrar un personaje', () => {
        
        useFetch.mockReturnValue({
            data: { name: 'morty', species: 'human', image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Frickandmorty.fandom.com%2Fwiki%2FMorty_Smith&psig=AOvVaw1Soy5OTc0j1cstPyt8XKVQ&ust=1705383332892000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCNj7kZHW3oMDFQAAAAAdAAAAABAD'},
            isLoading: false,
            hasError: null
        });

        render( <MultipleCustomHooks /> );
        const nextButton = screen.getByRole('button');
        
        expect( screen.getByText('human') ).toBeTruthy();
        expect( screen.getByText('morty') ).toBeTruthy();
        expect( nextButton.disabled ).toBeFalsy();
    });
});