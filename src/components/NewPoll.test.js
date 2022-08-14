import { fireEvent, render } from '@testing-library/react'
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { store } from '..';
import NewPoll from './NewPoll';

describe("Snap <NewPoll />", () => {
    it("snap <NewPoll /> component successfully", () => {
        const component = render(
            <MemoryRouter>
                <Provider store={store}>
                    <NewPoll />
                </Provider>
            </MemoryRouter>
        );
        expect(component).toMatchSnapshot()
    })

    it("Submit a new Poll successfully", () => {
        const component = render(
            <MemoryRouter>
                <Provider store={store}>
                    <NewPoll />
                </Provider>
            </MemoryRouter>
        );
        const { getByTestId, getByText } = component
        const firstOption = getByTestId("first-option-input");
        fireEvent.change(firstOption, { target: { value: "React" } })
        const secondOption = getByTestId("second-option-input");
        fireEvent.change(secondOption, { target: { value: "React-Redux" } })
        const submitBtn = getByText("Submit")
        fireEvent.click(submitBtn);
        expect(firstOption.value).toEqual("")
        expect(secondOption.value).toEqual("")
    })
})
