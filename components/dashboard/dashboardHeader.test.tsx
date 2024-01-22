
import { render, screen, fireEvent } from "@testing-library/react"
import "@testing-library/jest-dom"

import { QueryClient, QueryClientProvider } from "react-query"

import DashboardHeader from "./dashboardHeader"
import Dashboard from "@/pages/dashboard"
import CreateTaskModal from "../ui/createTaskModal"

const useRouter = jest.spyOn(require("next/router"), "useRouter")

const queryClient = new QueryClient()

test("renders link that points to homepage", () => {

    render(<DashboardHeader />)

    const link = screen.getByText("Kanby")

    expect(link).toBeInTheDocument()

})

test("renders button that calls show create task modal", () => {

    render(<DashboardHeader />)

    const button = screen.getByTestId("dashboard-header-button");

    expect(button).toBeInTheDocument()

})

test("shows create task modal when button clicked", () => {

    const router = { push: jest.fn() }
    useRouter.mockReturnValue(router)

    render(
        <QueryClientProvider client={queryClient}>
            <DashboardHeader />
            <CreateTaskModal />
        </QueryClientProvider>
    )

    const button = screen.getByTestId("dashboard-header-button");

    fireEvent.click(button);

    expect(screen.getByTestId("create-task-modal")).toBeInTheDocument()

})