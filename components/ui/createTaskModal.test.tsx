
import { screen, render, fireEvent, waitFor } from "@testing-library/react"
import "@testing-library/jest-dom"

import { QueryClient, QueryClientProvider } from "react-query"

import CreateTaskModal from "./createTaskModal"

import { api } from "@/lib/api"

const queryClient = new QueryClient()

jest.mock("../../lib/api", () => ({
    api: {
        createTask: jest.fn(),
    },
}));

test("updates relevant state when inputs are typed in", () => {

    render(
        <QueryClientProvider client={queryClient}>
            <CreateTaskModal />
        </QueryClientProvider>
    )

    const titleInput = screen.getByPlaceholderText("Enter a task title")
    const descriptionInput = screen.getByPlaceholderText("Enter a task description")

    fireEvent.change(titleInput, { target: { value: 'Example title' } });
    fireEvent.change(descriptionInput, { target: { value: 'Example description' } });

    expect(titleInput).toHaveValue("Example title")
    expect(descriptionInput).toHaveValue("Example description")
})

test("updates state on status change", async () => {

})

test("updates state on category change", () => {

})

test("hides modal when cancel clicked", () => {

    render(
        <QueryClientProvider client={queryClient}>
            <CreateTaskModal />
        </QueryClientProvider>
    )

    const cancelButton = screen.getByTestId("cancel-button")

    fireEvent.click(cancelButton)

    expect(screen.getByTestId("create-task-modal")).toHaveClass("hidden")

})

test("hides modal when overlay is clicked", () => {

    render(
        <QueryClientProvider client={queryClient}>
            <CreateTaskModal />
        </QueryClientProvider>
    )

    const overlay = screen.getByTestId("create-task-overlay")

    fireEvent.click(overlay)

    expect(screen.getByTestId("create-task-modal")).toHaveClass("hidden")

})

test('submits the form successfully', async () => {

    (api.createTask as jest.Mock)({ data: 'mocked data', error: null });

    render(
        <QueryClientProvider client={queryClient}>
            <CreateTaskModal />
        </QueryClientProvider>
    );

    fireEvent.submit(screen.getByTestId('create-task-form'));

    await waitFor(() => expect(api.createTask as jest.Mock).toHaveBeenCalledTimes(1));

    jest.clearAllMocks();
});

test("submit button is disabled when form is submitted", async () => {

    render(
        <QueryClientProvider client={queryClient}>
            <CreateTaskModal />
        </QueryClientProvider>
    );

    const button = screen.getByTestId('create-task-submit')

    expect(button).not.toBeDisabled();

    // Trigger form submission
    fireEvent.click(button);

    // Check disabled state during processing
    expect(button).toBeDisabled();

})