import APIdataset from "../data-mock/dataset.json"
import APIchartSetDefinition from "../data-mock/charSetDefinition.json"
export default {
    fetchDataset(chartSetId) {
        return APIdataset
    },
    fetchChartSetDefinition(chartSetId) {
        return APIchartSetDefinition
    },
}