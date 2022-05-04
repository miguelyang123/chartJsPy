const myChart = new Chart(document.getElementById("myChart"), config);

const labels = ["January", "February", "March", "April"];

const data = {
  labels: labels,
  datasets: [
    {
      label: "My First dataset",
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgb(255, 99, 132)",
      data: [0, 10, 5, 2],
    },
  ],
};

const config = {
  type: "line",
  data: data,
  options: {},
};
