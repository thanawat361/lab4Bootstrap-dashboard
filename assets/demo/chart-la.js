// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Pie Chart Example
var ctx = document.getElementById("la");
var la = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ["thai", "English", "Chinese", "Japanes", "Korean","Russian"],
    datasets: [{
      data: [3, 2, 1, 0.5, 0.5, 0.5],
      backgroundColor: ['#007bff', '#dc3545', '#8a2be2', '#28a745','#ffb6c1','#ffd700'],
    }],
  },
});
