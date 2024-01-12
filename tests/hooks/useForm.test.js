import { renderHook, act } from "@testing-library/react";
import { useForm } from "../../src/hooks/useForm";

describe('Pruebas en useForm', () => {
    
    const initialForm = {
        name: 'rodrigo',
        mail: 'rodrigo@gmail.com'
    };
    
    test('debe de regresar los valores por defecto', () => {

        const { result } = renderHook( () => useForm( initialForm ) );

        expect( result.current ).toEqual({
            name: initialForm.name,
            mail: initialForm.mail,
            formState: initialForm,
            onInputChange: expect.any( Function ),
            onResetForm: expect.any( Function )
        });
    });

    test('debe de cambiar el nombre del formulario', () => { 
       
        const { result } = renderHook( () => useForm( initialForm ) );
        const { onInputChange } = result.current;

        const event = {
            target: {
                name: 'name',
                value: 'Pedro'
            }
        }

        act( () => {
            onInputChange( event );
        });

        expect( result.current.name ).toBe( 'Pedro' );
        expect( result.current.formState.name ).toBe( 'Pedro');
    });
  
    test('debe de realizar el reset del formulario', () => { 
        
        const { result } = renderHook( () => useForm( initialForm ) );
        const { onInputChange, onResetForm } = result.current;

        const event = {
            target: {
                name: 'name',
                value: 'Pedro'
            }
        }

        act( () => {
            onInputChange( event );
            onResetForm();
        });

        expect( result.current.name ).toBe( initialForm.name );
        expect( result.current.formState.name ).toBe( initialForm.name );
    });
});