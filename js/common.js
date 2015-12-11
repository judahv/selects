
jQuery(function(){
	
	//lazyLaod
	$(document).ready(function(){
		$("img.lazy").show().lazyload({
			effect : "fadeIn",
			threshold : 400
		});
	});
	
	//スクロール
	var options = $.extend({
			
　　scrollSpeed: 8000,  //スクロールする速さ（ミリ秒）
　　easing: 'swing',  //イージング（アニメーションの挙動）※要イージングプラグイン
　　adjustment: 0,  //移動完了時のウィンドウ位置の調整値 //なぜかここで上書きできないので、本体の値をいじってます
　　delayTime: 300  //待機時間（ミリ秒）※遷移する時のみ
			
	},options);

	//write upside from here
	
});
