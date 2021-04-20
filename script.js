// const Holiday = () => {
//   const list = fetch(
//     "https://holidayapi.com/v1/holidays?pretty&key=6f2ac29b-a300-42d9-9ece-75b5e8218fd8&country=IN&year=2020"
//   )
//     .then((Response) => Response.json())
//     .then((data) => console.log(data.holidays));
// };

// Holiday();

// const Countries = () => {
//   const list = fetch(
//     "https://holidayapi.com/v1/countries?pretty&key=6f2ac29b-a300-42d9-9ece-75b5e8218fd8"
//   )
//     .then((Response) => Response.json())
//     .then((data) => console.log(data.countries[0].name));
// };

// Countries();

function holidayDetails() {
  let countryname = document.querySelector(".countryName").value;
  let year = document.querySelector(".year").value;
  let named = countryname.charAt(0).toUpperCase() + countryname.slice(1);

  document.querySelector(".countryName").value = "";
  document.querySelector(".year").value = "";

  const list = fetch(
    "https://holidayapi.com/v1/countries?pretty&key=6f2ac29b-a300-42d9-9ece-75b5e8218fd8"
  )
    .then((Response) => Response.json())
    .then((data) => {
      let details = data.countries;
      console.log(data.countries[0].name);
      for (let i = 2; i < data.countries.length; i++) {
        let con = data.countries.filter((detail) => {
          console.log(data.countries[i].name);
          return data.countries[i].name === named;
        });
      }
    });
}
// for (let i = 0; i < data.countries.length; i++) {
//   const data = countries.filter((country) => {
//     console.log(data.countries[i].name);
//     return country.name === name;
//   });
// }
