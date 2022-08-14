import { render, screen } from "@testing-library/react"
import { Provider } from "react-redux"
import { MemoryRouter } from "react-router-dom"
import { store } from ".."
import Leaderboard from "./Leaderboard"

describe("Leaderboard Component", () => {
    it("render the correct details in leaderboard component", () => {
        const component = render(
            <MemoryRouter>
                <Provider store={store}>
                    <Leaderboard />
                </Provider>
            </MemoryRouter>
        )
        screen.debug()
    })
})