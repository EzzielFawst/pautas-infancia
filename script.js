function padTo2Digits(num) {
  return num.toString().padStart(2, "0");
}

function formatDate(date) {
  return [
      date.getFullYear(),
      padTo2Digits(date.getMonth() + 1),
      padTo2Digits(date.getDate()),
  ].join("-");
}

const todayDate = document.getElementById("todayDate");
const birth_date = document.getElementById("birth_date");
const aliveDays = document.getElementById("aliveDays");
const aliveDaysInput = document.getElementById("aliveDaysInput")
const aliveMonths = document.getElementById("aliveMonths");
const aliveYears = document.getElementById("aliveYears");
const fields = document.getElementById("field-app");
todayDate.value = formatDate(new Date());

const test1 = `<div><h2> Sostén cefálico </h2></div>`;

const test2 = `<div><h2> Sonrisa social </h2></div>`;

const test3 = `<div><h2> Busca con la mirada a su madre </h2></div>`;

const test4 = `<div><h2> Busca objeto </h2></div>`;

const test5 = `<div><h2> Prensión pinza superior </h2></div>`;

const test6 = `<div><h2> Camina solo </h2></div>`;

const test7 = `<div><h2> Control de esfínteres diurno </h2></div>`;

const test8 = `<div><h2> Frase sustantivo verbo </h2></div>`;

const test9 = `<div><h2> Frases completas </h2></div>`;

const test10 = `<div><h2> Reconoce 3 colores </h2></div>`;

const test11 = `<div><h2> Camina talón punta </h2></div>`;

const test12 = `<div><h2> Copia cruz </h2></div>`;

const test13 = `<div><h2> Dibuja persona en 6 partes </h2></div>`;

birth_date.addEventListener("change", () => {
  let date1 = new Date(todayDate.value.toString());
  let date2 = new Date(birth_date.value.toString());
  const numToMonth = 30;
  const numToYear = 365.25;

  // Calcular el tiempo entre 2 fechas
  let Difference_In_Time = date1.getTime() - date2.getTime();

  // Calcular el número de días entre 2 fechas
  let Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
  aliveDays.innerText = Difference_In_Days;
  aliveDaysInput.value =  Difference_In_Days;
  aliveMonths.innerText = `(${
      (Difference_In_Days / numToMonth)
          .toString()
          .match(/^-?\d+(?:\.\d{0,2})?/)[0]
  } meses)`;
  aliveYears.innerText = `(${
      (Difference_In_Days / numToYear)
          .toString()
          .match(/^-?\d+(?:\.\d{0,2})?/)[0]
  } años)`;

  if (
      Difference_In_Days / numToMonth >= 0 &&
      Difference_In_Days / numToMonth <= 1.99
  ) {
      fields.innerHTML = `${test1} ${test2}`;
  } else if (
      Difference_In_Days / numToMonth >= 2 &&
      Difference_In_Days / numToMonth <= 2.99
  ) {
      fields.innerHTML = `${test1} ${test2} ${test3}`;
  } else if (
      Difference_In_Days / numToMonth >= 3 &&
      Difference_In_Days / numToMonth <= 6.99
  ) {
      fields.innerHTML = `${test3} ${test4}`;
  } else if (
      Difference_In_Days / numToMonth >= 7 &&
      Difference_In_Days / numToMonth <= 7.99
  ) {
      fields.innerHTML = `${test3} ${test4} ${test5}`;
  } else if (
      Difference_In_Days / numToMonth >= 8 &&
      Difference_In_Days / numToMonth <= 9.99
  ) {
      fields.innerHTML = `${test4} ${test5}`;
  } else if (
      Difference_In_Days / numToMonth >= 10 &&
      Difference_In_Days / numToMonth <= 12.99
  ) {
      fields.innerHTML = `${test4} ${test5} ${test6}`;
  } else if (
      Difference_In_Days / numToMonth >= 13 &&
      Difference_In_Days / numToMonth <= 15.99
  ) {
      fields.innerHTML = `${test5} ${test6}`;
  } else if (
      Difference_In_Days / numToMonth >= 16 &&
      Difference_In_Days / numToMonth <= 17.99
  ) {
      fields.innerHTML = `${test6}`;
  } else if (
      Difference_In_Days / numToMonth >= 18 &&
      Difference_In_Days / numToMonth <= 18.99
  ) {
      fields.innerHTML = `${test6} ${test7} ${test8}`;
  } else if (
      Difference_In_Days / numToMonth >= 19 &&
      Difference_In_Days / numToMonth <= 29.99
  ) {
      fields.innerHTML = `${test7} ${test8} ${test9}`;
  } else if (
      Difference_In_Days / numToMonth >= 30 &&
      Difference_In_Days / numToMonth <= 32.99
  ) {
      fields.innerHTML = `${test7} ${test8} ${test9} ${test10} ${test11}`;
  } else if (
      Difference_In_Days / numToMonth >= 33 &&
      Difference_In_Days / numToMonth <= 35.99
  ) {
      fields.innerHTML = `${test7} ${test9} ${test10} ${test11}`;
  } else if (
      Difference_In_Days / numToMonth >= 36 &&
      Difference_In_Days / numToMonth <= 36.99
  ) {
      fields.innerHTML = `${test7} ${test9} ${test10} ${test11}`;
  } else if (
      Difference_In_Days / numToMonth >= 37 &&
      Difference_In_Days / numToMonth <= 38.99
  ) {
      fields.innerHTML = `${test9} ${test10} ${test11} ${test12}`;
  } else if (
      Difference_In_Days / numToMonth >= 39 &&
      Difference_In_Days / numToMonth <= 66.99
  ) {
      fields.innerHTML = `${test10} ${test11} ${test12} ${test13}`;
  } else if (
      Difference_In_Days / numToMonth >= 67 &&
      Difference_In_Days / numToMonth <= 71.99
  ) {
      fields.innerHTML = `${test12} ${test13}`;
  }
});

todayDate.addEventListener("change", () => {
  if (birth_date.value) {
      let date1 = new Date(todayDate.value.toString());
      let date2 = new Date(birth_date.value.toString());
      const numToMonth = 30;
      const numToYear = 365.25;

      // Calcular el tiempo entre 2 fechas
      let Difference_In_Time = date1.getTime() - date2.getTime();

      // Calcular el número de días entre 2 fechas
      let Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
      if (Difference_In_Days < 0) {
          alert("Edad del infante en números negativos");
          fields.innerHTML = "";
          aliveDays.innerText = "?";
          aliveDaysInput.value = "?";
          aliveMonths.innerText = "";
          aliveYears.innerText = "";
      } else {
          aliveDays.innerText = Difference_In_Days;
          aliveDaysInput.value = Difference_In_Days;
          aliveMonths.innerText = `(${
              (Difference_In_Days / numToMonth)
                  .toString()
                  .match(/^-?\d+(?:\.\d{0,2})?/)[0]
          } meses)`;
          aliveYears.innerText = `(${
              (Difference_In_Days / numToYear)
                  .toString()
                  .match(/^-?\d+(?:\.\d{0,2})?/)[0]
          } años)`;
      }
      if (
          Difference_In_Days / numToMonth >= 0 &&
          Difference_In_Days / numToMonth <= 1.99
      ) {
          fields.innerHTML = `${test1} ${test2}`;
      } else if (
          Difference_In_Days / numToMonth >= 2 &&
          Difference_In_Days / numToMonth <= 2.99
      ) {
          fields.innerHTML = `${test1} ${test2} ${test3}`;
      } else if (
          Difference_In_Days / numToMonth >= 3 &&
          Difference_In_Days / numToMonth <= 6.99
      ) {
          fields.innerHTML = `${test3} ${test4}`;
      } else if (
          Difference_In_Days / numToMonth >= 7 &&
          Difference_In_Days / numToMonth <= 7.99
      ) {
          fields.innerHTML = `${test3} ${test4} ${test5}`;
      } else if (
          Difference_In_Days / numToMonth >= 8 &&
          Difference_In_Days / numToMonth <= 9.99
      ) {
          fields.innerHTML = `${test4} ${test5}`;
      } else if (
          Difference_In_Days / numToMonth >= 10 &&
          Difference_In_Days / numToMonth <= 12.99
      ) {
          fields.innerHTML = `${test4} ${test5} ${test6}`;
      } else if (
          Difference_In_Days / numToMonth >= 13 &&
          Difference_In_Days / numToMonth <= 15.99
      ) {
          fields.innerHTML = `${test5} ${test6}`;
      } else if (
          Difference_In_Days / numToMonth >= 16 &&
          Difference_In_Days / numToMonth <= 17.99
      ) {
          fields.innerHTML = `${test6}`;
      } else if (
          Difference_In_Days / numToMonth >= 18 &&
          Difference_In_Days / numToMonth <= 18.99
      ) {
          fields.innerHTML = `${test6} ${test7} ${test8}`;
      } else if (
          Difference_In_Days / numToMonth >= 19 &&
          Difference_In_Days / numToMonth <= 29.99
      ) {
          fields.innerHTML = `${test7} ${test8} ${test9}`;
      } else if (
          Difference_In_Days / numToMonth >= 30 &&
          Difference_In_Days / numToMonth <= 32.99
      ) {
          fields.innerHTML = `${test7} ${test8} ${test9} ${test10} ${test11}`;
      } else if (
          Difference_In_Days / numToMonth >= 33 &&
          Difference_In_Days / numToMonth <= 35.99
      ) {
          fields.innerHTML = `${test7} ${test9} ${test10} ${test11}`;
      } else if (
          Difference_In_Days / numToMonth >= 36 &&
          Difference_In_Days / numToMonth <= 36.99
      ) {
          fields.innerHTML = `${test7} ${test9} ${test10} ${test11}`;
      } else if (
          Difference_In_Days / numToMonth >= 37 &&
          Difference_In_Days / numToMonth <= 38.99
      ) {
          fields.innerHTML = `${test9} ${test10} ${test11} ${test12}`;
      } else if (
          Difference_In_Days / numToMonth >= 39 &&
          Difference_In_Days / numToMonth <= 66.99
      ) {
          fields.innerHTML = `${test10} ${test11} ${test12} ${test13}`;
      } else if (
          Difference_In_Days / numToMonth >= 67 &&
          Difference_In_Days / numToMonth <= 71.99
      ) {
          fields.innerHTML = `${test12} ${test13}`;
      }
  }
});