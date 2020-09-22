// @ts-nocheck
import { plugin } from './plugin';
import * as Plugin_0 from '../plugin-initial-state/runtime';
import * as Plugin_1 from '../plugin-model/runtime';
import * as Plugin_2 from '/Users/zb/www/umi_demo3/src/.umi/plugin-helmet/runtime.ts';

  plugin.register({
    apply: Plugin_0,
    path: '../plugin-initial-state/runtime',
  });
  plugin.register({
    apply: Plugin_1,
    path: '../plugin-model/runtime',
  });
  plugin.register({
    apply: Plugin_2,
    path: '/Users/zb/www/umi_demo3/src/.umi/plugin-helmet/runtime.ts',
  });