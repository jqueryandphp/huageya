// @ts-nocheck
import { ApplyPluginsType } from '/Users/zb/www/umi_demo3/node_modules/_@umijs_runtime@3.2.20@@umijs/runtime';
import { plugin } from './plugin';

export function getRoutes() {
  const routes = [
  {
    "path": "/",
    "component": require('/Users/zb/www/umi_demo3/src/pages/index.js').default,
    "exact": true
  }
];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}
