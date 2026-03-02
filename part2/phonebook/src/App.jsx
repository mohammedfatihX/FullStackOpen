import "./index.css";
import { useState, useEffect } from "react";
import Filter from "./component/Filter";
import Form from "./component/Form";
import Persons from "./component/Persons";
import Notification from "./component/Notification";
import personService from "./service/person";

function App() {
  const [persons, setPersons] = useState([]);
  const [newPerson, setNewPerson] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [search, setSearch] = useState("");
  const [notification, setNotification] = useState({
    isError: false,
    message: null,
  });
  const personsToShow =
    search === ""
      ? persons
      : persons.filter((person) =>
          person.name.toLowerCase().startsWith(search.toLowerCase()),
        );

  useEffect(() => {
    personService.getAll().then((persons) => {
      setPersons(persons);
    });
  }, []);
  const addingperson = (event) => {
    event.preventDefault();
    if (newPerson === "" || newPhone === "") {
      alert(
        "name or number field is empty! try to fill the name or number field?",
      );
      return;
    }
    const isPersonExist = persons.find(
      (person) => person.name.toLowerCase() === newPerson.toLowerCase(),
    );
    if (isPersonExist !== undefined) {
      const condition = window.confirm(
        `${isPersonExist.name} is already added to phonebook, replace the old number with a new one ?)`,
      );
      if (condition) {
        const tmpNewPerson = {
          ...isPersonExist,
          name: newPerson,
          number: newPhone,
        };
        personService
          .update(isPersonExist.id, tmpNewPerson)
          .then((person) =>
            setPersons((currentPersons) =>
              currentPersons
                .filter((person) => person.id !== isPersonExist.id)
                .concat(person),
            ),
          )
          .catch((error) => {
            (setNotification({
              isError: true,
              message: `information of ${isPersonExist.name} has already been removed from server`,
            }),
              setTimeout(() => {
                setNotification({ message: null });
              }, 3000));
            setPersons((persons) =>
              persons.filter((person) => person.id !== isPersonExist.id),
            );
          });
      }
    } else {
      let tmpPerson = {
        name: newPerson,
        number: newPhone,
        id: String(persons.length + 1),
      };
      personService.create(tmpPerson).then((person) => {
        setPersons((persons) => persons.concat(person));
        setNewPerson("");
        setNewPhone("");
        (setNotification({ isError: false, message: `Added ${person.name}` }),
          setTimeout(() => {
            setNotification({ message: null });
          }, 3000));
      });
    }
  };

  const deletePerson = (id) => {
    const condition = window.confirm(
      `Delete ${persons.find((person) => person.id === id).name} ?`,
    );
    if (condition) {
      personService
        .remove(id)
        .then((deletePerson) =>
          setPersons((oldPerson) =>
            oldPerson.filter((person) => person.id !== deletePerson.id),
          ),
        );
    }
  };
  const onChangeNamePerson = (event) => {
    setNewPerson(event.target.value);
  };
  const onChangePhonePerson = (event) => {
    setNewPhone(event.target.value);
  };
  const onChangeSearch = (event) => {
    setSearch(event.target.value);
  };

  return (
    <div>
      <h1>PhoneBook</h1>
      <Notification notification={notification} />
      <Filter search={search} onChangeSearch={onChangeSearch} />
      <hr style={{ border: "2px solid black" }} />
      <br />
      <Form
        newPerson={newPerson}
        onChangeNamePerson={onChangeNamePerson}
        newPhone={newPhone}
        onChangePhonePerson={onChangePhonePerson}
        addingperson={addingperson}
      />

      <Persons persons={personsToShow} deletePerson={deletePerson} />
    </div>
  );
}

export default App;
