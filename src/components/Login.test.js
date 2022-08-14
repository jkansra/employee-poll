import { render } from "@testing-library/react";
import '@testing-library/jest-dom'
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { store } from "..";
import Login from "./Login";

describe("Login Page", () => {
    it("Test if the text and user dropdown are present on the login page", () => {
        const component = render(
            <MemoryRouter>
                <Provider store={store}>
                    <Login />
                </Provider>
            </MemoryRouter>
        )
        const { getByText, getByTestId } = component
        expect(getByText("Please select the user to login:")).toBeInTheDocument()
        expect(getByTestId("select-login")).toBeInTheDocument();
    })
})
