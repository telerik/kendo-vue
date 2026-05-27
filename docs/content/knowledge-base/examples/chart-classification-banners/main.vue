<template>
  <div>
    <KButton @click="onImageExportClick">
      Export as Image
    </KButton>

    <div style="margin-top: 12px;">
      <div
        style="font-weight: 700; letter-spacing: 0.05em; font-size: 16px; margin-left: 8px; margin-bottom: 8px;"
      >
        UNCLASSIFIED
      </div>

      <Chart
        ref="chartRef"
        :style="{ height: '420px' }"
      >
        <ChartSeries>
          <ChartSeriesItem
            type="column"
            :data-items="[110, 230, 200, 78]"
          />
        </ChartSeries>
        <ChartCategoryAxis>
          <ChartCategoryAxisItem :categories="[2015, 2016, 2017, 2018]" />
        </ChartCategoryAxis>
      </Chart>

      <div
        style="font-weight: 700; letter-spacing: 0.05em; font-size: 16px; margin-right: 8px; margin-top: 8px; text-align: right;"
      >
        UNCLASSIFIED
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import {
  Chart,
  ChartSeries,
  ChartSeriesItem,
  ChartCategoryAxis,
  ChartCategoryAxisItem,
  exportVisual,
} from '@progress/kendo-vue-charts';
import { Button as KButton } from '@progress/kendo-vue-buttons';
import { exportImage, Text, Path, geometry, drawing } from '@progress/kendo-drawing';
import { saveAs } from '@progress/kendo-file-saver';

const chartRef = ref<InstanceType<typeof Chart> | null>(null);

const addSolidBackground = (visual: drawing.Group, color: string): void => {
  const b = visual.bbox();
  const rect = new geometry.Rect(
    [b.origin.x, b.origin.y],
    [b.size.width, b.size.height]
  );
  const bg = Path.fromRect(rect);
  bg.fill(color);
  bg.stroke('none');
  visual.insert(0, bg);
};

const addClassMarkingsOutside = (chartVisual: drawing.Group): drawing.Group => {
  const bbox = chartVisual.bbox();
  const outsideTop = 28;
  const outsideBottom = 22;
  const padX = 20;
  const font = 'bold 16px Arial';

  // TOP — UNCLASSIFIED
  const topText = new Text('UNCLASSIFIED', [0, 0], {
    font,
    fill: { color: '#000' },
  });
  const topBox = topText.bbox();
  topText.position([
    bbox.origin.x + padX,
    bbox.origin.y - outsideTop - topBox.size.height,
  ]);

  // BOTTOM — UNCLASSIFIED
  const bottomText = new Text('UNCLASSIFIED', [0, 0], {
    font,
    fill: { color: '#000' },
  });
  const bottomBox = bottomText.bbox();
  bottomText.position([
    bbox.origin.x + bbox.size.width - padX - bottomBox.size.width,
    bbox.origin.y + bbox.size.height + outsideBottom,
  ]);

  chartVisual.append(topText);
  chartVisual.append(bottomText);

  addSolidBackground(chartVisual, '#ffffff');

  return chartVisual;
};

const onImageExportClick = () => {
  if (!chartRef.value) return;

  const chartVisual = exportVisual(chartRef.value) as drawing.Group | null;
  if (!chartVisual) return;

  addClassMarkingsOutside(chartVisual);

  exportImage(chartVisual).then((dataURI) => {
    saveAs(dataURI, 'chart-unclassified.png');
  });
};
</script>
