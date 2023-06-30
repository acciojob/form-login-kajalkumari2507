function getFormvalue() {
    event.preventDefault();

    const firstName = document.getElementsByName("fname")[0].value;
    const lastName = document.getElementsByName("lname")[0].value;

    alert(firstName +" " +lastName);
  }