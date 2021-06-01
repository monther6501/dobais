/* JS Document */

/******************************

[Table of Contents]

1. Vars and Inits
2. Set Header
3. Init Custom Dropdown
4. Init Page Menu
5. Init Deals Slider
6. Init Tab Lines
7. Init Tabs
8. Init Featured Slider
9. Init Favorites
10. Init ZIndex
11. Init Popular Categories Slider
12. Init Banner 2 Slider
13. Init Arrivals Slider
14. Init Arrivals Slider ZIndex
15. Init Best Sellers Slider
16. Init Trends Slider
17. Init Reviews Slider
18. Init Recently Viewed Slider
19. Init Brands Slider
20. Init Timer


******************************/

$(document).ready(function () {
    "use strict";

    var menuActive = false;
    var header = $('.header');

    initCustomDropdown();
    initTabLines();
    initFeaturedSlider();
    featuredSliderZIndex();
    initPopularSlider();
    initBanner2Slider();
    initViewedSlider();
    initBrandsSlider();
    initStoresSlider();
    initProductsSlider();
    initFeaturesSlider();
    initStoreBannerSlider();

    $(window).on('resize', function () {
        featuredSliderZIndex();
        initTabLines();
    });

    /* 

    3. Init Custom Dropdown

    */

    function initCustomDropdown() {
        if ($('.custom_dropdown_placeholder').length && $('.custom_list').length) {
            var placeholder = $('.custom_dropdown_placeholder');
            var list = $('.custom_list');
        }

        placeholder.on('click', function (ev) {
            if (list.hasClass('active')) {
                list.removeClass('active');
            } else {
                list.addClass('active');
            }

            $(document).one('click', function closeForm(e) {
                if ($(e.target).hasClass('clc')) {
                    $(document).one('click', closeForm);
                } else {
                    list.removeClass('active');
                }
            });

        });

        $('.custom_list a').on('click', function (ev) {
            ev.preventDefault();
            var index = $(this).parent().index();

            placeholder.text($(this).text()).css('opacity', '1');

            if (list.hasClass('active')) {
                list.removeClass('active');
            } else {
                list.addClass('active');
            }
        });

    }


    /* 

    6. Init Tab Lines

    */

    function initTabLines() {
        if ($('.tabs').length) {
            var tabs = $('.tabs');

            tabs.each(function () {
                var tabsItem = $(this);
                var tabsLine = tabsItem.find('.tabs_line span');
                var tabGroup = tabsItem.find('ul li');

                var posX = $(tabGroup[0]).position().left;
                tabsLine.css({
                    'left': posX,
                    'width': $(tabGroup[0]).width()
                });
                tabGroup.each(function () {
                    var tab = $(this);
                    tab.on('click', function () {
                        if (!tab.hasClass('active')) {
                            tabGroup.removeClass('active');
                            tab.toggleClass('active');
                            var tabXPos = tab.position().left;
                            var tabWidth = tab.width();
                            tabsLine.css({
                                'left': tabXPos,
                                'width': tabWidth
                            });
                        }
                    });
                });
            });
        }
    }

    /* 

    8. Init Featured Slider

    */

    function initFeaturedSlider() {
        if ($('.featured_slider').length) {
            var featuredSliders = $('.featured_slider');
            featuredSliders.each(function () {
                var featuredSlider = $(this);
                initFSlider(featuredSlider);
            });

        }
    }

    function initFSlider(fs) {
        var featuredSlider = fs;
        featuredSlider.on('init', function () {
                var activeItems = featuredSlider.find('.slick-slide.slick-active');
                for (var x = 0; x < activeItems.length - 1; x++) {
                    var item = $(activeItems[x]);
                    item.find('.border_active').removeClass('active');
                    if (item.hasClass('slick-active')) {
                        item.find('.border_active').addClass('active');
                    }
                }
            }).on({
                afterChange: function (event, slick, current_slide_index, next_slide_index) {
                    var activeItems = featuredSlider.find('.slick-slide.slick-active');
                    activeItems.find('.border_active').removeClass('active');
                    for (var x = 0; x < activeItems.length - 1; x++) {
                        var item = $(activeItems[x]);
                        item.find('.border_active').removeClass('active');
                        if (item.hasClass('slick-active')) {
                            item.find('.border_active').addClass('active');
                        }
                    }
                }
            })
            .slick({
                rows: 2,
                slidesToShow: 4,
                slidesToScroll: 4,
                infinite: false,
                arrows: false,
                dots: true,
                responsive: [
                    {
                        breakpoint: 768,
                        settings: {
                            rows: 2,
                            slidesToShow: 3,
                            slidesToScroll: 3,
                            dots: true
                        }
				},
                    {
                        breakpoint: 575,
                        settings: {
                            rows: 2,
                            slidesToShow: 2,
                            slidesToScroll: 2,
                            dots: false
                        }
				},
                    {
                        breakpoint: 480,
                        settings: {
                            rows: 1,
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            dots: false
                        }
				}
			]
            });
    }

    /* 

    10. Init ZIndex

    */

    function featuredSliderZIndex() {
        // Hide slider dots on item hover
        var items = document.getElementsByClassName('featured_slider_item');

        for (var x = 0; x < items.length; x++) {
            var item = items[x];
            item.addEventListener('mouseenter', function () {
                $('.featured_slider .slick-dots').css('display', "none");
            });

            item.addEventListener('mouseleave', function () {
                $('.featured_slider .slick-dots').css('display', "block");
            });
        }
    }

    /* 

    11. Init Popular Categories Slider

    */

    function initPopularSlider() {
        if ($('.popular_categories_slider').length) {
            var popularSlider = $('.popular_categories_slider');

            popularSlider.owlCarousel({
                loop: true,
                autoplay: false,
                nav: false,
                dots: false,
                responsive: {
                    0: {
                        items: 1
                    },
                    575: {
                        items: 2
                    },
                    640: {
                        items: 3
                    },
                    768: {
                        items: 4
                    },
                    991: {
                        items: 5
                    }
                }
            });

            if ($('.popular_categories_prev').length) {
                var prev = $('.popular_categories_prev');
                prev.on('click', function () {
                    popularSlider.trigger('prev.owl.carousel');
                });
            }

            if ($('.popular_categories_next').length) {
                var next = $('.popular_categories_next');
                next.on('click', function () {
                    popularSlider.trigger('next.owl.carousel');
                });
            }
        }
    }

    /* 

    12. Init Banner 2 Slider

    */

    function initBanner2Slider() {
        if ($('.banner_2_slider').length) {
            var banner2Slider = $('.banner_2_slider');
            banner2Slider.owlCarousel({
                items: 1,
                loop: true,
                nav: false,
                dots: true,
                dotsContainer: '.banner_2_dots',
                smartSpeed: 1200
            });
        }
    }


    function initASlider(as) {
        var arrivalsSlider = as;
        arrivalsSlider.on('init', function () {
                var activeItems = arrivalsSlider.find('.slick-slide.slick-active');
                for (var x = 0; x < activeItems.length - 1; x++) {
                    var item = $(activeItems[x]);
                    item.find('.border_active').removeClass('active');
                    if (item.hasClass('slick-active')) {
                        item.find('.border_active').addClass('active');
                    }
                }
            }).on({
                afterChange: function (event, slick, current_slide_index, next_slide_index) {
                    var activeItems = arrivalsSlider.find('.slick-slide.slick-active');
                    activeItems.find('.border_active').removeClass('active');
                    for (var x = 0; x < activeItems.length - 1; x++) {
                        var item = $(activeItems[x]);
                        item.find('.border_active').removeClass('active');
                        if (item.hasClass('slick-active')) {
                            item.find('.border_active').addClass('active');
                        }
                    }
                }
            })
            .slick({
                rows: 2,
                slidesToShow: 5,
                slidesToScroll: 5,
                infinite: false,
                arrows: false,
                dots: true,
                responsive: [
                    {
                        breakpoint: 768,
                        settings: {
                            rows: 2,
                            slidesToShow: 3,
                            slidesToScroll: 3,
                            dots: true
                        }
				},
                    {
                        breakpoint: 575,
                        settings: {
                            rows: 2,
                            slidesToShow: 2,
                            slidesToScroll: 2,
                            dots: false
                        }
				},
                    {
                        breakpoint: 480,
                        settings: {
                            rows: 1,
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            dots: false
                        }
				}
			]
            });
    }


    /* 

    18. Init Recently Viewed Slider

    */

    function initViewedSlider() {
        if ($('.categories_slider').length) {
            var viewedSlider = $('.categories_slider');

            viewedSlider.owlCarousel({
                loop: false,
                margin: 5,
                autoplay: true,
                autoplayTimeout: 3000,
                nav: false,
                dots: false,
                responsive: {
                    0: {
                        items: 2
                    },
                    350: {
                        items: 3
                    },
                    400: {
                        items: 4
                    },
                    575: {
                        items: 4
                    },
                    768: {
                        items: 6
                    },
                    991: {
                        items: 7
                    },
                    1199: {
                        items: 9
                    }
                }
            });

            if ($('.categories_prev').length) {
                var prev = $('.categories_prev');
                prev.on('click', function () {
                    viewedSlider.trigger('prev.owl.carousel');
                });
            }

            if ($('.categories_next').length) {
                var next = $('.categories_next');
                next.on('click', function () {
                    viewedSlider.trigger('next.owl.carousel');
                });
            }
        }
    }

    /* 

    19. Init Brands Slider

    */

    function initBrandsSlider() {
        if ($('.brands_slider').length) {
            var brandsSlider = $('.brands_slider');

            brandsSlider.owlCarousel({
                loop: true,
                autoplay: true,
                autoplayTimeout: 5000,
                nav: false,
                dots: false,
                autoWidth: true,
                items: 8,
                margin: 42
            });

            if ($('.brands_prev').length) {
                var prev = $('.brands_prev');
                prev.on('click', function () {
                    brandsSlider.trigger('prev.owl.carousel');
                });
            }

            if ($('.brands_next').length) {
                var next = $('.brands_next');
                next.on('click', function () {
                    brandsSlider.trigger('next.owl.carousel');
                });
            }
        }
    }

    /* 

	21. Init Fixed Store Slider

	*/

    function initStoresSlider() {
        if ($('.stores_slider_slider').length) {
            var storesSlider = $('.stores_slider_slider');

            storesSlider.owlCarousel({
                loop: false,
                margin: 5,
                autoplay: true,
                autoplayTimeout: 3000,
                nav: false,
                dots: false,
                responsive: {
                    0: {
                        items: 2
                    },
                    575: {
                        items: 2
                    },
                    768: {
                        items: 3
                    },
                    991: {
                        items: 4
                    },
                    1199: {
                        items: 5
                    },
                    1420: {
                        items: 6
                    }
                }
            });

            if ($('.stores_slider_prev').length) {
                var prev = $('.stores_slider_prev');
                prev.on('click', function () {
                    storesSlider.trigger('prev.owl.carousel');
                });
            }

            if ($('.stores_slider_next').length) {
                var next = $('.stores_slider_next');
                next.on('click', function () {
                    storesSlider.trigger('next.owl.carousel');
                });
            }
        }

    }

    /* 

	22. Init Fixed Products Slider

	*/

    function initProductsSlider() {
        if ($('.products_slider_slider').length) {
            var productsSlider = $('.products_slider_slider');

            productsSlider.owlCarousel({
                loop: false,
                margin: 15,
                autoplay: true,
                autoplayTimeout: 3000,
                nav: false,
                dots: false,
                responsive: {
                    0: {
                        items: 2,
                        margin: 5
                    },
                    575: {
                        items: 2,
                        margin: 10
                    },
                    768: {
                        items: 3,
                        margin: 5
                    },
                    991: {
                        items: 4,
                        margin: 5
                    },
                    1199: {
                        items: 5,
                        margin: 10
                    },
                    1429: {
                        items: 5,
                        margin: 15
                    },
                    1520: {
                        items: 5,
                        margin: 20
                    }
                }
            });

            if ($('.products_slider_prev').length) {
                var prev = $('.products_slider_prev');
                prev.on('click', function () {
                    productsSlider.trigger('prev.owl.carousel');
                });
            }

            if ($('.products_slider_next').length) {
                var next = $('.products_slider_next');
                next.on('click', function () {
                    productsSlider.trigger('next.owl.carousel');
                });
            }
        }

    }

    /*
	23. Init Banner 2 Slider

	*/

    function initFeaturesSlider() {
        if ($('.features_slider').length) {
            var FeaturesSlider = $('.features_slider');
            FeaturesSlider.owlCarousel({
                items: 1,
                loop: true,
                rtl: true,
                nav: false,
                dots: true,
                autoplay: true,
                autoplayTimeout: 6000,
                dotsContainer: '.features_dots',
                smartSpeed: 1200
            });
        }
    }

    /*
	24. Init Banner 2 Slider

	*/

    function initStoreBannerSlider() {
        if ($('.store_banner_slider').length) {
            var StoreBannerSlider = $('.store_banner_slider');
            StoreBannerSlider.owlCarousel({
                items: 1,
                loop: true,
                nav: false,
                rtl: true,
                autoplay: true,
                autoplayTimeout: 4000,
                smartSpeed: 1200
            });
        }
    }
});
