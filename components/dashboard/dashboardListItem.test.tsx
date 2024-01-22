
import { screen, render } from "@testing-library/react"
import "@testing-library/jest-dom"

import DashboardListItem from "./dashboardListItem"

test("renders passed in title", () => {

    render(<DashboardListItem title="Hello title" status="Backlog" category="General" />)

    expect(screen.getByText("Hello title")).toBeInTheDocument()

})

test("renders calculated status content and images", () => {

    render(<DashboardListItem title="Hello title" status="Backlog" category="General" />)

    expect(screen.getByText("Backlog")).toBeInTheDocument()
    expect(screen.getByAltText("The relevant status icon of the task")).toHaveAttribute("src", "/assets/backlog.svg")

})

test("renders calculated category content and image", () => {

    render(<DashboardListItem title="Hello title" status="Completed" category="Learning" />)

    expect(screen.getByText("Learning")).toBeInTheDocument()
    expect(screen.getByAltText("The relevant category icon of the task")).toHaveAttribute("src", "/assets/learning.svg")

})