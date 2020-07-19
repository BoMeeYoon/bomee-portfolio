import { getElementHeight } from "../hooks/scrollHooks.js";
import { $ } from "../hooks/elemetsHooks.js";
export default {
  headerHeight : getElementHeight($("#header")),
  headerActive : $(".header__nav-item.active")
};
