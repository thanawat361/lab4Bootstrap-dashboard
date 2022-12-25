// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Pie Chart Example
var ctx = document.getElementById("myPieChart");
var myPieChart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ["css", "html", "php", "python", "java","assembly"],
    datasets: [{
      data: [15, 20, 30, 20, 10, 5],
      backgroundColor: ['#007bff', '#dc3545', '#8a2be2', '#28a745','#ffb6c1','#ffd700'],
    }],
  },
});
