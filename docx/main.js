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
        let reverseGUI = { reverse: false };
        gui.add(reverseGUI, "reverse");
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
            if (reverseGUI.reverse) {
                reverse = -1;
            }
            else {
                reverse = 1;
            }
            torusGroup4.rotateZ(0.005 * reverse);
            torusGroup3.rotateZ(0.005 * reverse);
            torusGroup2.rotateZ(0.005 * reverse);
            torusGroup1.rotateZ(0.005 * reverse);
            torusGroup4.rotateX(0.005 * reverse);
            torusGroup3.rotateX(0.005 * reverse);
            torusGroup2.rotateX(0.005 * reverse);
            torusGroup1.rotateX(0.005 * reverse);
            // torusGroup4.rotateX(0.01);
            torusGroup3.rotateX(0.01 * reverse);
            torusGroup2.rotateX(0.01 * reverse);
            torusGroup1.rotateX(0.01 * reverse);
            torusGroup2.rotateY(0.02 * reverse);
            torusGroup1.rotateY(0.02 * reverse);
            torusGroup1.rotateX(0.02 * reverse);
            torusGroup1.rotateY(0.02 * reverse);
            torusGroup1.rotateZ(0.02 * reverse);
            coreFrame.rotateY(0.01 * reverse);
            stars.rotateY(0.001 * reverse);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YXBwLnRzIiwid2VicGFjazovL2NncHJlbmRlcmluZy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9jZ3ByZW5kZXJpbmcvd2VicGFjay9ydW50aW1lL2NodW5rIGxvYWRlZCIsIndlYnBhY2s6Ly9jZ3ByZW5kZXJpbmcvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2NncHJlbmRlcmluZy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2NncHJlbmRlcmluZy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2NncHJlbmRlcmluZy93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9jZ3ByZW5kZXJpbmcvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9jZ3ByZW5kZXJpbmcvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL2NncHJlbmRlcmluZy93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR3JvdXAgfSBmcm9tIFwiQHR3ZWVuanMvdHdlZW4uanNcIjtcbmltcG9ydCAqIGFzIFRIUkVFIGZyb20gXCJ0aHJlZVwiO1xuaW1wb3J0IEdVSSBmcm9tIFwibGlsLWd1aVwiO1xuaW1wb3J0IHsgT3JiaXRDb250cm9scyB9IGZyb20gXCJ0aHJlZS9leGFtcGxlcy9qc20vY29udHJvbHMvT3JiaXRDb250cm9sc1wiO1xuXG5jbGFzcyBUaHJlZUpTQ29udGFpbmVyIHtcbiAgICBwcml2YXRlIHNjZW5lOiBUSFJFRS5TY2VuZTtcbiAgICBwcml2YXRlIGxpZ2h0OiBUSFJFRS5MaWdodDtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgIH1cblxuICAgIC8vIOeUu+mdoumDqOWIhuOBruS9nOaIkCjooajnpLrjgZnjgovmnqDjgZTjgajjgaspKlxuICAgIHB1YmxpYyBjcmVhdGVSZW5kZXJlckRPTSA9ICh3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlciwgY2FtZXJhUG9zOiBUSFJFRS5WZWN0b3IzKSA9PiB7XG4gICAgICAgIGxldCByZW5kZXJlciA9IG5ldyBUSFJFRS5XZWJHTFJlbmRlcmVyKCk7XG4gICAgICAgIHJlbmRlcmVyLnNldFNpemUod2lkdGgsIGhlaWdodCk7XG4gICAgICAgIHJlbmRlcmVyLnNldENsZWFyQ29sb3IobmV3IFRIUkVFLkNvbG9yKDB4MDAwMDAwKSk7XG5cbiAgICAgICAgLy/jgqvjg6Hjg6njga7oqK3lrppcbiAgICAgICAgbGV0IGNhbWVyYSA9IG5ldyBUSFJFRS5QZXJzcGVjdGl2ZUNhbWVyYSg3NSwgd2lkdGggLyBoZWlnaHQsIDAuMSwgMTAwMCk7XG4gICAgICAgIGNhbWVyYS5wb3NpdGlvbi5jb3B5KGNhbWVyYVBvcyk7XG4gICAgICAgIGNhbWVyYS5sb29rQXQobmV3IFRIUkVFLlZlY3RvcjMoMCwgMCwgMCkpO1xuXG4gICAgICAgIGxldCBvcmJpdENvbnRyb2xzID0gbmV3IE9yYml0Q29udHJvbHMoY2FtZXJhLCByZW5kZXJlci5kb21FbGVtZW50KTtcblxuICAgICAgICB0aGlzLmNyZWF0ZVNjZW5lKCk7XG4gICAgICAgIC8vIOavjuODleODrOODvOODoOOBrnVwZGF0ZeOCkuWRvOOCk+OBp++8jHJlbmRlclxuICAgICAgICAvLyByZXFlc3RBbmltYXRpb25GcmFtZSDjgavjgojjgormrKHjg5Xjg6zjg7zjg6DjgpLlkbzjgbZcbiAgICAgICAgbGV0IHJlbmRlcjogRnJhbWVSZXF1ZXN0Q2FsbGJhY2sgPSAodGltZSkgPT4ge1xuICAgICAgICAgICAgb3JiaXRDb250cm9scy51cGRhdGUoKTtcblxuICAgICAgICAgICAgcmVuZGVyZXIucmVuZGVyKHRoaXMuc2NlbmUsIGNhbWVyYSk7XG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmVuZGVyKTtcbiAgICAgICAgfVxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmVuZGVyKTtcblxuICAgICAgICByZW5kZXJlci5kb21FbGVtZW50LnN0eWxlLmNzc0Zsb2F0ID0gXCJsZWZ0XCI7XG4gICAgICAgIHJlbmRlcmVyLmRvbUVsZW1lbnQuc3R5bGUubWFyZ2luID0gXCIxMHB4XCI7XG4gICAgICAgIHJldHVybiByZW5kZXJlci5kb21FbGVtZW50O1xuICAgIH1cblxuICAgIC8vIOOCt+ODvOODs+OBruS9nOaIkCjlhajkvZPjgacx5ZueKVxuICAgIHByaXZhdGUgY3JlYXRlU2NlbmUgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuc2NlbmUgPSBuZXcgVEhSRUUuU2NlbmUoKTtcblxuICAgICAgICAvL+ODqeOCpOODiOOBruioreWumlxuICAgICAgICB0aGlzLmxpZ2h0ID0gbmV3IFRIUkVFLkRpcmVjdGlvbmFsTGlnaHQoMHhmZmZmZmYpO1xuICAgICAgICBsZXQgZGVnUmF0ZSA9IDA7XG4gICAgICAgIGxldCBsdmVjID0gbmV3IFRIUkVFLlZlY3RvcjMoTWF0aC5zaW4oTWF0aC5QSSAqIGRlZ1JhdGUpLCAwLCBNYXRoLmNvcyhNYXRoLlBJICogZGVnUmF0ZSkpLm5vcm1hbGl6ZSgpO1xuICAgICAgICB0aGlzLmxpZ2h0LnBvc2l0aW9uLnNldChsdmVjLngsIGx2ZWMueSwgbHZlYy56KTtcbiAgICAgICAgdGhpcy5zY2VuZS5hZGQodGhpcy5saWdodCk7XG5cbiAgICAgICAgbGV0IGd1aSA9IG5ldyBHVUkoKTtcbiAgICAgICAgbGV0IHJldmVyc2VHVUkgPSB7cmV2ZXJzZTogZmFsc2V9O1xuICAgICAgICBndWkuYWRkKHJldmVyc2VHVUksIFwicmV2ZXJzZVwiKTtcblxuICAgICAgICBjb25zdCBjb3JlR2VvbWV0cnkgPSBuZXcgVEhSRUUuU3BoZXJlR2VvbWV0cnkoMC43LCAxMCwgMTApO1xuICAgICAgICBjb25zdCBjb3JlTWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaFRvb25NYXRlcmlhbCh7IGNvbG9yOiAweGZmZmZmZiB9KTtcbiAgICAgICAgbGV0IGNvcmUgPSBuZXcgVEhSRUUuTWVzaChjb3JlR2VvbWV0cnksIGNvcmVNYXRlcmlhbCk7XG4gICAgICAgIHRoaXMuc2NlbmUuYWRkKGNvcmUpO1xuXG4gICAgICAgIGxldCBjb3JlRnJhbWUgPSBjcmVhdGVDb3JlRnJhbWVHcm91cCgpO1xuICAgICAgICB0aGlzLnNjZW5lLmFkZChjb3JlRnJhbWUpO1xuXG4gICAgICAgIGxldCBmcmFtZSA9IGNyZWF0ZUZyYW1lR3JvdXAoKTtcbiAgICAgICAgdGhpcy5zY2VuZS5hZGQoZnJhbWUpO1xuXG4gICAgICAgIGxldCBzdGFycyA9IGNyZWF0ZVN0YXJHcm91cCgzMCk7XG4gICAgICAgIHRoaXMuc2NlbmUuYWRkKHN0YXJzKTtcblxuICAgICAgICBsZXQgdG9ydXNHcm91cDEgPSBjcmVhdGVUb3J1c0dyb3VwKDEuMCk7XG4gICAgICAgIHRoaXMuc2NlbmUuYWRkKHRvcnVzR3JvdXAxKTtcbiAgICAgICAgbGV0IHRvcnVzR3JvdXAyID0gY3JlYXRlVG9ydXNHcm91cCgxLjQpO1xuICAgICAgICB0aGlzLnNjZW5lLmFkZCh0b3J1c0dyb3VwMik7XG4gICAgICAgIGxldCB0b3J1c0dyb3VwMyA9IGNyZWF0ZVRvcnVzR3JvdXAoMS44KTtcbiAgICAgICAgdGhpcy5zY2VuZS5hZGQodG9ydXNHcm91cDMpO1xuICAgICAgICBsZXQgdG9ydXNHcm91cDQgPSBjcmVhdGVUb3J1c0dyb3VwKDIuMik7XG4gICAgICAgIHRoaXMuc2NlbmUuYWRkKHRvcnVzR3JvdXA0KTtcblxuICAgICAgICAvLyDmr47jg5Xjg6zjg7zjg6Djga51cGRhdGXjgpLlkbzjgpPjgafvvIzmm7TmlrBcbiAgICAgICAgLy8gcmVxZXN0QW5pbWF0aW9uRnJhbWUg44Gr44KI44KK5qyh44OV44Os44O844Og44KS5ZG844G2XG4gICAgICAgIGxldCB1cGRhdGU6IEZyYW1lUmVxdWVzdENhbGxiYWNrID0gKHRpbWUpID0+IHtcbiAgICAgICAgICAgIGxldCByZXZlcnNlO1xuICAgICAgICAgICAgaWYocmV2ZXJzZUdVSS5yZXZlcnNlKXtcbiAgICAgICAgICAgICAgICByZXZlcnNlID0gLTE7XG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICByZXZlcnNlID0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRvcnVzR3JvdXA0LnJvdGF0ZVooMC4wMDUgKiByZXZlcnNlKTtcbiAgICAgICAgICAgIHRvcnVzR3JvdXAzLnJvdGF0ZVooMC4wMDUgKiByZXZlcnNlKTtcbiAgICAgICAgICAgIHRvcnVzR3JvdXAyLnJvdGF0ZVooMC4wMDUgKiByZXZlcnNlKTtcbiAgICAgICAgICAgIHRvcnVzR3JvdXAxLnJvdGF0ZVooMC4wMDUgKiByZXZlcnNlKTtcbiAgICAgICAgICAgIHRvcnVzR3JvdXA0LnJvdGF0ZVgoMC4wMDUgKiByZXZlcnNlKTtcbiAgICAgICAgICAgIHRvcnVzR3JvdXAzLnJvdGF0ZVgoMC4wMDUgKiByZXZlcnNlKTtcbiAgICAgICAgICAgIHRvcnVzR3JvdXAyLnJvdGF0ZVgoMC4wMDUgKiByZXZlcnNlKTtcbiAgICAgICAgICAgIHRvcnVzR3JvdXAxLnJvdGF0ZVgoMC4wMDUgKiByZXZlcnNlKTtcblxuICAgICAgICAgICAgLy8gdG9ydXNHcm91cDQucm90YXRlWCgwLjAxKTtcbiAgICAgICAgICAgIHRvcnVzR3JvdXAzLnJvdGF0ZVgoMC4wMSAqIHJldmVyc2UpO1xuICAgICAgICAgICAgdG9ydXNHcm91cDIucm90YXRlWCgwLjAxICogcmV2ZXJzZSk7XG4gICAgICAgICAgICB0b3J1c0dyb3VwMS5yb3RhdGVYKDAuMDEgKiByZXZlcnNlKTtcblxuICAgICAgICAgICAgdG9ydXNHcm91cDIucm90YXRlWSgwLjAyICogcmV2ZXJzZSk7XG4gICAgICAgICAgICB0b3J1c0dyb3VwMS5yb3RhdGVZKDAuMDIgKiByZXZlcnNlKTtcblxuICAgICAgICAgICAgdG9ydXNHcm91cDEucm90YXRlWCgwLjAyICogcmV2ZXJzZSk7XG4gICAgICAgICAgICB0b3J1c0dyb3VwMS5yb3RhdGVZKDAuMDIgKiByZXZlcnNlKTtcbiAgICAgICAgICAgIHRvcnVzR3JvdXAxLnJvdGF0ZVooMC4wMiAqIHJldmVyc2UpO1xuXG4gICAgICAgICAgICBjb3JlRnJhbWUucm90YXRlWSgwLjAxICogcmV2ZXJzZSk7XG4gICAgICAgICAgICBzdGFycy5yb3RhdGVZKDAuMDAxICogcmV2ZXJzZSk7XG5cbiAgICAgICAgICAgIGRlZ1JhdGUgKz0gMC4wMDU7XG4gICAgICAgICAgICBpZihkZWdSYXRlID49IDIpIGRlZ1JhdGUgPSAwO1xuICAgICAgICAgICAgdGhpcy5saWdodC5wb3NpdGlvbi5zZXQoTWF0aC5zaW4oTWF0aC5QSSAqIGRlZ1JhdGUpLCAwLjUsIE1hdGguY29zKE1hdGguUEkgKiBkZWdSYXRlKSk7XG5cbiAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh1cGRhdGUpO1xuICAgICAgICB9XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh1cGRhdGUpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlVG9ydXNHcm91cChyYWRpdXM6IG51bWJlcil7XG4gICAgY29uc3QgZ2VvbWV0cnkgPSBuZXcgVEhSRUUuVG9ydXNHZW9tZXRyeShyYWRpdXMsIDAuMTMsIDYsIDIwLCBNYXRoLlBJICogMS4yKTtcbiAgICBjb25zdCBsaW5nR2VvbSA9IG5ldyBUSFJFRS5SaW5nR2VvbWV0cnkocmFkaXVzLCByYWRpdXMgKyAwLjAxLCAyMCwgMSwgMCk7XG4gICAgY29uc3QgbWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaFRvb25NYXRlcmlhbCh7IGNvbG9yOiAweGZmZmZmZiwgc2lkZTpUSFJFRS5Eb3VibGVTaWRlfSk7XG4gICAgY29uc3QgbGluZU1hdGVyaWFsID0gbmV3IFRIUkVFLkxpbmVCYXNpY01hdGVyaWFsKHsgY29sb3I6IDB4MDAwMDAwfSk7XG4gICAgbGV0IGdyb3VwID0gbmV3IFRIUkVFLkdyb3VwKCk7XG4gICAgZ3JvdXAuYWRkKG5ldyBUSFJFRS5NZXNoKGdlb21ldHJ5LCBtYXRlcmlhbCkpO1xuICAgIC8vIGdyb3VwLmFkZChuZXcgVEhSRUUuTGluZVNlZ21lbnRzKGdlb21ldHJ5LCBsaW5lTWF0ZXJpYWwpKTtcbiAgICBncm91cC5hZGQobmV3IFRIUkVFLk1lc2gobGluZ0dlb20sIG1hdGVyaWFsKSk7XG4gICAgcmV0dXJuIGdyb3VwO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVGcmFtZUdyb3VwKCl7XG4gICAgY29uc3QgZnJhbWVHcm91cCA9IG5ldyBUSFJFRS5Hcm91cCgpO1xuICAgIGNvbnN0IGZyYW1lR2VvbWV0cnkgPSBuZXcgVEhSRUUuVG9ydXNHZW9tZXRyeSgyLjUsIDAuMDUsIDQsIDMwLCBNYXRoLlBJICogMS4wNSk7XG4gICAgY29uc3QgZnJhbWVNYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoVG9vbk1hdGVyaWFsKHsgY29sb3I6IDB4ZmZmZmZmIH0pO1xuICAgIGxldCBmcmFtZSA9IG5ldyBUSFJFRS5NZXNoKGZyYW1lR2VvbWV0cnksIGZyYW1lTWF0ZXJpYWwpO1xuICAgIGZyYW1lLnJvdGF0ZVooTWF0aC5QSSAqIDAuNDc1KTtcbiAgICBmcmFtZUdyb3VwLmFkZChmcmFtZSk7XG5cbiAgICBjb25zdCBsaW5lTWF0ZXJpYWwgPSBuZXcgVEhSRUUuTGluZUJhc2ljTWF0ZXJpYWwoeyBjb2xvcjogMHhmZmZmZmYgfSk7XG4gICAgY29uc3QgcG9pbnRzID0gW107XG4gICAgcG9pbnRzLnB1c2goIG5ldyBUSFJFRS5WZWN0b3IzKDAsIDIuOCwgMCkgKTtcbiAgICBwb2ludHMucHVzaCggbmV3IFRIUkVFLlZlY3RvcjMoMCwgLTMuNSwgMCkgKTtcbiAgICBjb25zdCBsaW5lR2VvbWV0cnkgPSBuZXcgVEhSRUUuQnVmZmVyR2VvbWV0cnkoKS5zZXRGcm9tUG9pbnRzKHBvaW50cyk7XG4gICAgY29uc3QgbGluZSA9IG5ldyBUSFJFRS5MaW5lKGxpbmVHZW9tZXRyeSwgbGluZU1hdGVyaWFsKTtcbiAgICBmcmFtZUdyb3VwLmFkZChsaW5lKVxuXG4gICAgY29uc3QgY3lsR2VvbWV0cnkgPSBuZXcgVEhSRUUuQ3lsaW5kZXJHZW9tZXRyeSgxLCAxLCAwLjEsIDIwKTtcbiAgICBjb25zdCBjeWxHZW9tZXRyeTIgPSBuZXcgVEhSRUUuQ3lsaW5kZXJHZW9tZXRyeSgwLjMsIDAuMywgMC4xLCAxMCk7XG4gICAgY29uc3QgY3lsTWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaFRvb25NYXRlcmlhbCh7IGNvbG9yOiAweGZmZmZmZiB9KTtcbiAgICBsZXQgY3lsaW5kZXIxID0gbmV3IFRIUkVFLk1lc2goY3lsR2VvbWV0cnksIGN5bE1hdGVyaWFsKTtcbiAgICBsZXQgY3lsaW5kZXIyID0gbmV3IFRIUkVFLk1lc2goY3lsR2VvbWV0cnkyLCBjeWxNYXRlcmlhbCk7XG4gICAgY3lsaW5kZXIxLnBvc2l0aW9uLnNldFkoLTMuNSk7XG4gICAgY3lsaW5kZXIyLnBvc2l0aW9uLnNldFkoMi44KTtcbiAgICBmcmFtZUdyb3VwLmFkZChjeWxpbmRlcjEpO1xuICAgIGZyYW1lR3JvdXAuYWRkKGN5bGluZGVyMik7XG5cbiAgICByZXR1cm4gZnJhbWVHcm91cDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQ29yZUZyYW1lR3JvdXAoKXtcbiAgICBjb25zdCBsaW5nR2VvbSA9IG5ldyBUSFJFRS5SaW5nR2VvbWV0cnkoMC44MCwgMC44MiwgMjAsIDEsIDApO1xuICAgIGNvbnN0IG1hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hUb29uTWF0ZXJpYWwoeyBjb2xvcjogMHgwMDAwMDAsIHNpZGU6VEhSRUUuRG91YmxlU2lkZX0pO1xuICAgIGxldCBsaW5lID0gbmV3IFRIUkVFLk1lc2gobGluZ0dlb20sIG1hdGVyaWFsKTtcbiAgICBsZXQgbGluZTIgPSBuZXcgVEhSRUUuTWVzaChsaW5nR2VvbSwgbWF0ZXJpYWwpO1xuICAgIGxldCBsaW5lMyA9IG5ldyBUSFJFRS5NZXNoKGxpbmdHZW9tLCBtYXRlcmlhbCk7XG4gICAgbGV0IGxpbmU0ID0gbmV3IFRIUkVFLk1lc2gobGluZ0dlb20sIG1hdGVyaWFsKTtcbiAgICBsaW5lMi5yb3RhdGVZKE1hdGguUEkgKiAwLjI1KTtcbiAgICBsaW5lMy5yb3RhdGVZKE1hdGguUEkgKiAwLjUpO1xuICAgIGxpbmU0LnJvdGF0ZVkoTWF0aC5QSSAqIDAuNzUpO1xuICAgIGxldCBncm91cCA9IG5ldyBUSFJFRS5Hcm91cCgpO1xuICAgIGdyb3VwLmFkZChsaW5lKTtcbiAgICBncm91cC5hZGQobGluZTIpO1xuICAgIGdyb3VwLmFkZChsaW5lMyk7XG4gICAgZ3JvdXAuYWRkKGxpbmU0KTtcbiAgICByZXR1cm4gZ3JvdXA7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN0YXJHcm91cChudW1iZXI6IG51bWJlcil7XG4gICAgY29uc3QgZ2VvbWV0cnkgPSBuZXcgVEhSRUUuVGV0cmFoZWRyb25HZW9tZXRyeSgwLjA1LCAwKTtcbiAgICBjb25zdCBtYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoVG9vbk1hdGVyaWFsKHsgY29sb3I6IDB4ZmZmZmZmLCBzaWRlOlRIUkVFLkRvdWJsZVNpZGV9KTtcbiAgICBsZXQgZ3JvdXAgPSBuZXcgVEhSRUUuR3JvdXAoKTtcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgbnVtYmVyOyBpbmRleCsrKSB7XG4gICAgICAgIGxldCBzdGFyID0gbmV3IFRIUkVFLk1lc2goZ2VvbWV0cnksIG1hdGVyaWFsKTtcbiAgICAgICAgc3Rhci5wb3NpdGlvbi5zZXQoTWF0aC5yYW5kb20oKSAqIDEwIC0gNSwgTWF0aC5yYW5kb20oKSAqIDEwIC0gNSwgTWF0aC5yYW5kb20oKSAqIDEwIC0gNSk7XG4gICAgICAgIHN0YXIucm90YXRlWChNYXRoLlBJICogTWF0aC5yYW5kb20oKSk7XG4gICAgICAgIHN0YXIucm90YXRlWShNYXRoLlBJICogTWF0aC5yYW5kb20oKSk7XG4gICAgICAgIHN0YXIucm90YXRlWihNYXRoLlBJICogTWF0aC5yYW5kb20oKSk7XG4gICAgICAgIGdyb3VwLmFkZChzdGFyKTtcbiAgICB9XG4gICAgcmV0dXJuIGdyb3VwO1xufVxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgaW5pdCk7XG5cbmZ1bmN0aW9uIGluaXQoKSB7XG4gICAgbGV0IGNvbnRhaW5lciA9IG5ldyBUaHJlZUpTQ29udGFpbmVyKCk7XG5cbiAgICBsZXQgdmlld3BvcnQgPSBjb250YWluZXIuY3JlYXRlUmVuZGVyZXJET00oNjQwLCA0ODAsIG5ldyBUSFJFRS5WZWN0b3IzKC0zLCAzLCAzKSk7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh2aWV3cG9ydCk7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsInZhciBkZWZlcnJlZCA9IFtdO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5PID0gKHJlc3VsdCwgY2h1bmtJZHMsIGZuLCBwcmlvcml0eSkgPT4ge1xuXHRpZihjaHVua0lkcykge1xuXHRcdHByaW9yaXR5ID0gcHJpb3JpdHkgfHwgMDtcblx0XHRmb3IodmFyIGkgPSBkZWZlcnJlZC5sZW5ndGg7IGkgPiAwICYmIGRlZmVycmVkW2kgLSAxXVsyXSA+IHByaW9yaXR5OyBpLS0pIGRlZmVycmVkW2ldID0gZGVmZXJyZWRbaSAtIDFdO1xuXHRcdGRlZmVycmVkW2ldID0gW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldO1xuXHRcdHJldHVybjtcblx0fVxuXHR2YXIgbm90RnVsZmlsbGVkID0gSW5maW5pdHk7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWQubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldID0gZGVmZXJyZWRbaV07XG5cdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG5cdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBjaHVua0lkcy5sZW5ndGg7IGorKykge1xuXHRcdFx0aWYgKChwcmlvcml0eSAmIDEgPT09IDAgfHwgbm90RnVsZmlsbGVkID49IHByaW9yaXR5KSAmJiBPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLk8pLmV2ZXJ5KChrZXkpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fLk9ba2V5XShjaHVua0lkc1tqXSkpKSkge1xuXHRcdFx0XHRjaHVua0lkcy5zcGxpY2Uoai0tLCAxKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGZ1bGZpbGxlZCA9IGZhbHNlO1xuXHRcdFx0XHRpZihwcmlvcml0eSA8IG5vdEZ1bGZpbGxlZCkgbm90RnVsZmlsbGVkID0gcHJpb3JpdHk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKGZ1bGZpbGxlZCkge1xuXHRcdFx0ZGVmZXJyZWQuc3BsaWNlKGktLSwgMSlcblx0XHRcdHZhciByID0gZm4oKTtcblx0XHRcdGlmIChyICE9PSB1bmRlZmluZWQpIHJlc3VsdCA9IHI7XG5cdFx0fVxuXHR9XG5cdHJldHVybiByZXN1bHQ7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBubyBiYXNlVVJJXG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbl9fd2VicGFja19yZXF1aXJlX18uTy5qID0gKGNodW5rSWQpID0+IChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPT09IDApO1xuXG4vLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbnZhciB3ZWJwYWNrSnNvbnBDYWxsYmFjayA9IChwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbiwgZGF0YSkgPT4ge1xuXHR2YXIgW2NodW5rSWRzLCBtb3JlTW9kdWxlcywgcnVudGltZV0gPSBkYXRhO1xuXHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcblx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG5cdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDA7XG5cdGlmKGNodW5rSWRzLnNvbWUoKGlkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2lkXSAhPT0gMCkpKSB7XG5cdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8obW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihydW50aW1lKSB2YXIgcmVzdWx0ID0gcnVudGltZShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0fVxuXHRpZihwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbikgcGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24oZGF0YSk7XG5cdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKCk7XG5cdFx0fVxuXHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG5cdH1cblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uTyhyZXN1bHQpO1xufVxuXG52YXIgY2h1bmtMb2FkaW5nR2xvYmFsID0gc2VsZltcIndlYnBhY2tDaHVua2NncHJlbmRlcmluZ1wiXSA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtjZ3ByZW5kZXJpbmdcIl0gfHwgW107XG5jaHVua0xvYWRpbmdHbG9iYWwuZm9yRWFjaCh3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIDApKTtcbmNodW5rTG9hZGluZ0dsb2JhbC5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCBjaHVua0xvYWRpbmdHbG9iYWwucHVzaC5iaW5kKGNodW5rTG9hZGluZ0dsb2JhbCkpOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgZGVwZW5kcyBvbiBvdGhlciBsb2FkZWQgY2h1bmtzIGFuZCBleGVjdXRpb24gbmVlZCB0byBiZSBkZWxheWVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyh1bmRlZmluZWQsIFtcInZlbmRvcnMtbm9kZV9tb2R1bGVzX2xpbC1ndWlfZGlzdF9saWwtZ3VpX2VzbV9qcy1ub2RlX21vZHVsZXNfdGhyZWVfZXhhbXBsZXNfanNtX2NvbnRyb2xzX09yYi01M2Q3YTRcIl0sICgpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvYXBwLnRzXCIpKSlcbl9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8oX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=