import { render, screen } from "@testing-library/react";
import ContactList from "./ContactList";

describe("ContactList", () => {
  it("renders no contacts", () => {
    render(<ContactList />);
    const noContactsSign = screen.getByText(/No contacts.../i);
    expect(noContactsSign).toBeInTheDocument();
  });

  it("renders multiple contacts", () => {
    render(
      <ContactList contacts={[{ firstName: "john" }, { firstName: "jane" }]} />
    );

    expect(screen.getByText("john")).toBeInTheDocument();
    expect(screen.getByText("jane")).toBeInTheDocument();
  });
});
