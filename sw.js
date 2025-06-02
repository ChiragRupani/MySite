/**
 * Copyright 2018 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// If the loader is already loaded, just stop.
if (!self.define) {
  let registry = {};

  // Used for `eval` and `importScripts` where we can't get script URL by other means.
  // In both cases, it's safe to use a global var because those functions are synchronous.
  let nextDefineUri;

  const singleRequire = (uri, parentUri) => {
    uri = new URL(uri + ".js", parentUri).href;
    return registry[uri] || (
      
        new Promise(resolve => {
          if ("document" in self) {
            const script = document.createElement("script");
            script.src = uri;
            script.onload = resolve;
            document.head.appendChild(script);
          } else {
            nextDefineUri = uri;
            importScripts(uri);
            resolve();
          }
        })
      
      .then(() => {
        let promise = registry[uri];
        if (!promise) {
          throw new Error(`Module ${uri} didn’t register its module`);
        }
        return promise;
      })
    );
  };

  self.define = (depsNames, factory) => {
    const uri = nextDefineUri || ("document" in self ? document.currentScript.src : "") || location.href;
    if (registry[uri]) {
      // Module is already loading or loaded.
      return;
    }
    let exports = {};
    const require = depUri => singleRequire(depUri, uri);
    const specialDeps = {
      module: { uri },
      exports,
      require
    };
    registry[uri] = Promise.all(depsNames.map(
      depName => specialDeps[depName] || require(depName)
    )).then(deps => {
      factory(...deps);
      return exports;
    });
  };
}
define(['./workbox-acb55742'], (function (workbox) { 'use strict';

  self.skipWaiting();
  workbox.clientsClaim();

  /**
   * The precacheAndRoute() method efficiently caches and responds to
   * requests for URLs in the manifest.
   * See https://goo.gl/S9QRab
   */
  workbox.precacheAndRoute([{
    "url": "assets/AboutMe-BHJdhtgj.js",
    "revision": null
  }, {
    "url": "assets/Blogs-DWRITKef.js",
    "revision": null
  }, {
    "url": "assets/index-B1APiIUz.js",
    "revision": null
  }, {
    "url": "assets/index-DOEwpze2.css",
    "revision": null
  }, {
    "url": "assets/jsx-dev-runtime-B1bhsaWv.js",
    "revision": null
  }, {
    "url": "assets/Projects-WwCkd4g3.js",
    "revision": null
  }, {
    "url": "assets/utils-qdU7x4xy.js",
    "revision": null
  }, {
    "url": "index.html",
    "revision": "d1b03342f7472320f3c4b03c73df0299"
  }, {
    "url": "registerSW.js",
    "revision": "a4709597f0240fd903c987258e783fc3"
  }, {
    "url": "android-chrome-192x192.png",
    "revision": "ec202bf96cf5ac5f78a5efceebd1553e"
  }, {
    "url": "android-chrome-512x512.png",
    "revision": "e5f04421561ffa213b3d68be6f61071e"
  }, {
    "url": "favicon.ico",
    "revision": "81897b25831c5fedfba214e1a0da9fa2"
  }, {
    "url": "maskable_icon.png",
    "revision": "c99dc95e012a1ecb5341df8ffb1a3aee"
  }, {
    "url": "site.webmanifest",
    "revision": "5380dcd321735cf740ad44eb9b593034"
  }], {});
  workbox.cleanupOutdatedCaches();
  workbox.registerRoute(new workbox.NavigationRoute(workbox.createHandlerBoundToURL("index.html")));

}));
