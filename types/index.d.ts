import { Util } from './Util';
import {
  CanvasCommonProps,
  CanvasLineProps,
  CanvasTextProps,
  CanvasPointProps,
  CanvasBackgroundProps,
} from './CanvasProps';
import { Point } from './Point';
import {
  Data,
  DataRecord,
  DataField,
  DataRecordScale,
  DataFieldScale,
} from './Data';
import {
  ScaleType,
  ScaleCommonProps,
  ScaleIdentityProps,
  ScaleLinearProps,
  ScaleCatProps,
  ScaleTimeCatProps,
  ScaleProps,
} from './Scale';
import {
  AnimateKind,
  AnimateElement,
  AnimateAnimationName,
  AnimateAnimationFunc,
  AnimateEasingName,
  AnimateEasingFunc,
  AnimateDelayFunc,
  AnimateConfig,
  AnimateElementParams,
  AnimateChartParams,
} from './Animate';

declare namespace F2 {
  export {
    Util,
    CanvasCommonProps,
    CanvasLineProps,
    CanvasTextProps,
    CanvasPointProps,
    CanvasBackgroundProps,
    Point,
    Data,
    DataRecord,
    DataField,
    DataRecordScale,
    DataFieldScale,
    ScaleType,
    ScaleCommonProps,
    ScaleIdentityProps,
    ScaleLinearProps,
    ScaleCatProps,
    ScaleTimeCatProps,
    ScaleProps,
    AnimateKind,
    AnimateElement,
    AnimateAnimationName,
    AnimateAnimationFunc,
    AnimateEasingName,
    AnimateEasingFunc,
    AnimateDelayFunc,
    AnimateConfig,
    AnimateElementParams,
    AnimateChartParams,
  };
}

export = F2;

// ==== src ====
declare module '@antv/f2/src/index-all.js' {
  export = F2;
}

declare module '@antv/f2/src/index-simple.js' {
  export = F2;
}

declare module '@antv/f2/src/index.js' {
  export = F2;
}

// ==== lib ====
declare module '@antv/f2/lib/index-all.js' {
  export = F2;
}

declare module '@antv/f2/lib/index-simple.js' {
  export = F2;
}

declare module '@antv/f2/lib/index.js' {
  export = F2;
}

// ==== build ====
declare module '@antv/f2/build/f2-all.js' {
  export = F2;
}

declare module '@antv/f2/build/f2-simple.js' {
  export = F2;
}

declare module '@antv/f2/build/f2.js' {
  export = F2;
}

// ==== dist ====
declare module '@antv/f2/dist/f2-all.min.js' {
  export = F2;
}

declare module '@antv/f2/dist/f2-simple.min.js' {
  export = F2;
}

declare module '@antv/f2/dist/f2.min.js' {
  export = F2;
}
