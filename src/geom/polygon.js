import Geom from './base';
import { isArray } from '@util';
import './shape/polygon';

class Polygon extends Geom {
  getDefaultCfg() {
    const cfg = super.getDefaultCfg();
    cfg.type = 'polygon';
    cfg.shapeType = 'polygon';
    cfg.generatePoints = true;
    return cfg;
  }

  createShapePointsCfg(obj) {
    const cfg = super.createShapePointsCfg(obj);
    const self = this;
    let x = cfg.x;
    let y = cfg.y;
    let temp;
    if (!(isArray(x) && isArray(y))) {
      const xScale = self.getXScale();
      const yScale = self.getYScale();
      const xCount = xScale.values ? xScale.values.length : xScale.ticks.length;
      const yCount = yScale.values ? yScale.values.length : yScale.ticks.length;
      const xOffset = 0.5 * 1 / xCount;
      const yOffset = 0.5 * 1 / yCount;
      if (xScale.isCategory && yScale.isCategory) {
        x = [ x - xOffset, x - xOffset, x + xOffset, x + xOffset ];
        y = [ y - yOffset, y + yOffset, y + yOffset, y - yOffset ];
      } else if (isArray(x)) {
        temp = x;
        x = [ temp[0], temp[0], temp[1], temp[1] ];
        y = [ y - yOffset / 2, y + yOffset / 2, y + yOffset / 2, y - yOffset / 2 ];
      } else if (isArray(y)) {
        temp = y;
        y = [ temp[0], temp[1], temp[1], temp[0] ];
        x = [ x - xOffset / 2, x - xOffset / 2, x + xOffset / 2, x + xOffset / 2 ];
      }
      cfg.x = x;
      cfg.y = y;
    }
    return cfg;
  }
}

Geom.Polygon = Polygon;
export default Polygon;
