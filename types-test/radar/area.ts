// https://f2.antv.vision/zh/examples/radar/radar#area

import F2 from '@antv/f2';
import _ from 'lodash';

const data = [
  {
    item: 'Design',
    user: '用户 A',
    score: 70,
  },
  {
    item: 'Design',
    user: '用户 B',
    score: 30,
  },
  {
    item: 'Development',
    user: '用户 A',
    score: 60,
  },
  {
    item: 'Development',
    user: '用户 B',
    score: 70,
  },
  {
    item: 'Marketing',
    user: '用户 A',
    score: 50,
  },
  {
    item: 'Marketing',
    user: '用户 B',
    score: 60,
  },
  {
    item: 'Users',
    user: '用户 A',
    score: 40,
  },
  {
    item: 'Users',
    user: '用户 B',
    score: 50,
  },
  {
    item: 'Test',
    user: '用户 A',
    score: 60,
  },
  {
    item: 'Test',
    user: '用户 B',
    score: 70,
  },
  {
    item: 'Language',
    user: '用户 A',
    score: 70,
  },
  {
    item: 'Language',
    user: '用户 B',
    score: 50,
  },
  {
    item: 'Technology',
    user: '用户 A',
    score: 70,
  },
  {
    item: 'Technology',
    user: '用户 B',
    score: 40,
  },
  {
    item: 'Support',
    user: '用户 A',
    score: 60,
  },
  {
    item: 'Support',
    user: '用户 B',
    score: 40,
  },
];
const chart = new F2.Chart<typeof data[0]>({
  id: 'container',
  pixelRatio: window.devicePixelRatio,
});

chart.coord('polar');
chart.source(data, {
  score: {
    min: 0,
    max: 120,
    nice: false,
    tickCount: 4,
  },
});
chart.tooltip({
  custom: true, // 自定义 tooltip 内容框
  onChange: function onChange(obj) {
    const legend = chart.get('legendController').legends.top![0];
    const tooltipItems = obj.items;
    const legendItems = legend.items;
    const map: Record<string, F2.LegendItem> = {};
    legendItems.forEach(function (item) {
      map[item.name] = _.clone(item);
    });
    tooltipItems.forEach(function (item) {
      const name = item.name!;
      const value = item.value;
      if (map[name]) {
        map[name].value = value;
      }
    });
    legend.setItems(_.values(map));
  },
  onHide: function onHide() {
    const legend = chart.get('legendController').legends.top![0];
    legend.setItems(chart.getLegendItems().user!);
  },
});
chart.axis('score', {
  label: function label(text, index, total) {
    if (index === total - 1) {
      return null;
    }
    return {
      top: true,
    };
  },
  grid: function grid(text) {
    if (Number(text) === 120) {
      return {
        lineDash: null,
      };
    }
  },
  line: {
    top: false,
  },
});
chart
  .area()
  .position(['item', 'score'])
  .color('user')
  .animate({
    appear: {
      animation: 'groupWaveIn',
    },
  });
chart
  .line()
  .position(['item', 'score'])
  .color('user')
  .animate({
    appear: {
      animation: 'groupWaveIn',
    },
  });
chart
  .point()
  .position(['item', 'score'])
  .color('user')
  .style({
    stroke: '#fff',
    lineWidth: 1,
  })
  .animate({
    appear: {
      delay: 300,
    },
  });

chart.render();
