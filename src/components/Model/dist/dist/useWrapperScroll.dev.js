"use strict";

exports.__esModule = true;

var react_1 = require("react");

var framer_motion_1 = require("framer-motion");

var ModelsContext_1 = require("./modelsContext");

function useWrapperScroll() {
  var wrapperRef = react_1.useContext(ModelsContext_1["default"]).wrapperRef;
  var scrollY = framer_motion_1.useMotionValue(0);
  var scrollYProgress = framer_motion_1.useMotionValue(0);
  react_1.useEffect(function () {
    if (wrapperRef.current) {
      var updateScrollValue_1 = function updateScrollValue_1() {
        if (wrapperRef.current) {
          var _a = wrapperRef.current,
              scrollTop = _a.scrollTop,
              scrollHeight = _a.scrollHeight,
              offsetHeight = _a.offsetHeight;
          var fullScroll = scrollHeight - offsetHeight;
          scrollY.set(scrollTop);
          scrollYProgress.set(scrollTop / fullScroll);
        }
      };

      wrapperRef.current.addEventListener('scroll', updateScrollValue_1);
      return function () {
        var _a;

        return (_a = wrapperRef === null || wrapperRef === void 0 ? void 0 : wrapperRef.current) === null || _a === void 0 ? void 0 : _a.removeEventListener('scroll', updateScrollValue_1);
      };
    }
  }, [wrapperRef, scrollY, scrollYProgress]);
  return {
    scrollY: scrollY,
    scrollYProgress: scrollYProgress
  };
}

exports["default"] = useWrapperScroll;