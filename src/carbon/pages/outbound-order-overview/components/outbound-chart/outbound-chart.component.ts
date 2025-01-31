import "@carbon/charts/styles.css";
import { GroupedBarChart } from "@carbon/charts";

export const OutboundGroupedChartComponent = (chart, data, options) => {
  return new GroupedBarChart(chart, {
    data,
    options,
  });
};
