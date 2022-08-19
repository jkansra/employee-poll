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
})
