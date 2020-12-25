// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"display.js":[function(require,module,exports) {
var string = "\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n  }\n  *::before,\n  *::after {\n    box-sizing: border-box;\n  }\n  \n  .skin {\n    background: #93b8ca;\n    height: 100vh;\n    position: relative;\n    z-index: -3;\n  }\n  \n  .head {\n    width: 300px;\n    height: 300px;\n    position: absolute;\n    top: 40px;\n    left: 50%;\n    transform: translateX(-50%);\n    background: #0092dc;\n    border-radius: 50%;\n    border: 1px solid #333;\n  }\n  \n  .eye {\n    border: 1px solid #333;\n    width: 50px;\n    height: 65px;\n    border-radius: 50%;\n    background: #fff;\n    position: absolute;\n    left: 50%;\n    top: 60px;\n    z-index: 1;\n    transform: translateX(-50%);\n  }\n  \n  .eye::before {\n    content: \"\";\n    display: block;\n    width: 20px;\n    height: 30px;\n    background: #333;\n    border-radius: 50%;\n    position: absolute;\n    top: 50%;\n    transform: translateY(-50%);\n  }\n  \n  .head .left {\n    transform: translateX(-55px);\n  }\n  \n  .head .left::before {\n    left: 28px;\n  }\n  .head .right {\n    transform: translateX(5px);\n  }\n  .head .right::before {\n    left: 1px;\n  }\n  \n  .nose {\n    width: 40px;\n    height: 40px;\n    background: #d40019;\n    position: absolute;\n    left: 50%;\n    transform: translateX(-50%);\n    top: 105px;\n    z-index: 1;\n    border-radius: 50%;\n    border: 1px solid #333;\n  }\n   \n  .face {\n    width: 270px;\n    height: 210px;\n    background: #fff;\n    position: absolute;\n    top: 85px;\n    left: 50%;\n    transform: translateX(-50%);\n    border-radius: 50%;\n    border: 1px solid #333;\n  }\n  \n  .mouth {\n    width: 200px;\n    height: 100px;\n    border: 1px solid #333;\n    position: absolute;\n    left: 50%;\n    transform: translateX(-50%);\n    top: 145px;\n    z-index: 2;\n    border-radius: 0 0 50% 50%;\n    border-top: 1px solid #fff;\n    border-left: 1px solid #fff;\n    border-right: 1px solid #fff;\n    border-bottom: 2px solid #333;\n  }\n\n.mouth .sty {\n    border: 1px solid #333;\n    position: absolute;\n    left: 50%;\n    transform: translateX(-50%);\n}\n\n.mouth .center {\n    width: 1px;\n    height: 100px;\n    top: -2px;\n    background: #333;\n}\n\n.mustache1::before,\n.mustache2::before,\n.mustache3::before,\n.mustache1::after,\n.mustache2::after,\n.mustache3::after {\n    content: \"\";\n    display: block;\n    width: 60px;\n    height: 1px;\n    background: #333;\n    position: absolute;\n    left: 50%;\n    transform: translateX(-50%);\n}\n  \n  .mustache1::before {\n    top: 10px;\n    transform: translateX(-120%) rotateZ(20deg);\n  }\n  .mustache2::before {\n    top: 30px;\n    transform: translateX(-122%);\n  }\n  .mustache3::before {\n    top: 50px;\n    transform: translateX(-120%) rotateZ(-20deg);\n  }\n  .mustache1::after {\n    top: 10px;\n    transform: translateX(20%) rotateZ(160deg);\n  }\n  .mustache2::after {\n    top: 30px;\n    transform: translateX(22%);\n  }\n  .mustache3::after {\n    top: 50px;\n    transform: translateX(20%) rotateZ(20deg);\n  }\n \n  /* \u8116\u5B50 */\n  .neck {\n    width: 180px;\n    height: 20px;\n    background: #dd011c;\n    position: absolute;\n    left: 50%;\n    transform: translateX(-50%);\n    top: 310px;\n    border-radius: 20%;\n    border: 1px solid #333;\n    z-index: 5;\n  }\n  .lingdang {\n    width: 40px;\n    height: 40px;\n    background: #f5cc07;\n    position: absolute;\n    left: 50%;\n    top: 5px;\n    transform: translateX(-50%);\n    border-radius: 50%;\n  }\n  .lingdang::before {\n    content: \"\";\n    display: block;\n    width: 40px;\n    height: 5px;\n    border: 1px solid #333;\n    position: absolute;\n    left: 50%;\n    top: 10px;\n    transform: translateX(-50%);\n    border-radius: 50%;\n  }\n  .circle {\n    width: 11px;\n    height: 11px;\n    border: 1px solid #333;\n    background: #444;\n    position: absolute;\n    left: 50%;\n    top: 18px;\n    transform: translateX(-50%);\n    border-radius: 50%;\n  }\n  .circle::before {\n    content: \"\";\n    display: block;\n    height: 8px;\n    width: 1px;\n    position: absolute;\n    left: 50%;\n    top: 10px;\n    transform: translateX(-50%);\n    border: 1px solid #333;\n  }\n  .dbody {\n    width: 200px;\n    height: 200px;\n    border: 1px solid #333;\n    background: #0092dc;\n    position: absolute;\n    left: 50%;\n    transform: translateX(-50%);\n    top: 315px;\n    border-radius: 30%/100%;\n    z-index: 3px;\n  }\n  .abdomen {\n    width: 160px;\n    height: 150px;\n    background-color: #fff;\n    position: absolute;\n    left: 50%;\n    transform: translateX(-50%);\n    top: 10px;\n    border-radius: 40%/100%;\n  }\n  \n  .pocket {\n    width: 125px;\n    height: 60px;\n    background-color: #fff;\n    position: absolute;\n    left: 50%;\n    transform: translateX(-50%);\n    top: 60px;\n    border-radius: 10%;\n    border: 1px solid #333;\n  }\n  \n  .foot {\n    width: 100px;\n    height: 120px;\n    background-color: #fff;\n    position: absolute;\n    left: 50%;\n    top: 100px;\n    border-radius: 45%;\n    border: 1px solid #333;\n  }\n  \n  .dbody .left {\n    transform: translateX(-120%);\n  }\n  \n  .dbody .right {\n    transform: translateX(20%);\n  }\n  \n  @keyframes wave1 {\n    0% {\n      transform: translateX(-145%) rotateZ(30deg);\n    }\n    50% {\n      transform: translateX(-145%) rotateZ(0deg);\n    }\n    100% {\n      transform: translateX(-145%) rotateZ(30deg);\n    }\n    /* 100% {\n      transform: translateX(45%) rotateZ(0deg);\n    } */\n  }\n  @keyframes wave2 {\n    0% {\n      transform: translateX(45%) rotateZ(-30deg);\n    }\n    50% {\n      transform: translateX(45%) rotateZ(0deg);\n    }\n    100% {\n      transform: translateX(45%) rotateZ(-30deg);\n    }\n    /* 100% {\n      transform: translateX(45%) rotateZ(0deg);\n    } */\n  }\n  .arm {\n    width: 115px;\n    height: 50px;\n    background: #0092dc;\n    border: 1px solid #333;\n    position: absolute;\n    left: 50%;\n    top: 352px;\n    z-index: -1;\n    border-radius: 20%/100%;\n  }\n  .aleft {\n    transform-origin: 100% 0;\n    transform: translateX(-145%) rotateZ(-30deg);\n    animation: 1.5s wave1 infinite linear;\n  }\n  .aright {\n    transform-origin: 0 0;\n    transform: translateX(45%) rotateZ(30deg);\n    animation: 1.5s wave2 infinite linear;\n  }\n  .arm::before {\n    content: \"\";\n    display: block;\n    width: 65px;\n    height: 65px;\n    background-color: #fff;\n    position: absolute;\n    border-radius: 50%;\n    border: 1px solid #333;\n    z-index: -2;\n  }\n  .aleft::before {\n    left: -30%;\n    top: -10px;\n  }\n  .aright::before {\n    left: 70%;\n    top: -10px;\n  }\n  \n  \n";
var player = {
  id: undefined,
  time: 1,
  ui: {
    demo: document.querySelector("#demo"),
    demo2: document.querySelector("#style")
  },
  events: {
    ".btnPause": "pause",
    ".btnPlay": "play",
    ".btnSlow": "slow",
    // ".btnFast": "fast",
    ".btnFinal": "final"
  },
  n: 1,
  init: function init() {
    player.ui.demo.innerText = string.substring(0, player.n);
    player.ui.demo2.innerHTML = string.substring(0, player.n);
    player.bindsEvents();
    player.play();
  },
  bindsEvents: function bindsEvents() {
    for (var key in player.events) {
      if (player.events.hasOwnProperty(key)) {
        var value = player.events[key];
        document.querySelector(key).onclick = player[value];
      }
    }
  },
  play: function play() {
    player.id = setInterval(player.run, player.time);
  },
  run: function run() {
    player.n += 1;

    if (player.n > string.length) {
      window.clearInterval(player.id);
      return;
    }

    player.ui.demo.innerText = string.substr(0, player.n);
    player.ui.demo2.innerHTML = string.substr(0, player.n);
    player.ui.demo.scrollTop = player.ui.demo.scrollHeight;
  },
  pause: function pause() {
    window.clearInterval(player.id);
  },
  slow: function slow() {
    player.pause();
    player.time = 50;
    player.play();
  },
  // normal: () => {
  //   player.pause();
  //   player.time = 20;
  //   player.play();
  // },
  // fast: () => {
  //   player.pause();
  //   player.time = 1;
  //   player.play();
  // },
  final: function final() {
    player.pause();
    player.ui.demo.innerText = string;
    player.ui.demo2.innerHTML = string;
    player.ui.demo.scrollTop = player.ui.demo.scrollHeight;
  }
};
player.init();
},{}],"../../../../AppData/Local/Yarn/Data/global/node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "53670" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../../AppData/Local/Yarn/Data/global/node_modules/parcel/src/builtins/hmr-runtime.js","display.js"], null)
//# sourceMappingURL=/display.d057bdb2.js.map