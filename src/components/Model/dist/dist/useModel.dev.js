"use strict";

exports.__esModule = true;

var react_1 = require("react");

var ModelsContext_1 = require("./modelsContext");

function useModel(modelName) {
  var _a = react_1.useContext(ModelsContext_1["default"]),
      registerModel = _a.registerModel,
      unregisterModel = _a.unregisterModel,
      getModelByName = _a.getModelByName;

  react_1.useEffect(function () {
    return function () {
      return unregisterModel(modelName);
    };
  }, [modelName, unregisterModel]);
  var getModel = react_1.useCallback(function () {
    return getModelByName(modelName);
  }, [getModelByName, modelName]);
  return {
    registerModel: registerModel,
    getModel: getModel
  };
}

exports["default"] = useModel;