$(function() {
  $('.btn-gNav').on("click", function(){

    $(this).toggleClass('open');
    $('#gNav').toggleClass('open');
  });

});

// メニューをクリックされたら、非表示にする


//コンセプトスクロールイベント
$(window).on("scroll", function() {
  const scroll_top = $(window).scrollTop();
  
  $(".concept-box").each(function() {
    const elem_pos = $(this).offset().top;
    
    //どのタイミングでフェードインさせるか
    if (scroll_top >= elem_pos - window_h+150) {
      $(this).addClass("fadein");
    } else {
      $(this).removeClass("fadein");
    }
  });
});




const window_h = $(window).height();

//Box left & rightスクロールイベント

$(window).on("scroll", function() {
  const scroll_top = $(window).scrollTop();
  
  $(".box-left").each(function() {
    const elem_pos = $(this).offset().top;
    
    //どのタイミングでフェードインさせるか
    if (scroll_top >= elem_pos - window_h+150) {
      $(this).addClass("fadein");
    } else {
      $(this).removeClass("fadein");
    }
  });
});

$(window).on("scroll", function() {
  const scroll_top = $(window).scrollTop();
  
  $(".box-right").each(function() {
    const elem_pos = $(this).offset().top;
    
    //どのタイミングでフェードインさせるか
    if (scroll_top >= elem_pos - window_h+150) {
      $(this).addClass("fadein");
    } else {
      $(this).removeClass("fadein");
    }
  });
});


// slide right&leftのスクロールイベント

$(window).on("scroll", function() {
  const scroll_top = $(window).scrollTop();
  
  $(".slide-left").each(function() {
    const elem_pos = $(this).offset().top;
    
    //どのタイミングでフェードインさせるか
    if (scroll_top >= elem_pos - window_h+150) {
      $(this).addClass("fadein");
    } else {
      $(this).removeClass("fadein");
    }
  });
});

$(window).on("scroll", function() {
  const scroll_top = $(window).scrollTop();
  
  $(".slide-right").each(function() {
    const elem_pos = $(this).offset().top;
    
    //どのタイミングでフェードインさせるか
    if (scroll_top >= elem_pos - window_h+150) {
      $(this).addClass("fadein");
    } else {
      $(this).removeClass("fadein");
    }
  });
});



// title left スクロールイベント

$(window).on("scroll", function() {
  const scroll_top = $(window).scrollTop();
  
  $(".title-left").each(function() {
    const elem_pos = $(this).offset().top;
    
    //どのタイミングでフェードインさせるか
    if (scroll_top >= elem_pos - window_h+150) {
      $(this).addClass("fadein");
    } else {
      $(this).removeClass("fadein");
    }
  });
});

// textbox-leftのスクロールイベント

$(window).on("scroll", function() {
  const scroll_top = $(window).scrollTop();
  
  $(".titlebox-left").each(function() {
    const elem_pos = $(this).offset().top;
    
    //どのタイミングでフェードインさせるか
    if (scroll_top >= elem_pos - window_h+150) {
      $(this).addClass("fadein");
    } else {
      $(this).removeClass("fadein");
    }
  });
});


// Swiper

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },

  autoplay: {
		delay: 4000,
		disableOnInteraction: true
	},
  speed: 2000, //２秒かけながら次の画像へ移動


});

// swich

jQuery(function($) {
  $('.swich').bgSwitcher({
      images: ['img/cb01.jpg','img/coffee.jpeg','img/artist01.jpeg'],
      interval: 4000,
      loop: true,
      shuffle: true,
      effect: "fade",
      duration: 2500,
      easing: "swing"
  });
});

