
import { render, screen, fireEvent } from "@testing-library/react"
import "@testing-library/jest-dom"

import { QueryClient, QueryClientProvider } from "react-query"

import EmptyDashboard from "./emptyDashboard"
import CreateTaskModal from "../ui/createTaskModal"

const queryClient = new QueryClient()

test("shows create task modal when button clicked", () => {

    render(
        <QueryClientProvider client={queryClient}>
            <EmptyDashboard />
            <CreateTaskModal />
        </QueryClientProvider>
    )

    const button = screen.getByTestId("empty-dashboard-button");

    fireEvent.click(button);

    expect(screen.getByTestId("create-task-modal")).toBeInTheDocument()

})