'use strict';

var jsxRuntime = require('react/jsx-runtime');

function getDefaultExportFromNamespaceIfNotNamed (n) {
	return n && Object.prototype.hasOwnProperty.call(n, 'default') && Object.keys(n).length === 1 ? n['default'] : n;
}

function styleInject(css, ref) {
  if (ref === void 0) ref = {};
  var insertAt = ref.insertAt;
  if (typeof document === 'undefined') {
    return;
  }
  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';
  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = "::view-transition-old(root) {\n  animation-delay: var(--transition-speed);\n}\n\n::view-transition-new(root) {\n  animation: circle-in var(--transition-speed);\n}\n\n@keyframes circle-in {\n  from {\n    clip-path: circle(0% at 50% 0%)\n  }\n\n  to {\n    clip-path: circle(120% at 50% 0%)\n  }\n}\n\n:root {\n  --transition-speed: .5s;\n}\n\n.theme-switcher-preview {\n  padding: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlRoZW1lU3dpdGNoZXIuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usd0NBQXdDO0FBQzFDOztBQUVBO0VBQ0UsNENBQTRDO0FBQzlDOztBQUVBO0VBQ0U7SUFDRTtFQUNGOztFQUVBO0lBQ0U7RUFDRjtBQUNGOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsYUFBYTtBQUNmIiwiZmlsZSI6IlRoZW1lU3dpdGNoZXIuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjp2aWV3LXRyYW5zaXRpb24tb2xkKHJvb3QpIHtcbiAgYW5pbWF0aW9uLWRlbGF5OiB2YXIoLS10cmFuc2l0aW9uLXNwZWVkKTtcbn1cblxuOjp2aWV3LXRyYW5zaXRpb24tbmV3KHJvb3QpIHtcbiAgYW5pbWF0aW9uOiBjaXJjbGUtaW4gdmFyKC0tdHJhbnNpdGlvbi1zcGVlZCk7XG59XG5cbkBrZXlmcmFtZXMgY2lyY2xlLWluIHtcbiAgZnJvbSB7XG4gICAgY2xpcC1wYXRoOiBjaXJjbGUoMCUgYXQgNTAlIDAlKVxuICB9XG5cbiAgdG8ge1xuICAgIGNsaXAtcGF0aDogY2lyY2xlKDEyMCUgYXQgNTAlIDAlKVxuICB9XG59XG5cbjpyb290IHtcbiAgLS10cmFuc2l0aW9uLXNwZWVkOiAuNXM7XG59XG5cbi50aGVtZS1zd2l0Y2hlci1wcmV2aWV3IHtcbiAgcGFkZGluZzogMTBweDtcbn0iXX0= */";
var stylesheet="::view-transition-old(root) {\n  animation-delay: var(--transition-speed);\n}\n\n::view-transition-new(root) {\n  animation: circle-in var(--transition-speed);\n}\n\n@keyframes circle-in {\n  from {\n    clip-path: circle(0% at 50% 0%)\n  }\n\n  to {\n    clip-path: circle(120% at 50% 0%)\n  }\n}\n\n:root {\n  --transition-speed: .5s;\n}\n\n.theme-switcher-preview {\n  padding: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlRoZW1lU3dpdGNoZXIuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usd0NBQXdDO0FBQzFDOztBQUVBO0VBQ0UsNENBQTRDO0FBQzlDOztBQUVBO0VBQ0U7SUFDRTtFQUNGOztFQUVBO0lBQ0U7RUFDRjtBQUNGOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsYUFBYTtBQUNmIiwiZmlsZSI6IlRoZW1lU3dpdGNoZXIuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjp2aWV3LXRyYW5zaXRpb24tb2xkKHJvb3QpIHtcbiAgYW5pbWF0aW9uLWRlbGF5OiB2YXIoLS10cmFuc2l0aW9uLXNwZWVkKTtcbn1cblxuOjp2aWV3LXRyYW5zaXRpb24tbmV3KHJvb3QpIHtcbiAgYW5pbWF0aW9uOiBjaXJjbGUtaW4gdmFyKC0tdHJhbnNpdGlvbi1zcGVlZCk7XG59XG5cbkBrZXlmcmFtZXMgY2lyY2xlLWluIHtcbiAgZnJvbSB7XG4gICAgY2xpcC1wYXRoOiBjaXJjbGUoMCUgYXQgNTAlIDAlKVxuICB9XG5cbiAgdG8ge1xuICAgIGNsaXAtcGF0aDogY2lyY2xlKDEyMCUgYXQgNTAlIDAlKVxuICB9XG59XG5cbjpyb290IHtcbiAgLS10cmFuc2l0aW9uLXNwZWVkOiAuNXM7XG59XG5cbi50aGVtZS1zd2l0Y2hlci1wcmV2aWV3IHtcbiAgcGFkZGluZzogMTBweDtcbn0iXX0= */";
styleInject(css_248z);

var ThemeSwitcher = /*#__PURE__*/Object.freeze({
	__proto__: null,
	default: css_248z,
	stylesheet: stylesheet
});

var require$$0 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(ThemeSwitcher);

function preview({
  readMode
}) {
  return /*#__PURE__*/jsxRuntime.jsxs("div", {
    className: "theme-switcher-preview",
    children: ["Theme Switcher: ", readMode === true ? "Read" : "Edit", " mode"]
  });
}
function getPreviewCss() {
  return require$$0;
}

exports.getPreviewCss = getPreviewCss;
exports.preview = preview;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGhlbWVTd2l0Y2hlci5lZGl0b3JQcmV2aWV3LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtaW5qZWN0L2Rpc3Qvc3R5bGUtaW5qZWN0LmVzLmpzIiwiLi4vLi4vLi4vc3JjL1RoZW1lU3dpdGNoZXIuZWRpdG9yUHJldmlldy5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gc3R5bGVJbmplY3QoY3NzLCByZWYpIHtcbiAgaWYgKCByZWYgPT09IHZvaWQgMCApIHJlZiA9IHt9O1xuICB2YXIgaW5zZXJ0QXQgPSByZWYuaW5zZXJ0QXQ7XG5cbiAgaWYgKCFjc3MgfHwgdHlwZW9mIGRvY3VtZW50ID09PSAndW5kZWZpbmVkJykgeyByZXR1cm47IH1cblxuICB2YXIgaGVhZCA9IGRvY3VtZW50LmhlYWQgfHwgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXTtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgc3R5bGUudHlwZSA9ICd0ZXh0L2Nzcyc7XG5cbiAgaWYgKGluc2VydEF0ID09PSAndG9wJykge1xuICAgIGlmIChoZWFkLmZpcnN0Q2hpbGQpIHtcbiAgICAgIGhlYWQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBoZWFkLmZpcnN0Q2hpbGQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBoZWFkLmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgaGVhZC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBzdHlsZUluamVjdDtcbiIsImV4cG9ydCBmdW5jdGlvbiBwcmV2aWV3KHsgcmVhZE1vZGUgfSkge1xuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cInRoZW1lLXN3aXRjaGVyLXByZXZpZXdcIj5UaGVtZSBTd2l0Y2hlcjoge3JlYWRNb2RlID09PSB0cnVlID8gXCJSZWFkXCIgOiBcIkVkaXRcIn0gbW9kZTwvZGl2Pjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFByZXZpZXdDc3MoKSB7XG4gICAgcmV0dXJuIHJlcXVpcmUoXCIuL3VpL1RoZW1lU3dpdGNoZXIuY3NzXCIpO1xufVxuIl0sIm5hbWVzIjpbInN0eWxlSW5qZWN0IiwiY3NzIiwicmVmIiwiaW5zZXJ0QXQiLCJkb2N1bWVudCIsImhlYWQiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsInN0eWxlIiwiY3JlYXRlRWxlbWVudCIsInR5cGUiLCJmaXJzdENoaWxkIiwiaW5zZXJ0QmVmb3JlIiwiYXBwZW5kQ2hpbGQiLCJzdHlsZVNoZWV0IiwiY3NzVGV4dCIsImNyZWF0ZVRleHROb2RlIiwicHJldmlldyIsInJlYWRNb2RlIiwiX2pzeHMiLCJjbGFzc05hbWUiLCJjaGlsZHJlbiIsImdldFByZXZpZXdDc3MiLCJyZXF1aXJlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLFNBQVNBLFdBQVdBLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0VBQzdCLElBQUtBLEdBQUcsS0FBSyxNQUFNLEVBQUdBLEdBQUcsR0FBRyxFQUFFO0FBQzlCLEVBQUEsSUFBSUMsUUFBUSxHQUFHRCxHQUFHLENBQUNDLFFBQVE7QUFFM0IsRUFBQSxJQUFZLE9BQU9DLFFBQVEsS0FBSyxXQUFXLEVBQUU7QUFBRSxJQUFBO0FBQVEsRUFBQTtBQUV2RCxFQUFBLElBQUlDLElBQUksR0FBR0QsUUFBUSxDQUFDQyxJQUFJLElBQUlELFFBQVEsQ0FBQ0Usb0JBQW9CLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3BFLEVBQUEsSUFBSUMsS0FBSyxHQUFHSCxRQUFRLENBQUNJLGFBQWEsQ0FBQyxPQUFPLENBQUM7RUFDM0NELEtBQUssQ0FBQ0UsSUFBSSxHQUFHLFVBQVU7RUFFdkIsSUFBSU4sUUFBUSxLQUFLLEtBQUssRUFBRTtJQUN0QixJQUFJRSxJQUFJLENBQUNLLFVBQVUsRUFBRTtNQUNuQkwsSUFBSSxDQUFDTSxZQUFZLENBQUNKLEtBQUssRUFBRUYsSUFBSSxDQUFDSyxVQUFVLENBQUM7QUFDM0MsSUFBQSxDQUFDLE1BQU07QUFDTEwsTUFBQUEsSUFBSSxDQUFDTyxXQUFXLENBQUNMLEtBQUssQ0FBQztBQUN6QixJQUFBO0FBQ0YsRUFBQSxDQUFDLE1BQU07QUFDTEYsSUFBQUEsSUFBSSxDQUFDTyxXQUFXLENBQUNMLEtBQUssQ0FBQztBQUN6QixFQUFBO0VBRUEsSUFBSUEsS0FBSyxDQUFDTSxVQUFVLEVBQUU7QUFDcEJOLElBQUFBLEtBQUssQ0FBQ00sVUFBVSxDQUFDQyxPQUFPLEdBQUdiLEdBQUc7QUFDaEMsRUFBQSxDQUFDLE1BQU07SUFDTE0sS0FBSyxDQUFDSyxXQUFXLENBQUNSLFFBQVEsQ0FBQ1csY0FBYyxDQUFDZCxHQUFHLENBQUMsQ0FBQztBQUNqRCxFQUFBO0FBQ0Y7Ozs7Ozs7Ozs7Ozs7O0FDekJPLFNBQVNlLE9BQU9BLENBQUM7QUFBRUMsRUFBQUE7QUFBUyxDQUFDLEVBQUU7QUFDbEMsRUFBQSxvQkFBT0MsZUFBQSxDQUFBLEtBQUEsRUFBQTtBQUFLQyxJQUFBQSxTQUFTLEVBQUMsd0JBQXdCO0lBQUFDLFFBQUEsRUFBQSxDQUFDLGtCQUFnQixFQUFDSCxRQUFRLEtBQUssSUFBSSxHQUFHLE1BQU0sR0FBRyxNQUFNLEVBQUMsT0FBSztBQUFBLEdBQUssQ0FBQztBQUNuSDtBQUVPLFNBQVNJLGFBQWFBLEdBQUc7RUFDNUIsT0FBT0MsVUFBaUM7QUFDNUM7OzsiLCJ4X2dvb2dsZV9pZ25vcmVMaXN0IjpbMF19
