/* ===========================================================================================================================*/
/* =====================================           NEW PRODCUTS IMAGE           ==============================================*/
/* ===========================================================================================================================*/

var alreadySelected = [];
var ImageList = [];

function select_prodcut_image(inputs, image, select) {

    navigator.camera.getPicture(function (imageURI) {
        if (imageURI.startsWith("content://")) {
            window.FilePath.resolveNativePath(imageURI, function (localFileUri) {

                if (document.getElementById('image1').value == localFileUri || document.getElementById('image2').value == localFileUri || document.getElementById('image3').value == localFileUri || document.getElementById('image4').value == localFileUri) {
                    navigator.notification.alert('يجب أن تكون الصورة غير متكررة!', null, 'الصورة مكررة', 'حسنا');
                } else {
                    document.getElementById(inputs).src = localFileUri;
                    document.getElementById(image).value = localFileUri;
                    document.getElementById(select).value = localFileUri;
                }

            });

        } else {

            if (document.getElementById('image1').value == imageURI || document.getElementById('image2').value == imageURI || document.getElementById('image3').value == imageURI || document.getElementById('image4').value == imageURI) {
                navigator.notification.alert('يجب أن تكون الصورة غير متكررة!', null, 'الصورة مكررة', 'حسنا');
            } else {
                document.getElementById(inputs).src = imageURI;
                document.getElementById(image).value = imageURI;
                document.getElementById(select).value = imageURI;
            }
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
        allowEdit: true,
        targetWidth: 900,
        targetHeight: 900
    });


}


/* ======================== رفع الصورة رقم 1 ======================== */
function call_add_product_image_1() {

    var image_prodcuts = [];
    var image_path = document.getElementById('image1').value;
    var product_no = document.getElementById('new_product_no').value;
    var image_name1 = document.getElementById('image1_select').value;
    var image_name2 = document.getElementById('image2_select').value;
    var image_name3 = document.getElementById('image3_select').value;
    var image_name4 = document.getElementById('image4_select').value;

    if (image_path == '') {
        navigator.notification.alert('يجب عليك إرفاق الصورة أولاً', null, 'أرفق الصورة أولاً', 'حسنا');
    } else {

        if ((image_name1 != image_name2) && (image_name1 != image_name3) && (image_name1 != image_name4)) {

            var image_name = makeid();
            var options = new FileUploadOptions();
            options.fileKey = "file";
            options.fileName = image_name;
            options.mimeType = "image/jpeg";

            var params = new Object();
            params.product_no = product_no;
            params.image_number = 1;
            options.params = params;
            options.headers = {
                Connection: "close"
            };
            options.chunkedMode = false;
            var ft = new FileTransfer();
            ft.upload(image_path, encodeURI("https://tabayu.com/ajax_app/seller/v2/product.php?kind=add_image_product"), win1, fail1, options);


            /* ============== إذا تم الرفع بنجاح ============== */
            function win1(r) {
                document.getElementById('image1_upload').value = 'yes';
                $("#add_product_image1_result").html('<i class="fa fa-check-circle" aria-hidden="true"></i>');
            }

            /* ============== إذا فشل الرفع ============== */
            function fail1(error) {
                document.getElementById('image1_upload').value = 'no';
                $("#add_product_image1_result").html('<button class="image-tbale-buttons" onclick="call_add_product_image_1()">أعد رفع الصورة</button>');
            }

        } else {

            window.plugins.toast.showWithOptions({
                message: "يجب عدم تكرار الصور!!",
                duration: "long",
                position: "bottom",
                addPixelsY: -40
            });
        }
    }
}


/* ======================== رفع الصورة رقم 2 ======================== */
function call_add_product_image_2() {

    var image_prodcuts = [];
    var image_path = document.getElementById('image2').value;
    var product_no = document.getElementById('new_product_no').value;
    var image_name1 = document.getElementById('image1_select').value;
    var image_name2 = document.getElementById('image2_select').value;
    var image_name3 = document.getElementById('image3_select').value;
    var image_name4 = document.getElementById('image4_select').value;

    if (image_path == '') {
        navigator.notification.alert('يجب عليك إرفاق الصورة أولاً', null, 'أرفق الصورة أولاً', 'حسنا');
    } else {

        if ((image_name2 != image_name1) && (image_name2 != image_name3) && (image_name2 != image_name4)) {

            var image_name = makeid();
            var options = new FileUploadOptions();
            options.fileKey = "file";
            options.fileName = image_name;
            options.mimeType = "image/jpeg";

            var params = new Object();
            params.product_no = product_no;
            params.image_number = 2;
            options.params = params;
            options.headers = {
                Connection: "close"
            };
            options.chunkedMode = false;
            var ft = new FileTransfer();
            ft.upload(image_path, encodeURI("https://tabayu.com/ajax_app/seller/v2/product.php?kind=add_image_product"), win1, fail1, options);


            /* ============== إذا تم الرفع بنجاح ============== */
            function win1(r) {
                document.getElementById('image2_upload').value = 'yes';
                $("#add_product_image2_result").html('<i class="fa fa-check-circle" aria-hidden="true"></i>');
            }

            /* ============== إذا فشل الرفع ============== */
            function fail1(error) {
                document.getElementById('image2_upload').value = 'no';
                $("#add_product_image2_result").html('<button class="image-tbale-buttons" onclick="call_add_product_image_2()">أعد رفع الصورة</button>');
            }

        } else {

            window.plugins.toast.showWithOptions({
                message: "يجب عدم تكرار الصور!!",
                duration: "long",
                position: "bottom",
                addPixelsY: -40
            });
        }
    }
}


/* ======================== رفع الصورة رقم 3 ======================== */
function call_add_product_image_3() {

    var image_prodcuts = [];
    var image_path = document.getElementById('image3').value;
    var product_no = document.getElementById('new_product_no').value;
    var image_name1 = document.getElementById('image1_select').value;
    var image_name2 = document.getElementById('image2_select').value;
    var image_name3 = document.getElementById('image3_select').value;
    var image_name4 = document.getElementById('image4_select').value;

    if (image_path == '') {
        navigator.notification.alert('يجب عليك إرفاق الصورة أولاً', null, 'أرفق الصورة أولاً', 'حسنا');
    } else {

        if ((image_name3 != image_name2) && (image_name3 != image_name1) && (image_name3 != image_name4)) {

            var image_name = makeid();
            var options = new FileUploadOptions();
            options.fileKey = "file";
            options.fileName = image_name;
            options.mimeType = "image/jpeg";

            var params = new Object();
            params.product_no = product_no;
            params.image_number = 2;
            options.params = params;
            options.headers = {
                Connection: "close"
            };
            options.chunkedMode = false;
            var ft = new FileTransfer();
            ft.upload(image_path, encodeURI("https://tabayu.com/ajax_app/seller/v2/product.php?kind=add_image_product"), win1, fail1, options);


            /* ============== إذا تم الرفع بنجاح ============== */
            function win1(r) {
                document.getElementById('image3_upload').value = 'yes';
                $("#add_product_image3_result").html('<i class="fa fa-check-circle" aria-hidden="true"></i>');
            }

            /* ============== إذا فشل الرفع ============== */
            function fail1(error) {
                document.getElementById('image3_upload').value = 'no';
                $("#add_product_image3_result").html('<button class="image-tbale-buttons" onclick="call_add_product_image_3()">أعد رفع الصورة</button>');
            }

        } else {

            window.plugins.toast.showWithOptions({
                message: "يجب عدم تكرار الصور!!",
                duration: "long",
                position: "bottom",
                addPixelsY: -40
            });
        }
    }
}


/* ======================== رفع الصورة رقم 4 ======================== */
function call_add_product_image_4() {

    var image_prodcuts = [];
    var image_path = document.getElementById('image4').value;
    var product_no = document.getElementById('new_product_no').value;
    var image_name1 = document.getElementById('image1_select').value;
    var image_name2 = document.getElementById('image2_select').value;
    var image_name3 = document.getElementById('image3_select').value;
    var image_name4 = document.getElementById('image4_select').value;

    if (image_path == '') {
        navigator.notification.alert('يجب عليك إرفاق الصورة أولاً', null, 'أرفق الصورة أولاً', 'حسنا');
    } else {

        if ((image_name4 != image_name2) && (image_name4 != image_name3) && (image_name4 != image_name1)) {

            var image_name = makeid();
            var options = new FileUploadOptions();
            options.fileKey = "file";
            options.fileName = image_name;
            options.mimeType = "image/jpeg";

            var params = new Object();
            params.product_no = product_no;
            params.image_number = 2;
            options.params = params;
            options.headers = {
                Connection: "close"
            };
            options.chunkedMode = false;
            var ft = new FileTransfer();
            ft.upload(image_path, encodeURI("https://tabayu.com/ajax_app/seller/v2/product.php?kind=add_image_product"), win1, fail1, options);


            /* ============== إذا تم الرفع بنجاح ============== */
            function win1(r) {
                document.getElementById('image4_upload').value = 'yes';
                $("#add_product_image4_result").html('<i class="fa fa-check-circle" aria-hidden="true"></i>');
            }

            /* ============== إذا فشل الرفع ============== */
            function fail1(error) {
                document.getElementById('image4_upload').value = 'no';
                $("#add_product_image4_result").html('<button class="image-tbale-buttons" onclick="call_add_product_image_4()">أعد رفع الصورة</button>');
            }

        } else {

            window.plugins.toast.showWithOptions({
                message: "يجب عدم تكرار الصور!!",
                duration: "long",
                position: "bottom",
                addPixelsY: -40
            });
        }
    }
}


/* ======================== Call of Upload A new Image Product  ======================== */
function call_add_first_image() {

    var image_prodcuts = [];
    var image1 = document.getElementById('image1').value;
    var image2 = document.getElementById('image2').value;
    var image3 = document.getElementById('image3').value;
    var image4 = document.getElementById('image4').value;
    if (image1 != '') {
        image_prodcuts.push(image1);
    }
    if (image2 != '') {
        image_prodcuts.push(image2);
    }
    if (image3 != '') {
        image_prodcuts.push(image3);
    }
    if (image4 != '') {
        image_prodcuts.push(image4);
    }

    var product_no = document.getElementById('new_product_no').value;
    var text_noti = 'يجب إضافة صورتين للمنتج على الأقل!';
    var image_noti = 2;

    if (image_prodcuts.length < image_noti) {
        navigator.notification.alert(text_noti, null, 'الصور غير مكتملة', 'حسنا');
    } else if (image1 == '') {
        navigator.notification.alert('يجب عليك إضافة صورة العرض الأساسية حتى تتمكن من رفع المنتج!', null, 'يجب إضافة صورة العرض الأساسية', 'حسنا');
    } else if (image_prodcuts.length >= image_noti && image1 != '') {

        var counts = 0,
            image_count = 0;
        image_prodcuts.forEach(function (i) {
            var image_path = i;
            counts++;

            function win1(r) {
                document.getElementById("loads_small").style.display = 'block';
                image_count++;
                if (image_prodcuts.length == image_count) {

                    if (type == 'add') {

                        window.plugins.toast.showWithOptions({
                            message: "تم رفع المنتج بنجاح!",
                            duration: "long",
                            position: "bottom",
                            addPixelsY: -40
                        });
                        product_button(2);
                    }
                    if (type == 'edit') {

                        window.plugins.toast.showWithOptions({
                            message: "تم رفع الصور بنجاح!",
                            duration: "long",
                            position: "bottom",
                            addPixelsY: -40
                        });
                        open_edit_product(localStorage.getItem("product_id"), 2);
                    }
                    document.getElementById("loads_small").style.display = 'none';
                    document.getElementById("loads_upload_text").innerHTML = "";

                }
            }

            function fail1(error) {
                navigator.notification.alert('لا يوجد اتصال !! أو أن تنسيق الصورة غير صحيح !! حاول مرة اخرى !!', null, 'لم يكتمل الرفع', 'حسنا');
                document.getElementById("loads_small").style.display = 'none';

            }

            var image_name = makeid();
            var options = new FileUploadOptions();
            options.fileKey = "file";
            options.fileName = image_name;
            options.mimeType = "image/jpeg";

            var params = new Object();
            params.product_no = product_no;
            params.image_number = counts;
            options.params = params;
            options.headers = {
                Connection: "close"
            };

            options.chunkedMode = false;

            var ft = new FileTransfer();

            document.getElementById("loads_upload_text").innerHTML = "جاري الرفع، يستغرق بعض الوقت";

            document.getElementById("loads_small").style.display = 'block';
            ft.upload(image_path, encodeURI("https://tabayu.com/ajax_app/seller/v2/product.php?kind=add_first_image_product"), win1, fail1, options);


        });

    }



}


/* ======================== Call of Add new Product  ======================== */
function upload_images() {

    var image1_upload = document.getElementById('image1_upload').value;
    var image2_upload = document.getElementById('image2_upload').value;
    var image3_upload = document.getElementById('image3_upload').value;
    var image4_upload = document.getElementById('image4_upload').value;


    var check = 0;

    /* = 0 = */
    if (image1_upload == "yes") {
        check++;
    }
    if (image2_upload == "yes") {
        check++;
    }
    if (image3_upload == "yes") {
        check++;
    }
    if (image4_upload == "yes") {
        check++;
    }

    if (image1_upload == "no") {
        navigator.notification.alert('يجب عليك إرفاق الصورة أولاً', null, 'يجب عليك إرفاق صورة العرض الرئيسية', 'حسنا');

    } else {

        if (check >= 2) {

            window.plugins.toast.showWithOptions({
                message: "تم إضافة المنتج بنجاح!",
                duration: "long",
                position: "bottom",
                addPixelsY: -40
            });
            product_button(2);
        } else {
            navigator.notification.alert('', null, 'يجب عليك رفع صورتين على الأقل!', 'حسنا');
        }
    }
}


/* ===========================================================================================================================*/
/* ====================================            EDIT PRODCUTS IMAGE           =============================================*/
/* ===========================================================================================================================*/

/* ======================== رفع الصورة رقم 1 ======================== */
function call_edit_product_image_1() {

    var image_prodcuts = [];
    var image_path = document.getElementById('image1').value;
    var product_no = document.getElementById('edit_product_no').value;
    var image_name1 = document.getElementById('edit_image1_select').value;
    var image_name2 = document.getElementById('edit_image2_select').value;
    var image_name3 = document.getElementById('edit_image3_select').value;
    var image_name4 = document.getElementById('edit_image4_select').value;

    if (image_path == '') {
        navigator.notification.alert('يجب عليك إرفاق الصورة أولاً', null, 'أرفق الصورة أولاً', 'حسنا');
    } else {

        if ((image_name1 != image_name2) && (image_name1 != image_name3) && (image_name1 != image_name4)) {

            var image_name = makeid();
            var options = new FileUploadOptions();
            options.fileKey = "file";
            options.fileName = image_name;
            options.mimeType = "image/jpeg";

            var params = new Object();
            params.product_no = product_no;
            params.image_number = 1;
            options.params = params;
            options.headers = {
                Connection: "close"
            };
            options.chunkedMode = false;
            var ft = new FileTransfer();
            ft.upload(image_path, encodeURI("https://tabayu.com/ajax_app/seller/v2/product.php?kind=add_image_product"), win1, fail1, options);


            /* ============== إذا تم الرفع بنجاح ============== */
            function win1(r) {
                document.getElementById('edit_image1_upload').value = 'yes';
                $("#edit_product_image1_result").html('<i class="fa fa-check-circle" aria-hidden="true"></i>');
            }

            /* ============== إذا فشل الرفع ============== */
            function fail1(error) {
                document.getElementById('edit_image1_upload').value = 'no';
                $("#edit_product_image1_result").html('<button class="image-tbale-buttons" onclick="call_edit_product_image_1()">أعد رفع الصورة</button>');
            }

        } else {

            window.plugins.toast.showWithOptions({
                message: "يجب عدم تكرار الصور!!",
                duration: "long",
                position: "bottom",
                addPixelsY: -40
            });
        }
    }
}


/* ======================== رفع الصورة رقم 2 ======================== */
function call_edit_product_image_2() {

    var image_prodcuts = [];
    var image_path = document.getElementById('image2').value;
    var product_no = document.getElementById('edit_product_no').value;
    var image_name1 = document.getElementById('edit_image1_select').value;
    var image_name2 = document.getElementById('edit_image2_select').value;
    var image_name3 = document.getElementById('edit_image3_select').value;
    var image_name4 = document.getElementById('edit_image4_select').value;

    if (image_path == '') {
        navigator.notification.alert('يجب عليك إرفاق الصورة أولاً', null, 'أرفق الصورة أولاً', 'حسنا');
    } else {

        if ((image_name2 != image_name1) && (image_name2 != image_name3) && (image_name2 != image_name4)) {

            var image_name = makeid();
            var options = new FileUploadOptions();
            options.fileKey = "file";
            options.fileName = image_name;
            options.mimeType = "image/jpeg";

            var params = new Object();
            params.product_no = product_no;
            params.image_number = 2;
            options.params = params;
            options.headers = {
                Connection: "close"
            };
            options.chunkedMode = false;
            var ft = new FileTransfer();
            ft.upload(image_path, encodeURI("https://tabayu.com/ajax_app/seller/v2/product.php?kind=add_image_product"), win1, fail1, options);


            /* ============== إذا تم الرفع بنجاح ============== */
            function win1(r) {
                document.getElementById('edit_image2_upload').value = 'yes';
                $("#edit_product_image2_result").html('<i class="fa fa-check-circle" aria-hidden="true"></i>');
            }

            /* ============== إذا فشل الرفع ============== */
            function fail1(error) {
                document.getElementById('edit_image2_upload').value = 'no';
                $("#edit_product_image2_result").html('<button class="image-tbale-buttons" onclick="call_edit_product_image_2()">أعد رفع الصورة</button>');
            }

        } else {

            window.plugins.toast.showWithOptions({
                message: "يجب عدم تكرار الصور!!",
                duration: "long",
                position: "bottom",
                addPixelsY: -40
            });
        }
    }
}


/* ======================== رفع الصورة رقم 3 ======================== */
function call_edit_product_image_3() {

    var image_prodcuts = [];
    var image_path = document.getElementById('image3').value;
    var product_no = document.getElementById('edit_product_no').value;
    var image_name1 = document.getElementById('edit_image1_select').value;
    var image_name2 = document.getElementById('edit_image2_select').value;
    var image_name3 = document.getElementById('edit_image3_select').value;
    var image_name4 = document.getElementById('edit_image4_select').value;

    if (image_path == '') {
        navigator.notification.alert('يجب عليك إرفاق الصورة أولاً', null, 'أرفق الصورة أولاً', 'حسنا');
    } else {

        if ((image_name3 != image_name2) && (image_name3 != image_name1) && (image_name3 != image_name4)) {

            var image_name = makeid();
            var options = new FileUploadOptions();
            options.fileKey = "file";
            options.fileName = image_name;
            options.mimeType = "image/jpeg";

            var params = new Object();
            params.product_no = product_no;
            params.image_number = 2;
            options.params = params;
            options.headers = {
                Connection: "close"
            };
            options.chunkedMode = false;
            var ft = new FileTransfer();
            ft.upload(image_path, encodeURI("https://tabayu.com/ajax_app/seller/v2/product.php?kind=add_image_product"), win1, fail1, options);


            /* ============== إذا تم الرفع بنجاح ============== */
            function win1(r) {
                document.getElementById('edit_image3_upload').value = 'yes';
                $("#edit_product_image3_result").html('<i class="fa fa-check-circle" aria-hidden="true"></i>');
            }

            /* ============== إذا فشل الرفع ============== */
            function fail1(error) {
                document.getElementById('edit_image3_upload').value = 'no';
                $("#edit_product_image3_result").html('<button class="image-tbale-buttons" onclick="call_edit_product_image_3()">أعد رفع الصورة</button>');
            }

        } else {

            window.plugins.toast.showWithOptions({
                message: "يجب عدم تكرار الصور!!",
                duration: "long",
                position: "bottom",
                addPixelsY: -40
            });
        }
    }
}


/* ======================== رفع الصورة رقم 4 ======================== */
function call_edit_product_image_4() {

    var image_prodcuts = [];
    var image_path = document.getElementById('image4').value;
    var product_no = document.getElementById('edit_product_no').value;
    var image_name1 = document.getElementById('edit_image1_select').value;
    var image_name2 = document.getElementById('edit_image2_select').value;
    var image_name3 = document.getElementById('edit_image3_select').value;
    var image_name4 = document.getElementById('edit_image4_select').value;

    if (image_path == '') {
        navigator.notification.alert('يجب عليك إرفاق الصورة أولاً', null, 'أرفق الصورة أولاً', 'حسنا');
    } else {

        if ((image_name4 != image_name2) && (image_name4 != image_name3) && (image_name4 != image_name1)) {

            var image_name = makeid();
            var options = new FileUploadOptions();
            options.fileKey = "file";
            options.fileName = image_name;
            options.mimeType = "image/jpeg";

            var params = new Object();
            params.product_no = product_no;
            params.image_number = 2;
            options.params = params;
            options.headers = {
                Connection: "close"
            };
            options.chunkedMode = false;
            var ft = new FileTransfer();
            ft.upload(image_path, encodeURI("https://tabayu.com/ajax_app/seller/v2/product.php?kind=add_image_product"), win1, fail1, options);


            /* ============== إذا تم الرفع بنجاح ============== */
            function win1(r) {
                document.getElementById('edit_image4_upload').value = 'yes';
                $("#edit_product_image4_result").html('<i class="fa fa-check-circle" aria-hidden="true"></i>');
            }

            /* ============== إذا فشل الرفع ============== */
            function fail1(error) {
                document.getElementById('edit_image4_upload').value = 'no';
                $("#edit_product_image4_result").html('<button class="image-tbale-buttons" onclick="call_edit_product_image_4()">أعد رفع الصورة</button>');
            }

        } else {

            window.plugins.toast.showWithOptions({
                message: "يجب عدم تكرار الصور!!",
                duration: "long",
                position: "bottom",
                addPixelsY: -40
            });
        }
    }
}


/* ======================== Call of Upload A new Image Product  ======================== */
function call_add_first_image() {

    var image_prodcuts = [];
    var image1 = document.getElementById('image1').value;
    var image2 = document.getElementById('image2').value;
    var image3 = document.getElementById('image3').value;
    var image4 = document.getElementById('image4').value;
    if (image1 != '') {
        image_prodcuts.push(image1);
    }
    if (image2 != '') {
        image_prodcuts.push(image2);
    }
    if (image3 != '') {
        image_prodcuts.push(image3);
    }
    if (image4 != '') {
        image_prodcuts.push(image4);
    }

    var product_no = document.getElementById('new_product_no').value;
    var text_noti = 'يجب إضافة صورتين للمنتج على الأقل!';
    var image_noti = 2;

    if (image_prodcuts.length < image_noti) {
        navigator.notification.alert(text_noti, null, 'الصور غير مكتملة', 'حسنا');
    } else if (image1 == '') {
        navigator.notification.alert('يجب عليك إضافة صورة العرض الأساسية حتى تتمكن من رفع المنتج!', null, 'يجب إضافة صورة العرض الأساسية', 'حسنا');
    } else if (image_prodcuts.length >= image_noti && image1 != '') {

        var counts = 0,
            image_count = 0;
        image_prodcuts.forEach(function (i) {
            var image_path = i;
            counts++;

            function win1(r) {
                document.getElementById("loads_small").style.display = 'block';
                image_count++;
                if (image_prodcuts.length == image_count) {

                    if (type == 'add') {

                        window.plugins.toast.showWithOptions({
                            message: "تم رفع المنتج بنجاح!",
                            duration: "long",
                            position: "bottom",
                            addPixelsY: -40
                        });
                        product_button(2);
                    }
                    if (type == 'edit') {

                        window.plugins.toast.showWithOptions({
                            message: "تم رفع الصور بنجاح!",
                            duration: "long",
                            position: "bottom",
                            addPixelsY: -40
                        });
                        open_edit_product(localStorage.getItem("product_id"), 2);
                    }
                    document.getElementById("loads_small").style.display = 'none';
                    document.getElementById("loads_upload_text").innerHTML = "";

                }
            }

            function fail1(error) {
                navigator.notification.alert('لا يوجد اتصال !! أو أن تنسيق الصورة غير صحيح !! حاول مرة اخرى !!', null, 'لم يكتمل الرفع', 'حسنا');
                document.getElementById("loads_small").style.display = 'none';

            }

            var image_name = makeid();
            var options = new FileUploadOptions();
            options.fileKey = "file";
            options.fileName = image_name;
            options.mimeType = "image/jpeg";

            var params = new Object();
            params.product_no = product_no;
            params.image_number = counts;
            options.params = params;
            options.headers = {
                Connection: "close"
            };

            options.chunkedMode = false;

            var ft = new FileTransfer();

            document.getElementById("loads_upload_text").innerHTML = "جاري الرفع، يستغرق بعض الوقت";

            document.getElementById("loads_small").style.display = 'block';
            ft.upload(image_path, encodeURI("https://tabayu.com/ajax_app/seller/v2/product.php?kind=add_first_image_product"), win1, fail1, options);


        });

    }



}


/* ======================== Call of Upload A new Image Product  ======================== */
function call_add_new_image(image_number) {

    var image_prodcuts = [];
    if (document.getElementById('image1').value != '') {
        image_prodcuts.push(document.getElementById('image1').value);
    }
    if (document.getElementById('image2').value != '') {
        image_prodcuts.push(document.getElementById('image2').value);
    }
    if (document.getElementById('image3').value != '') {
        image_prodcuts.push(document.getElementById('image3').value);
    }
    if (document.getElementById('image4').value != '') {
        image_prodcuts.push(document.getElementById('image4').value);
    }


    var product_no = document.getElementById('edit_product_no').value;
    var text_noti = 'يجب إرفاق صورة واحدة للمنتج على الأقل!';
    var image_noti = 1;


    if (image_prodcuts.length < image_noti) {

        navigator.notification.alert(text_noti, null, 'الصور غير مكتملة', 'حسنا');
    } else {

        var counts = 0,
            image_count = 0;
        image_prodcuts.forEach(function (i) {
            var image_path = i;
            counts++;

            function win1(r) {
                document.getElementById("loads_small").style.display = 'block';
                image_count++;
                if (image_prodcuts.length == image_count) {

                    if (type == 'add') {

                        window.plugins.toast.showWithOptions({
                            message: "تم رفع الصور بنجاح!",
                            duration: "long",
                            position: "bottom",
                            addPixelsY: -40
                        });
                        product_button(2);
                    }
                    if (type == 'edit') {

                        window.plugins.toast.showWithOptions({
                            message: "تم رفع الصور بنجاح!",
                            duration: "long",
                            position: "bottom",
                            addPixelsY: -40
                        });
                        open_edit_product(localStorage.getItem("product_id"), 2);
                    }
                    document.getElementById("loads_small").style.display = 'none';
                    document.getElementById("loads_upload_text").innerHTML = "";

                }
            }

            function fail1(error) {
                navigator.notification.alert('لا يوجد اتصال !! أو أن تنسيق الصورة غير صحيح !! حاول مرة اخرى !!', null, 'لم يكتمل الرفع', 'حسنا');
                document.getElementById("loads_small").style.display = 'none';

            }

            var image_name = makeid();
            var options = new FileUploadOptions();
            options.fileKey = "file";
            options.fileName = image_name;
            options.mimeType = "image/jpeg";

            var params = new Object();
            params.product_no = product_no;
            params.image_number = image_number;
            options.params = params;
            options.headers = {
                Connection: "close"
            };

            options.chunkedMode = false;
            image_number++;

            var ft = new FileTransfer();

            document.getElementById("loads_upload_text").innerHTML = "جاري الرفع، يستغرق بعض الوقت";

            document.getElementById("loads_small").style.display = 'block';
            ft.upload(image_path, encodeURI("https://tabayu.com/ajax_app/seller/v2/product.php?kind=add_new_image_product"), win1, fail1, options);


        });

    }



}


/* ======================== Choose The new Image For Main Image  ======================== */
//window.location.href = '#change_product_image_box'; $('#change_product_image').css('borderColor', '#ddd'); $('.image_box_error').css('color', 'transparent');
function select_new_image() {

    navigator.camera.getPicture(function (imageURI) {
        if (imageURI.startsWith("content://")) {
            window.FilePath.resolveNativePath(imageURI, function (localFileUri) {
                document.getElementById('new_product_image').src = localFileUri;
                document.getElementById('new_image_box').value = localFileUri;
            });
        } else {
            document.getElementById('new_product_image').src = imageURI;
            document.getElementById('new_image_box').value = imageURI;
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
        allowEdit: true,
        targetWidth: 900,
        targetHeight: 900
    });

}


/* ======================== Call of Upload Edit Image Product  ======================== */
function call_upload_new_image() {

    var image_path = document.getElementById('new_image_box').value;
    var product_no = document.getElementById('edit_product_no').value;

    if (image_path == '' || image_path == null) {
        navigator.notification.alert('يجب عليك إضافة الصورة الجديدة حتى تتمكن من تغيير صورة العرض الأساسية للمنتج', null, 'لم ترفق الصورة!', 'حسنا');
    } else {

        function win1(r) {
            document.getElementById("loads_small").style.display = 'block';
            open_edit_product(localStorage.getItem("product_id"), 2);
            window.plugins.toast.showWithOptions({
                message: "تم رفع الصور بنجاح!",
                duration: "long",
                position: "bottom",
                addPixelsY: -40
            });

            document.getElementById("loads_small").style.display = 'none';
            document.getElementById("loads_upload_text").innerHTML = "";


        }

        function fail1(error) {
            navigator.notification.alert('لا يوجد اتصال !! أو أن تنسيق الصورة غير صحيح !! حاول مرة اخرى !!', null, 'لم يكتمل الرفع', 'حسنا');
            document.getElementById("loads_small").style.display = 'none';

        }

        var image_name = makeid();
        var options = new FileUploadOptions();
        options.fileKey = "file";
        options.fileName = image_name;
        options.mimeType = "image/jpeg";

        var params = new Object();
        params.product_no = product_no;
        options.params = params;
        options.headers = {
            Connection: "close"
        };

        options.chunkedMode = false;

        var ft = new FileTransfer();

        document.getElementById("loads_upload_text").innerHTML = "جاري الرفع، يستغرق بعض الوقت";

        document.getElementById("loads_small").style.display = 'block';
        window.location.href = '#';
        ft.upload(image_path, encodeURI("https://tabayu.com/ajax_app/seller/v2/product.php?kind=add_image_product"), win1, fail1, options);

    }

}


/* ======================== Choose The new Image For Main Image  ======================== */
function change_main_image() {

    navigator.camera.getPicture(function (imageURI) {
        if (imageURI.startsWith("content://")) {
            window.FilePath.resolveNativePath(imageURI, function (localFileUri) {
                document.getElementById('change_product_image').src = localFileUri;
                document.getElementById('image_box').value = localFileUri;
            });
        } else {
            document.getElementById('change_product_image').src = imageURI;
            document.getElementById('image_box').value = imageURI;
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
        allowEdit: true,
        targetWidth: 900,
        targetHeight: 900
    });

}


/* ======================== Call of Upload Edit Image Product  ======================== */
function call_upload_main_image() {

    var image_path = document.getElementById('image_box').value;
    var product_no = document.getElementById('edit_product_no').value;

    if (image_path == '' || image_path == null) {
        navigator.notification.alert('يجب عليك إضافة الصورة الجديدة حتى تتمكن من تغيير صورة العرض الأساسية للمنتج', null, 'لم ترفق الصورة!', 'حسنا');
    } else {

        function win1(r) {
            document.getElementById("loads_small").style.display = 'block';
            open_edit_product(localStorage.getItem("product_id"), 2);
            window.plugins.toast.showWithOptions({
                message: "تم رفع الصور بنجاح!",
                duration: "long",
                position: "bottom",
                addPixelsY: -40
            });

            document.getElementById("loads_small").style.display = 'none';
            document.getElementById("loads_upload_text").innerHTML = "";

        }

        function fail1(error) {
            navigator.notification.alert('لا يوجد اتصال !! أو أن تنسيق الصورة غير صحيح !! حاول مرة اخرى !!', null, 'لم يكتمل الرفع', 'حسنا');
            document.getElementById("loads_small").style.display = 'none';

        }

        var image_name = makeid();
        var options = new FileUploadOptions();
        options.fileKey = "file";
        options.fileName = image_name;
        options.mimeType = "image/jpeg";

        var params = new Object();
        params.product_no = product_no;
        options.params = params;
        options.headers = {
            Connection: "close"
        };

        options.chunkedMode = false;

        var ft = new FileTransfer();

        document.getElementById("loads_upload_text").innerHTML = "جاري الرفع، يستغرق بعض الوقت";

        document.getElementById("loads_small").style.display = 'block';
        window.location.href = '#';
        ft.upload(image_path, encodeURI("https://tabayu.com/ajax_app/seller/v2/product.php?kind=change_main_product"), win1, fail1, options);

    }

}



/* ======================== Call of Delete Image Product  ======================== */
function call_delete_product_image(image_id) {
    //76b71261a530b0410acb4750ec8e8c1d.jpeg
    navigator.notification.confirm('هل أنت متأكد أنك تريد حذف هذه الصورة؟', onConfirm, 'حذف الصورة', ['حذف', 'إلغاء']);

    function onConfirm(buttonIndex) {

        if (buttonIndex == 1) {
            if (image_id != "" && image_id != "no") {
                document.getElementById("loads_box").style.display = 'block';
                var the_data = "image_id=" + image_id;
                $.ajax({
                    type: 'POST',
                    url: "https://tabayu.com/ajax_app/seller/v2/product.php?kind=delete_product_image",
                    data: the_data,
                    cache: false,
                    success: function (data, textStatus, jqXHR) {

                        var json_objs = JSON.stringify(data);
                        var json = JSON.parse(json_objs);
                        var text_massage = '';

                        if (json == "yes") {
                            open_edit_product(localStorage.getItem("product_id"), 2);
                            text_massage = "تم الحذف بنجاح!";
                        } else {
                            text_massage = 'لم يتم الحذف بنجاح! حاول مرة أخرى';
                        }

                        window.plugins.toast.showWithOptions({
                            message: text_massage,
                            duration: "long",
                            position: "bottom",
                            addPixelsY: -40
                        });

                        document.getElementById("loads_box").style.display = 'none';
                    },
                    error: function (jqXHR, textStatus, errorThrown) {
                        navigator.notification.alert('هناك مشكلة في الاتصال ! حاول مرة أخرى رجاء!!', null, 'لا يوجد اتصال', 'حسنا');

                        document.getElementById("loads_box").style.display = 'none';
                    }
                });
            }

        }

    }


}
