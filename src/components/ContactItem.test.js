import { render, screen } from "@testing-library/react";
import ContactItem from "./ContactItem";

describe("ContactItem", () => {
  it("renders no contacts", () => {
    render(
      <ContactItem
        contact={{
          firstName: "John",
          lastName: "York",
          phoneNumber: "12300123",
        }}
      />
    );

    expect(screen.getByText(/John/i)).toBeInTheDocument();
    expect(screen.getByText(/York/i)).toBeInTheDocument();
    expect(screen.getByText(/12300123/i)).toBeInTheDocument();
  });
});
