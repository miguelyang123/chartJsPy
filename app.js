const { text } = require("express");
const express = require("express");
const req = require("express/lib/request");
const app = express();
let { PythonShell } = require("python-shell");

//server
app.listen(3000, () => {
  console.log("伺服器啟動port 3000");
});

app.use(express.static("public"));
app.set("view engine", "ejs");

//首頁
app.get("/", (req, res) => {
  res.render("index.ejs");
});

//http://localhost:3000/chart
// app.get("/chart", (req, res) => {
//   res.render("chart.ejs");
//   console.log("chart page");
// });

app.get("/chart", pythonProcess);

//讀取py
function pythonProcess(req, res) {
  console.log("chart page");
  let options = {
    args: [req.query.Jan, req.query.Feb, req.query.Mar, req.query.Apr],
  };

  PythonShell.run("./process.py", options, (err, data) => {
    if (err) res.send(err);
    const chartData = JSON.parse(data);

    console.log(
      `January: ${chartData.Jan}, February: ${chartData.Feb}, March:${chartData.Mar},April:${chartData.Apr}`
    );

    let Jan = chartData.Jan;
    let Feb = chartData.Feb;
    let Mar = chartData.Mar;
    let Apr = chartData.Apr;

    // res.json(chartData);

    res.render("chart.ejs", { Jan, Feb, Mar, Apr });
  });
}

app.get("/test", Process);

//讀取py
function Process(req, res) {
  console.log("chart page");
  let options = {
    args: [],
  };

  PythonShell.run("./test.py", options, (err, data) => {
    if (err) res.send(err);
    const testData = JSON.parse(data);
    console.log(testData);
    res.send("OK");
  });
}

//chart.js
// const labels = ["January", "February", "March", "April"];

// const data = {
//   labels: labels,
//   datasets: [
//     {
//       label: "My First dataset",
//       backgroundColor: "rgb(255, 99, 132)",
//       borderColor: "rgb(255, 99, 132)",
//       data: [0, 10, 5, 2],
//     },
//   ],
// };

// const config = {
//   type: "line",
//   data: data,
//   options: {},
// };

// const myChart = new Chart(document.getElementById("myChart"), config);

/*     <p>
      January: <%= chartData.Jan%> , February: <%=chartData.Feb%>,
      March:<%=chartData.Mar%>, April:<%=chartData.Apr%>
    </p> */
