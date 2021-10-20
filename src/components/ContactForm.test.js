import { render, screen, fireEvent } from "@testing-library/react";
import ContactForm from "./ContactForm";

describe("ContactForm", () => {
  it("renders form", () => {
    render(<ContactForm />);
    const firstNameLabel = screen.getByText(/First Name/i);
    const addButton = screen.getByText(/Add/i);
    expect(firstNameLabel).toBeInTheDocument();
    expect(addButton).toBeInTheDocument();
  });

  it("does not submit contact if any input is empty", () => {
    const onSubmit = jest.fn();
    const { getByPlaceholderText, getByText } = render(
      <ContactForm onSubmit={onSubmit} />
    );
    fireEvent.change(getByPlaceholderText(/first name/i), {
      target: { value: "Test" },
    });
    fireEvent.click(getByText("Add"), {});
    expect(onSubmit).not.toHaveBeenCalled();
  });

  it("submit contact if all input has value", () => {
    const onSubmit = jest.fn();
    const { getByPlaceholderText, getByText } = render(
      <ContactForm onSubmit={onSubmit} />
    );
    fireEvent.change(getByPlaceholderText(/first name/i), {
      target: { value: "First" },
    });
    fireEvent.change(getByPlaceholderText(/last name/i), {
      target: { value: "Last" },
    });
    fireEvent.change(getByPlaceholderText(/phone #/i), {
      target: { value: "123" },
    });
    fireEvent.click(getByText("Add"), {});
    expect(onSubmit).toHaveBeenCalledWith({
      firstName: "First",
      lastName: "Last",
      phoneNumber: "123",
    });
  });
});
