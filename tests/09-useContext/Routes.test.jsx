import { RouterProvider, createMemoryRouter } from "react-router-dom";
import { render, screen} from "@testing-library/react";
import { getRoutes } from "../../src/09-useContext/Routes";

describe('Pruebas en Routes', () => {

    test('debe de mostrar el HomePage', () => {

        const router = createMemoryRouter( getRoutes, {initialEntries: ['/'],});

        render(<RouterProvider router={ router } />);

        const head = screen.getByRole('heading',{level:1}).innerHTML;
        expect(head).toContain('HomePage');
    });

    test('debe mostrar el login page', () => {
        const router = createMemoryRouter( getRoutes, { initialEntries: ['/login']});
        
        render(<RouterProvider router={ router } />);
        expect( screen.getByText('LoginPage') ).toBeTruthy();
    });
});