'use strict';

var react = require('react');

function getDefaultExportFromNamespaceIfNotNamed (n) {
	return n && Object.prototype.hasOwnProperty.call(n, 'default') && Object.keys(n).length === 1 ? n['default'] : n;
}

function styleInject(css, ref) {
  if (ref === void 0) ref = {};
  var insertAt = ref.insertAt;
  if (!css || typeof document === 'undefined') {
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

var css_248z = "::view-transition-old(root) {\n  animation-delay: var(--transition-speed);\n}\n\n::view-transition-new(root) {\n  animation: circle-in var(--transition-speed);\n}\n\n@keyframes circle-in {\n  from {\n    clip-path: circle(0% at 50% 0%)\n  }\n\n  to {\n    clip-path: circle(120% at 50% 0%)\n  }\n}\n\n:root {\n  --transition-speed: .5s;\n}\n\n@media (prefers-color-scheme: light) {\n  :root {\n    --theme: light;\n    color-scheme: light;\n  }\n}\n\n@media (prefers-color-scheme: dark) {\n  :root {\n    --theme: dark;\n    color-scheme: dark;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlRoZW1lU3dpdGNoZXIuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usd0NBQXdDO0FBQzFDOztBQUVBO0VBQ0UsNENBQTRDO0FBQzlDOztBQUVBO0VBQ0U7SUFDRTtFQUNGOztFQUVBO0lBQ0U7RUFDRjtBQUNGOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0U7SUFDRSxjQUFjO0lBQ2QsbUJBQW1CO0VBQ3JCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLGFBQWE7SUFDYixrQkFBa0I7RUFDcEI7QUFDRiIsImZpbGUiOiJUaGVtZVN3aXRjaGVyLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjo6dmlldy10cmFuc2l0aW9uLW9sZChyb290KSB7XG4gIGFuaW1hdGlvbi1kZWxheTogdmFyKC0tdHJhbnNpdGlvbi1zcGVlZCk7XG59XG5cbjo6dmlldy10cmFuc2l0aW9uLW5ldyhyb290KSB7XG4gIGFuaW1hdGlvbjogY2lyY2xlLWluIHZhcigtLXRyYW5zaXRpb24tc3BlZWQpO1xufVxuXG5Aa2V5ZnJhbWVzIGNpcmNsZS1pbiB7XG4gIGZyb20ge1xuICAgIGNsaXAtcGF0aDogY2lyY2xlKDAlIGF0IDUwJSAwJSlcbiAgfVxuXG4gIHRvIHtcbiAgICBjbGlwLXBhdGg6IGNpcmNsZSgxMjAlIGF0IDUwJSAwJSlcbiAgfVxufVxuXG46cm9vdCB7XG4gIC0tdHJhbnNpdGlvbi1zcGVlZDogLjVzO1xufVxuXG5AbWVkaWEgKHByZWZlcnMtY29sb3Itc2NoZW1lOiBsaWdodCkge1xuICA6cm9vdCB7XG4gICAgLS10aGVtZTogbGlnaHQ7XG4gICAgY29sb3Itc2NoZW1lOiBsaWdodDtcbiAgfVxufVxuXG5AbWVkaWEgKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKSB7XG4gIDpyb290IHtcbiAgICAtLXRoZW1lOiBkYXJrO1xuICAgIGNvbG9yLXNjaGVtZTogZGFyaztcbiAgfVxufSJdfQ== */";
var stylesheet="::view-transition-old(root) {\n  animation-delay: var(--transition-speed);\n}\n\n::view-transition-new(root) {\n  animation: circle-in var(--transition-speed);\n}\n\n@keyframes circle-in {\n  from {\n    clip-path: circle(0% at 50% 0%)\n  }\n\n  to {\n    clip-path: circle(120% at 50% 0%)\n  }\n}\n\n:root {\n  --transition-speed: .5s;\n}\n\n@media (prefers-color-scheme: light) {\n  :root {\n    --theme: light;\n    color-scheme: light;\n  }\n}\n\n@media (prefers-color-scheme: dark) {\n  :root {\n    --theme: dark;\n    color-scheme: dark;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlRoZW1lU3dpdGNoZXIuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usd0NBQXdDO0FBQzFDOztBQUVBO0VBQ0UsNENBQTRDO0FBQzlDOztBQUVBO0VBQ0U7SUFDRTtFQUNGOztFQUVBO0lBQ0U7RUFDRjtBQUNGOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0U7SUFDRSxjQUFjO0lBQ2QsbUJBQW1CO0VBQ3JCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLGFBQWE7SUFDYixrQkFBa0I7RUFDcEI7QUFDRiIsImZpbGUiOiJUaGVtZVN3aXRjaGVyLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjo6dmlldy10cmFuc2l0aW9uLW9sZChyb290KSB7XG4gIGFuaW1hdGlvbi1kZWxheTogdmFyKC0tdHJhbnNpdGlvbi1zcGVlZCk7XG59XG5cbjo6dmlldy10cmFuc2l0aW9uLW5ldyhyb290KSB7XG4gIGFuaW1hdGlvbjogY2lyY2xlLWluIHZhcigtLXRyYW5zaXRpb24tc3BlZWQpO1xufVxuXG5Aa2V5ZnJhbWVzIGNpcmNsZS1pbiB7XG4gIGZyb20ge1xuICAgIGNsaXAtcGF0aDogY2lyY2xlKDAlIGF0IDUwJSAwJSlcbiAgfVxuXG4gIHRvIHtcbiAgICBjbGlwLXBhdGg6IGNpcmNsZSgxMjAlIGF0IDUwJSAwJSlcbiAgfVxufVxuXG46cm9vdCB7XG4gIC0tdHJhbnNpdGlvbi1zcGVlZDogLjVzO1xufVxuXG5AbWVkaWEgKHByZWZlcnMtY29sb3Itc2NoZW1lOiBsaWdodCkge1xuICA6cm9vdCB7XG4gICAgLS10aGVtZTogbGlnaHQ7XG4gICAgY29sb3Itc2NoZW1lOiBsaWdodDtcbiAgfVxufVxuXG5AbWVkaWEgKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKSB7XG4gIDpyb290IHtcbiAgICAtLXRoZW1lOiBkYXJrO1xuICAgIGNvbG9yLXNjaGVtZTogZGFyaztcbiAgfVxufSJdfQ== */";
styleInject(css_248z);

var ThemeSwitcher = /*#__PURE__*/Object.freeze({
	__proto__: null,
	default: css_248z,
	stylesheet: stylesheet
});

var require$$0 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(ThemeSwitcher);

function preview() {
  return react.createElement("div", null);
}
function getPreviewCss() {
  return require$$0;
}

exports.getPreviewCss = getPreviewCss;
exports.preview = preview;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGhlbWVTd2l0Y2hlci5lZGl0b3JQcmV2aWV3LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtaW5qZWN0L2Rpc3Qvc3R5bGUtaW5qZWN0LmVzLmpzIiwiLi4vLi4vLi4vc3JjL1RoZW1lU3dpdGNoZXIuZWRpdG9yUHJldmlldy5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gc3R5bGVJbmplY3QoY3NzLCByZWYpIHtcbiAgaWYgKCByZWYgPT09IHZvaWQgMCApIHJlZiA9IHt9O1xuICB2YXIgaW5zZXJ0QXQgPSByZWYuaW5zZXJ0QXQ7XG5cbiAgaWYgKCFjc3MgfHwgdHlwZW9mIGRvY3VtZW50ID09PSAndW5kZWZpbmVkJykgeyByZXR1cm47IH1cblxuICB2YXIgaGVhZCA9IGRvY3VtZW50LmhlYWQgfHwgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXTtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgc3R5bGUudHlwZSA9ICd0ZXh0L2Nzcyc7XG5cbiAgaWYgKGluc2VydEF0ID09PSAndG9wJykge1xuICAgIGlmIChoZWFkLmZpcnN0Q2hpbGQpIHtcbiAgICAgIGhlYWQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBoZWFkLmZpcnN0Q2hpbGQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBoZWFkLmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgaGVhZC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBzdHlsZUluamVjdDtcbiIsImltcG9ydCB7IGNyZWF0ZUVsZW1lbnQgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHByZXZpZXcoKSB7XG4gICAgcmV0dXJuIDxkaXY+PC9kaXY+O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UHJldmlld0NzcygpIHtcbiAgICByZXR1cm4gcmVxdWlyZShcIi4vdWkvVGhlbWVTd2l0Y2hlci5jc3NcIik7XG59XG4iXSwibmFtZXMiOlsic3R5bGVJbmplY3QiLCJjc3MiLCJyZWYiLCJpbnNlcnRBdCIsImRvY3VtZW50IiwiaGVhZCIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwic3R5bGUiLCJjcmVhdGVFbGVtZW50IiwidHlwZSIsImZpcnN0Q2hpbGQiLCJpbnNlcnRCZWZvcmUiLCJhcHBlbmRDaGlsZCIsInN0eWxlU2hlZXQiLCJjc3NUZXh0IiwiY3JlYXRlVGV4dE5vZGUiLCJwcmV2aWV3IiwiZ2V0UHJldmlld0NzcyIsInJlcXVpcmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsU0FBU0EsV0FBV0EsQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUU7RUFDN0IsSUFBS0EsR0FBRyxLQUFLLEtBQUssQ0FBQyxFQUFHQSxHQUFHLEdBQUcsRUFBRSxDQUFBO0FBQzlCLEVBQUEsSUFBSUMsUUFBUSxHQUFHRCxHQUFHLENBQUNDLFFBQVEsQ0FBQTtBQUUzQixFQUFBLElBQUksQ0FBQ0YsR0FBRyxJQUFJLE9BQU9HLFFBQVEsS0FBSyxXQUFXLEVBQUU7QUFBRSxJQUFBLE9BQUE7QUFBUSxHQUFBO0FBRXZELEVBQUEsSUFBSUMsSUFBSSxHQUFHRCxRQUFRLENBQUNDLElBQUksSUFBSUQsUUFBUSxDQUFDRSxvQkFBb0IsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtBQUNwRSxFQUFBLElBQUlDLEtBQUssR0FBR0gsUUFBUSxDQUFDSSxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUE7RUFDM0NELEtBQUssQ0FBQ0UsSUFBSSxHQUFHLFVBQVUsQ0FBQTtFQUV2QixJQUFJTixRQUFRLEtBQUssS0FBSyxFQUFFO0lBQ3RCLElBQUlFLElBQUksQ0FBQ0ssVUFBVSxFQUFFO01BQ25CTCxJQUFJLENBQUNNLFlBQVksQ0FBQ0osS0FBSyxFQUFFRixJQUFJLENBQUNLLFVBQVUsQ0FBQyxDQUFBO0FBQzNDLEtBQUMsTUFBTTtBQUNMTCxNQUFBQSxJQUFJLENBQUNPLFdBQVcsQ0FBQ0wsS0FBSyxDQUFDLENBQUE7QUFDekIsS0FBQTtBQUNGLEdBQUMsTUFBTTtBQUNMRixJQUFBQSxJQUFJLENBQUNPLFdBQVcsQ0FBQ0wsS0FBSyxDQUFDLENBQUE7QUFDekIsR0FBQTtFQUVBLElBQUlBLEtBQUssQ0FBQ00sVUFBVSxFQUFFO0FBQ3BCTixJQUFBQSxLQUFLLENBQUNNLFVBQVUsQ0FBQ0MsT0FBTyxHQUFHYixHQUFHLENBQUE7QUFDaEMsR0FBQyxNQUFNO0lBQ0xNLEtBQUssQ0FBQ0ssV0FBVyxDQUFDUixRQUFRLENBQUNXLGNBQWMsQ0FBQ2QsR0FBRyxDQUFDLENBQUMsQ0FBQTtBQUNqRCxHQUFBO0FBQ0Y7Ozs7Ozs7Ozs7Ozs7O0FDdkJPLFNBQVNlLE9BQU9BLEdBQUc7RUFDdEIsT0FBT1IsbUJBQUEsWUFBVSxDQUFDLENBQUE7QUFDdEIsQ0FBQTtBQUVPLFNBQVNTLGFBQWFBLEdBQUc7RUFDNUIsT0FBT0MsVUFBaUMsQ0FBQTtBQUM1Qzs7Ozs7IiwieF9nb29nbGVfaWdub3JlTGlzdCI6WzBdfQ==
