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

  it("submit contact if all input has value and clear form", () => {
    const testContact = {
      firstName: "Mykolas",
      lastName: "Kvieska",
      phoneNumber: "123123",
    };
    const onSubmit = jest.fn();
    const { getByPlaceholderText, getByText } = render(
      <ContactForm onSubmit={onSubmit} />
    );
    const firstNameInput = getByPlaceholderText(/first name/i);
    fireEvent.change(firstNameInput, {
      target: { value: testContact.firstName },
    });
    expect(firstNameInput.value).toBe(testContact.firstName);

    const lastNameInput = getByPlaceholderText(/last name/i);
    fireEvent.change(lastNameInput, {
      target: { value: testContact.lastName },
    });
    expect(lastNameInput.value).toBe(testContact.lastName);

    const phoneNumberInput = getByPlaceholderText(/phone #/i);
    fireEvent.change(phoneNumberInput, {
      target: { value: testContact.phoneNumber },
    });
    expect(phoneNumberInput.value).toBe(testContact.phoneNumber);

    fireEvent.click(getByText("Add"), {});
    expect(onSubmit).toHaveBeenCalledWith(testContact);

    expect(firstNameInput.value).toBe("");
    expect(lastNameInput.value).toBe("");
    expect(phoneNumberInput.value).toBe("");
  });
});
