
function initializeChart(containerId, chartOptions) {
  return Highcharts.chart(containerId, chartOptions);
}

window.onload = function() {
  chart = initializeChart('evol-fcsts-gdp', evol_gdp_options);
};

function storeChartState() {
  // Store the current state of the chart
  chartState.options = chart.options;
  chartState.containerHTML = chart.container.innerHTML;
}

function expandSummary() {
  const dataSpaceDiv = document.querySelector('.container-section');

  // Check if dataSpaceDiv is not null to ensure the element with class "container-section" exists
  if (dataSpaceDiv) {
    if (isContentExpanded) {
      // If the content is expanded, blank the content
      dataSpaceDiv.innerHTML = `
        <div class="data-space-expanded">
          <div class="title">
            <div id="insights-header">
              <img id="arrow-fig" src="static/icons/arrow-left-square-fill.svg" alt="expand-right" onclick="expandSummary()">
              Summary
            </div>
          </div>
          <hr>
          <div class="bullet-space">
            <p></p>
          </div>
        </div>
      `;

      // Hide the chart container
      chart.container.style.display = 'none';
      // Store the current state of the chart
      storeChartState();
    } else {
      // If the content is not expanded, restore the original content
      if (!originalHTML) {
        // If originalHTML is not set, store the original content for the first time
        originalHTML = dataSpaceDiv.innerHTML;
      }
      dataSpaceDiv.innerHTML = originalHTML; // Restore the original content
      // Show the chart container
      chart.container.style.display = 'block';
      // Restore Highcharts state
      if (chartState.options && chartState.containerHTML) {
        chart.container.innerHTML = chartState.containerHTML;
        chart = Highcharts.chart('evol-fcsts-gdp', chartState.options); // Reinitialize the chart with the stored options
      }
    }
  } else {
    console.log("Element with class 'container-section' not found.");
  }

  // Toggle the state for the next click
  isContentExpanded = !isContentExpanded;
}