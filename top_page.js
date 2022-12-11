// 下へジャンプ（スクロール）
    function ScrollWindow(elem) {
        var element = document.getElementById(elem);
        var rect = element.getBoundingClientRect();
        var elemtop = rect.top + window.pageYOffset;
        window.scroll(0,elemtop)
    }


    // aタグ、
    // 文字列はだめ
    // 引数と実態が合ってない
    // idだよとわかるように
