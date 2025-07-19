/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var lil_gui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lil-gui */ "./node_modules/lil-gui/dist/lil-gui.esm.js");
/* harmony import */ var three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three/examples/jsm/controls/OrbitControls */ "./node_modules/three/examples/jsm/controls/OrbitControls.js");



class ThreeJSContainer {
    scene;
    light;
    constructor() {
    }
    // 画面部分の作成(表示する枠ごとに)*
    createRendererDOM = (width, height, cameraPos) => {
        let renderer = new three__WEBPACK_IMPORTED_MODULE_1__.WebGLRenderer();
        renderer.setSize(width, height);
        renderer.setClearColor(new three__WEBPACK_IMPORTED_MODULE_1__.Color(0x000000));
        //カメラの設定
        let camera = new three__WEBPACK_IMPORTED_MODULE_1__.PerspectiveCamera(75, width / height, 0.1, 1000);
        camera.position.copy(cameraPos);
        camera.lookAt(new three__WEBPACK_IMPORTED_MODULE_1__.Vector3(0, 0, 0));
        let orbitControls = new three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_0__.OrbitControls(camera, renderer.domElement);
        this.createScene();
        // 毎フレームのupdateを呼んで，render
        // reqestAnimationFrame により次フレームを呼ぶ
        let render = (time) => {
            orbitControls.update();
            renderer.render(this.scene, camera);
            requestAnimationFrame(render);
        };
        requestAnimationFrame(render);
        renderer.domElement.style.cssFloat = "left";
        renderer.domElement.style.margin = "10px";
        return renderer.domElement;
    };
    // シーンの作成(全体で1回)
    createScene = () => {
        this.scene = new three__WEBPACK_IMPORTED_MODULE_1__.Scene();
        //ライトの設定
        this.light = new three__WEBPACK_IMPORTED_MODULE_1__.DirectionalLight(0xffffff);
        let degRate = 0;
        let lvec = new three__WEBPACK_IMPORTED_MODULE_1__.Vector3(Math.sin(Math.PI * degRate), 0, Math.cos(Math.PI * degRate)).clone().normalize();
        this.light.position.set(lvec.x, lvec.y, lvec.z);
        this.scene.add(this.light);
        let gui = new lil_gui__WEBPACK_IMPORTED_MODULE_2__["default"]();
        let guiObj = { Reverse: false, Speed: 1 };
        gui.add(guiObj, "Reverse");
        gui.add(guiObj, "Speed", 0.1, 3.0);
        const coreGeometry = new three__WEBPACK_IMPORTED_MODULE_1__.SphereGeometry(0.7, 10, 10);
        const coreMaterial = new three__WEBPACK_IMPORTED_MODULE_1__.MeshToonMaterial({ color: 0xffffff });
        let core = new three__WEBPACK_IMPORTED_MODULE_1__.Mesh(coreGeometry, coreMaterial);
        this.scene.add(core);
        let coreFrame = createCoreFrameGroup();
        this.scene.add(coreFrame);
        let frame = createFrameGroup();
        this.scene.add(frame);
        let stars = createStarGroup(30);
        this.scene.add(stars);
        let torusGroup1 = createTorusGroup(1.0);
        this.scene.add(torusGroup1);
        let torusGroup2 = createTorusGroup(1.4);
        this.scene.add(torusGroup2);
        let torusGroup3 = createTorusGroup(1.8);
        this.scene.add(torusGroup3);
        let torusGroup4 = createTorusGroup(2.2);
        this.scene.add(torusGroup4);
        // 毎フレームのupdateを呼んで，更新
        // reqestAnimationFrame により次フレームを呼ぶ
        let update = (time) => {
            let reverse;
            if (guiObj.Reverse) {
                reverse = -1;
            }
            else {
                reverse = 1;
            }
            let guiParam = reverse * guiObj.Speed;
            torusGroup4.rotateZ(0.005 * guiParam);
            torusGroup3.rotateZ(0.005 * guiParam);
            torusGroup2.rotateZ(0.005 * guiParam);
            torusGroup1.rotateZ(0.005 * guiParam);
            torusGroup4.rotateX(0.005 * guiParam);
            torusGroup3.rotateX(0.005 * guiParam);
            torusGroup2.rotateX(0.005 * guiParam);
            torusGroup1.rotateX(0.005 * guiParam);
            // torusGroup4.rotateX(0.01);
            torusGroup3.rotateX(0.01 * guiParam);
            torusGroup2.rotateX(0.01 * guiParam);
            torusGroup1.rotateX(0.01 * guiParam);
            torusGroup2.rotateY(0.02 * guiParam);
            torusGroup1.rotateY(0.02 * guiParam);
            torusGroup1.rotateX(0.02 * guiParam);
            torusGroup1.rotateY(0.02 * guiParam);
            torusGroup1.rotateZ(0.02 * guiParam);
            coreFrame.rotateY(0.01 * guiParam);
            stars.rotateY(0.001);
            degRate += 0.005;
            if (degRate >= 2)
                degRate = 0;
            this.light.position.set(Math.sin(Math.PI * degRate), 0.5, Math.cos(Math.PI * degRate));
            requestAnimationFrame(update);
        };
        requestAnimationFrame(update);
    };
}
function createTorusGroup(radius) {
    const geometry = new three__WEBPACK_IMPORTED_MODULE_1__.TorusGeometry(radius, 0.13, 6, 20, Math.PI * 1.2);
    const lingGeom = new three__WEBPACK_IMPORTED_MODULE_1__.RingGeometry(radius, radius + 0.01, 20, 1, 0);
    const material = new three__WEBPACK_IMPORTED_MODULE_1__.MeshToonMaterial({ color: 0xffffff, side: three__WEBPACK_IMPORTED_MODULE_1__.DoubleSide });
    const lineMaterial = new three__WEBPACK_IMPORTED_MODULE_1__.LineBasicMaterial({ color: 0x000000 });
    let group = new three__WEBPACK_IMPORTED_MODULE_1__.Group();
    group.add(new three__WEBPACK_IMPORTED_MODULE_1__.Mesh(geometry, material));
    // group.add(new THREE.LineSegments(geometry, lineMaterial));
    group.add(new three__WEBPACK_IMPORTED_MODULE_1__.Mesh(lingGeom, material));
    return group;
}
function createFrameGroup() {
    const frameGroup = new three__WEBPACK_IMPORTED_MODULE_1__.Group();
    const frameGeometry = new three__WEBPACK_IMPORTED_MODULE_1__.TorusGeometry(2.5, 0.05, 4, 30, Math.PI * 1.05);
    const frameMaterial = new three__WEBPACK_IMPORTED_MODULE_1__.MeshToonMaterial({ color: 0xffffff });
    let frame = new three__WEBPACK_IMPORTED_MODULE_1__.Mesh(frameGeometry, frameMaterial);
    frame.rotateZ(Math.PI * 0.475);
    frameGroup.add(frame);
    const lineMaterial = new three__WEBPACK_IMPORTED_MODULE_1__.LineBasicMaterial({ color: 0xffffff });
    const points = [];
    points.push(new three__WEBPACK_IMPORTED_MODULE_1__.Vector3(0, 2.8, 0));
    points.push(new three__WEBPACK_IMPORTED_MODULE_1__.Vector3(0, -3.5, 0));
    const lineGeometry = new three__WEBPACK_IMPORTED_MODULE_1__.BufferGeometry().setFromPoints(points);
    const line = new three__WEBPACK_IMPORTED_MODULE_1__.Line(lineGeometry, lineMaterial);
    frameGroup.add(line);
    const cylGeometry = new three__WEBPACK_IMPORTED_MODULE_1__.CylinderGeometry(1, 1, 0.1, 20);
    const cylGeometry2 = new three__WEBPACK_IMPORTED_MODULE_1__.CylinderGeometry(0.3, 0.3, 0.1, 10);
    const cylMaterial = new three__WEBPACK_IMPORTED_MODULE_1__.MeshToonMaterial({ color: 0xffffff });
    let cylinder1 = new three__WEBPACK_IMPORTED_MODULE_1__.Mesh(cylGeometry, cylMaterial);
    let cylinder2 = new three__WEBPACK_IMPORTED_MODULE_1__.Mesh(cylGeometry2, cylMaterial);
    cylinder1.position.setY(-3.5);
    cylinder2.position.setY(2.8);
    frameGroup.add(cylinder1);
    frameGroup.add(cylinder2);
    return frameGroup;
}
function createCoreFrameGroup() {
    const lingGeom = new three__WEBPACK_IMPORTED_MODULE_1__.RingGeometry(0.80, 0.82, 20, 1, 0);
    const material = new three__WEBPACK_IMPORTED_MODULE_1__.MeshToonMaterial({ color: 0x000000, side: three__WEBPACK_IMPORTED_MODULE_1__.DoubleSide });
    let line = new three__WEBPACK_IMPORTED_MODULE_1__.Mesh(lingGeom, material);
    let line2 = new three__WEBPACK_IMPORTED_MODULE_1__.Mesh(lingGeom, material);
    let line3 = new three__WEBPACK_IMPORTED_MODULE_1__.Mesh(lingGeom, material);
    let line4 = new three__WEBPACK_IMPORTED_MODULE_1__.Mesh(lingGeom, material);
    line2.rotateY(Math.PI * 0.25);
    line3.rotateY(Math.PI * 0.5);
    line4.rotateY(Math.PI * 0.75);
    let group = new three__WEBPACK_IMPORTED_MODULE_1__.Group();
    group.add(line);
    group.add(line2);
    group.add(line3);
    group.add(line4);
    return group;
}
function createStarGroup(number) {
    const geometry = new three__WEBPACK_IMPORTED_MODULE_1__.TetrahedronGeometry(0.05, 0);
    const material = new three__WEBPACK_IMPORTED_MODULE_1__.MeshToonMaterial({ color: 0xffffff, side: three__WEBPACK_IMPORTED_MODULE_1__.DoubleSide });
    let group = new three__WEBPACK_IMPORTED_MODULE_1__.Group();
    for (let index = 0; index < number; index++) {
        let star = new three__WEBPACK_IMPORTED_MODULE_1__.Mesh(geometry, material);
        star.position.set(Math.random() * 10 - 5, Math.random() * 10 - 5, Math.random() * 10 - 5);
        star.rotateX(Math.PI * Math.random());
        star.rotateY(Math.PI * Math.random());
        star.rotateZ(Math.PI * Math.random());
        group.add(star);
    }
    return group;
}
window.addEventListener("DOMContentLoaded", init);
function init() {
    let container = new ThreeJSContainer();
    let viewport = container.createRendererDOM(640, 480, new three__WEBPACK_IMPORTED_MODULE_1__.Vector3(-3, 3, 3));
    document.body.appendChild(viewport);
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkcgprendering"] = self["webpackChunkcgprendering"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_lil-gui_dist_lil-gui_esm_js-node_modules_three_examples_jsm_controls_Orb-53d7a4"], () => (__webpack_require__("./src/app.ts")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QjtXQUMzQjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTs7Ozs7VUVoREE7VUFDQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2NncHJlbmRlcmluZy8uL3NyYy9hcHAudHMiLCJ3ZWJwYWNrOi8vY2dwcmVuZGVyaW5nL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2NncHJlbmRlcmluZy93ZWJwYWNrL3J1bnRpbWUvY2h1bmsgbG9hZGVkIiwid2VicGFjazovL2NncHJlbmRlcmluZy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vY2dwcmVuZGVyaW5nL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vY2dwcmVuZGVyaW5nL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vY2dwcmVuZGVyaW5nL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2NncHJlbmRlcmluZy93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL2NncHJlbmRlcmluZy93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vY2dwcmVuZGVyaW5nL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHcm91cCB9IGZyb20gXCJAdHdlZW5qcy90d2Vlbi5qc1wiO1xuaW1wb3J0ICogYXMgVEhSRUUgZnJvbSBcInRocmVlXCI7XG5pbXBvcnQgR1VJIGZyb20gXCJsaWwtZ3VpXCI7XG5pbXBvcnQgeyBPcmJpdENvbnRyb2xzIH0gZnJvbSBcInRocmVlL2V4YW1wbGVzL2pzbS9jb250cm9scy9PcmJpdENvbnRyb2xzXCI7XG5cbmNsYXNzIFRocmVlSlNDb250YWluZXIge1xuICAgIHByaXZhdGUgc2NlbmU6IFRIUkVFLlNjZW5lO1xuICAgIHByaXZhdGUgbGlnaHQ6IFRIUkVFLkxpZ2h0O1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgfVxuXG4gICAgLy8g55S76Z2i6YOo5YiG44Gu5L2c5oiQKOihqOekuuOBmeOCi+aeoOOBlOOBqOOBqykqXG4gICAgcHVibGljIGNyZWF0ZVJlbmRlcmVyRE9NID0gKHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyLCBjYW1lcmFQb3M6IFRIUkVFLlZlY3RvcjMpID0+IHtcbiAgICAgICAgbGV0IHJlbmRlcmVyID0gbmV3IFRIUkVFLldlYkdMUmVuZGVyZXIoKTtcbiAgICAgICAgcmVuZGVyZXIuc2V0U2l6ZSh3aWR0aCwgaGVpZ2h0KTtcbiAgICAgICAgcmVuZGVyZXIuc2V0Q2xlYXJDb2xvcihuZXcgVEhSRUUuQ29sb3IoMHgwMDAwMDApKTtcblxuICAgICAgICAvL+OCq+ODoeODqeOBruioreWumlxuICAgICAgICBsZXQgY2FtZXJhID0gbmV3IFRIUkVFLlBlcnNwZWN0aXZlQ2FtZXJhKDc1LCB3aWR0aCAvIGhlaWdodCwgMC4xLCAxMDAwKTtcbiAgICAgICAgY2FtZXJhLnBvc2l0aW9uLmNvcHkoY2FtZXJhUG9zKTtcbiAgICAgICAgY2FtZXJhLmxvb2tBdChuZXcgVEhSRUUuVmVjdG9yMygwLCAwLCAwKSk7XG5cbiAgICAgICAgbGV0IG9yYml0Q29udHJvbHMgPSBuZXcgT3JiaXRDb250cm9scyhjYW1lcmEsIHJlbmRlcmVyLmRvbUVsZW1lbnQpO1xuXG4gICAgICAgIHRoaXMuY3JlYXRlU2NlbmUoKTtcbiAgICAgICAgLy8g5q+O44OV44Os44O844Og44GudXBkYXRl44KS5ZG844KT44Gn77yMcmVuZGVyXG4gICAgICAgIC8vIHJlcWVzdEFuaW1hdGlvbkZyYW1lIOOBq+OCiOOCiuasoeODleODrOODvOODoOOCkuWRvOOBtlxuICAgICAgICBsZXQgcmVuZGVyOiBGcmFtZVJlcXVlc3RDYWxsYmFjayA9ICh0aW1lKSA9PiB7XG4gICAgICAgICAgICBvcmJpdENvbnRyb2xzLnVwZGF0ZSgpO1xuXG4gICAgICAgICAgICByZW5kZXJlci5yZW5kZXIodGhpcy5zY2VuZSwgY2FtZXJhKTtcbiAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShyZW5kZXIpO1xuICAgICAgICB9XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShyZW5kZXIpO1xuXG4gICAgICAgIHJlbmRlcmVyLmRvbUVsZW1lbnQuc3R5bGUuY3NzRmxvYXQgPSBcImxlZnRcIjtcbiAgICAgICAgcmVuZGVyZXIuZG9tRWxlbWVudC5zdHlsZS5tYXJnaW4gPSBcIjEwcHhcIjtcbiAgICAgICAgcmV0dXJuIHJlbmRlcmVyLmRvbUVsZW1lbnQ7XG4gICAgfVxuXG4gICAgLy8g44K344O844Oz44Gu5L2c5oiQKOWFqOS9k+OBpzHlm54pXG4gICAgcHJpdmF0ZSBjcmVhdGVTY2VuZSA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5zY2VuZSA9IG5ldyBUSFJFRS5TY2VuZSgpO1xuXG4gICAgICAgIC8v44Op44Kk44OI44Gu6Kit5a6aXG4gICAgICAgIHRoaXMubGlnaHQgPSBuZXcgVEhSRUUuRGlyZWN0aW9uYWxMaWdodCgweGZmZmZmZik7XG4gICAgICAgIGxldCBkZWdSYXRlID0gMDtcbiAgICAgICAgbGV0IGx2ZWMgPSBuZXcgVEhSRUUuVmVjdG9yMyhNYXRoLnNpbihNYXRoLlBJICogZGVnUmF0ZSksIDAsIE1hdGguY29zKE1hdGguUEkgKiBkZWdSYXRlKSkubm9ybWFsaXplKCk7XG4gICAgICAgIHRoaXMubGlnaHQucG9zaXRpb24uc2V0KGx2ZWMueCwgbHZlYy55LCBsdmVjLnopO1xuICAgICAgICB0aGlzLnNjZW5lLmFkZCh0aGlzLmxpZ2h0KTtcblxuICAgICAgICBsZXQgZ3VpID0gbmV3IEdVSSgpO1xuICAgICAgICBsZXQgZ3VpT2JqID0ge1JldmVyc2U6IGZhbHNlLCBTcGVlZDogMX07XG4gICAgICAgIGd1aS5hZGQoZ3VpT2JqLCBcIlJldmVyc2VcIik7XG4gICAgICAgIGd1aS5hZGQoZ3VpT2JqLCBcIlNwZWVkXCIsIDAuMSwgMy4wKTtcblxuICAgICAgICBjb25zdCBjb3JlR2VvbWV0cnkgPSBuZXcgVEhSRUUuU3BoZXJlR2VvbWV0cnkoMC43LCAxMCwgMTApO1xuICAgICAgICBjb25zdCBjb3JlTWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaFRvb25NYXRlcmlhbCh7IGNvbG9yOiAweGZmZmZmZiB9KTtcbiAgICAgICAgbGV0IGNvcmUgPSBuZXcgVEhSRUUuTWVzaChjb3JlR2VvbWV0cnksIGNvcmVNYXRlcmlhbCk7XG4gICAgICAgIHRoaXMuc2NlbmUuYWRkKGNvcmUpO1xuXG4gICAgICAgIGxldCBjb3JlRnJhbWUgPSBjcmVhdGVDb3JlRnJhbWVHcm91cCgpO1xuICAgICAgICB0aGlzLnNjZW5lLmFkZChjb3JlRnJhbWUpO1xuXG4gICAgICAgIGxldCBmcmFtZSA9IGNyZWF0ZUZyYW1lR3JvdXAoKTtcbiAgICAgICAgdGhpcy5zY2VuZS5hZGQoZnJhbWUpO1xuXG4gICAgICAgIGxldCBzdGFycyA9IGNyZWF0ZVN0YXJHcm91cCgzMCk7XG4gICAgICAgIHRoaXMuc2NlbmUuYWRkKHN0YXJzKTtcblxuICAgICAgICBsZXQgdG9ydXNHcm91cDEgPSBjcmVhdGVUb3J1c0dyb3VwKDEuMCk7XG4gICAgICAgIHRoaXMuc2NlbmUuYWRkKHRvcnVzR3JvdXAxKTtcbiAgICAgICAgbGV0IHRvcnVzR3JvdXAyID0gY3JlYXRlVG9ydXNHcm91cCgxLjQpO1xuICAgICAgICB0aGlzLnNjZW5lLmFkZCh0b3J1c0dyb3VwMik7XG4gICAgICAgIGxldCB0b3J1c0dyb3VwMyA9IGNyZWF0ZVRvcnVzR3JvdXAoMS44KTtcbiAgICAgICAgdGhpcy5zY2VuZS5hZGQodG9ydXNHcm91cDMpO1xuICAgICAgICBsZXQgdG9ydXNHcm91cDQgPSBjcmVhdGVUb3J1c0dyb3VwKDIuMik7XG4gICAgICAgIHRoaXMuc2NlbmUuYWRkKHRvcnVzR3JvdXA0KTtcblxuICAgICAgICAvLyDmr47jg5Xjg6zjg7zjg6Djga51cGRhdGXjgpLlkbzjgpPjgafvvIzmm7TmlrBcbiAgICAgICAgLy8gcmVxZXN0QW5pbWF0aW9uRnJhbWUg44Gr44KI44KK5qyh44OV44Os44O844Og44KS5ZG844G2XG4gICAgICAgIGxldCB1cGRhdGU6IEZyYW1lUmVxdWVzdENhbGxiYWNrID0gKHRpbWUpID0+IHtcbiAgICAgICAgICAgIGxldCByZXZlcnNlO1xuICAgICAgICAgICAgaWYoZ3VpT2JqLlJldmVyc2Upe1xuICAgICAgICAgICAgICAgIHJldmVyc2UgPSAtMTtcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIHJldmVyc2UgPSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IGd1aVBhcmFtID0gcmV2ZXJzZSAqIGd1aU9iai5TcGVlZDtcbiAgICAgICAgICAgIHRvcnVzR3JvdXA0LnJvdGF0ZVooMC4wMDUgKiBndWlQYXJhbSk7XG4gICAgICAgICAgICB0b3J1c0dyb3VwMy5yb3RhdGVaKDAuMDA1ICogZ3VpUGFyYW0pO1xuICAgICAgICAgICAgdG9ydXNHcm91cDIucm90YXRlWigwLjAwNSAqIGd1aVBhcmFtKTtcbiAgICAgICAgICAgIHRvcnVzR3JvdXAxLnJvdGF0ZVooMC4wMDUgKiBndWlQYXJhbSk7XG4gICAgICAgICAgICB0b3J1c0dyb3VwNC5yb3RhdGVYKDAuMDA1ICogZ3VpUGFyYW0pO1xuICAgICAgICAgICAgdG9ydXNHcm91cDMucm90YXRlWCgwLjAwNSAqIGd1aVBhcmFtKTtcbiAgICAgICAgICAgIHRvcnVzR3JvdXAyLnJvdGF0ZVgoMC4wMDUgKiBndWlQYXJhbSk7XG4gICAgICAgICAgICB0b3J1c0dyb3VwMS5yb3RhdGVYKDAuMDA1ICogZ3VpUGFyYW0pO1xuXG4gICAgICAgICAgICAvLyB0b3J1c0dyb3VwNC5yb3RhdGVYKDAuMDEpO1xuICAgICAgICAgICAgdG9ydXNHcm91cDMucm90YXRlWCgwLjAxICogZ3VpUGFyYW0pO1xuICAgICAgICAgICAgdG9ydXNHcm91cDIucm90YXRlWCgwLjAxICogZ3VpUGFyYW0pO1xuICAgICAgICAgICAgdG9ydXNHcm91cDEucm90YXRlWCgwLjAxICogZ3VpUGFyYW0pO1xuXG4gICAgICAgICAgICB0b3J1c0dyb3VwMi5yb3RhdGVZKDAuMDIgKiBndWlQYXJhbSk7XG4gICAgICAgICAgICB0b3J1c0dyb3VwMS5yb3RhdGVZKDAuMDIgKiBndWlQYXJhbSk7XG5cbiAgICAgICAgICAgIHRvcnVzR3JvdXAxLnJvdGF0ZVgoMC4wMiAqIGd1aVBhcmFtKTtcbiAgICAgICAgICAgIHRvcnVzR3JvdXAxLnJvdGF0ZVkoMC4wMiAqIGd1aVBhcmFtKTtcbiAgICAgICAgICAgIHRvcnVzR3JvdXAxLnJvdGF0ZVooMC4wMiAqIGd1aVBhcmFtKTtcblxuICAgICAgICAgICAgY29yZUZyYW1lLnJvdGF0ZVkoMC4wMSAqIGd1aVBhcmFtKTtcbiAgICAgICAgICAgIHN0YXJzLnJvdGF0ZVkoMC4wMDEpO1xuXG4gICAgICAgICAgICBkZWdSYXRlICs9IDAuMDA1O1xuICAgICAgICAgICAgaWYoZGVnUmF0ZSA+PSAyKSBkZWdSYXRlID0gMDtcbiAgICAgICAgICAgIHRoaXMubGlnaHQucG9zaXRpb24uc2V0KE1hdGguc2luKE1hdGguUEkgKiBkZWdSYXRlKSwgMC41LCBNYXRoLmNvcyhNYXRoLlBJICogZGVnUmF0ZSkpO1xuXG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodXBkYXRlKTtcbiAgICAgICAgfVxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodXBkYXRlKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRvcnVzR3JvdXAocmFkaXVzOiBudW1iZXIpe1xuICAgIGNvbnN0IGdlb21ldHJ5ID0gbmV3IFRIUkVFLlRvcnVzR2VvbWV0cnkocmFkaXVzLCAwLjEzLCA2LCAyMCwgTWF0aC5QSSAqIDEuMik7XG4gICAgY29uc3QgbGluZ0dlb20gPSBuZXcgVEhSRUUuUmluZ0dlb21ldHJ5KHJhZGl1cywgcmFkaXVzICsgMC4wMSwgMjAsIDEsIDApO1xuICAgIGNvbnN0IG1hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hUb29uTWF0ZXJpYWwoeyBjb2xvcjogMHhmZmZmZmYsIHNpZGU6VEhSRUUuRG91YmxlU2lkZX0pO1xuICAgIGNvbnN0IGxpbmVNYXRlcmlhbCA9IG5ldyBUSFJFRS5MaW5lQmFzaWNNYXRlcmlhbCh7IGNvbG9yOiAweDAwMDAwMH0pO1xuICAgIGxldCBncm91cCA9IG5ldyBUSFJFRS5Hcm91cCgpO1xuICAgIGdyb3VwLmFkZChuZXcgVEhSRUUuTWVzaChnZW9tZXRyeSwgbWF0ZXJpYWwpKTtcbiAgICAvLyBncm91cC5hZGQobmV3IFRIUkVFLkxpbmVTZWdtZW50cyhnZW9tZXRyeSwgbGluZU1hdGVyaWFsKSk7XG4gICAgZ3JvdXAuYWRkKG5ldyBUSFJFRS5NZXNoKGxpbmdHZW9tLCBtYXRlcmlhbCkpO1xuICAgIHJldHVybiBncm91cDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRnJhbWVHcm91cCgpe1xuICAgIGNvbnN0IGZyYW1lR3JvdXAgPSBuZXcgVEhSRUUuR3JvdXAoKTtcbiAgICBjb25zdCBmcmFtZUdlb21ldHJ5ID0gbmV3IFRIUkVFLlRvcnVzR2VvbWV0cnkoMi41LCAwLjA1LCA0LCAzMCwgTWF0aC5QSSAqIDEuMDUpO1xuICAgIGNvbnN0IGZyYW1lTWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaFRvb25NYXRlcmlhbCh7IGNvbG9yOiAweGZmZmZmZiB9KTtcbiAgICBsZXQgZnJhbWUgPSBuZXcgVEhSRUUuTWVzaChmcmFtZUdlb21ldHJ5LCBmcmFtZU1hdGVyaWFsKTtcbiAgICBmcmFtZS5yb3RhdGVaKE1hdGguUEkgKiAwLjQ3NSk7XG4gICAgZnJhbWVHcm91cC5hZGQoZnJhbWUpO1xuXG4gICAgY29uc3QgbGluZU1hdGVyaWFsID0gbmV3IFRIUkVFLkxpbmVCYXNpY01hdGVyaWFsKHsgY29sb3I6IDB4ZmZmZmZmIH0pO1xuICAgIGNvbnN0IHBvaW50cyA9IFtdO1xuICAgIHBvaW50cy5wdXNoKCBuZXcgVEhSRUUuVmVjdG9yMygwLCAyLjgsIDApICk7XG4gICAgcG9pbnRzLnB1c2goIG5ldyBUSFJFRS5WZWN0b3IzKDAsIC0zLjUsIDApICk7XG4gICAgY29uc3QgbGluZUdlb21ldHJ5ID0gbmV3IFRIUkVFLkJ1ZmZlckdlb21ldHJ5KCkuc2V0RnJvbVBvaW50cyhwb2ludHMpO1xuICAgIGNvbnN0IGxpbmUgPSBuZXcgVEhSRUUuTGluZShsaW5lR2VvbWV0cnksIGxpbmVNYXRlcmlhbCk7XG4gICAgZnJhbWVHcm91cC5hZGQobGluZSlcblxuICAgIGNvbnN0IGN5bEdlb21ldHJ5ID0gbmV3IFRIUkVFLkN5bGluZGVyR2VvbWV0cnkoMSwgMSwgMC4xLCAyMCk7XG4gICAgY29uc3QgY3lsR2VvbWV0cnkyID0gbmV3IFRIUkVFLkN5bGluZGVyR2VvbWV0cnkoMC4zLCAwLjMsIDAuMSwgMTApO1xuICAgIGNvbnN0IGN5bE1hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hUb29uTWF0ZXJpYWwoeyBjb2xvcjogMHhmZmZmZmYgfSk7XG4gICAgbGV0IGN5bGluZGVyMSA9IG5ldyBUSFJFRS5NZXNoKGN5bEdlb21ldHJ5LCBjeWxNYXRlcmlhbCk7XG4gICAgbGV0IGN5bGluZGVyMiA9IG5ldyBUSFJFRS5NZXNoKGN5bEdlb21ldHJ5MiwgY3lsTWF0ZXJpYWwpO1xuICAgIGN5bGluZGVyMS5wb3NpdGlvbi5zZXRZKC0zLjUpO1xuICAgIGN5bGluZGVyMi5wb3NpdGlvbi5zZXRZKDIuOCk7XG4gICAgZnJhbWVHcm91cC5hZGQoY3lsaW5kZXIxKTtcbiAgICBmcmFtZUdyb3VwLmFkZChjeWxpbmRlcjIpO1xuXG4gICAgcmV0dXJuIGZyYW1lR3JvdXA7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUNvcmVGcmFtZUdyb3VwKCl7XG4gICAgY29uc3QgbGluZ0dlb20gPSBuZXcgVEhSRUUuUmluZ0dlb21ldHJ5KDAuODAsIDAuODIsIDIwLCAxLCAwKTtcbiAgICBjb25zdCBtYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoVG9vbk1hdGVyaWFsKHsgY29sb3I6IDB4MDAwMDAwLCBzaWRlOlRIUkVFLkRvdWJsZVNpZGV9KTtcbiAgICBsZXQgbGluZSA9IG5ldyBUSFJFRS5NZXNoKGxpbmdHZW9tLCBtYXRlcmlhbCk7XG4gICAgbGV0IGxpbmUyID0gbmV3IFRIUkVFLk1lc2gobGluZ0dlb20sIG1hdGVyaWFsKTtcbiAgICBsZXQgbGluZTMgPSBuZXcgVEhSRUUuTWVzaChsaW5nR2VvbSwgbWF0ZXJpYWwpO1xuICAgIGxldCBsaW5lNCA9IG5ldyBUSFJFRS5NZXNoKGxpbmdHZW9tLCBtYXRlcmlhbCk7XG4gICAgbGluZTIucm90YXRlWShNYXRoLlBJICogMC4yNSk7XG4gICAgbGluZTMucm90YXRlWShNYXRoLlBJICogMC41KTtcbiAgICBsaW5lNC5yb3RhdGVZKE1hdGguUEkgKiAwLjc1KTtcbiAgICBsZXQgZ3JvdXAgPSBuZXcgVEhSRUUuR3JvdXAoKTtcbiAgICBncm91cC5hZGQobGluZSk7XG4gICAgZ3JvdXAuYWRkKGxpbmUyKTtcbiAgICBncm91cC5hZGQobGluZTMpO1xuICAgIGdyb3VwLmFkZChsaW5lNCk7XG4gICAgcmV0dXJuIGdyb3VwO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVTdGFyR3JvdXAobnVtYmVyOiBudW1iZXIpe1xuICAgIGNvbnN0IGdlb21ldHJ5ID0gbmV3IFRIUkVFLlRldHJhaGVkcm9uR2VvbWV0cnkoMC4wNSwgMCk7XG4gICAgY29uc3QgbWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaFRvb25NYXRlcmlhbCh7IGNvbG9yOiAweGZmZmZmZiwgc2lkZTpUSFJFRS5Eb3VibGVTaWRlfSk7XG4gICAgbGV0IGdyb3VwID0gbmV3IFRIUkVFLkdyb3VwKCk7XG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IG51bWJlcjsgaW5kZXgrKykge1xuICAgICAgICBsZXQgc3RhciA9IG5ldyBUSFJFRS5NZXNoKGdlb21ldHJ5LCBtYXRlcmlhbCk7XG4gICAgICAgIHN0YXIucG9zaXRpb24uc2V0KE1hdGgucmFuZG9tKCkgKiAxMCAtIDUsIE1hdGgucmFuZG9tKCkgKiAxMCAtIDUsIE1hdGgucmFuZG9tKCkgKiAxMCAtIDUpO1xuICAgICAgICBzdGFyLnJvdGF0ZVgoTWF0aC5QSSAqIE1hdGgucmFuZG9tKCkpO1xuICAgICAgICBzdGFyLnJvdGF0ZVkoTWF0aC5QSSAqIE1hdGgucmFuZG9tKCkpO1xuICAgICAgICBzdGFyLnJvdGF0ZVooTWF0aC5QSSAqIE1hdGgucmFuZG9tKCkpO1xuICAgICAgICBncm91cC5hZGQoc3Rhcik7XG4gICAgfVxuICAgIHJldHVybiBncm91cDtcbn1cblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGluaXQpO1xuXG5mdW5jdGlvbiBpbml0KCkge1xuICAgIGxldCBjb250YWluZXIgPSBuZXcgVGhyZWVKU0NvbnRhaW5lcigpO1xuXG4gICAgbGV0IHZpZXdwb3J0ID0gY29udGFpbmVyLmNyZWF0ZVJlbmRlcmVyRE9NKDY0MCwgNDgwLCBuZXcgVEhSRUUuVmVjdG9yMygtMywgMywgMykpO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodmlld3BvcnQpO1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCJ2YXIgZGVmZXJyZWQgPSBbXTtcbl9fd2VicGFja19yZXF1aXJlX18uTyA9IChyZXN1bHQsIGNodW5rSWRzLCBmbiwgcHJpb3JpdHkpID0+IHtcblx0aWYoY2h1bmtJZHMpIHtcblx0XHRwcmlvcml0eSA9IHByaW9yaXR5IHx8IDA7XG5cdFx0Zm9yKHZhciBpID0gZGVmZXJyZWQubGVuZ3RoOyBpID4gMCAmJiBkZWZlcnJlZFtpIC0gMV1bMl0gPiBwcmlvcml0eTsgaS0tKSBkZWZlcnJlZFtpXSA9IGRlZmVycmVkW2kgLSAxXTtcblx0XHRkZWZlcnJlZFtpXSA9IFtjaHVua0lkcywgZm4sIHByaW9yaXR5XTtcblx0XHRyZXR1cm47XG5cdH1cblx0dmFyIG5vdEZ1bGZpbGxlZCA9IEluZmluaXR5O1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGRlZmVycmVkLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIFtjaHVua0lkcywgZm4sIHByaW9yaXR5XSA9IGRlZmVycmVkW2ldO1xuXHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuXHRcdGZvciAodmFyIGogPSAwOyBqIDwgY2h1bmtJZHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdGlmICgocHJpb3JpdHkgJiAxID09PSAwIHx8IG5vdEZ1bGZpbGxlZCA+PSBwcmlvcml0eSkgJiYgT2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5PKS5ldmVyeSgoa2V5KSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXy5PW2tleV0oY2h1bmtJZHNbal0pKSkpIHtcblx0XHRcdFx0Y2h1bmtJZHMuc3BsaWNlKGotLSwgMSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRmdWxmaWxsZWQgPSBmYWxzZTtcblx0XHRcdFx0aWYocHJpb3JpdHkgPCBub3RGdWxmaWxsZWQpIG5vdEZ1bGZpbGxlZCA9IHByaW9yaXR5O1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihmdWxmaWxsZWQpIHtcblx0XHRcdGRlZmVycmVkLnNwbGljZShpLS0sIDEpXG5cdFx0XHR2YXIgciA9IGZuKCk7XG5cdFx0XHRpZiAociAhPT0gdW5kZWZpbmVkKSByZXN1bHQgPSByO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gcmVzdWx0O1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gbm8gYmFzZVVSSVxuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8uaiA9IChjaHVua0lkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID09PSAwKTtcblxuLy8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG52YXIgd2VicGFja0pzb25wQ2FsbGJhY2sgPSAocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24sIGRhdGEpID0+IHtcblx0dmFyIFtjaHVua0lkcywgbW9yZU1vZHVsZXMsIHJ1bnRpbWVdID0gZGF0YTtcblx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG5cdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuXHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwO1xuXHRpZihjaHVua0lkcy5zb21lKChpZCkgPT4gKGluc3RhbGxlZENodW5rc1tpZF0gIT09IDApKSkge1xuXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuXHRcdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYocnVudGltZSkgdmFyIHJlc3VsdCA9IHJ1bnRpbWUoX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cdH1cblx0aWYocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24pIHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKGRhdGEpO1xuXHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuXHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcblx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSgpO1xuXHRcdH1cblx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuXHR9XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLk8ocmVzdWx0KTtcbn1cblxudmFyIGNodW5rTG9hZGluZ0dsb2JhbCA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtjZ3ByZW5kZXJpbmdcIl0gPSBzZWxmW1wid2VicGFja0NodW5rY2dwcmVuZGVyaW5nXCJdIHx8IFtdO1xuY2h1bmtMb2FkaW5nR2xvYmFsLmZvckVhY2god2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCAwKSk7XG5jaHVua0xvYWRpbmdHbG9iYWwucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2guYmluZChjaHVua0xvYWRpbmdHbG9iYWwpKTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGRlcGVuZHMgb24gb3RoZXIgbG9hZGVkIGNodW5rcyBhbmQgZXhlY3V0aW9uIG5lZWQgdG8gYmUgZGVsYXllZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbXCJ2ZW5kb3JzLW5vZGVfbW9kdWxlc19saWwtZ3VpX2Rpc3RfbGlsLWd1aV9lc21fanMtbm9kZV9tb2R1bGVzX3RocmVlX2V4YW1wbGVzX2pzbV9jb250cm9sc19PcmItNTNkN2E0XCJdLCAoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2FwcC50c1wiKSkpXG5fX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKF9fd2VicGFja19leHBvcnRzX18pO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9