
import { calculateStatus, calculateCategory } from "./helpers";

test("returns expected content from status helper", () => {
    const returnedData = calculateStatus("Backlog")

    expect(returnedData).toBe("/assets/backlog.svg")
})

test("returns expected content from category helper", () => {
    const returnedData = calculateCategory("General")

    expect(returnedData).toBe("/assets/general.svg")
})