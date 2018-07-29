!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=370)}({141:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.parseUrl=function(e,t){return(/^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/.exec(e)||[])[["url","scheme","slash","host","port","path","query","hash"].indexOf(t)]},t.insertScript=function(e){e=e||"js/info.js";var t=document.createElement("script");t.setAttribute("type","text/javascript"),t.src=chrome.extension.getURL(e),t.onload=function(){this.parentNode.removeChild(this)},document.head.appendChild(t)}},37:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.defaultMarkDownSourceUrl="https://github.com/TingGe/multi-environment-manager/raw/master/multi-env-list.md",t.authorLink="https://github.com/TingGe/multi-environment-manager",function(e){e.type="FROM_PAGE"}(t.requestEnum||(t.requestEnum={})),function(e){e.copy="copy"}(t.actionEnum||(t.actionEnum={})),function(e){e.debug="DEBUG_INFO"}(t.pageInfoEnum||(t.pageInfoEnum={}))},370:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(37),o=n(141);chrome.runtime.onMessage.addListener(function(e,t,n){try{e.action===r.actionEnum.copy&&o.insertScript("js/info.js")}catch(e){console.log("insertScript Fail:",e.message),chrome.runtime.sendMessage({type:r.requestEnum.type,text:""})}}),window.addEventListener("message",function(e){e.data.type&&e.data.type==r.requestEnum.type&&chrome.runtime.sendMessage(e.data)},!1)}});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzLnRzIiwid2VicGFjazovLy8uL3NyYy9jb25zdHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRlbnRfc2NyaXB0cy9pbmRleC50cyJdLCJuYW1lcyI6WyJpbnN0YWxsZWRNb2R1bGVzIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsIm1vZHVsZUlkIiwiZXhwb3J0cyIsIm1vZHVsZSIsImkiLCJsIiwibW9kdWxlcyIsImNhbGwiLCJtIiwiYyIsImQiLCJuYW1lIiwiZ2V0dGVyIiwibyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZW51bWVyYWJsZSIsImdldCIsInIiLCJTeW1ib2wiLCJ0b1N0cmluZ1RhZyIsInZhbHVlIiwidCIsIm1vZGUiLCJfX2VzTW9kdWxlIiwibnMiLCJjcmVhdGUiLCJrZXkiLCJiaW5kIiwibiIsIm9iamVjdCIsInByb3BlcnR5IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJwIiwicyIsInBhcnNlVXJsIiwidXJsIiwiZmllbGQiLCJleGVjIiwiaW5kZXhPZiIsImluc2VydFNjcmlwdCIsImpzUGF0aCIsInRlbXAiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJzcmMiLCJjaHJvbWUiLCJleHRlbnNpb24iLCJnZXRVUkwiLCJvbmxvYWQiLCJ0aGlzIiwicGFyZW50Tm9kZSIsInJlbW92ZUNoaWxkIiwiaGVhZCIsImFwcGVuZENoaWxkIiwiZGVmYXVsdE1hcmtEb3duU291cmNlVXJsIiwiYXV0aG9yTGluayIsInJlcXVlc3RFbnVtIiwiYWN0aW9uRW51bSIsInBhZ2VJbmZvRW51bSIsImNvbnN0c18xIiwidXRpbHNfMSIsInJ1bnRpbWUiLCJvbk1lc3NhZ2UiLCJhZGRMaXN0ZW5lciIsInJlcXVlc3QiLCJzZW5kZXIiLCJzZW5kUmVzcG9uc2UiLCJhY3Rpb24iLCJjb3B5IiwiZXgiLCJjb25zb2xlIiwibG9nIiwibWVzc2FnZSIsInNlbmRNZXNzYWdlIiwidHlwZSIsInRleHQiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJkYXRhIl0sIm1hcHBpbmdzIjoiYUFDQSxJQUFBQSxLQUdBLFNBQUFDLEVBQUFDLEdBR0EsR0FBQUYsRUFBQUUsR0FDQSxPQUFBRixFQUFBRSxHQUFBQyxRQUdBLElBQUFDLEVBQUFKLEVBQUFFLElBQ0FHLEVBQUFILEVBQ0FJLEdBQUEsRUFDQUgsWUFVQSxPQU5BSSxFQUFBTCxHQUFBTSxLQUFBSixFQUFBRCxRQUFBQyxJQUFBRCxRQUFBRixHQUdBRyxFQUFBRSxHQUFBLEVBR0FGLEVBQUFELFFBS0FGLEVBQUFRLEVBQUFGLEVBR0FOLEVBQUFTLEVBQUFWLEVBR0FDLEVBQUFVLEVBQUEsU0FBQVIsRUFBQVMsRUFBQUMsR0FDQVosRUFBQWEsRUFBQVgsRUFBQVMsSUFDQUcsT0FBQUMsZUFBQWIsRUFBQVMsR0FBMENLLFlBQUEsRUFBQUMsSUFBQUwsS0FLMUNaLEVBQUFrQixFQUFBLFNBQUFoQixHQUNBLG9CQUFBaUIsZUFBQUMsYUFDQU4sT0FBQUMsZUFBQWIsRUFBQWlCLE9BQUFDLGFBQXdEQyxNQUFBLFdBRXhEUCxPQUFBQyxlQUFBYixFQUFBLGNBQWlEbUIsT0FBQSxLQVFqRHJCLEVBQUFzQixFQUFBLFNBQUFELEVBQUFFLEdBRUEsR0FEQSxFQUFBQSxJQUFBRixFQUFBckIsRUFBQXFCLElBQ0EsRUFBQUUsRUFBQSxPQUFBRixFQUNBLEtBQUFFLEdBQUEsaUJBQUFGLFFBQUFHLFdBQUEsT0FBQUgsRUFDQSxJQUFBSSxFQUFBWCxPQUFBWSxPQUFBLE1BR0EsR0FGQTFCLEVBQUFrQixFQUFBTyxHQUNBWCxPQUFBQyxlQUFBVSxFQUFBLFdBQXlDVCxZQUFBLEVBQUFLLFVBQ3pDLEVBQUFFLEdBQUEsaUJBQUFGLEVBQUEsUUFBQU0sS0FBQU4sRUFBQXJCLEVBQUFVLEVBQUFlLEVBQUFFLEVBQUEsU0FBQUEsR0FBZ0gsT0FBQU4sRUFBQU0sSUFBcUJDLEtBQUEsS0FBQUQsSUFDckksT0FBQUYsR0FJQXpCLEVBQUE2QixFQUFBLFNBQUExQixHQUNBLElBQUFTLEVBQUFULEtBQUFxQixXQUNBLFdBQTJCLE9BQUFyQixFQUFBLFNBQzNCLFdBQWlDLE9BQUFBLEdBRWpDLE9BREFILEVBQUFVLEVBQUFFLEVBQUEsSUFBQUEsR0FDQUEsR0FJQVosRUFBQWEsRUFBQSxTQUFBaUIsRUFBQUMsR0FBc0QsT0FBQWpCLE9BQUFrQixVQUFBQyxlQUFBMUIsS0FBQXVCLEVBQUFDLElBR3REL0IsRUFBQWtDLEVBQUEsR0FJQWxDLElBQUFtQyxFQUFBLHlGQ2pGQWpDLEVBQUFrQyxTQUFBLFNBRUVDLEVBRUFDLEdBc0JBLE9BWmtCLGtHQUNPQyxLQUFLRixTQUU1QixNQUNBLFNBQ0EsUUFDQSxPQUNBLE9BQ0EsT0FDQSxRQUNBLFFBQ0FHLFFBQVFGLEtBS1pwQyxFQUFBdUMsYUFBQSxTQUE2QkMsR0FDM0JBLEVBQVNBLEdBQVUsYUFDbkIsSUFBTUMsRUFBT0MsU0FBU0MsY0FBYyxVQUNwQ0YsRUFBS0csYUFBYSxPQUFRLG1CQUMxQkgsRUFBS0ksSUFBTUMsT0FBT0MsVUFBVUMsT0FBT1IsR0FDbkNDLEVBQUtRLE9BQVMsV0FDWkMsS0FBS0MsV0FBV0MsWUFBWUYsT0FFOUJSLFNBQVNXLEtBQUtDLFlBQVliLHNGQ3RDZnpDLEVBQUF1RCx5QkFDWCxtRkFHV3ZELEVBQUF3RCxXQUFhLHNEQUcxQixTQUFZQyxHQUNWQSxFQUFBLGlCQURGLENBQVl6RCxFQUFBeUQsY0FBQXpELEVBQUF5RCxpQkFLWixTQUFZQyxHQUNWQSxFQUFBLFlBREYsQ0FBWTFELEVBQUEwRCxhQUFBMUQsRUFBQTBELGdCQUtaLFNBQVlDLEdBQ1ZBLEVBQUEsbUJBREYsQ0FBWTNELEVBQUEyRCxlQUFBM0QsRUFBQTJELHFHQ2xCWixJQUFBQyxFQUFBOUQsRUFBQSxJQUNBK0QsRUFBQS9ELEVBQUEsS0FHQWdELE9BQU9nQixRQUFRQyxVQUFVQyxZQUFZLFNBQVNDLEVBQVNDLEVBQVFDLEdBQzdELElBQ0VGLEVBQVFHLFNBQVdSLEVBQUFGLFdBQVdXLE1BQVFSLEVBQUF0QixhQUFhLGNBQ25ELE1BQU8rQixHQUNQQyxRQUFRQyxJQUFJLHFCQUFzQkYsRUFBR0csU0FDckMzQixPQUFPZ0IsUUFBUVksYUFBY0MsS0FBTWYsRUFBQUgsWUFBWWtCLEtBQU1DLEtBQU0sUUFLL0RDLE9BQU9DLGlCQUNMLFVBQ0EsU0FBU0MsR0FDUEEsRUFBTUMsS0FBS0wsTUFDVEksRUFBTUMsS0FBS0wsTUFBUWYsRUFBQUgsWUFBWWtCLE1BQy9CN0IsT0FBT2dCLFFBQVFZLFlBQVlLLEVBQU1DLFFBRXJDIiwiZmlsZSI6ImNvbnRlbnRTY3JpcHRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDM3MCk7XG4iLCIvKiog6Kej5p6QIFVSTCAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlVXJsKFxuICAvLyB1cmwg5a2X56ym5LiyXG4gIHVybDogc3RyaW5nLFxuICAvLyDnm67moIflrZfmrrVcbiAgZmllbGQ6XG4gICAgfCBcInVybFwiXG4gICAgfCBcInNjaGVtZVwiXG4gICAgfCBcInNsYXNoXCJcbiAgICB8IFwiaG9zdFwiXG4gICAgfCBcInBvcnRcIlxuICAgIHwgXCJwYXRoXCJcbiAgICB8IFwicXVlcnlcIlxuICAgIHwgXCJoYXNoXCJcbikge1xuICBjb25zdCBwYXJzZV91cmwgPSAvXig/OihbQS1aYS16XSspOik/KFxcL3swLDN9KShbMC05LlxcLUEtWmEtel0rKSg/OjooXFxkKykpPyg/OlxcLyhbXj8jXSopKT8oPzpcXD8oW14jXSopKT8oPzojKC4qKSk/JC87XG4gIGNvbnN0IHJlc3VsdCA9IHBhcnNlX3VybC5leGVjKHVybCkgfHwgW107XG4gIGNvbnN0IGluZGV4ID0gW1xuICAgIFwidXJsXCIsXG4gICAgXCJzY2hlbWVcIixcbiAgICBcInNsYXNoXCIsXG4gICAgXCJob3N0XCIsXG4gICAgXCJwb3J0XCIsXG4gICAgXCJwYXRoXCIsXG4gICAgXCJxdWVyeVwiLFxuICAgIFwiaGFzaFwiXG4gIF0uaW5kZXhPZihmaWVsZCk7XG4gIHJldHVybiByZXN1bHRbaW5kZXhdO1xufVxuXG4vKiog5ZCR6aG16Z2i5o+S5YWlSlMgKi9cbmV4cG9ydCBmdW5jdGlvbiBpbnNlcnRTY3JpcHQoanNQYXRoKSB7XG4gIGpzUGF0aCA9IGpzUGF0aCB8fCBcImpzL2luZm8uanNcIjtcbiAgY29uc3QgdGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7XG4gIHRlbXAuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHQvamF2YXNjcmlwdFwiKTtcbiAgdGVtcC5zcmMgPSBjaHJvbWUuZXh0ZW5zaW9uLmdldFVSTChqc1BhdGgpO1xuICB0ZW1wLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzKTtcbiAgfTtcbiAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZCh0ZW1wKTtcbn1cbiIsIi8vIOm7mOiupChNYXJrZG93biDmoLzlvI/mlofmoaMp55qE546v5aKD5YiX6KGo5Zyw5Z2AXG5leHBvcnQgY29uc3QgZGVmYXVsdE1hcmtEb3duU291cmNlVXJsID1cbiAgXCJodHRwczovL2dpdGh1Yi5jb20vVGluZ0dlL211bHRpLWVudmlyb25tZW50LW1hbmFnZXIvcmF3L21hc3Rlci9tdWx0aS1lbnYtbGlzdC5tZFwiO1xuXG4vLyDogZTns7vkvZzogIXlnLDlnYBcbmV4cG9ydCBjb25zdCBhdXRob3JMaW5rID0gXCJodHRwczovL2dpdGh1Yi5jb20vVGluZ0dlL211bHRpLWVudmlyb25tZW50LW1hbmFnZXJcIjtcblxuLy8g5LqL5Lu257G75Z6LXG5leHBvcnQgZW51bSByZXF1ZXN0RW51bSB7XG4gIHR5cGUgPSBcIkZST01fUEFHRVwiXG59XG5cbi8vIOaMh+S7pOWQjeensFxuZXhwb3J0IGVudW0gYWN0aW9uRW51bSB7XG4gIGNvcHkgPSBcImNvcHlcIlxufVxuXG4vLyDlhoXlrrnpobXpnaLkv6Hmga/lkb3lkI3nqbrpl7RcbmV4cG9ydCBlbnVtIHBhZ2VJbmZvRW51bSB7XG4gIGRlYnVnID0gXCJERUJVR19JTkZPXCJcbn1cbiIsImltcG9ydCB7IHJlcXVlc3RFbnVtLCBhY3Rpb25FbnVtIH0gZnJvbSAnLi8uLi9jb25zdHMnO1xuaW1wb3J0IHsgaW5zZXJ0U2NyaXB0IH0gZnJvbSBcIi4uL3V0aWxzXCI7XG5cbi8qKiDnm5HlkKwgcG9wdXAg6aG15oyH5Luk5raI5oGvICovXG5jaHJvbWUucnVudGltZS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoZnVuY3Rpb24ocmVxdWVzdCwgc2VuZGVyLCBzZW5kUmVzcG9uc2UpIHtcbiAgdHJ5IHtcbiAgICByZXF1ZXN0LmFjdGlvbiA9PT0gYWN0aW9uRW51bS5jb3B5ICYmIGluc2VydFNjcmlwdChcImpzL2luZm8uanNcIik7XG4gIH0gY2F0Y2ggKGV4KSB7XG4gICAgY29uc29sZS5sb2coXCJpbnNlcnRTY3JpcHQgRmFpbDpcIiwgZXgubWVzc2FnZSk7XG4gICAgY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2UoeyB0eXBlOiByZXF1ZXN0RW51bS50eXBlLCB0ZXh0OiBcIlwiIH0pO1xuICB9XG59KTtcblxuLyoqIOebkeWQrCBERUJVR19JTkZPIOa2iOaBr++8jOW5tuaKiiBwYWdlSW5mbyDkvKDnu5kgcG9wdXAgKi9cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFxuICBcIm1lc3NhZ2VcIixcbiAgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICBldmVudC5kYXRhLnR5cGUgJiZcbiAgICAgIGV2ZW50LmRhdGEudHlwZSA9PSByZXF1ZXN0RW51bS50eXBlICYmXG4gICAgICBjaHJvbWUucnVudGltZS5zZW5kTWVzc2FnZShldmVudC5kYXRhKTtcbiAgfSxcbiAgZmFsc2Vcbik7XG4iXSwic291cmNlUm9vdCI6IiJ9