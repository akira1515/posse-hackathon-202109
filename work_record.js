'use strict';
// 下へジャンプ（スクロール）
function ScrollWindow(elem) {
    var element = document.getElementById(elem);
    var rect = element.getBoundingClientRect();
    var elemtop = rect.top + window.pageYOffset;
    window.scroll(0,elemtop)
}



const pic =[
    ['cbd4bcded86771a7f8fd194f9f5fdcaa8_31966970_210905.jpg','cbd4bcded86771a7f8fd194f9f5fdcaa8_31938992_210905_2.jpg','cbd4bcded86771a7f8fd194f9f5fdcaa8_31938992_210905.jpg','cbd4bcded86771a7f8fd194f9f5fdcaa8_31938992_210905_0.jpg','cbd4bcded86771a7f8fd194f9f5fdcaa8_31938992_210905_3.jpg'],
    ['cbd4bcded86771a7f8fd194f9f5fdcaa8_33688078_210905.jpg','cbd4bcded86771a7f8fd194f9f5fdcaa8_32794721_210905_2.jpg','cbd4bcded86771a7f8fd194f9f5fdcaa8_33797834_210905.jpg','cbd4bcded86771a7f8fd194f9f5fdcaa8_32794721_210905_2.jpg','cbd4bcded86771a7f8fd194f9f5fdcaa8_33797834_210905.jpg'],
    ['cbd4bcded86771a7f8fd194f9f5fdcaa8_32794721_210905_2.jpg','cbd4bcded86771a7f8fd194f9f5fdcaa8_32794721_210905_1.jpg','cbd4bcded86771a7f8fd194f9f5fdcaa8_32794721_210905.jpg','cbd4bcded86771a7f8fd194f9f5fdcaa8_32794721_210905_1.jpg','cbd4bcded86771a7f8fd194f9f5fdcaa8_32794721_210905_2.jpg'],
    ['cbd4bcded86771a7f8fd194f9f5fdcaa8_33797834_210905_1.jpg','cbd4bcded86771a7f8fd194f9f5fdcaa8_33797834_210905.jpg','cbd4bcded86771a7f8fd194f9f5fdcaa8_33797834_210905_1.jpg','cbd4bcded86771a7f8fd194f9f5fdcaa8_33797834_210905.jpg','cbd4bcded86771a7f8fd194f9f5fdcaa8_33797834_210905_1.jpg'],
    ['cbd4bcded86771a7f8fd194f9f5fdcaa8_33797834_210905.jpg','cbd4bcded86771a7f8fd194f9f5fdcaa8_33797834_210905_0.jpg','cbd4bcded86771a7f8fd194f9f5fdcaa8_33797834_210905.jpg','cbd4bcded86771a7f8fd194f9f5fdcaa8_33797834_210905_0.jpg','cbd4bcded86771a7f8fd194f9f5fdcaa8_33797834_210905.jpg'],
    ['cbd4bcded86771a7f8fd194f9f5fdcaa8_34538252_210905.jpg','cbd4bcded86771a7f8fd194f9f5fdcaa8_34561813_210905.jpg','cbd4bcded86771a7f8fd194f9f5fdcaa8_34538252_210905.jpg','cbd4bcded86771a7f8fd194f9f5fdcaa8_34561813_210905.jpg','cbd4bcded86771a7f8fd194f9f5fdcaa8_34538252_210905.jpg'],
];
const eve =['第２回ハッカソン','軽井沢旅行','オープン講演会','チーム開発','入学式','新人ハッカソン'];

const eve_txt =[
    'オンライン教材での学習 N予備校やドットインストールを教材とし、週に1つ課題をこなすという流れでプログラミングを学習しています。',
    'オンライン教材での学習 N予備校やドットインストールを教材とし、週に1つ課題をこなすという流れでプログラミングを学習しています。',
    'オンライン教材での学習 N予備校やドットインストールを教材とし、週に1つ課題をこなすという流れでプログラミングを学習しています。',
    'オンライン教材での学習 N予備校やドットインストールを教材とし、週に1つ課題をこなすという流れでプログラミングを学習しています。',
    'オンライン教材での学習 N予備校やドットインストールを教材とし、週に1つ課題をこなすという流れでプログラミングを学習しています。',
    'オンライン教材での学習 N予備校やドットインストールを教材とし、週に1つ課題をこなすという流れでプログラミングを学習しています。',
];

const day =['2021年2月','2021年3月' ,'2021年4月','2021年6月','2021年6月','2021年7月'];

let main = '';
for (let i = 0; i <eve.length;  i++) {
    main +=
         '<div id="item_container" class="item_container">'
    +    '    <img id="picture'+[i]+'" class="picture" src="'+pic[i][0] +'" alt="画像1">'//トップに表示される画像
    +    '    <div id="picture_slides'+[i]+'" class="cp_css_slider">'//ボタンを押して出てくる画像スライド
    +    '        <div class="cp_slide_wrapper">'
    +    '            <div class="cp_slide_item"><img src="'+pic[i][0] +'"></div>'//スライドショーの中の画像
    +    '            <div class="cp_slide_item"><img src="'+pic[i][1] +'"></div>'//スライドショーの中の画像
    +    '            <div class="cp_slide_item"><img src="'+pic[i][2] +'"></div>'//スライドショーの中の画像
    +    '            <div class="cp_slide_item"><img src="'+pic[i][3] +'"></div>'//スライドショーの中の画像      
    +    '        </div>'
    +    '    </div>'
    +    '    <div class="text_container">'
    +    '        <div class="title">'
    +    '            <h1>《'+eve[i]+'》</h1>'
    +    '            <div id="title_text'+[i]+'" class="title_text">'+eve_txt[i]+'</div>'
    +    '        </div>'
    +    '        <div id="more_button'+[i]+'" class="more"">詳細はこちら↓</div>'//ボタンのスタイル１
    +    '    </div>'
    +    '    <div id="explanation_none'+[i]+'" class="explanation_none">'//ボタンを押して出てくるイベントの説明
    +    '        <div id="explanation_when" class="explanation_when">•'+day[i]+'</div>'//日付
    +    '        <div id="explanation_what" class="explanation_what">オンライン教材での学習 N予備校やドットインストールを教材とし、週に1つ課題をこなすという流れでプログラミングを学習しています。昨今ではプログラミング学習コンテンツが充実してきており、その中からPOSSEの学習スタイルに最適な教材を外部コンテンツとして利用しています。</div>'//イベントの詳細説明
    +    '    </div>'
    +    '    <div class="minus_button_container">'
    +    '        <div id="minus_button'+[i]+'" class="minus" >閉じる</div>'//ボタンのスタイル２
    +    '    </div>'
    +    '</div>'
    //mainをhtml上に表示
    loop.innerHTML = main;

};




let more_button0=document.getElementById('more_button0');
let explanation_none0=document.getElementById('explanation_none0');
let minus_button0=document.getElementById('minus_button0');
let picture0=document.getElementById('picture0');
let picture_slides0=document.getElementById('picture_slides0');
let title_text0 = document.getElementById("title_text0");

more_button0.onclick=function(){
    explanation_none0.classList.add('show');
    more_button0.classList.add('erase');
    more_button0.classList.remove('show');
    minus_button0.classList.add('show');
    picture0.classList.toggle('erase');
    picture_slides0.classList.toggle('show');
    title_text0.classList.add('erase');

}
minus_button0.onclick=function(){
    explanation_none0.classList.add('erase');
    explanation_none0.classList.remove('show');
    more_button0.classList.add('show');
    minus_button0.classList.add('erase');
    minus_button0.classList.remove('show');
    picture0.classList.toggle('erase');
    picture_slides0.classList.toggle('show');
    title_text0.classList.add('show');
}
 window.addEventListener("load",function(){picture_slides0.classList.toggle('erase')});


 let more_button1=document.getElementById('more_button1');
 let explanation_none1=document.getElementById('explanation_none1');
 let minus_button1=document.getElementById('minus_button1');
 let picture1=document.getElementById('picture1');
 let picture_slides1=document.getElementById('picture_slides1');
 let title_text1 = document.getElementById("title_text1");

 more_button1.onclick=function(){
    explanation_none1.classList.add('show');
    more_button1.classList.add('erase');
    more_button1.classList.remove('show');
    minus_button1.classList.add('show');
    picture1.classList.toggle('erase');
    picture_slides1.classList.toggle('show');
    title_text1.classList.add('erase');
}
minus_button1.onclick=function(){
    explanation_none1.classList.add('erase');
    explanation_none1.classList.remove('show');
    more_button1.classList.add('show');
    minus_button1.classList.add('erase');
    minus_button1.classList.remove('show');
    picture1.classList.toggle('erase');
    picture_slides1.classList.toggle('show');
    title_text1.classList.add('show');
}
 window.addEventListener("load",function(){picture_slides1.classList.toggle('erase')});




 let more_button2=document.getElementById('more_button2');
let explanation_none2=document.getElementById('explanation_none2');
let minus_button2=document.getElementById('minus_button2');
let picture2=document.getElementById('picture2');
let picture_slides2=document.getElementById('picture_slides2');
let title_text2 = document.getElementById("title_text2");

more_button2.onclick=function(){
    explanation_none2.classList.add('show');
    more_button2.classList.add('erase');
    more_button2.classList.remove('show');
    minus_button2.classList.add('show');
    picture2.classList.toggle('erase');
    picture_slides2.classList.toggle('show');
    title_text2.classList.add('erase');
}
minus_button2.onclick=function(){
    explanation_none2.classList.add('erase');
    explanation_none2.classList.remove('show');
    more_button2.classList.add('show');
    minus_button2.classList.add('erase');
    minus_button2.classList.remove('show');
    picture2.classList.toggle('erase');
    picture_slides2.classList.toggle('show');
    title_text2.classList.add('show');
}
 window.addEventListener("load",function(){picture_slides2.classList.toggle('erase')});


 let more_button3=document.getElementById('more_button3');
 let explanation_none3=document.getElementById('explanation_none3');
 let minus_button3=document.getElementById('minus_button3');
 let picture3=document.getElementById('picture3');
 let picture_slides3=document.getElementById('picture_slides3');
 let title_text3 = document.getElementById("title_text3");




 more_button3.onclick=function(){
    explanation_none3.classList.add('show');
    more_button3.classList.add('erase');
    more_button3.classList.remove('show');
    minus_button3.classList.add('show');
    picture3.classList.toggle('erase');
    picture_slides3.classList.toggle('show');
    title_text3.classList.add('erase');
}
minus_button3.onclick=function(){
    explanation_none3.classList.add('erase');
    explanation_none3.classList.remove('show');
    more_button3.classList.add('show');
    minus_button3.classList.add('erase');
    minus_button3.classList.remove('show');
    picture3.classList.toggle('erase');
    picture_slides3.classList.toggle('show');
    title_text3.classList.add('show');
}
 window.addEventListener("load",function(){picture_slides3.classList.toggle('erase')});




let more_button4=document.getElementById('more_button4');
let explanation_none4=document.getElementById('explanation_none4');
let minus_button4=document.getElementById('minus_button4');
let picture4=document.getElementById('picture4');
let picture_slides4=document.getElementById('picture_slides4');
let title_text4 = document.getElementById("title_text4");

more_button4.onclick=function(){
    explanation_none4.classList.add('show');
    more_button4.classList.add('erase');
    more_button4.classList.remove('show');
    minus_button4.classList.add('show');
    picture4.classList.toggle('erase');
    picture_slides4.classList.toggle('show');
    title_text4.classList.add('erase');
    
}
minus_button4.onclick=function(){
    explanation_none4.classList.add('erase');
    explanation_none4.classList.remove('show');
    more_button4.classList.add('show');
    minus_button4.classList.add('erase');
    minus_button4.classList.remove('show');
    picture4.classList.toggle('erase');
    picture_slides4.classList.toggle('show');
    title_text4.classList.add('show');
}

window.addEventListener("load",function(){picture_slides4.classList.toggle('erase')});


let more_button5=document.getElementById('more_button5');
let explanation_none5=document.getElementById('explanation_none5');
let minus_button5=document.getElementById('minus_button5');
let picture5=document.getElementById('picture5');
let picture_slides5=document.getElementById('picture_slides5');
let title_text5 = document.getElementById("title_text5");

more_button5.onclick=function(){
    explanation_none5.classList.add('show');
    more_button5.classList.add('erase');
    more_button5.classList.remove('show');
    minus_button5.classList.add('show');
    picture5.classList.toggle('erase');
    picture_slides5.classList.toggle('show');
    title_text5.classList.add('erase');
    
}
minus_button5.onclick=function(){
    explanation_none5.classList.add('erase');
    explanation_none5.classList.remove('show');
    more_button5.classList.add('show');
    minus_button5.classList.add('erase');
    minus_button5.classList.remove('show');
    picture5.classList.toggle('erase');
    picture_slides5.classList.toggle('show');
    title_text5.classList.add('show');
}

 window.addEventListener("load",function(){picture_slides5.classList.toggle('erase')});