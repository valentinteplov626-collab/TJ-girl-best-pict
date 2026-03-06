import {
    makeExit
} from "./shared-RKYZDRIZ.js";
import {
    parseConfig
} from "./shared-JB5ZCMYZ.js";
import "./shared-KLJ2VC5C.js";
import "./shared-URIJICNL.js";
var config = parseConfig(APP_CONFIG);
if (config) {
    document.addEventListener("click", () => {
        makeExit(config, "mainExit");
    });
}