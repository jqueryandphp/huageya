// @ts-nocheck
// umi.server.js
import '/Users/zb/www/umi_demo3/node_modules/_regenerator-runtime@0.13.5@regenerator-runtime/runtime.js';
import { format } from 'url';
import renderServer from '/Users/zb/www/umi_demo3/node_modules/_@umijs_preset-built-in@3.2.20@@umijs/preset-built-in/lib/plugins/features/ssr/templates/renderServer/renderServer.js';
import { stripBasename, cheerio, handleHTML } from '/Users/zb/www/umi_demo3/node_modules/_@umijs_preset-built-in@3.2.20@@umijs/preset-built-in/lib/plugins/features/ssr/templates/utils.js';
import { IServerRender } from '@umijs/types';

import { ApplyPluginsType, createMemoryHistory } from '/Users/zb/www/umi_demo3/node_modules/_@umijs_runtime@3.2.20@@umijs/runtime';
import { plugin } from './plugin';
import './pluginRegister';

// origin require module
// https://github.com/webpack/webpack/issues/4175#issuecomment-342931035
const requireFunc = typeof __webpack_require__ === "function" ? __non_webpack_require__ : require;

let routes;

/**
 * server render function
 * @param params
 */
const render: IServerRender = async (params) => {
  let error;
  const {
    origin = '',
    path,
    htmlTemplate = '',
    mountElementId = 'root',
    context = {},
    mode = 'string',
    basename = '/',
    staticMarkup = false,
    forceInitial = false,
    getInitialPropsCtx,
  } = params;
  let manifest = params.manifest;
  const env = 'development';

  let html = htmlTemplate || "<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset=\"utf-8\" />\n    <title>画个押</title>\n    <link rel=\"icon\" type=\"image/x-icon\" href=\"/favicon.ico\" />\n    <link rel=\"stylesheet\" href=\"/umi.css\" />\n    <script>\n      window.routerBase = \"/\";\n    </script>\n    <script src=\"/@@/devScripts.js\"></script>\n    <script>\n      //! umi version: 3.2.20\n    </script>\n  </head>\n  <body>\n    <div id=\"root\"></div>\n\n    <script src=\"https://map.qq.com/api/gljs?v=1.exp&key=OB4BZ-D4W3U-B7VVO-4PJWW-6TKDJ-WPB77\"></script>\n    <script src=\"/umi.js\"></script>\n  </body>\n</html>\n";
  let rootContainer = '';
  try {
    // handle basename
    const location = stripBasename(basename, `${origin}${path}`);
    const { pathname } = location;
    // server history
    const history = createMemoryHistory({
      initialEntries: [format(location)],
    });

    /**
     * beforeRenderServer hook, for polyfill global.*
     */
    await plugin.applyPlugins({
      key: 'ssr.beforeRenderServer',
      type: ApplyPluginsType.event,
      args: {
        env,
        path,
        context,
        history,
        mode,
        location,
      },
      async: true,
    });

    /**
     * routes init and patch only once
     * beforeRenderServer must before routes init avoding require error
     */
    if (!routes) {
      // 主要为后面支持按需服务端渲染，单独用 routes 会全编译
      routes = [
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
    }

    // for renderServer
    const opts = {
      path,
      history,
      pathname,
      getInitialPropsCtx,
      basename,
      context,
      mode,
      plugin,
      staticMarkup,
      routes,
      isServer: process.env.__IS_SERVER,
    }
    const dynamicImport =  false;
    if (dynamicImport && !manifest) {
      try {
        // prerender not work because the manifest generation behind of the prerender
        manifest = requireFunc(`./`);
      } catch (_) {}
    }

    // renderServer get rootContainer
    const { pageHTML, pageInitialProps, routesMatched } = await renderServer(opts);
    rootContainer = pageHTML;
    if (html) {
      // plugin for modify html template
      html = await plugin.applyPlugins({
        key: 'ssr.modifyServerHTML',
        type: ApplyPluginsType.modify,
        initialValue: html,
        args: {
          context,
          cheerio,
          routesMatched,
          dynamicImport,
          manifest
        },
        async: true,
      });
      html = await handleHTML({ html, rootContainer, pageInitialProps, mountElementId, mode, forceInitial, routesMatched, dynamicImport, manifest });
    }
  } catch (e) {
    // downgrade into csr
    error = e;
  }
  return {
    rootContainer,
    error,
    html,
  }
}

export default render;
