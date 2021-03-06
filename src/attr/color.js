import {
  isString
} from '@antv/util';
import Base from './base';
import { gradient as defaultGradient } from './color-util';

class Color extends Base {

  constructor(cfg) {
    super(cfg);
    this.names = [ 'color' ];
    this.type = 'color';
    this.gradient = null;
    if (isString(this.values)) {
      this.linear = true;
    }
  }

  /**
   * @override
   */
  getLinearValue(percent) {
    let gradient = this.gradient;
    if (!gradient) {
      const values = this.values;
      gradient = defaultGradient(values);
      this.gradient = gradient;
    }
    return gradient(percent);
  }
}

export default Color;
