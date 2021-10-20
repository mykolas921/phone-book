import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("renders Phone Book App", () => {
    render(<App />);
    const linkElement = screen.getByText(/Phone Book App/i);
    expect(linkElement).toBeInTheDocument();
  });

  it("filter works properly", () => {
    render(<App />);
    const input1 = screen.getByPlaceholderText(/First Name/i);
    const input2 = screen.getByPlaceholderText(/Last Name/i);
    const input3 = screen.getByPlaceholderText(/Phone #/i);
    const btn = screen.getByText(/Add/i);
    const searchInput = screen.getByPlaceholderText("search");

    const addContact = (contactStr) => {
      const values = contactStr.split(" ");
      fireEvent.change(input1, { target: { value: values[0] } });
      fireEvent.change(input2, { target: { value: values[1] } });
      fireEvent.change(input3, { target: { value: values[2] } });
      fireEvent.click(btn, {});
    };

    const setSearchVal = (value) =>
      fireEvent.change(searchInput, { target: { value } });

    const checkContactExist = (contactStr) => {
      const values = contactStr.split(" ");
      for (const val of values) {
        expect(screen.getByText(val)).toBeInTheDocument();
      }
    };

    const checkContactNotExist = (contactStr) => {
      const values = contactStr.split(" ");
      for (const val of values) {
        expect(screen.queryByText(val)).toBeNull();
      }
    };

    addContact("Mykolas Kvieska 12345");
    addContact("John Norman 67890");

    checkContactExist("Mykolas Kvieska 12345");
    checkContactExist("John Norman 67890");

    setSearchVal("Mykolas");
    checkContactExist("Mykolas Kvieska 12345");
    checkContactNotExist("John Norman 67890");

    setSearchVal("Mykolas 123");
    checkContactExist("Mykolas Kvieska 12345");
    checkContactNotExist("John Norman 67890");

    addContact("Ralph Ross 1234");
    checkContactExist("Ralph Ross 1234");

    setSearchVal("");
    checkContactExist("Mykolas Kvieska 12345");
    checkContactExist("John Norman 67890");
    checkContactExist("Ralph Ross 1234");
  });
});
