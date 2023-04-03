require(['jquery', 'jquery/ui'], function ($) {

    $(window).ready(function () {
        var ventana_ancho = $(window).width();        
        // if (ventana_ancho < 1200){
       
        //     let changeBar = document.querySelector("html")
        //     changeBar.classList.add("search-open")
        //     let barsearch = document.querySelector("#html-body > main > div > header > div.middle-header-content > div > div > div.col-lg-6.col-md-8.col-xs-12.parent__search > div > div.form-search")
        //     $(".search-close").remove()
        // }

        $(".nav-toggle > img").attr("src","https://api.iconify.design/heroicons-outline/menu-alt-2.svg?color=%23012b59&rotate=180deg")

        let bannerCont = document.querySelector("#maincontent > div.category-view");
        let breadCrumbCont = document.querySelector("#html-body > main > div > div.breadcrumbs");

        let modesCont = $(document.querySelector(".category-product-actions"));
        let categoryView = $(document.querySelector(".category-view"))
        let categoriesTittle = $(document.querySelector(".div-tittle-categories"))

        $(bannerCont).each(function () {
            $(this).insertAfter($(breadCrumbCont));
        })

        // $(categoriesTittle[0]).append(modesCont[0]);

        // boton ver más en moviles detalle producto

        $(".std").addClass("limit-line-2")

        $(".btn_vermas").click(function () {
            $(".std").toggleClass("limit-line-2")

            if ($(".std").hasClass("limit-line-2") == false) {
                $('.vermasboton').text('Ver menos');
            } else {
                $('.vermasboton').text('Ver más');
            }
        });

        //checkout
        // let Signin = document.querySelector("#checkout > div.authentication-wrapper > button")
        // console.log(Signin)
    })


});
