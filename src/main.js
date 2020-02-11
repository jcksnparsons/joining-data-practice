const makeEmployeeCard = card => {
    return `<article class="employee__name">
    <header>${card.first_name} ${card.last_name}</header>
    <section class="employee__department">Works in the ${card.department.name}</section>
    <section class="employee__computer">Currently using a ${card.computer.year} ${card.computer.manufacturer} ${card.computer.model}</section>
    </article>`
}

const cardOnDOM = employeeCards => {
  const employeeBox = document.querySelector(".employeeBox");

  employeeBox.innerHTML = "";
  employeeCards.forEach(card => {
    employeeBox.innerHTML += makeEmployeeCard(card);
  });
};

fetch("http://localhost:3000/employees?_expand=department&_expand=computer").then(resp => resp.json()).then(cardOnDOM);
