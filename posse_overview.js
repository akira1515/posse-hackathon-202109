'use strict';

// 下へジャンプ（スクロール）
function ScrollWindow(elem) {
    var element = document.getElementById(elem);
    var rect = element.getBoundingClientRect();
    var elemtop = rect.top + window.pageYOffset;
    window.scroll(0,elemtop)
}