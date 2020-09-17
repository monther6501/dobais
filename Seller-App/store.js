/* ======================== Open Page of Headers ======================== */
function open_header(type, page) {


    /* ----- STORE INFO PAGE ----- */
    if (type == 'store_info') {

        $(".sub_header_store_info").removeClass("active");
        $('#store_info input').css('borderColor', '#ddd');
        $('#store_info textarea').css('borderColor', '#ddd');
        $('#store_info .error h3').css('color', 'transparent');

        document.getElementById("store_info_page").style.display = 'none';
        document.getElementById("store_about_page").style.display = 'none';
        document.getElementById("store_logo_page").style.display = 'none';

        if (page == 'store_info_page') {
            document.getElementsByClassName('sub_header_store_info')[0].classList.add("active");
            document.getElementById("store_info_page").style.display = 'block';

        }
        if (page == 'store_about_page') {
            document.getElementsByClassName('sub_header_store_info')[1].classList.add("active");
            document.getElementById("store_about_page").style.display = 'block';
        }
        if (page == 'store_logo_page') {
            document.getElementsByClassName('sub_header_store_info')[2].classList.add("active");
            document.getElementById("store_logo_page").style.display = 'block';

            $('#store_logo_page .store_logo_error').css('color', 'transparent');
        }
    }


    /* ----- COUPON PAGE ----- */
    if (type == 'coupon') {

        $('#coupon input').css('borderColor', '#ddd');
        $('#coupon textarea').css('borderColor', '#ddd');
        $('#coupon .error h3').css('color', 'transparent');
        $(".sub_header_coupon").removeClass("active");

        document.getElementById("show_coupon_page").style.display = 'none';
        document.getElementById("add_coupon_page").style.display = 'none';

        if (page == 'show_coupon_page') {
            document.getElementsByClassName('sub_header_coupon')[0].classList.add("active");
            document.getElementById("show_coupon_page").style.display = 'block';
        }
        if (page == 'add_coupon_page') {
            $('#coupon input').val(null);
            document.getElementsByClassName('sub_header_coupon')[1].classList.add("active");
            document.getElementById("add_coupon_page").style.display = 'block';
        }
    }


    /* ----- STOP PAGE ----- */
    if (type == 'sale') {

        $('#sale input').css('borderColor', '#ddd');
        $('#sale textarea').css('borderColor', '#ddd');
        $('#sale .error h3').css('color', 'transparent');
        $(".sub_header_store_sale").removeClass("active");

        document.getElementById("show_all_sale_page").style.display = 'none';
        document.getElementById("show_only_sale_page").style.display = 'none';

        if (page == 'show_all_sale_page') {
            document.getElementsByClassName('sub_header_store_sale')[0].classList.add("active");
            document.getElementById("show_all_sale_page").style.display = 'block';
        }
        if (page == 'show_only_sale_page') {
            document.getElementsByClassName('sub_header_store_sale')[1].classList.add("active");
            document.getElementById("show_only_sale_page").style.display = 'block';
        }
    }


    /* ----- STOP PAGE ----- *
    if (type == 'stop') {

        $('#stop input').css('borderColor', '#ddd');
        $('#stop textarea').css('borderColor', '#ddd');
        $('#stop .error h3').css('color', 'transparent');
        $(".sub_header_stop").removeClass("active");

        document.getElementById("show_stop_page").style.display = 'none';
        document.getElementById("add_stop_page").style.display = 'none';

        if (page == 'show_stop_page') {
            document.getElementsByClassName('sub_header_stop')[0].classList.add("active");
            document.getElementById("show_stop_page").style.display = 'block';
        }
        if (page == 'add_stop_page') {
            $('#stop input').val(null);
            document.getElementsByClassName('sub_header_stop')[1].classList.add("active");
            document.getElementById("add_stop_page").style.display = 'block';
        }
    }


    /* ----- STOP PAGE ----- */
    if (type == 'inventory') {

        $('#inventory input').css('borderColor', '#ddd');
        $(".sub_header_store_inventory").removeClass("active");

        document.getElementById("show_inventory_page").style.display = 'none';
        document.getElementById("less_inventory_page").style.display = 'none';

        if (page == 'show_inventory_page') {

            document.getElementsByClassName('sub_header_store_inventory')[0].classList.add("active");
            document.getElementById("show_inventory_page").style.display = 'block';
        }
        if (page == 'less_inventory_page') {

            document.getElementsByClassName('sub_header_store_inventory')[1].classList.add("active");
            document.getElementById("less_inventory_page").style.display = 'block';
        }
    }


    /* ----- MONEY PAGE ----- */
    if (type == 'money') {

        $('#money input').css('borderColor', '#ddd');
        $(".sub_header_store_money").removeClass("active");
        document.getElementById("show_money_seller_tabayu").style.display = 'none';
        document.getElementById("show_money_my_bank").style.display = 'none';
        document.getElementById("show_money_terms").style.display = 'none';



        if (page == 'show_money_seller_tabayu') {

            document.getElementsByClassName('sub_header_store_money')[0].classList.add("active");
            document.getElementById("show_money_seller_tabayu").style.display = 'block';
        }
        if (page == 'show_money_my_bank') {

            document.getElementsByClassName('sub_header_store_money')[1].classList.add("active");
            document.getElementById("show_money_my_bank").style.display = 'block';
        }
        if (page == 'show_money_terms') {

            document.getElementsByClassName('sub_header_store_money')[2].classList.add("active");
            document.getElementById("show_money_terms").style.display = 'block';
        }
    }


    /* ----- STATISTICS PAGE ----- */
    if (type == 'statistics') {

        $('#statistics input').css('borderColor', '#ddd');
        $(".sub_header_store_statistics").removeClass("active");

        document.getElementById("show_statistics_all").style.display = 'none';
        document.getElementById("show_statistics_visitors").style.display = 'none';
        document.getElementById("show_statistics_products").style.display = 'none';
        document.getElementById("show_statistics_sales").style.display = 'none';


        if (page == 'show_statistics_all') {

            document.getElementsByClassName('sub_header_store_statistics')[0].classList.add("active");
            document.getElementById("show_statistics_all").style.display = 'block';
        }
        if (page == 'show_statistics_visitors') {

            document.getElementsByClassName('sub_header_store_statistics')[1].classList.add("active");
            document.getElementById("show_statistics_visitors").style.display = 'block';
        }

        if (page == 'show_statistics_sales') {

            $('#filter_statistics_sales_date1').val(null);
            $('#filter_statistics_sales_date2').val(null);
            $('#filter_statistics_sales_date1').css('borderColor', '#ddd');
            $('#filter_statistics_sales_date2').css('borderColor', '#ddd');
            $('.filter_statistics_sales_error').css('color', 'transparent');
            document.getElementById('filter_statistics_sales_delete').style.display = 'none';
            document.getElementById('filter_statistics_sales_hide').style.display = 'inline-block';

            document.getElementsByClassName('sub_header_store_statistics')[2].classList.add("active");
            document.getElementById("show_statistics_sales").style.display = 'block';
        }


        if (page == 'show_statistics_products') {

            $('#filter_statistics_products_date1').val(null);
            $('#filter_statistics_products_date2').val(null);
            $('#filter_statistics_products_date1').css('borderColor', '#ddd');
            $('#filter_statistics_products_date2').css('borderColor', '#ddd');
            $('.filter_statistics_products_error').css('color', 'transparent');
            document.getElementById('filter_statistics_products_delete').style.display = 'none';
            document.getElementById('filter_statistics_products_hide').style.display = 'inline-block';

            document.getElementsByClassName('sub_header_store_statistics')[3].classList.add("active");
            document.getElementById("show_statistics_products").style.display = 'block';
        }
    }


    /* ----- DELIVERY PAGE ----- */
    if (type == 'delivery') {

        $(".sub_header_store_delivery").removeClass("active");
        document.getElementById("show_my_delivery").style.display = 'none';
        document.getElementById("add_new_delivery").style.display = 'none';

        $('#delivery input').css('borderColor', '#ddd');
        $('#delivery select').css('borderColor', '#ddd');
        $('#delivery h3').css('color', 'transparent');

        $('#add_company input').css('borderColor', '#ddd');
        $('#add_company select').css('borderColor', '#ddd');
        $('#add_company h3').css('color', 'transparent');

        if (page == 'show_my_delivery') {

            document.getElementsByClassName('sub_header_store_delivery')[0].classList.add("active");
            document.getElementById("show_my_delivery").style.display = 'block';
        }
        if (page == 'add_new_delivery') {

            $('.col_with_header').scrollTop(0);
            document.getElementsByClassName('sub_header_store_delivery')[1].classList.add("active");
            document.getElementById("add_new_delivery").style.display = 'block';
        }
    }


    /* ----- PRODUCT PAGE ----- */
    if (type == 'product') {

        // document.getElementById("show_my_section").style.display = 'none';

        $('#product input').css('borderColor', '#ddd');
        $('#product textarea').css('borderColor', '#ddd');
        $('#product select').css('borderColor', '#ddd');
        $('#product h3').css('color', 'transparent');

        if (page == 'show_my_product') {
            $(".sub_header_store_product").removeClass("active");
            document.getElementById("show_my_product").style.display = 'none';
            document.getElementById("add_new_product").style.display = 'none';

            document.getElementsByClassName('sub_header_store_product')[1].classList.add("active");
            document.getElementById("show_my_product").style.display = 'block';
        }
        if (page == 'add_new_product') {
            if (isStoreWork('basic')) {
                $(".sub_header_store_product").removeClass("active");
                document.getElementById("show_my_product").style.display = 'none';
                document.getElementById("add_new_product").style.display = 'none';

                call_instructions_box('instructions_add_product');
                document.getElementsByClassName('sub_header_store_product')[0].classList.add("active");
                document.getElementById("add_new_product").style.display = 'block';
            }
        }
        /* if (page == 'show_my_section') {

             document.getElementsByClassName('sub_header_store_product')[2].classList.add("active");
             document.getElementById("show_my_section").style.display = 'block';
         }*/
    }


    /* ----- EDIT PRODUCT PAGE ----- */
    if (type == 'edit_product') {

        $(".sub_header_edit_product").removeClass("active");
        document.getElementById("show_my_edit_product").style.display = 'none';
        document.getElementById("show_my_edit_image").style.display = 'none';

        $('#edit_product input').css('borderColor', '#ddd');
        $('#edit_product select').css('borderColor', '#ddd');
        $('#product textarea').css('borderColor', '#ddd');
        $('#edit_product h3').css('color', 'transparent');

        if (page == 'show_my_edit_product') {

            document.getElementsByClassName('sub_header_edit_product')[0].classList.add("active");
            document.getElementById("show_my_edit_product").style.display = 'block';
        }
        if (page == 'show_my_edit_image') {

            document.getElementsByClassName('sub_header_edit_product')[1].classList.add("active");
            document.getElementById("show_my_edit_image").style.display = 'block';
        }
        if (page == 'add_new_image') {

            // $('#add_new_image input').val(null);
            document.getElementsByClassName('sub_header_edit_product')[2].classList.add("active");
            document.getElementById("add_new_image").style.display = 'block';
        }
    }


    /* ----- ORDER PAGE ----- */
    if (type == 'special_order') {

        $(".sub_header_store_special_order").removeClass("active");
        document.getElementById("show_special_order").style.display = 'none';
        document.getElementById("on_off_special_order").style.display = 'none';

        $('#special_order input').css('borderColor', '#ddd');
        $('#special_order select').css('borderColor', '#ddd');
        $('#special_order h3').css('color', 'transparent');

        $('.col_with_header').scrollTop(0);
        if (page == 'show_special_order') {

            document.getElementsByClassName('sub_header_store_special_order')[0].classList.add("active");
            document.getElementById("show_special_order").style.display = 'block';
        }
        if (page == 'on_off_special_order') {

            document.getElementsByClassName('sub_header_store_special_order')[1].classList.add("active");
            document.getElementById("on_off_special_order").style.display = 'block';
        }
    }


    /* ----- ORDER PAGE ----- */
    if (type == 'order') {

        $(".sub_header_store_order").removeClass("active");

        document.getElementById("show_all_order").style.display = 'none';
        document.getElementById("show_all_invoice").style.display = 'none';

        $('#order input').css('borderColor', '#ddd');
        $('#order select').css('borderColor', '#ddd');
        $('#order h3').css('color', 'transparent');

        $('.col_with_header').scrollTop(0);
        if (page == 'show_all_order') {

            document.getElementsByClassName('sub_header_store_order')[0].classList.add("active");
            document.getElementById("show_all_order").style.display = 'block';
        }
        if (page == 'show_all_invoice') {

            document.getElementsByClassName('sub_header_store_order')[1].classList.add("active");
            document.getElementById("show_all_invoice").style.display = 'block';
        }
    }


    /* ----- FIXED PRODUCT PAGE ----- */
    if (type == 'fixed_product') {

        $('#fixed_product input').css('borderColor', '#ddd');
        $('#fixed_product textarea').css('borderColor', '#ddd');
        $('#fixed_product .error h3').css('color', 'transparent');
        $(".sub_header_fixed_product").removeClass("active");

        document.getElementById("show_all_fixed_products_page").style.display = 'none';
        document.getElementById("show_my_fixed_products_page").style.display = 'none';

        if (page == 'show_all_fixed_products_page') {
            document.getElementsByClassName('sub_header_fixed_product')[0].classList.add("active");
            document.getElementById("show_all_fixed_products_page").style.display = 'block';
        }
        if (page == 'show_my_fixed_products_page') {
            $('#coupon input').val(null);
            document.getElementsByClassName('sub_header_fixed_product')[1].classList.add("active");
            document.getElementById("show_my_fixed_products_page").style.display = 'block';
        }
    }


    /* ----- FIXED PRODUCT PAGE ----- */
    if (type == 'fixed_store') {

        $('#fixed_store input').css('borderColor', '#ddd');
        $('#fixed_store textarea').css('borderColor', '#ddd');
        $('#fixed_store .error h3').css('color', 'transparent');
        $(".sub_header_fixed_store").removeClass("active");

        document.getElementById("show_all_fixed_stores_page").style.display = 'none';
        document.getElementById("show_my_fixed_stores_page").style.display = 'none';

        if (page == 'show_all_fixed_stores_page') {
            document.getElementsByClassName('sub_header_fixed_store')[0].classList.add("active");
            document.getElementById("show_all_fixed_stores_page").style.display = 'block';
        }
        if (page == 'show_my_fixed_stores_page') {
            $('#coupon input').val(null);
            document.getElementsByClassName('sub_header_fixed_store')[1].classList.add("active");
            document.getElementById("show_my_fixed_stores_page").style.display = 'block';
        }
    }


    /* ----- FREE SHIPPING PAGE ----- */
    if (type == 'free_shipping') {

        $('#free_shipping input').css('borderColor', '#ddd');
        $('#free_shipping select').css('borderColor', '#ddd');
        $('#free_shipping .error h3').css('color', 'transparent');
        $(".sub_header_free_ship").removeClass("active");


        document.getElementById("show_free_shipping_page").style.display = 'none';
        document.getElementById("add_free_shipping_page").style.display = 'none';

        if (page == 'show_free_shipping_page') {
            document.getElementsByClassName('sub_header_free_ship')[0].classList.add("active");
            document.getElementById("show_free_shipping_page").style.display = 'block';
        }
        if (page == 'add_free_shipping_page') {
            //   document.getElementById("free_shipping_type").selectedIndex = 0;
            //   $('#free_shipping input').val(null);
            document.getElementsByClassName('sub_header_free_ship')[1].classList.add("active");
            document.getElementById("add_free_shipping_page").style.display = 'block';
        }
    }


}


/* ======================== Call of Edit About Store info ======================== */
function call_edit_banner() {

    var banner = document.getElementById('store_banner').value;
    var user_id = localStorage.getItem("user_id");
    var image = document.getElementById('smallImage').src;
    var image_name = makeid();

    $('#store_logo_page .store_logo_error').css('color', 'transparent');
    document.getElementById('store_banner').style.borderColor = '#ddd';

    if (banner == "") {
        document.getElementsByClassName('store_logo_error')[1].style.color = 'red';
        document.getElementById('store_banner').style.borderColor = 'red';
        document.getElementById('store_banner').focus();
    }
    if (banner != "" && image != null) {


        document.getElementById("loads_small").style.display = 'block';
        var options = new FileUploadOptions();
        options.fileKey = "file";
        options.fileName = image_name;
        options.mimeType = "image/jpeg";

        var params = new Object();
        params.user_id = localStorage.getItem("user_id");
        options.params = params;
        options.headers = {
            Connection: "close"
        };

        options.chunkedMode = false;
        var ft = new FileTransfer();
        ft.upload(image, encodeURI("https://tabayu.com/ajax_app/seller/v2/info.php?kind=edit_store_banner"), function () {

            document.getElementById("loads_small").style.display = 'none';
            store_info_button(3);

            window.plugins.toast.showWithOptions({
                message: "تم تغيير الشعار بنجاح!!",
                duration: "long",
                position: "bottom",
                addPixelsY: -40
            });

        }, function () {
            document.getElementById("loads_small").style.display = 'none';
            navigator.notification.alert('هناك مشكلة في الاتصال !! حاول مرة أخرى رجاء!!', null, 'لا يوجد اتصال', 'حسنا');
        }, options);
        //store_info_button(2);
    }
}


/* ======================== Call of Edit About Store info ======================== */
function call_edit_logo() {


    var logo = document.getElementById('store_logo').value;
    var user_id = localStorage.getItem("user_id");
    var image = document.getElementById('smallImage').src;
    var image_name = makeid();

    $('#store_logo_page .store_logo_error').css('color', 'transparent');
    document.getElementById('store_logo').style.borderColor = '#ddd';

    if (logo == "") {
        document.getElementsByClassName('store_logo_error')[0].style.color = 'red';
        document.getElementById('store_logo').style.borderColor = 'red';
        document.getElementById('store_logo').focus();
    }
    if (logo != "" && image != null) {

        document.getElementById("loads_small").style.display = 'block';

        var options = new FileUploadOptions();
        options.fileKey = "file";
        options.fileName = image_name;
        options.mimeType = "image/jpeg";

        var params = new Object();
        params.user_id = localStorage.getItem("user_id");
        options.params = params;
        options.headers = {
            Connection: "close"
        };

        options.chunkedMode = false;
        var ft = new FileTransfer();
        ft.upload(image, encodeURI("https://tabayu.com/ajax_app/seller/v2/info.php?kind=edit_store_logo"), function () {
            document.getElementById("loads_small").style.display = 'none';

            store_info_button(3);

            window.plugins.toast.showWithOptions({
                message: "تم تغيير الشعار بنجاح!!",
                duration: "long",
                position: "bottom",
                addPixelsY: -40
            });

        }, function () {
            document.getElementById("loads_small").style.display = 'none';
            navigator.notification.alert('هناك مشكلة في الاتصال !! حاول مرة أخرى رجاء!!', null, 'لا يوجد اتصال', 'حسنا');
        }, options);
        //store_info_button(2);
    }
}


/* ======================== Call of Edit About Store info ======================== */
function call_edit_about_info() {


    var details = document.getElementById('about_store_info').value;
    var policy = document.getElementById('policy_store_info').value;
    var user_id = localStorage.getItem("user_id");
    document.getElementsByClassName('store_about_error')[0].innerHTML = 'كلمات ممنوعة: ';
    var check_words = 0;


    $('#store_about_page textarea').css('borderColor', '#ddd');
    $('#store_about_page .store_about_error').css('color', 'transparent');


    if (policy == "" || policy == null) {
        document.getElementsByClassName('store_about_error')[1].style.color = 'red';
        document.getElementById('policy_store_info').style.borderColor = 'red';
    }

    if (isEmpty(details)) {
        document.getElementsByClassName('store_about_error')[0].innerHTML = 'هذا الحقل مطلوب';
        document.getElementsByClassName('store_about_error')[0].style.color = 'red';
        document.getElementById('about_store_info').style.borderColor = 'red';
    } else if (details.length < 20) {
        document.getElementsByClassName('store_about_error')[0].innerHTML = 'يجب أن يكون الوصف أكثر من 20 حرف';
        document.getElementsByClassName('store_about_error')[0].style.color = 'red';
        document.getElementById('about_store_info').style.borderColor = 'red';
        // return false;
    }

    if (details.match(/\d/g)) {
        var numb = details.match(/\d/g);
        numb = numb.join("");
        if (numb.length == 10 || numb.length == 7 || numb.length == 9 || numb.length == 12 || numb.length == 14) {
            document.getElementsByClassName('store_about_error')[0].innerHTML += "  رقم هاتف ";
            document.getElementsByClassName('store_about_error')[0].style.color = 'red';
            document.getElementById('about_store_info').style.borderColor = 'red';
            document.getElementById('about_store_info').focus();
            check_words++;
        }
    }

    var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if (details.match(phoneno)) {
        document.getElementsByClassName('store_about_error')[0].innerHTML += "  رقم هاتف ";
        document.getElementsByClassName('store_about_error')[0].style.color = 'red';
        document.getElementById('about_store_info').style.borderColor = 'red';
        document.getElementById('about_store_info').focus();
        check_words++;
    }

    if (details.includes("instagram") || details.includes("Instagram") || details.includes("INSTAGRAM") || details.includes("INSTA") || details.includes("Insta") || details.includes("insta")) {
        document.getElementsByClassName('store_about_error')[0].innerHTML += "  انستقرام ";
        document.getElementsByClassName('store_about_error')[0].style.color = 'red';
        document.getElementById('about_store_info').style.borderColor = 'red';
        document.getElementById('about_store_info').focus();
        check_words++;
    }

    if (details.includes("twitter") || details.includes("Twitter") || details.includes("TWITTER")) {
        document.getElementsByClassName('store_about_error')[0].innerHTML += "  تويتر ";
        document.getElementsByClassName('store_about_error')[0].style.color = 'red';
        document.getElementById('about_store_info').style.borderColor = 'red';
        document.getElementById('about_store_info').focus();
        check_words++;
    }

    if (details.includes("snapchat") || details.includes("Snapchat") || details.includes("SNAPCHAT") || details.includes("SNAP") || details.includes("Snap") || details.includes("snap")) {
        document.getElementsByClassName('store_about_error')[0].innerHTML += "  سناب شات ";
        document.getElementsByClassName('store_about_error')[0].style.color = 'red';
        document.getElementById('about_store_info').style.borderColor = 'red';
        document.getElementById('about_store_info').focus();
        check_words++;
    }

    if (details.includes("whatsapp") || details.includes("Whatsapp") || details.includes("WHATSAPP")) {
        document.getElementsByClassName('store_about_error')[0].innerHTML += "  واتس اب ";
        document.getElementsByClassName('store_about_error')[0].style.color = 'red';
        document.getElementById('about_store_info').style.borderColor = 'red';
        document.getElementById('about_store_info').focus();
        check_words++;
    }

    if (details.includes("email") || details.includes("Email") || details.includes("EMAIL")) {
        document.getElementsByClassName('store_about_error')[0].innerHTML += "  الايميل ";
        document.getElementsByClassName('store_about_error')[0].style.color = 'red';
        document.getElementById('about_store_info').style.borderColor = 'red';
        document.getElementById('about_store_info').focus();
        check_words++;
    }

    if (details.includes("وتساب") || details.includes("واتسآب") || details.includes("واتس آب") || details.includes("واتس") || details.includes("واتس اب") || details.includes("واتساب")) {
        document.getElementsByClassName('store_about_error')[0].innerHTML += "  واتس اب ";
        document.getElementsByClassName('store_about_error')[0].style.color = 'red';
        document.getElementById('about_store_info').style.borderColor = 'red';
        document.getElementById('about_store_info').focus();
        check_words++;
    }

    if (details.includes("انستاقرام") || details.includes("أنستاقرام") || details.includes("انستقرام") || details.includes("أنستقرام") || details.includes("أنستجرام") || details.includes("انستجرام") || details.includes("انستا") || details.includes("أنستا") || details.includes("إنستجرام") || details.includes("إنستقرام") || details.includes("إنستا") || details.includes("آنستا") || details.includes("آنستقرام") || details.includes("آنستجرام")) {
        document.getElementsByClassName('store_about_error')[0].innerHTML += "  انستقرام ";
        document.getElementsByClassName('store_about_error')[0].style.color = 'red';
        document.getElementById('about_store_info').style.borderColor = 'red';
        document.getElementById('about_store_info').focus();
        check_words++;
    }

    if (details.includes("سنابشات") || details.includes("سناب شات") || details.includes("سنابتشات") || details.includes("سناب تشات") || details.includes("سناب") || details.includes("سنبشات")) {
        document.getElementsByClassName('store_about_error')[0].innerHTML += "  سناب شات ";
        document.getElementsByClassName('store_about_error')[0].style.color = 'red';
        document.getElementById('about_store_info').style.borderColor = 'red';
        document.getElementById('about_store_info').focus();
        check_words++;
    }

    if (details.includes("ايميل") || details.includes("إيميل") || details.includes("آيميل") || details.includes("أيميل")) {
        document.getElementsByClassName('store_about_error')[0].innerHTML += "  الايميل ";
        document.getElementsByClassName('store_about_error')[0].style.color = 'red';
        document.getElementById('about_store_info').style.borderColor = 'red';
        document.getElementById('about_store_info').focus();
        check_words++;
    }

    if (details.includes("الجوال") || details.includes("الرقم") || details.includes("الهاتف") || details.includes("موبايل") || details.includes("جوال")) {
        document.getElementsByClassName('store_about_error')[0].innerHTML += "  الجوال ";
        document.getElementsByClassName('store_about_error')[0].style.color = 'red';
        document.getElementById('about_store_info').style.borderColor = 'red';
        document.getElementById('about_store_info').focus();
        check_words++;
    }

    if (details.includes("phone") || details.includes("Phone") || details.includes("PHONE")) {
        document.getElementsByClassName('store_about_error')[0].innerHTML += "  الجوال ";
        document.getElementsByClassName('store_about_error')[0].style.color = 'red';
        document.getElementById('about_store_info').style.borderColor = 'red';
        document.getElementById('about_store_info').focus();
        check_words++;
    }

    if (details.includes("تويتر")) {
        document.getElementsByClassName('store_about_error')[0].innerHTML += "  تويتر ";
        document.getElementsByClassName('store_about_error')[0].style.color = 'red';
        document.getElementById('about_store_info').style.borderColor = 'red';
        document.getElementById('about_store_info').focus();
        check_words++;
    }

    if (details.includes("@")) {
        document.getElementsByClassName('store_about_error')[0].innerHTML += "  حسابات التواصل الاجتماعي ";
        document.getElementsByClassName('store_about_error')[0].style.color = 'red';
        document.getElementById('about_store_info').style.borderColor = 'red';
        document.getElementById('about_store_info').focus();
        check_words++;
    }


    if (!isEmpty(details) && details.length > 20 && !isEmpty(policy) && check_words == 0) {

        document.getElementById("loads_small").style.display = 'block';
        var the_data = "details=" + details + "&policy=" + policy + "&user_id=" + user_id;

        $.ajax({
            type: 'POST',
            url: "https://tabayu.com/ajax_app/seller/v2/info.php?kind=edit_store_about",
            data: the_data,
            cache: false,
            success: function (data, textStatus, jqXHR) {

                var json_objs = JSON.stringify(data);
                var json = JSON.parse(json_objs);

                if (json == "not") {
                    document.getElementsByClassName('store_about_error')[0].innerHTML = 'هذا الحقل مطلوب';
                    document.getElementsByClassName('store_about_error')[0].style.color = 'red';
                    document.getElementById('about_store_info').style.borderColor = 'red';

                    document.getElementsByClassName('store_about_error')[1].style.color = 'red';
                    document.getElementById('policy_store_info').style.borderColor = 'red';
                }



                if (json == "same") {
                    navigator.notification.alert('يجب عليك تغيير المعلومات أولا حتى تستطيع حفظ التعديل', null, 'لم تقم بتغيير المعلومات', 'حسنا');
                }

                if (json == "yes") {

                    store_info_button(2);

                    window.plugins.toast.showWithOptions({
                        message: "تم تحديث معلوماتك بنجاح!!",
                        duration: "long",
                        position: "bottom",
                        addPixelsY: -40
                    });
                }

                document.getElementById("loads_small").style.display = 'none';

            },
            error: function (jqXHR, textStatus, errorThrown) {
                call_edit_about_info();
            }
        });

        //store_info_button(2);
    }
}


/* ======================== Call of Edit Store info ======================== */
function call_edit_store_info() {

    var name = document.getElementById('store_name_edit').value;
    var city = document.getElementById('store_city_edit').value;
    //var maroof = document.getElementById('store_maroof_edit').value;
    var check = 0;
    // var twitter = document.getElementById('twitter_edit').value;


    var user_id = localStorage.getItem("user_id");

    $('#edit_store_info input').css('borderColor', '#ddd');
    $('#edit_store_info select').css('borderColor', '#ddd');
    $('#edit_store_info .store_info_error').css('color', 'transparent');


    if (isEmpty(name)) {
        document.getElementsByClassName('store_info_error')[0].style.color = 'red';
        document.getElementById('store_name_edit').style.borderColor = 'red';
        check++;
    }


    if (isEmpty(city)) {
        document.getElementsByClassName('store_info_error')[1].style.color = 'red';
        document.getElementById('store_city').style.borderColor = 'red';
        check++;
    }


    /* if (!isEmpty(maroof) && maroof.includes("https://maroof") == false) {
         alert(maroof.includes("https://maroof"))
         document.getElementsByClassName('store_info_error')[2].innerHTML = 'رابط حساب معروف غير صحيح';
         document.getElementsByClassName('store_info_error')[2].style.color = 'red';
         document.getElementById('store_maroof_edit').style.borderColor = 'red';
         check++;
     }*/


    if (check == 0) {
        document.getElementById("loads_small").style.display = 'block';
        var the_data = "store_name=" + name + "&store_city=" + city + "&user_id=" + user_id;

        $.ajax({
            type: 'POST',
            url: "https://tabayu.com/ajax_app/seller/v2/info.php?kind=edit_store_info",
            data: the_data,
            cache: false,
            success: function (data, textStatus, jqXHR) {

                var json_objs = JSON.stringify(data);
                var json = JSON.parse(json_objs);

                if (json == "yes") {

                    //navigator.notification.alert('تم حفظ وتحديث معلومات المتجر بنجاح', null, 'تم الحفظ', 'حسنا');
                    store_info_button(1);
                    window.plugins.toast.showWithOptions({
                        message: "تم تحديث معلومات المتجر بنجاح!!",
                        duration: "long",
                        position: "bottom",
                        addPixelsY: -40
                    });
                    //  window.location.href = window.location.href;
                } else if (json == 'no') {
                    navigator.notification.alert('لم يتم التحرير بنجاح حاول مرة أخرى', null, 'هناك مشكلة', 'حاول مرة أخرى');
                } else if (json == 'not') {
                    navigator.notification.alert('المعلومات المطلوبة غير مكتملةو حاول مرة أخرى!', null, 'المعلومات المطلوبة ناقصة', 'حاول مرة أخرى');
                } else if (json == 'same') {
                    navigator.notification.alert('يجب عليك تغيير المعلومات أولا حتى تستطيع حفظ التعديل!', null, 'لم تقم بتغيير المعلومات', 'حاول مرة أخرى');
                } else if (json == 'name') {
                    document.getElementsByClassName('store_info_error')[0].innerHTML = 'الاسم مسجل بالفعل، إبحث عن اسم آخر';
                    document.getElementsByClassName('store_info_error')[0].style.color = 'red';
                    document.getElementById('store_name_edit').style.borderColor = 'red';
                }



                document.getElementById("loads_small").style.display = 'none';

            },
            error: function (jqXHR, textStatus, errorThrown) {
                call_edit_store_info();
            }
        });

    }

}


/* ======================== Call of Add new Stop ======================== */
function call_stop_store() {

    var start = document.getElementById('stop_start_date').value;
    var number = document.getElementById('stop_days_number').value;
    var reason = document.getElementById('stop_reason').value;
    var user_id = localStorage.getItem("user_id");

    var todate = get_date_now();

    $('#add_stop_page input').css('borderColor', '#ddd');
    $('#add_stop_page .store_stop_error').css('color', 'transparent');

    if (isEmpty(start)) {
        document.getElementsByClassName('store_stop_error')[0].style.color = 'red';
        document.getElementById('stop_start_date').style.borderColor = 'red';
    } else if (start < todate) {
        document.getElementsByClassName('store_stop_error')[0].innerHTML = 'يجب أن يبدأ تاريخ البداية من اليوم كحد أدنى';
        document.getElementsByClassName('store_stop_error')[0].style.color = 'red';
        document.getElementById('stop_start_date').style.borderColor = 'red';
    }

    if (isEmpty(number)) {
        document.getElementsByClassName('store_stop_error')[1].style.color = 'red';
        document.getElementById('stop_days_number').style.borderColor = 'red';

    } else if ((!/^\d+$/.test(number))) {
        document.getElementsByClassName('store_stop_error')[1].innerHTML = 'يجب أن تكون عدد الأيام أرقاما إنجليزية فقط';
        document.getElementsByClassName('store_stop_error')[1].style.color = 'red';
        document.getElementById('stop_days_number').style.borderColor = 'red';
    }

    if (isEmpty(reason)) {
        document.getElementsByClassName('store_stop_error')[2].style.color = 'red';
        document.getElementById('stop_reason').style.borderColor = 'red';
    }


    if (!isEmpty(start) && !isEmpty(number) && !isEmpty(reason) && (start >= todate)) {

        document.getElementById("loads_small").style.display = 'block';
        var the_data = "user_id=" + localStorage.getItem("user_id") + "&start=" + start + "&number=" + number + "&reason=" + reason;
        $.ajax({
            type: 'POST',
            url: "https://tabayu.com/ajax_app/seller/v2/info.php?kind=add_store_stop",
            data: the_data,
            cache: false,
            success: function (data, textStatus, jqXHR) {

                var json_objs = JSON.stringify(data);
                var json = JSON.parse(json_objs);

                if (json == "yes") {
                    document.getElementById('stop_start_date').value = "";
                    document.getElementById('stop_days_number').value = "";
                    document.getElementById('stop_reason').value = "";
                    stop_button();
                    window.plugins.toast.showWithOptions({
                        message: "تم إيقاف المتجر بنجاح!!",
                        duration: "long",
                        position: "bottom",
                        addPixelsY: -40
                    });
                } else if (json == "no") {
                    navigator.notification.alert('لم يتم إيقاف المتجر بنجاح حاول مرة أخرى', null, 'لم يتم إيقاف المتجر', 'حسنا');
                } else if (json == 'cant') {
                    navigator.notification.alert('يجب أن يكون تاريخ بداية الإيقاف قبل انتهاء إشتراك المتجر بيوم على الأقل', null, 'التاريخ غير صحيح', 'حسنا');

                } else if (json == 'not') {

                    navigator.notification.alert('المعلومات المطلوبة غير مكتملة، حاول مرة أخرى', null, 'المعلومات المطلوبة غير مكتملة', 'حسنا');
                }
                document.getElementById("loads_small").style.display = 'none';

            },
            error: function (jqXHR, textStatus, errorThrown) {
                call_stop_store();
            }
        });

        //store_info_button(2);
    }


}


/* ======================== Call of Cancel Stop ======================== */
function call_cancel_stop(id) {

    navigator.notification.confirm('هل أنت متأكد أنك تريد إلغاء الإيقاف علما أنه لن يتم استرداد الأيام المدخلة سابقا؟', onConfirm, 'إلغاء الإيقاف', ['إلغاء الإيقاف', 'العودة']);

    function onConfirm(buttonIndex) {
        if (buttonIndex == 1) {

            if (id != "") {
                var user_id = localStorage.getItem("user_id");
                document.getElementById("loads_small").style.display = 'block';
                var the_data = "user_id=" + localStorage.getItem("user_id") + "&id=" + id;
                $.ajax({
                    type: 'POST',
                    url: "https://tabayu.com/ajax_app/seller/v2/info.php?kind=cancel_stop",
                    data: the_data,
                    cache: false,

                    success: function (data, textStatus, jqXHR) {
                        var json_objs = JSON.stringify(data);
                        var json = JSON.parse(json_objs);

                        if (json == "yes") {
                            stop_button();
                            window.plugins.toast.showWithOptions({
                                message: "تم إلغاء الإيقاف بنجاح!!",
                                duration: "long",
                                position: "bottom",
                                addPixelsY: -40
                            });

                        } else {
                            navigator.notification.alert('لم يتم إلغاء الإيقاف بنجاح حاول مرة أخرى', null, 'هناك مشكلة', 'حاول مرة أخرى');
                        }

                        document.getElementById("loads_small").style.display = 'none';
                    },
                    error: function (jqXHR, textStatus, errorThrown) {
                        navigator.notification.alert('هناك مشكلة في الاتصال !! حاول مرة أخرى رجاء!!', null, 'لا يوجد اتصال', 'حسنا');
                        document.getElementById("loads_small").style.display = 'none';
                    }
                });
            }

        }
    }
}


/* ======================== Call of Edit Inventory ======================== */
function call_edit_inventory(id, input) {

    var new_number = document.getElementById(input).value;
    var user_id = localStorage.getItem("user_id");

    $('#inventory input').css('borderColor', '#ddd');
    if (isEmpty(new_number)) {
        document.getElementById(input).style.borderColor = 'red';
        navigator.notification.alert('يجب عليك إدخال رقم واحد على الأقل، إذا كان المنتج غير متوفر فأدخل الرقم 0.', null, 'لا تترك الحقل فارغ', 'حسنا');
    } else if (!/^\d+$/.test(new_number)) {
        document.getElementById(input).style.borderColor = 'red';
        navigator.notification.alert('يجب أن تكون المدخلات أرقاماً إنجليزية فقط!', null, 'المدخلات غير صحيحة', 'حسنا');
    }
    if (!isEmpty(new_number) && /^\d+$/.test(new_number)) {

        navigator.notification.confirm('هل أنت متأكد أنك تريد تعديل مخزون هذا المنتج؟', onConfirm, 'تعديل المخزون', ['متابعة', 'إلغاء']);

        function onConfirm(buttonIndex) {
            if (buttonIndex == 1) {

                if (id != "") {

                    document.getElementById("loads_small").style.display = 'block';
                    var the_data = "user_id=" + localStorage.getItem("user_id") + "&id=" + id + "&number=" + new_number;
                    $.ajax({
                        type: 'POST',
                        url: "https://tabayu.com/ajax_app/seller/v2/info.php?kind=edit_store_inventory",
                        data: the_data,
                        cache: false,

                        success: function (data, textStatus, jqXHR) {
                            var json_objs = JSON.stringify(data);
                            var json = JSON.parse(json_objs);

                            var xxx = parseInt(new_number);
                            if (json == "yes") {
                                if (xxx <= 6) {
                                    inventory_button(2);
                                } else if (xxx > 5) {
                                    inventory_button(1);
                                }

                                //inventory_button(2);
                                window.plugins.toast.showWithOptions({
                                    message: "تم تغيير كمية المخزون بنجاح!!",
                                    duration: "long",
                                    position: "bottom",
                                    addPixelsY: -40
                                });

                            } else {
                                navigator.notification.alert('لم يتم تغيير كمية المخزون بنجاح حاول مرة أخرى', null, 'هناك مشكلة', 'حاول مرة أخرى');
                            }

                            document.getElementById("loads_small").style.display = 'none';
                        },
                        error: function (jqXHR, textStatus, errorThrown) {
                            call_edit_inventory(id, input);
                        }
                    });
                }

            }
        }
    }
}


/* ======================== Call of Edit Store info ======================== */
function call_edit_bank_info() {

    var bank_name = document.getElementById('edit_bank_name').value;
    var account_name = document.getElementById('edit_account_name').value;
    var old_iban_no = document.getElementById('edit_iban_no').value;
    document.getElementById('edit_iban_no').value = old_iban_no.replace(/\s/g, '');
    var iban_no = document.getElementById('edit_iban_no').value;
    var iban_code;
    var error_check = 0;



    $('#money input').css('borderColor', '#ddd');
    $('#money .edit_error_bank').css('color', 'transparent');


    if (account_name == "") {
        document.getElementsByClassName('edit_error_bank')[1].style.color = 'red';
        document.getElementById('edit_account_name').style.borderColor = 'red';
        document.getElementById('edit_account_name').focus();
        error_check++;
    }

    if (!isEmpty(bank_name)) {

        if (bank_name == "الأهلي") {
            iban_code = '10';
        }
        if (bank_name == "الإنماء") {
            iban_code = '05';
        }
        if (bank_name == "الأول") {
            iban_code = '50';
        }
        if (bank_name == "البلاد") {
            iban_code = '15';
        }
        if (bank_name == "الراجحي") {
            iban_code = '80';
        }
        if (bank_name == "الرياض") {
            iban_code = '20';
        }
        if (bank_name == "الجزيرة") {
            iban_code = '60';
        }
        if (bank_name == "السعودي للإستثمار") {
            iban_code = '65';

        }
        if (bank_name == "السعودي الفرنسي") {
            iban_code = '55';
        }
        if (bank_name == "العربي الوطني") {
            iban_code = '30';
        }
        if (bank_name == "ساب") {
            iban_code = '45';
        }
        if (bank_name == "سامبا") {
            iban_code = '40';
        }


        if (iban_no == "") {

            document.getElementsByClassName('edit_error_bank')[2].style.color = 'red';
            document.getElementById('edit_iban_no').style.borderColor = 'red';
            document.getElementById('edit_iban_no').focus();
            error_check++;

        } else if (iban_no.substring(0, 2) != "SA" && iban_no.substring(0, 2) != "sa") {

            document.getElementsByClassName('edit_error_bank')[2].style.color = 'red';
            document.getElementsByClassName('edit_error_bank')[2].innerHTML = 'يجب الابتداء برمز SA';
            document.getElementById('edit_iban_no').style.borderColor = 'red';
            document.getElementById('edit_iban_no').focus();
            error_check++;

        } else if (iban_no.substring(4, 6) != iban_code) {

            document.getElementsByClassName('edit_error_bank')[2].style.color = 'red';
            document.getElementsByClassName('edit_error_bank')[2].innerHTML = 'الأرقام المدخلة لا تتوافق مع آيبان ' + bank_name;
            document.getElementById('edit_iban_no').style.borderColor = 'red';
            document.getElementById('edit_iban_no').focus();
            error_check++;

        } else if (iban_no.length != 24) {

            document.getElementsByClassName('edit_error_bank')[2].style.color = 'red';
            document.getElementsByClassName('edit_error_bank')[2].innerHTML = 'يجب أن يكون رمز الآيبان مكون من 24 رمز ورقم';
            document.getElementById('edit_iban_no').style.borderColor = 'red';
            document.getElementById('edit_iban_no').focus();
            error_check++;
        }


    } else {

        if (iban_no == "") {
            document.getElementsByClassName('edit_error_bank')[2].style.color = 'red';
            document.getElementById('edit_iban_no').style.borderColor = 'red';
            document.getElementById('edit_iban_no').focus();
            error_check++;
        }
        document.getElementsByClassName('edit_error_bank')[0].style.color = 'red';
        document.getElementById('edit_bank_name').style.borderColor = 'red';
        document.getElementById('edit_bank_name').focus();
        error_check++;
    }


    if (error_check == 0) {
        document.getElementById("loads_small").style.display = 'block';
        var the_data = "bank_name=" + bank_name + "&account_name=" + account_name + "&iban_no=" + iban_no + "&user_id=" + localStorage.getItem("user_id");

        $.ajax({
            type: 'POST',
            url: "https://tabayu.com/ajax_app/seller/v2/money.php?kind=edit_bank_info",
            data: the_data,
            cache: false,
            success: function (data, textStatus, jqXHR) {

                var json_objs = JSON.stringify(data);
                var json = JSON.parse(json_objs);

                if (json == "yes") {
                    money_button(3);
                    window.plugins.toast.showWithOptions({
                        message: "تم تحديث معلومات البنك بنجاح!!",
                        duration: "long",
                        position: "bottom",
                        addPixelsY: -40
                    });
                    //  window.location.href = window.location.href;
                }
                if (json == "add_yes") {

                    money_button(3);
                    window.plugins.toast.showWithOptions({
                        message: "تم إضافة معلومات البنك بنجاح!!",
                        duration: "long",
                        position: "bottom",
                        addPixelsY: -40
                    });
                    //  window.location.href = window.location.href;
                } else if (json == 'no') {
                    navigator.notification.alert('لم يتم حفظ التعديل لعدم وجود تغيير في المعلومات البنكية!', null, 'لم يتم التعديل', 'حسنا');
                } else if (json == 'not') {
                    navigator.notification.alert('إذا كنت قد أدخلت جميع المعلومات بشكل صحيح وما زالت المشكلة موجودة فتواصل مع الدعم الفني لحل المشكلة!', null, 'المعلومات المطلوبة غير مكتملة', 'حسنا');
                }

                document.getElementById("loads_small").style.display = 'none';

            },
            error: function (jqXHR, textStatus, errorThrown) {
                call_edit_bank_info();
            }
        });

    }

}


function show_how_div(div_id) {
    var display_val = document.getElementById(div_id).style.display;
    if (display_val == "none") {
        document.getElementById(div_id).style.display = 'block';
    } else {
        document.getElementById(div_id).style.display = 'none';
    }
}


/* ============== Call of select Method  ============== */
function payment_of_cash(price, start_date, end_date) {

    var title_text = 'دفع مستحقات تبايع (' + price + ' ريال)';
    var text = 'دفع مستحقات منصة تبايع من أرباح عمليات الدفع عند الاستلام، في حال تأخر التاجر عن دفعها عن التاريخ المحدد سيعرض المتجر للإيقاف! الدفع متوفر فقط عن طريق البطاقة الائتمانية أو بطاقة مدى.';

    if (!isEmpty(price) && !isEmpty(start_date) && !isEmpty(end_date)) {

        var payment_method = document.getElementById("general_payment_method").value;

        document.getElementById("loader_payment_text").innerHTML = 'جاري تحويلك لصفحة الدفع!<br> لا تغلق التطبيق!';
        document.getElementById("loader_payment").style.display = 'block';

        setTimeout(function () {
            document.getElementById("loader_payment").style.display = 'none';
            var networkState = navigator.connection.type;
            var states = {};
            states[Connection.UNKNOWN] = 'Unknown connection';
            states[Connection.ETHERNET] = 'Ethernet connection';
            states[Connection.WIFI] = 'WiFi connection';
            states[Connection.CELL_2G] = 'Cell 2G connection';
            states[Connection.CELL_3G] = 'Cell 3G connection';
            states[Connection.CELL_4G] = 'Cell 4G connection';
            states[Connection.CELL] = 'Cell generic connection';
            states[Connection.NONE] = 'No network connection';
            if ((states[networkState]) == states[Connection.NONE]) {
                navigator.notification.alert('هناك مشكلة في الاتصال بالشبكة !! حاول مرة أخرى رجاء!!', null, 'لا يوجد اتصال بالشبكة', 'حسنا');

            } else {

                localStorage.setItem("back_button", "home_button");

                document.getElementById("loader_payment_text").innerHTML = 'جاري تحويلك لصفحة الدفع!<br> لا تغلق التطبيق!';
                document.getElementById("loader_payment").style.display = 'block';

                alert("https://tabayu.com/ajax_app/seller/v2/payment.php?kind=open_payment_of_cash&price=" + price + "&user_id=" + localStorage.getItem("user_id") + "&start=" + start_date + "&end=" + end_date + "&payment_method=" + payment_method)
                document.getElementById("back_button").value = 'yes';
                var tb = cordova.ThemeableBrowser.open("https://tabayu.com/ajax_app/seller/v2/payment.php?kind=open_payment_of_cash&price=" + price + "&user_id=" + localStorage.getItem("user_id") + "&start=" + start_date + "&end=" + end_date + "&payment_method=" + payment_method, '_blank', {
                    statusbar: {
                        color: '#ffffffff'
                    },
                    toolbar: {
                        height: 50,
                        color: '#2c2c54'
                    },

                    title: {
                        color: '#ffffff',
                        staticText: 'دفع مستحقات المنصة'
                        // showPageTitle: true
                    }
                }).addEventListener('loadstart', function (e) {
                    if (e.url == 'https://tabayu.com/close') {
                        tb.close();
                        document.getElementById("back_button").value = 'no';


                        document.getElementById("loader_payment_text").innerHTML = 'جاري التأكد من عملية الدفع!<br> لا تغلق التطبيق!';
                        document.getElementById("loader_payment").style.display = 'block';
                        var the_data = "user_id=" + localStorage.getItem("user_id") + "&price=" + price + "&start=" + start_date + "&end=" + end_date;
                        $.ajax({
                            type: 'POST',
                            url: "https://tabayu.com/ajax_app/seller/v2/money.php?kind=check_payemnt_cash",
                            data: the_data,
                            cache: false,
                            success: function (data, textStatus, jqXHR) {

                                var json_objs = JSON.stringify(data);
                                var json = JSON.parse(json_objs);

                                if (json == "yes") {
                                    money_button();
                                    window.plugins.toast.showWithOptions({
                                        message: "تم دفع المستحقات بنجاح!!",
                                        duration: "long",
                                        position: "bottom",
                                        addPixelsY: -40
                                    });
                                } else if (json == "no_payemnt") {
                                    navigator.notification.alert('هناك مشكلة في حفظ معلومات الدفع! إذا كنت قد دفعت فيجب عليك التواصل مع الدعم الفني', null, 'لم يتم حفظ الدفع', 'حسنا');

                                } else if (json == "no_insert") {
                                    navigator.notification.alert('تم الدفع بنجاح!، لكن هناك مشكلة في حفظ معلومات دفع المستحقات! يجب عليك التواصل مع الدعم الفني', null, 'لم يتم حفظ المعلومات', 'حسنا');

                                } else if (json == "no") {
                                    navigator.notification.alert('لم يتم الدفع بنجاح! حاول مرة أخرى', null, 'لم يتم الدفع', 'حسنا');

                                } else if (json == "not") {
                                    navigator.notification.alert('لم يتم تثبيت المنتج! حاول مرة أخرى', null, 'المعلومات المطلوبة غير مكتملة', 'حسنا');
                                }

                                document.getElementById("loader_payment").style.display = 'none';

                            },
                            error: function (jqXHR, textStatus, errorThrown) {
                                navigator.notification.alert('هناك مشكلة في الاتصال !! حاول مرة أخرى رجاء!!', null, 'لا يوجد اتصال', 'حسنا');
                                document.getElementById("loader_payment").style.display = 'none';
                            }
                        });


                        /*
                            
                                هنا معلومات مهمة وتأكد من صحة المعلومات
                            
                                */
                    }

                    if (e.url == 'https://tabayu.com/out') {
                        tb.close();
                    }
                }).addEventListener(cordova.ThemeableBrowser.EVT_ERR, function (e) {
                    console.error(e.message);
                }).addEventListener(cordova.ThemeableBrowser.EVT_WRN, function (e) {
                    console.error(e.message);
                });
            }

        }, 2000);
    }


}


/* ============== Call of Delete store   ============== */
function call_delete_store() {

    var reason = document.getElementById("reason_delete_store").value;
    var user_id = localStorage.getItem("user_id");

    $('#delete_store_box textarea').css('borderColor', '#ddd');
    $('#delete_store_box .error_delete_store').css('color', 'transparent');


    if (isEmpty(reason)) {
        document.getElementsByClassName('error_delete_store')[0].style.color = 'red';
        document.getElementById('reason_delete_store').style.borderColor = 'red';
    }

    //delete_store_box

    if (!isEmpty(user_id) && !isEmpty(reason)) {

        navigator.notification.confirm('سيتم حذف متجرك نهائياً ! بالضغط على موافق انت توافق على الشروط والأحكام؟', onConfirm, 'حذف المتجر', ['موافق', 'تجاهل']);

        function onConfirm(buttonIndex) {
            if (buttonIndex == 1) {

                document.getElementById("loads_small").style.display = 'block';
                var the_data = "user_id=" + localStorage.getItem("user_id") + "&reason=" + reason;
                $.ajax({
                    type: 'POST',
                    url: "https://tabayu.com/ajax_app/seller/v2/info.php?kind=add_delete_store",
                    data: the_data,
                    cache: false,
                    success: function (data, textStatus, jqXHR) {
                        var json_objs = JSON.stringify(data);
                        var json = JSON.parse(json_objs);

                        if (json == "yes") {

                            localStorage.setItem("login_status", "no");
                            $('#footers').css('display', 'none');
                            $('.page').css('display', 'none');
                            document.getElementById('login').style.display = 'block';
                            var the_data = "user_id=" + localStorage.getItem("user_id") + "&type=no&id=" + localStorage.getItem("registrationId");
                            $.ajax({
                                type: 'POST',
                                url: "https://tabayu.com/ajax_app/seller/v2/home.php?kind=logout_notification",
                                data: the_data,
                                cache: false,
                                success: function (data, textStatus, jqXHR) {},
                                error: function (jqXHR, textStatus, errorThrown) {}
                            });

                            window.location.href = '#';
                            document.getElementById("loads_small").style.display = 'none';
                            window.plugins.toast.showWithOptions({
                                message: "تم حذف المتجر بنجاح!!",
                                duration: "long",
                                position: "bottom",
                                addPixelsY: -40
                            });
                            //  document.getElementById("delete_store_box2").style.display = 'none';

                        } else if (json == 'no' || json == 'not') {
                            navigator.notification.alert('حاول مرة أخرى ', null, 'هناك مشكلة', 'حسنا');
                        }
                        document.getElementById("loads_small").style.display = 'none';
                    },

                    error: function (jqXHR, textStatus, errorThrown) {
                        navigator.notification.alert('هناك مشكلة في الاتصال ! حاول مرة أخرى رجاء!!', null, 'لا يوجد اتصال', 'حسنا');
                        document.getElementById("loads_small").style.display = 'none';
                    }
                });
            }
        }
    }
}


/* ======================== Call of Add Store Notice ======================== */
function call_add_store_notice() {


    var details = document.getElementById('store_notice').value;
    var user_id = localStorage.getItem("user_id");
    var check_words = 0;

    $('#store_notice').css('borderColor', '#ddd');
    $('.store_notice_error').css('color', 'transparent');


    if (isEmpty(details)) {
        document.getElementsByClassName('store_notice_error')[0].style.color = 'red';
        document.getElementById('store_notice').style.borderColor = 'red';
    } 

    if (!isEmpty(details)) {

        document.getElementById("loads_small").style.display = 'block';
        var the_data = "details=" + details + "&user_id=" + user_id;

        $.ajax({
            type: 'POST',
            url: "https://tabayu.com/ajax_app/seller/v2/info.php?kind=add_store_notice",
            data: the_data,
            cache: false,
            success: function (data, textStatus, jqXHR) {

                var json_objs = JSON.stringify(data);
                var json = JSON.parse(json_objs);

                if (json == "yes") {

                    store_info_button(3);

                    window.plugins.toast.showWithOptions({
                        message: "تم إضافة الإعلان بنجاح!!",
                        duration: "long",
                        position: "bottom",
                        addPixelsY: -40
                    });
                }
                else if (json == "not") {
                    document.getElementsByClassName('store_notice_error')[0].style.color = 'red';
                    document.getElementById('store_notice').style.borderColor = 'red';
                }
                else {
                     window.plugins.toast.showWithOptions({
                        message: "هناك مشكلة! حاول مرة أخرى!",
                        duration: "long",
                        position: "bottom",
                        addPixelsY: -40
                    });
                }

                document.getElementById("loads_small").style.display = 'none';

            },
            error: function (jqXHR, textStatus, errorThrown) {
                call_add_store_notice();
            }
        });

        //store_info_button(2);
    }
}


/* ======================== Call of Edit Store Notice ======================== */
function call_edit_store_notice() {


    var details = document.getElementById('store_notice').value;
    var user_id = localStorage.getItem("user_id");
    var check_words = 0;


    $('#store_notice').css('borderColor', '#ddd');
    $('.store_notice_error').css('color', 'transparent');


    if (isEmpty(details)) {
        document.getElementsByClassName('store_notice_error')[0].style.color = 'red';
        document.getElementById('store_notice').style.borderColor = 'red';
    } 

    if (!isEmpty(details)) {

        document.getElementById("loads_small").style.display = 'block';
        var the_data = "details=" + details + "&user_id=" + user_id;

        $.ajax({
            type: 'POST',
            url: "https://tabayu.com/ajax_app/seller/v2/info.php?kind=edit_store_notice",
            data: the_data,
            cache: false,
            success: function (data, textStatus, jqXHR) {

                var json_objs = JSON.stringify(data);
                var json = JSON.parse(json_objs);

                if (json == "yes") {

                    store_info_button(3);

                    window.plugins.toast.showWithOptions({
                        message: "تم تحديث الإعلان بنجاح!!",
                        duration: "long",
                        position: "bottom",
                        addPixelsY: -40
                    });
                }
                else if (json == "same") {
                    navigator.notification.alert('يجب عليك تغيير المعلومات أولا حتى تستطيع حفظ التعديل', null, 'لم تقم بتغيير المعلومات', 'حسنا');
                }
                else if (json == "not") {
                    document.getElementsByClassName('store_notice_error')[0].style.color = 'red';
                    document.getElementById('store_notice').style.borderColor = 'red';
                }
                else {
                    window.plugins.toast.showWithOptions({
                        message: "هناك مشكلة! حاول مرة أخرى!",
                        duration: "long",
                        position: "bottom",
                        addPixelsY: -40
                    });
                }

                document.getElementById("loads_small").style.display = 'none';

            },
            error: function (jqXHR, textStatus, errorThrown) {
                call_edit_store_notice();
            }
        });

    }
}


/* ======================== Call of Delete Store Notice ======================== */
function call_delete_store_notice() {
    
    navigator.notification.confirm('هل أنت متأكد أنك تريد حذف الإعلان النصي؟', onConfirm, 'حذف الإعلان؟', ['نعم', 'إلغاء']);

    function onConfirm(buttonIndex) {
            
        if (buttonIndex == 1) {

            document.getElementById("loads_small").style.display = 'block';
            var the_data = "user_id=" + localStorage.getItem("user_id");
            $.ajax({
                type: 'POST',
                url: "https://tabayu.com/ajax_app/seller/v2/info.php?kind=delete_store_notice",
                data: the_data,
                cache: false,
                success: function (data, textStatus, jqXHR) {
                    var json_objs = JSON.stringify(data);
                    var json = JSON.parse(json_objs);

                    if (json == "yes") {

                        store_info_button(3);
                        document.getElementById("loads_small").style.display = 'none';
                        window.plugins.toast.showWithOptions({
                            message: "تم حذف الإعلان بنجاح!!",
                            duration: "long",
                            position: "bottom",
                            addPixelsY: -40
                        });

                    } else if (json == 'no' || json == 'not') {
                         window.plugins.toast.showWithOptions({
                             message: "هناك مشكلة! حاول مرة أخرى!",
                             duration: "long",
                             position: "bottom",
                             addPixelsY: -40
                         });
                    }
                    document.getElementById("loads_small").style.display = 'none';
                },

                error: function (jqXHR, textStatus, errorThrown) {
                }
            });
        }
    }
 
}


/* ======================== Select Banner Image ======================== */
function select_banner_image(inputs, image) {

    navigator.camera.getPicture(function (imageURI) {
        if (imageURI.startsWith("content://")) {
            window.FilePath.resolveNativePath(imageURI, function (localFileUri) {
                   
                document.getElementById(inputs).src = localFileUri;
                document.getElementById(image).value = localFileUri;
            
            });

        } else {

            document.getElementById(inputs).src = imageURI;
            document.getElementById(image).value = imageURI;            
        }

    }, function () {
        window.plugins.toast.showWithOptions({
            message: "لم يتم إرفاق الصورة!!",
            duration: "long",
            position: "bottom",
            addPixelsY: -40
        });
    }, {
        quality: 50,
        destinationType: navigator.camera.DestinationType.FILE_URI,
        sourceType: Camera.PictureSourceType.SAVEDPHOTOALBUM,
        mediaType: Camera.MediaType.PICTURE,
    });


}


/* ======================== Upload Banner Image ======================== */
function call_upload_banner_image() {

    var banner = document.getElementById('banner_image1').value;
    var user_id = localStorage.getItem("user_id");
    var image = document.getElementById('add_banner_image').src;
    var image_name = makeid();

    document.getElementsByClassName('image-banner-table-block')[0].style.borderColor = '#ddd';

    if (banner == "") {
        document.getElementsByClassName('image-banner-table-block')[0].style.borderColor = 'red';
    }
    if (banner != "" && image != null) {

        var options = new FileUploadOptions();
        options.fileKey = "file";
        options.fileName = image_name;
        options.mimeType = "image/jpeg";

        var params = new Object();
        params.user_id = localStorage.getItem("user_id");
        options.params = params;
        options.headers = {
            Connection: "close"
        };

        options.chunkedMode = false;
        var ft = new FileTransfer();
        ft.upload(image, encodeURI("https://tabayu.com/ajax_app/seller/v2/info.php?kind=upload_offer_banner"), function () {

            store_info_button(3);

            window.plugins.toast.showWithOptions({
                message: "تم رفع الصورة بنجاح!!",
                duration: "long",
                position: "bottom",
                addPixelsY: -40
            });

        }, function () {
            navigator.notification.alert('هناك مشكلة في الاتصال !! حاول مرة أخرى رجاء!!', null, 'لا يوجد اتصال', 'حسنا');
        }, options);
        //store_info_button(2);
    }
}



/* ======================== Call of Delete Banner Image ======================== */
function call_delete_banner_image(id) {
    
    alert(id)
    navigator.notification.confirm('هل أنت متأكد أنك تريد حذف هذه الصورة؟', onConfirm, 'حذف الصورة الإعلانية', ['نعم', 'إلغاء']);

    function onConfirm(buttonIndex) {
            
        if (buttonIndex == 1) {

            if(id != ""){
                
            document.getElementById("loads_small").style.display = 'block';
            var the_data = "user_id=" + localStorage.getItem("user_id") + "&id=" + id;
            $.ajax({
                type: 'POST',
                url: "https://tabayu.com/ajax_app/seller/v2/info.php?kind=delete_banner_image",
                data: the_data,
                cache: false,
                success: function (data, textStatus, jqXHR) {
                    var json_objs = JSON.stringify(data);
                    var json = JSON.parse(json_objs);

                    alert(json);
                    if (json == "yes") {

                        store_info_button(3);
                        document.getElementById("loads_small").style.display = 'none';
                        window.plugins.toast.showWithOptions({
                            message: "تم حذف الصورة بنجاح!!",
                            duration: "long",
                            position: "bottom",
                            addPixelsY: -40
                        });

                    } else if (json == 'no' || json == 'not') {
                         window.plugins.toast.showWithOptions({
                             message: "هناك مشكلة! حاول مرة أخرى!",
                             duration: "long",
                             position: "bottom",
                             addPixelsY: -40
                         });
                    }
                    document.getElementById("loads_small").style.display = 'none';
                },

                error: function (jqXHR, textStatus, errorThrown) {
                }
            });
            }
        }
    }
 
}



/* ===========================================================================================================================*/
/* =====================================              RENEW MEMBER              ==============================================*/
/* ===========================================================================================================================*/

/* ============== Call of select pakage  ============== */
function open_renew_box(show) {

    document.getElementById("coupon_renew_button").disabled = false;
    document.getElementById("renew_coupon").readOnly = false;

    document.getElementById("renew_payment_free").value = 'no';
    document.getElementById("renew_coupon_done").value = null;
    document.getElementById("renew_coupon").value = null;
    document.getElementById('renew_coupon_text').style.display = 'none';
    document.getElementById("renew_package").value = null;
    document.getElementById("renew_payment_method").value = null;
    document.getElementById('renew_box_cancel').style.display = show;
    $('.renew_error').css('color', 'transparent');
    document.getElementsByClassName('renew_package_check')[0].innerHTML = '<center><img src="img/un-checked-order.png"></center>';
    document.getElementsByClassName('renew_package_check')[1].innerHTML = '<center><img src="img/un-checked-order.png"></center>';
    document.getElementsByClassName('renew_package_check')[2].innerHTML = '<center><img src="img/un-checked-order.png"></center>';

    document.getElementsByClassName('renew_method_check')[0].innerHTML = '<center><img src="img/un-checked-order.png"></center>';
    document.getElementsByClassName('renew_method_check')[1].innerHTML = '<center><img src="img/un-checked-order.png"></center>';
    window.location.href = "#renew_box";
}


/* ============== Call of select pakage  ============== */
function choose_member_package(package, type) {

    if (type == 'renew') {
        document.getElementById("renew_package").value = package;

        if (package == '1') {
            document.getElementsByClassName('renew_package_check')[0].innerHTML = '<center><img src="img/checked-order.png"></center>';
            document.getElementsByClassName('renew_package_check')[1].innerHTML = '<center><img src="img/un-checked-order.png"></center>';
            document.getElementsByClassName('renew_package_check')[2].innerHTML = '<center><img src="img/un-checked-order.png"></center>';

        } else if (package == '6') {
            document.getElementsByClassName('renew_package_check')[0].innerHTML = '<center><img src="img/un-checked-order.png"></center>';
            document.getElementsByClassName('renew_package_check')[1].innerHTML = '<center><img src="img/checked-order.png"></center>';
            document.getElementsByClassName('renew_package_check')[2].innerHTML = '<center><img src="img/un-checked-order.png"></center>';

        } else if (package == '12') {
            document.getElementsByClassName('renew_package_check')[0].innerHTML = '<center><img src="img/un-checked-order.png"></center>';
            document.getElementsByClassName('renew_package_check')[1].innerHTML = '<center><img src="img/un-checked-order.png"></center>';
            document.getElementsByClassName('renew_package_check')[2].innerHTML = '<center><img src="img/checked-order.png"></center>';
        }

    }

    if (type == 'upgrade') {
        document.getElementById("upgrade_package").value = package;

        if (package == '1') {
            document.getElementsByClassName('upgrade_package_check')[0].innerHTML = '<center><img src="img/checked-order.png"></center>';
            document.getElementsByClassName('upgrade_package_check')[1].innerHTML = '<center><img src="img/un-checked-order.png"></center>';
            document.getElementsByClassName('upgrade_package_check')[2].innerHTML = '<center><img src="img/un-checked-order.png"></center>';

        } else if (package == '6') {
            document.getElementsByClassName('upgrade_package_check')[0].innerHTML = '<center><img src="img/un-checked-order.png"></center>';
            document.getElementsByClassName('upgrade_package_check')[1].innerHTML = '<center><img src="img/checked-order.png"></center>';
            document.getElementsByClassName('upgrade_package_check')[2].innerHTML = '<center><img src="img/un-checked-order.png"></center>';

        } else if (package == '12') {
            document.getElementsByClassName('upgrade_package_check')[0].innerHTML = '<center><img src="img/un-checked-order.png"></center>';
            document.getElementsByClassName('upgrade_package_check')[1].innerHTML = '<center><img src="img/un-checked-order.png"></center>';
            document.getElementsByClassName('upgrade_package_check')[2].innerHTML = '<center><img src="img/checked-order.png"></center>';
        }

    }


    if (type == 'signup') {
        document.getElementById("signup_package_duration").value = package;

        if (package == '1') {
            document.getElementsByClassName('signup_package_check')[0].innerHTML = '<center><img src="img/checked-order.png"></center>';
            document.getElementsByClassName('signup_package_check')[1].innerHTML = '<center><img src="img/un-checked-order.png"></center>';
            document.getElementsByClassName('signup_package_check')[2].innerHTML = '<center><img src="img/un-checked-order.png"></center>';

        } else if (package == '6') {
            document.getElementsByClassName('signup_package_check')[0].innerHTML = '<center><img src="img/un-checked-order.png"></center>';
            document.getElementsByClassName('signup_package_check')[1].innerHTML = '<center><img src="img/checked-order.png"></center>';
            document.getElementsByClassName('signup_package_check')[2].innerHTML = '<center><img src="img/un-checked-order.png"></center>';

        } else if (package == '12') {
            document.getElementsByClassName('signup_package_check')[0].innerHTML = '<center><img src="img/un-checked-order.png"></center>';
            document.getElementsByClassName('signup_package_check')[1].innerHTML = '<center><img src="img/un-checked-order.png"></center>';
            document.getElementsByClassName('signup_package_check')[2].innerHTML = '<center><img src="img/checked-order.png"></center>';
        }

    }

}


/* ============== Call of select pakage  ============== */
function choose_payment_method(method, type) {

    if (type == 'renew') {
        document.getElementById("renew_payment_method").value = method;

        if (method == 'mada') {
            document.getElementsByClassName('renew_method_check')[0].innerHTML = '<center><img src="img/checked-order.png"></center>';
            document.getElementsByClassName('renew_method_check')[1].innerHTML = '<center><img src="img/un-checked-order.png"></center>';

        } else if (method == 'visa') {
            document.getElementsByClassName('renew_method_check')[0].innerHTML = '<center><img src="img/un-checked-order.png"></center>';
            document.getElementsByClassName('renew_method_check')[1].innerHTML = '<center><img src="img/checked-order.png"></center>';
        }

    }

    if (type == 'upgrade') {
        document.getElementById("upgrade_payment_method").value = method;

        if (method == 'mada') {
            document.getElementsByClassName('upgrade_method_check')[0].innerHTML = '<center><img src="img/checked-order.png"></center>';
            document.getElementsByClassName('upgrade_method_check')[1].innerHTML = '<center><img src="img/un-checked-order.png"></center>';

        } else if (method == 'visa') {
            document.getElementsByClassName('upgrade_method_check')[0].innerHTML = '<center><img src="img/un-checked-order.png"></center>';
            document.getElementsByClassName('upgrade_method_check')[1].innerHTML = '<center><img src="img/checked-order.png"></center>';
        }

    }

    if (type == 'signup') {
        document.getElementById("signup_payment_method").value = method;

        if (method == 'mada') {
            document.getElementsByClassName('signup_method_check')[0].innerHTML = '<center><img src="img/checked-order.png"></center>';
            document.getElementsByClassName('signup_method_check')[1].innerHTML = '<center><img src="img/un-checked-order.png"></center>';

        } else if (method == 'visa') {
            document.getElementsByClassName('signup_method_check')[0].innerHTML = '<center><img src="img/un-checked-order.png"></center>';
            document.getElementsByClassName('signup_method_check')[1].innerHTML = '<center><img src="img/checked-order.png"></center>';
        }
    }

    if (type == 'general') {
        document.getElementById("general_payment_method").value = method;

        if (method == 'mada') {
            document.getElementsByClassName('general_method_check')[0].innerHTML = '<center><img src="img/checked-order.png"></center>';
            document.getElementsByClassName('general_method_check')[1].innerHTML = '<center><img src="img/un-checked-order.png"></center>';

        } else if (method == 'visa') {
            document.getElementsByClassName('general_method_check')[0].innerHTML = '<center><img src="img/un-checked-order.png"></center>';
            document.getElementsByClassName('general_method_check')[1].innerHTML = '<center><img src="img/checked-order.png"></center>';
        }
    }

    if (type == 'fixed_product') {
        document.getElementById("product_fixed_payment_method").value = method;

        if (method == 'mada') {
            document.getElementsByClassName('fixed_product_method_check')[0].innerHTML = '<center><img src="img/checked-order.png"></center>';
            document.getElementsByClassName('fixed_product_method_check')[1].innerHTML = '<center><img src="img/un-checked-order.png"></center>';

        } else if (method == 'visa') {
            document.getElementsByClassName('fixed_product_method_check')[0].innerHTML = '<center><img src="img/un-checked-order.png"></center>';
            document.getElementsByClassName('fixed_product_method_check')[1].innerHTML = '<center><img src="img/checked-order.png"></center>';
        }
    }

    if (type == 'fixed_store') {
        document.getElementById("store_fixed_payment_method").value = method;

        if (method == 'mada') {
            document.getElementsByClassName('fixed_store_method_check')[0].innerHTML = '<center><img src="img/checked-order.png"></center>';
            document.getElementsByClassName('fixed_store_method_check')[1].innerHTML = '<center><img src="img/un-checked-order.png"></center>';

        } else if (method == 'visa') {
            document.getElementsByClassName('fixed_store_method_check')[0].innerHTML = '<center><img src="img/un-checked-order.png"></center>';
            document.getElementsByClassName('fixed_store_method_check')[1].innerHTML = '<center><img src="img/checked-order.png"></center>';
        }
    }

}


/* ============== Valid Payment Method ============== */
function show_payment_method(type, price, start_date, end_date, product_no) {

    document.getElementsByClassName('general_method_check')[0].innerHTML = '<center><img src="img/un-checked-order.png"></center>';
    document.getElementsByClassName('general_method_check')[1].innerHTML = '<center><img src="img/un-checked-order.png"></center>';
    document.getElementById("general_payment_method").value = null;
    document.getElementById("general_payment_method_type").value = type;
    document.getElementById("general_price_text").innerHTML = 'المبلغ: <span style="font-weight: bold; font-family: sans-serif; font-size:15px">' + price + ' <span style="font-size:11px">SAR</span></span>';
    window.location.href = "#payment_method_box";

    document.getElementById("general_payment_method_button").onclick = function () {
        var payment_method = document.getElementById("general_payment_method").value;
        $('.general_error').css('color', 'transparent');

        if (isEmpty(payment_method)) {
            document.getElementsByClassName('general_error')[0].style.color = 'red';
        }

        if (!isEmpty(payment_method)) {

            window.location.href = "#";
            if (type == 'payment_of_cash') {
                var title_text = 'دفع مستحقات تبايع';
                var text = 'دفع مستحقات منصة تبايع من أرباح عمليات الدفع عند الاستلام، في حال تأخر التاجر عن دفعها عن التاريخ المحدد سيعرض المتجر للإيقاف! الدفع متوفر فقط عن طريق البطاقة الائتمانية أو بطاقة مدى.';

                navigator.notification.confirm(text, onConfirm, title_text, ['الدفع الآن', 'لاحقا']);

                function onConfirm(buttonIndex) {
                    if (buttonIndex == 1) {
                        payment_of_cash(price, start_date, end_date);
                    }
                }
            }
            if (type == 'product_up') {
                call_up_product(product_no);
            }
            if (type == 'store_up') {
                call_up_store_button();
            }
        }
    };

}


/* ============== Call of Renew  ============== */
function renew_membership() {

    var package = document.getElementById("renew_package").value;
    var payment_method = document.getElementById("renew_payment_method").value;
    var coupon = document.getElementById("renew_coupon_done").value;
    var payment_free = document.getElementById("renew_payment_free").value;

    alert(payment_free +'===='+coupon)

    $('.renew_error').css('color', 'transparent');

    if (isEmpty(package)) {
        document.getElementsByClassName('renew_error')[0].style.color = 'red';
    }

    if (isEmpty(payment_method)) {
        document.getElementsByClassName('renew_error')[1].style.color = 'red';
    }

    if (!isEmpty(package) && !isEmpty(payment_method)) {

        if (payment_free == 'yes' && !isEmpty(coupon)) {
            free_membership('renew');
            
        }
        if (payment_free != 'yes') {

            document.getElementById("loader_payment_text").innerHTML = 'جاري تحويلك لصفحة الدفع!<br> لا تغلق التطبيق!';
            document.getElementById("loader_payment").style.display = 'block';

            setTimeout(function () {

                document.getElementById("loader_payment").style.display = 'none';

                var networkState = navigator.connection.type;
                var states = {};
                states[Connection.UNKNOWN] = 'Unknown connection';
                states[Connection.ETHERNET] = 'Ethernet connection';
                states[Connection.WIFI] = 'WiFi connection';
                states[Connection.CELL_2G] = 'Cell 2G connection';
                states[Connection.CELL_3G] = 'Cell 3G connection';
                states[Connection.CELL_4G] = 'Cell 4G connection';
                states[Connection.CELL] = 'Cell generic connection';
                states[Connection.NONE] = 'No network connection';
                if ((states[networkState]) == states[Connection.NONE]) {
                    navigator.notification.alert('هناك مشكلة في الاتصال بالشبكة !! حاول مرة أخرى رجاء!!', null, 'لا يوجد اتصال بالشبكة', 'حسنا');
                    document.getElementById("loader_payment").style.display = 'none';

                } else {

                    document.getElementById("back_button").value = 'yes';
                    var tb = cordova.ThemeableBrowser.open("https://tabayu.com/ajax_app/seller/v2/payment.php?kind=open_payment_of_membership&package=" + package + "&user_id=" + localStorage.getItem("user_id") + "&payment_method=" + payment_method + "&coupon=" + coupon, '_blank', {
                        statusbar: {
                            color: '#ffffffff'
                        },
                        toolbar: {
                            height: 50,
                            color: '#2c2c54'
                        },
                        title: {
                            color: '#ffffff',
                            staticText: 'تجديد باقة المتجر'
                            // showPageTitle: true
                        }
                    }).addEventListener('loadstart', function (e) {
                        if (e.url == 'https://tabayu.com/close') {
                            tb.close();

                            document.getElementById("back_button").value = 'no';
                            document.getElementById("loader_payment_text").innerHTML = 'جاري التأكد من عملية الدفع!<br> لا تغلق التطبيق!';
                            document.getElementById("loader_payment").style.display = 'block';

                            var the_data = "user_id=" + localStorage.getItem("user_id") + "&package=" + package + "&payment_method=" + payment_method;
                            $.ajax({
                                type: 'POST',
                                url: "https://tabayu.com/ajax_app/seller/v2/marketing.php?kind=check_payemnt_membership",
                                data: the_data,
                                cache: false,
                                success: function (data, textStatus, jqXHR) {

                                    var json_objs = JSON.stringify(data);
                                    var json = JSON.parse(json_objs);

                                    if (json == "yes") {
                                        window.location.href = "#";
                                        home_button();
                                        navigator.notification.alert('تم تجديد باقة المتجر بنجاح! يمكنك الآن الاستمتاع بالعديد من المزايا الإضافية!', null, 'مبروك! تم تجديد الباقة', 'حسنا');
                                        window.plugins.toast.showWithOptions({
                                            message: "تمت الترقية بنجاح!!",
                                            duration: "long",
                                            position: "bottom",
                                            addPixelsY: -40
                                        });
                                    } else if (json == "no_payemnt") {
                                        navigator.notification.alert('هناك مشكلة في حفظ معلومات الدفع! إذا كنت قد دفعت فيجب عليك التواصل مع الدعم الفني', null, 'لم يتم حفظ الدفع', 'حسنا');

                                    } else if (json == "no_insert") {
                                        navigator.notification.alert('تم الدفع بنجاح!، لكن هناك مشكلة في حفظ معلومات الترقية! يجب عليك التواصل مع الدعم الفني', null, 'لم يتم حفظ الترقية', 'حسنا');

                                    } else {
                                        navigator.notification.alert('لم تتم الترقية والدفع بنجاح! حاول مرة أخرى', null, 'لم تتم الترقية', 'حسنا');
                                    }

                                    document.getElementById("loader_payment").style.display = 'none';

                                },
                                error: function (jqXHR, textStatus, errorThrown) {
                                    navigator.notification.alert('هناك مشكلة في الاتصال !! حاول مرة أخرى رجاء!!', null, 'لا يوجد اتصال', 'حسنا');
                                    document.getElementById("loader_payment").style.display = 'none';
                                }
                            });


                        }
                    }).addEventListener(cordova.ThemeableBrowser.EVT_ERR, function (e) {
                        console.error(e.message);
                    }).addEventListener(cordova.ThemeableBrowser.EVT_WRN, function (e) {
                        console.error(e.message);
                    });

                    document.getElementById("loader_payment").style.display = 'none';
                }


            }, 3000);
        }
    }



}


/* ============== Call of Upgrade  ============== */
function upgrade_membership() {

    var package = document.getElementById("upgrade_package").value;
    var payment_method = document.getElementById("upgrade_payment_method").value;
    var coupon = document.getElementById("upgrade_coupon_done").value;
    var payment_free = document.getElementById("upgrade_payment_free").value;
    $('.upgrade_error').css('color', 'transparent');

    if (isEmpty(package)) {
        document.getElementsByClassName('upgrade_error')[0].style.color = 'red';
    }

    if (isEmpty(payment_method)) {
        document.getElementsByClassName('upgrade_error')[1].style.color = 'red';
    }

    if (!isEmpty(package) && !isEmpty(payment_method)) {

        if (payment_free == 'yes' && !isEmpty(coupon)) {
            free_membership('upgrade');
            
        }
        if (payment_free != 'yes') {
        document.getElementById("loader_payment_text").innerHTML = 'جاري تحويلك لصفحة الدفع!<br> لا تغلق التطبيق!';
        document.getElementById("loader_payment").style.display = 'block';

        setTimeout(function () {

            document.getElementById("loader_payment").style.display = 'none';

            var networkState = navigator.connection.type;
            var states = {};
            states[Connection.UNKNOWN] = 'Unknown connection';
            states[Connection.ETHERNET] = 'Ethernet connection';
            states[Connection.WIFI] = 'WiFi connection';
            states[Connection.CELL_2G] = 'Cell 2G connection';
            states[Connection.CELL_3G] = 'Cell 3G connection';
            states[Connection.CELL_4G] = 'Cell 4G connection';
            states[Connection.CELL] = 'Cell generic connection';
            states[Connection.NONE] = 'No network connection';
            if ((states[networkState]) == states[Connection.NONE]) {
                navigator.notification.alert('هناك مشكلة في الاتصال بالشبكة !! حاول مرة أخرى رجاء!!', null, 'لا يوجد اتصال بالشبكة', 'حسنا');
                document.getElementById("loader_payment").style.display = 'none';

            } else {

                document.getElementById("back_button").value = 'yes';
                var tb = cordova.ThemeableBrowser.open("https://tabayu.com/ajax_app/seller/v2/payment.php?kind=open_payment_of_membership&package=" + package + "&user_id=" + localStorage.getItem("user_id") + "&payment_method=" + payment_method + "&coupon=" + coupon, '_blank', {
                    statusbar: {
                        color: '#ffffffff'
                    },
                    toolbar: {
                        height: 50,
                        color: '#2c2c54'
                    },
                    title: {
                        color: '#ffffff',
                        staticText: 'ترقية باقة المتجر'
                        // showPageTitle: true
                    }
                }).addEventListener('loadstart', function (e) {
                    if (e.url == 'https://tabayu.com/close') {
                        tb.close();

                        document.getElementById("back_button").value = 'no';
                        document.getElementById("loader_payment_text").innerHTML = 'جاري التأكد من عملية الدفع!<br> لا تغلق التطبيق!';
                        document.getElementById("loader_payment").style.display = 'block';

                        var the_data = "user_id=" + localStorage.getItem("user_id") + "&package=" + package + "&payment_method=" + payment_method;
                        $.ajax({
                            type: 'POST',
                            url: "https://tabayu.com/ajax_app/seller/v2/marketing.php?kind=check_payemnt_membership",
                            data: the_data,
                            cache: false,
                            success: function (data, textStatus, jqXHR) {

                                var json_objs = JSON.stringify(data);
                                var json = JSON.parse(json_objs);

                                if (json == "yes") {
                                    window.location.href = "#";
                                    home_button();
                                    navigator.notification.alert('تم ترقية باقة المتجر بنجاح! يمكنك الآن الاستمتاع بالعديد من المزايا الإضافية!', null, 'مبروك! تم ترقية الباقة', 'حسنا');
                                } else if (json == "no_payemnt") {
                                    navigator.notification.alert('هناك مشكلة في حفظ معلومات الدفع! إذا كنت قد دفعت فيجب عليك التواصل مع الدعم الفني', null, 'لم يتم حفظ الدفع', 'حسنا');

                                } else if (json == "no_insert") {
                                    navigator.notification.alert('تم الدفع بنجاح!، لكن هناك مشكلة في حفظ معلومات الترقية! يجب عليك التواصل مع الدعم الفني', null, 'لم يتم حفظ الترقية', 'حسنا');

                                } else {
                                    navigator.notification.alert('لم تتم الترقية والدفع بنجاح! حاول مرة أخرى', null, 'لم تتم الترقية', 'حسنا');
                                }

                                document.getElementById("loader_payment").style.display = 'none';

                            },
                            error: function (jqXHR, textStatus, errorThrown) {
                                navigator.notification.alert('هناك مشكلة في الاتصال !! حاول مرة أخرى رجاء!!', null, 'لا يوجد اتصال', 'حسنا');
                                document.getElementById("loader_payment").style.display = 'none';
                            }
                        });

                    }
                }).addEventListener(cordova.ThemeableBrowser.EVT_ERR, function (e) {
                    console.error(e.message);
                }).addEventListener(cordova.ThemeableBrowser.EVT_WRN, function (e) {
                    console.error(e.message);
                });

            }

        }, 3000);
        }

    }


}


/* ============== Call of Get Coupon Of Renew  ============== */
function coupon_renew_membership() {

    //coupon_renew_button
    var package = document.getElementById("renew_package").value;
    var coupon = document.getElementById("renew_coupon").value;
    document.getElementsByClassName('renew_error')[2].style.color = 'transparent';
    document.getElementById('renew_coupon').style.borderColor = '#ddd';

    if (!isEmpty(package)) {
        if (isEmpty(coupon)) {
            document.getElementsByClassName('renew_error')[2].style.color = 'red';
            document.getElementById('renew_coupon').style.borderColor = 'red';
        }

        if (!isEmpty(coupon)) {
            //loader_payment

            document.getElementById("loads_small").style.display = 'block';
            var the_data = "user_id=" + localStorage.getItem("user_id") + "&coupon=" + coupon;
            $.ajax({
                type: 'POST',
                url: "https://tabayu.com/ajax_app/seller/v2/marketing.php?kind=check_coupon_membership",
                data: the_data,
                cache: false,
                success: function (data, textStatus, jqXHR) {

                    var json_objs = JSON.stringify(data);
                    var json = JSON.parse(json_objs);

                    if (json == "not") {

                        navigator.notification.alert('يجب عليك الكوبون أولاً حتى تتمكن من الاستفادة منه.', null, 'لم تدخل الكوبون!', 'حسنا');

                    } else if (json == "no") {
                        document.getElementsByClassName('renew_error')[2].innerHTML = 'الكوبون المدخل غير مفعّل!';
                        document.getElementsByClassName('renew_error')[2].style.color = 'red';
                        document.getElementById('renew_coupon').style.borderColor = 'red';

                    } else if (json == "old") {
                        navigator.notification.alert('لا يمكن استخدام الكوبون أكثر من مرة.', null, 'هذا الكوبون مستخدم!', 'حسنا');

                    } else {

                        document.getElementById("coupon_renew_button").disabled = true;
                        document.getElementById("renew_coupon").readOnly = true;


                        var text = 'لقد حصلت على خصم %' + json + ' على إشتراكك في الباقة المتقدمة!';
                        if (json == '100' || json == 100) {
                            text = 'لقد حصلت على إشتراكك مجاني في الباقة المتقدمة!';
                        }
                        navigator.notification.alert(text, null, 'مبروك! حصلت على خصم!!', 'حسنا');

                        //renew_coupon_text
                        var price;
                        if (package == '1') {
                            price = 99 * ((100 - json) / 100);
                        }
                        if (package == '6') {
                            price = 594 * ((100 - json) / 100);
                        }
                        if (package == '12') {
                            price = 1188 * ((100 - json) / 100);
                        }

                        document.getElementById('renew_payment_free').value = 'no';
                        if (price < 1) {
                            document.getElementById('renew_payment_free').value = 'yes';
                        }
                        document.getElementById("renew_coupon_done").value = coupon;
                        
                        document.getElementById('renew_coupon_text').innerHTML = 'السعر بعد الخصم: <span style="font-family: sans-serif; font-weight: bold;">' + price.toFixed(2) + '</span> ريال لإشتراك <span style="font-family: sans-serif; font-weight: bold;">' + package + '</span> أشهر';
                        document.getElementById('renew_coupon_text').style.display = 'block';
                    }

                    document.getElementById("loads_small").style.display = 'none';

                },
                error: function (jqXHR, textStatus, errorThrown) {
                    window.plugins.toast.showWithOptions({
                        message: "حاول مرة أخرى رجاء!",
                        duration: "long",
                        position: "bottom",
                        addPixelsY: -40
                    });
                    document.getElementById("loads_small").style.display = 'none';
                }
            });

        }
    }

    if (isEmpty(package)) {
        document.getElementsByClassName('renew_error')[0].style.color = 'red';
        navigator.notification.alert('يجب عليك أن تختر مدة الاشتراك أولا حتي تتمكن من تفعيل كوبون الخصم', null, 'اختر مدة الاشتراك أولاً', 'حسنا');
    }
}


/* ============== Call of Get Coupon Of Signup  ============== */
function coupon_signup_membership() {

    //coupon_signup_button
    var package = document.getElementById("signup_package_duration").value;
    var coupon = document.getElementById("signup_package_coupon").value;
    document.getElementsByClassName('signup_package_error')[2].style.color = 'transparent';
    document.getElementById('signup_package_coupon').style.borderColor = '#ddd';

    if (!isEmpty(package)) {
        if (isEmpty(coupon)) {
            document.getElementsByClassName('signup_package_error')[2].style.color = 'red';
            document.getElementById('signup_package_coupon').style.borderColor = 'red';
        }

        if (!isEmpty(coupon)) {
            //loader_payment

            document.getElementById("loads_small").style.display = 'block';
            var the_data = "user_id=" + localStorage.getItem("user_id") + "&coupon=" + coupon;
            $.ajax({
                type: 'POST',
                url: "https://tabayu.com/ajax_app/seller/v2/marketing.php?kind=check_new_coupon_membership",
                data: the_data,
                cache: false,
                success: function (data, textStatus, jqXHR) {

                    var json_objs = JSON.stringify(data);
                    var json = JSON.parse(json_objs);

                    if (json == "not") {

                        navigator.notification.alert('يجب عليك الكوبون أولاً حتى تتمكن من الاستفادة منه.', null, 'لم تدخل الكوبون!', 'حسنا');

                    } else if (json == "no") {
                        document.getElementsByClassName('signup_package_error')[2].innerHTML = 'الكوبون المدخل غير مفعّل!';
                        document.getElementsByClassName('signup_package_error')[2].style.color = 'red';
                        document.getElementById('signup_package_coupon').style.borderColor = 'red';

                    } else if (json == "old") {
                        navigator.notification.alert('لا يمكن استخدام الكوبون أكثر من مرة.', null, 'هذا الكوبون مستخدم!', 'حسنا');

                    } else {
                        document.getElementById("coupon_signup_button").disabled = true;
                        document.getElementById("signup_package_coupon").readOnly = true;

                        var text = 'لقد حصلت على خصم %' + json + ' على إشتراكك في الباقة المتقدمة!';
                        if (json == '100' || json == 100) {
                            text = 'لقد حصلت على إشتراكك مجاني في الباقة المتقدمة!';
                        }
                        navigator.notification.alert(text, null, 'مبروك! حصلت على خصم!!', 'حسنا');

                        //signup_package_coupon_text
                        var price;
                        if (package == '1') {
                            price = 99 * ((100 - json) / 100);
                        }
                        if (package == '6') {
                            price = 594 * ((100 - json) / 100);
                        }
                        if (package == '12') {
                            price = 1188 * ((100 - json) / 100);
                        }

                        document.getElementById('signup_payment_free').value = 'no';
                        if (price < 1) {
                            document.getElementById('signup_payment_free').value = 'yes';
                        }
                        document.getElementById("signup_coupon_done").value = coupon;

                        document.getElementById('signup_package_coupon_text').innerHTML = 'السعر بعد الخصم: <span style="font-family: sans-serif; font-weight: bold;">' + price.toFixed(2) + '</span> ريال لإشتراك <span style="font-family: sans-serif; font-weight: bold;">' + package + '</span> أشهر';
                        document.getElementById('signup_package_coupon_text').style.display = 'block';
                    }

                    document.getElementById("loads_small").style.display = 'none';

                },
                error: function (jqXHR, textStatus, errorThrown) {
                    window.plugins.toast.showWithOptions({
                        message: "حاول مرة أخرى رجاء!",
                        duration: "long",
                        position: "bottom",
                        addPixelsY: -40
                    });
                    document.getElementById("loads_small").style.display = 'none';
                }
            });
        }
    }

    if (isEmpty(package)) {
        document.getElementsByClassName('signup_package_error')[0].style.color = 'red';
        navigator.notification.alert('يجب عليك أن تختر مدة الاشتراك أولا حتي تتمكن من تفعيل كوبون الخصم', null, 'اختر مدة الاشتراك أولاً', 'حسنا');
    }
}


/* ============== Call of Upgrade  ============== */
function free_membership(type) {

    if (type == 'upgrade') {
        var package = document.getElementById("upgrade_package").value;
        var payment_method = document.getElementById("upgrade_payment_method").value;
        var coupon = document.getElementById("upgrade_coupon_done").value;
        $('.upgrade_error').css('color', 'transparent');

        if (isEmpty(package)) {
            document.getElementsByClassName('upgrade_error')[0].style.color = 'red';
        }

        if (isEmpty(payment_method)) {
            document.getElementsByClassName('upgrade_error')[1].style.color = 'red';
        }

        if (!isEmpty(package) && !isEmpty(payment_method) && !isEmpty(coupon)) {

            document.getElementById("loads_small").style.display = 'block';
            var the_data = "user_id=" + localStorage.getItem("user_id") + "&package=" + package + "&payment_method=" + payment_method + "&coupon=" + coupon + "&type=" + type;
            $.ajax({
                type: 'POST',
                url: "https://tabayu.com/ajax_app/seller/v2/marketing.php?kind=free_membership",
                data: the_data,
                cache: false,
                success: function (data, textStatus, jqXHR) {

                    var json_objs = JSON.stringify(data);
                    var json = JSON.parse(json_objs);

                    if (json == "yes") {
                        home_button();
                        navigator.notification.alert('تم ترقية باقة المتجر بنجاح! يمكنك الآن الاستمتاع بالعديد من المزايا الإضافية!', null, 'مبروك! تم ترقية الباقة', 'حسنا');

                    } else if (json == "used") {
                        navigator.notification.alert('لا يمكن استخدام الكوبون أكثر من مرة.', null, 'هذا الكوبون مستخدم!', 'حسنا');

                    } else if (json == "not_free") {
                        navigator.notification.alert('حدث تعديل في الكوبون! أعد المحاولة مرة أخرى!', null, 'أعد المحاولة لاحقاً!', 'حسنا');

                    } else {
                        navigator.notification.alert('لم يتم تغيير الباقة بنجاح! حاول مرة أخرى', null, 'لم يتم تغيير الباقة بنجاح', 'حسنا');
                    }

                    document.getElementById("loads_small").style.display = 'none';

                },
                error: function (jqXHR, textStatus, errorThrown) {
                    free_membership(type);
                    document.getElementById("loads_small").style.display = 'none';
                }
            });
        }
    }

    if (type == 'renew') {
        var package = document.getElementById("renew_package").value;
        var payment_method = document.getElementById("renew_payment_method").value;
        var coupon = document.getElementById("renew_coupon_done").value;
        $('.renew_error').css('color', 'transparent');

        if (isEmpty(package)) {
            document.getElementsByClassName('renew_error')[0].style.color = 'red';
        }

        if (isEmpty(payment_method)) {
            document.getElementsByClassName('renew_error')[1].style.color = 'red';
        }

        if (!isEmpty(package) && !isEmpty(payment_method) && !isEmpty(coupon)) {

            document.getElementById("loads_small").style.display = 'block';
            var the_data = "user_id=" + localStorage.getItem("user_id") + "&package=" + package + "&payment_method=" + payment_method + "&coupon=" + coupon + "&type=" + type;
            $.ajax({
                type: 'POST',
                url: "https://tabayu.com/ajax_app/seller/v2/marketing.php?kind=free_membership",
                data: the_data,
                cache: false,
                success: function (data, textStatus, jqXHR) {

                    var json_objs = JSON.stringify(data);
                    var json = JSON.parse(json_objs);

                    if (json == "yes") {
                        home_button();
                        navigator.notification.alert('تم تجديد باقة المتجر بنجاح! يمكنك الآن الاستمتاع بالعديد من المزايا الإضافية!', null, 'مبروك! تم تجديد الباقة', 'حسنا');

                    } else if (json == "used") {
                        navigator.notification.alert('لا يمكن استخدام الكوبون أكثر من مرة.', null, 'هذا الكوبون مستخدم!', 'حسنا');

                    } else if (json == "not_free") {
                        navigator.notification.alert('حدث تعديل في الكوبون! أعد المحاولة مرة أخرى!', null, 'أعد المحاولة لاحقاً!', 'حسنا');

                    } else {
                        navigator.notification.alert('لم يتم تغيير الباقة بنجاح! حاول مرة أخرى', null, 'لم يتم تغيير الباقة بنجاح', 'حسنا');
                    }

                    document.getElementById("loads_small").style.display = 'none';

                },
                error: function (jqXHR, textStatus, errorThrown) {
                    free_membership(type);
                    document.getElementById("loads_small").style.display = 'none';
                }
            });

        }
    }

}




/* ======================== Call of Downgrade ======================== */
function back_downgrade_membership() {


    navigator.notification.confirm('هل أنت متأكد أنك تريد تغيير باقة متجرك إلى الباقة الأساسية، علما أنك سوف تفقد العديد من المزايا ولن تستطيع استرداد الأيام المتبقية من باقتك؟', onConfirm1, 'العودة للباقة الأساسية', ['نعم، أريد العودة', 'إلغاء']);

    function onConfirm1(buttonIndex) {
        if (buttonIndex == 1) {

            document.getElementById("loads_small").style.display = 'block';

            var the_data = "user_id=" + localStorage.getItem("user_id");
            $.ajax({
                type: 'POST',
                url: "https://tabayu.com/ajax_app/seller/v2/marketing.php?kind=downgrade_membership",
                data: the_data,
                cache: false,
                success: function (data, textStatus, jqXHR) {

                    var json_objs = JSON.stringify(data);
                    var json = JSON.parse(json_objs);

                    if (json == "yes") {
                        home_button();
                        window.plugins.toast.showWithOptions({
                            message: "تمت العودة للباقة الأساسية بنجاح!!",
                            duration: "long",
                            position: "bottom",
                            addPixelsY: -40
                        });
                    } else {
                        navigator.notification.alert('لم يتم تغيير الباقة بنجاح! حاول مرة أخرى', null, 'لم يتم تغيير الباقة بنجاح', 'حسنا');
                    }

                    document.getElementById("loads_small").style.display = 'none';

                },
                error: function (jqXHR, textStatus, errorThrown) {
                    downgrade_membership();
                    document.getElementById("loads_small").style.display = 'none';
                }
            });

        }
    }
}


/* ======================== Call of Downgrade ======================== */
function downgrade_membership() {

    document.getElementById("loads_small").style.display = 'block';

    var the_data = "user_id=" + localStorage.getItem("user_id");
    $.ajax({
        type: 'POST',
        url: "https://tabayu.com/ajax_app/seller/v2/marketing.php?kind=downgrade_membership",
        data: the_data,
        cache: false,
        success: function (data, textStatus, jqXHR) {

            var json_objs = JSON.stringify(data);
            var json = JSON.parse(json_objs);

            if (json == "yes") {
                home_button();
                window.plugins.toast.showWithOptions({
                    message: "تمت العودة للباقة الأساسية بنجاح!!",
                    duration: "long",
                    position: "bottom",
                    addPixelsY: -40
                });
            } else {
                navigator.notification.alert('لم يتم تغيير الباقة بنجاح! حاول مرة أخرى', null, 'لم يتم تغيير الباقة بنجاح', 'حسنا');
            }

            document.getElementById("loads_small").style.display = 'none';

        },
        error: function (jqXHR, textStatus, errorThrown) {
            downgrade_membership();
            document.getElementById("loads_small").style.display = 'none';
        }
    });

}

/* ======================== Call of Edit Inventory ======================== *
function call_edit_inventory(id, input) {

    var new_number = document.getElementById(input).value;
    var user_id = localStorage.getItem("user_id");

    $('#inventory input').css('borderColor', '#ddd');
    if (isEmpty(new_number)) {
        document.getElementById(input).style.borderColor = 'red';
        navigator.notification.alert('يجب عليك إدخال رقم واحد على الأقل، إذا كان المنتج غير متوفر فأدخل الرقم 0.', null, 'لا تترك الحقل فارغ', 'حسنا');
    } else if (!/^\d+$/.test(new_number)) {
        document.getElementById(input).style.borderColor = 'red';
        navigator.notification.alert('يجب أن تكون المدخلات أرقاماً إنجليزية فقط!', null, 'المدخلات غير صحيحة', 'حسنا');
    }
    if (!isEmpty(new_number) && /^\d+$/.test(new_number)) {

        navigator.notification.confirm('هل أنت متأكد أنك تريد تعديل مخزون هذا المنتج؟', onConfirm, 'تعديل المخزون', ['متابعة', 'إلغاء']);

        function onConfirm(buttonIndex) {
            if (buttonIndex == 1) {

                if (id != "") {

                    document.getElementById("loads_small").style.display = 'block';
                    var the_data = "user_id=" + localStorage.getItem("user_id") + "&id=" + id + "&number=" + new_number;
                    $.ajax({
                        type: 'POST',
                        url: "https://tabayu.com/ajax_app/seller/v2/info.php?kind=edit_store_inventory",
                        data: the_data,
                        cache: false,

                        success: function (data, textStatus, jqXHR) {
                            var json_objs = JSON.stringify(data);
                            var json = JSON.parse(json_objs);

                            var xxx = parseInt(new_number);
                            if (json == "yes") {
                                if (xxx <= 6) {
                                    inventory_button(2);
                                } else if (xxx > 5) {
                                    inventory_button(1);
                                }

                                //inventory_button(2);
                                window.plugins.toast.showWithOptions({
                                    message: "تم تغيير كمية المخزون بنجاح!!",
                                    duration: "long",
                                    position: "bottom",
                                    addPixelsY: -40
                                });

                            } else {
                                navigator.notification.alert('لم يتم تغيير كمية المخزون بنجاح حاول مرة أخرى', null, 'هناك مشكلة', 'حاول مرة أخرى');
                            }

                            document.getElementById("loads_small").style.display = 'none';
                        },
                        error: function (jqXHR, textStatus, errorThrown) {
                            navigator.notification.alert('هناك مشكلة في الاتصال !! حاول مرة أخرى رجاء!!', null, 'لا يوجد اتصال', 'حسنا');
                            document.getElementById("loads_small").style.display = 'none';
                        }
                    });
                }

            }
        }
    }
}



/* ================ Invontry Eding opening ... etc =========== */
function show_more_inventory(id, type) {
    //checkConnection();

    document.getElementsByClassName('arrows_button' + type)[id].innerHTML = '<center><i class="fa fa-angle-up icon_block"></i></center>';

    $("#inventory_details_display" + type + id).slideDown();
    document.getElementsByClassName('inventory_block' + type)[id].onclick = function () {
        hide_more_inventory(id, type);
    };
}


/* =============== Hide Invontry Eding  =============== */
function hide_more_inventory(id, type) {
    //checkConnection();
    document.getElementsByClassName('arrows_button' + type)[id].innerHTML = '<center><i class="fa fa-angle-down icon_block"></i></center>';
    document.getElementsByClassName('inventory_block' + type)[id].onclick = function () {
        show_more_inventory(id, type);
    };
    $("#inventory_details_display" + type + id).slideUp();
}


/* ================ Invontry Eding opening ... etc =========== *
function show_inventory_less(id) {
    
    document.getElementsByClassName('arrows_button_less' + type)[id].innerHTML = '<center><i class="fa fa-angle-up icon_block"></i></center>';
    
    $("#inventory_details_display_less" + id).slideDown();
    document.getElementsByClassName('inventory_block_less')[id].onclick = function() {
        hide_inventory_less(id);
    };
}

/* =============== Hide Invontry Eding  =============== *
function hide_inventory_less(id) {

    document.getElementsByClassName('arrows_button_less')[id].innerHTML = '<center><i class="fa fa-angle-down icon_block"></i></center>';
    document.getElementsByClassName('inventory_block_less')[id].onclick = function() {
        show_inventory_less(id);
    };
    $("#inventory_details_display_less" + id).slideUp();
      
}*/
