// some scripts
!function(t,e){"use strict";function r(r,a,i,u,l){function f(){L=t.devicePixelRatio>1,i=c(i),a.delay>=0&&setTimeout(function(){s(!0)},a.delay),(a.delay<0||a.combined)&&(u.e=v(a.throttle,function(t){"resize"===t.type&&(w=B=-1),s(t.all)}),u.a=function(t){t=c(t),i.push.apply(i,t)},u.g=function(){return i=n(i).filter(function(){return!n(this).data(a.loadedName)})},u.f=function(t){for(var e=0;e<t.length;e++){var r=i.filter(function(){return this===t[e]});r.length&&s(!1,r)}},s(),n(a.appendScroll).on("scroll."+l+" resize."+l,u.e))}function c(t){var i=a.defaultImage,o=a.placeholder,u=a.imageBase,l=a.srcsetAttribute,f=a.loaderAttribute,c=a._f||{};t=n(t).filter(function(){var t=n(this),r=m(this);return!t.data(a.handledName)&&(t.attr(a.attribute)||t.attr(l)||t.attr(f)||c[r]!==e)}).data("plugin_"+a.name,r);for(var s=0,d=t.length;s<d;s++){var A=n(t[s]),g=m(t[s]),h=A.attr(a.imageBaseAttribute)||u;g===N&&h&&A.attr(l)&&A.attr(l,b(A.attr(l),h)),c[g]===e||A.attr(f)||A.attr(f,c[g]),g===N&&i&&!A.attr(E)?A.attr(E,i):g===N||!o||A.css(O)&&"none"!==A.css(O)||A.css(O,"url('"+o+"')")}return t}function s(t,e){if(!i.length)return void(a.autoDestroy&&r.destroy());for(var o=e||i,u=!1,l=a.imageBase||"",f=a.srcsetAttribute,c=a.handledName,s=0;s<o.length;s++)if(t||e||A(o[s])){var g=n(o[s]),h=m(o[s]),b=g.attr(a.attribute),v=g.attr(a.imageBaseAttribute)||l,p=g.attr(a.loaderAttribute);g.data(c)||a.visibleOnly&&!g.is(":visible")||!((b||g.attr(f))&&(h===N&&(v+b!==g.attr(E)||g.attr(f)!==g.attr(F))||h!==N&&v+b!==g.css(O))||p)||(u=!0,g.data(c,!0),d(g,h,v,p))}u&&(i=n(i).filter(function(){return!n(this).data(c)}))}function d(t,e,r,i){++z;var o=function(){y("onError",t),p(),o=n.noop};y("beforeLoad",t);var u=a.attribute,l=a.srcsetAttribute,f=a.sizesAttribute,c=a.retinaAttribute,s=a.removeAttribute,d=a.loadedName,A=t.attr(c);if(i){var g=function(){s&&t.removeAttr(a.loaderAttribute),t.data(d,!0),y(T,t),setTimeout(p,1),g=n.noop};t.off(I).one(I,o).one(D,g),y(i,t,function(e){e?(t.off(D),g()):(t.off(I),o())})||t.trigger(I)}else{var h=n(new Image);h.one(I,o).one(D,function(){t.hide(),e===N?t.attr(C,h.attr(C)).attr(F,h.attr(F)).attr(E,h.attr(E)):t.css(O,"url('"+h.attr(E)+"')"),t[a.effect](a.effectTime),s&&(t.removeAttr(u+" "+l+" "+c+" "+a.imageBaseAttribute),f!==C&&t.removeAttr(f)),t.data(d,!0),y(T,t),h.remove(),p()});var m=(L&&A?A:t.attr(u))||"";h.attr(C,t.attr(f)).attr(F,t.attr(l)).attr(E,m?r+m:null),h.complete&&h.trigger(D)}}function A(t){var e=t.getBoundingClientRect(),r=a.scrollDirection,n=a.threshold,i=h()+n>e.top&&-n<e.bottom,o=g()+n>e.left&&-n<e.right;return"vertical"===r?i:"horizontal"===r?o:i&&o}function g(){return w>=0?w:w=n(t).width()}function h(){return B>=0?B:B=n(t).height()}function m(t){return t.tagName.toLowerCase()}function b(t,e){if(e){var r=t.split(",");t="";for(var a=0,n=r.length;a<n;a++)t+=e+r[a].trim()+(a!==n-1?",":"")}return t}function v(t,e){var n,i=0;return function(o,u){function l(){i=+new Date,e.call(r,o)}var f=+new Date-i;n&&clearTimeout(n),f>t||!a.enableThrottle||u?l():n=setTimeout(l,t-f)}}function p(){--z,i.length||z||y("onFinishedAll")}function y(t,e,n){return!!(t=a[t])&&(t.apply(r,[].slice.call(arguments,1)),!0)}var z=0,w=-1,B=-1,L=!1,T="afterLoad",D="load",I="error",N="img",E="src",F="srcset",C="sizes",O="background-image";"event"===a.bind||o?f():n(t).on(D+"."+l,f)}function a(a,o){var u=this,l=n.extend({},u.config,o),f={},c=l.name+"-"+ ++i;return u.config=function(t,r){return r===e?l[t]:(l[t]=r,u)},u.addItems=function(t){return f.a&&f.a("string"===n.type(t)?n(t):t),u},u.getItems=function(){return f.g?f.g():{}},u.update=function(t){return f.e&&f.e({},!t),u},u.force=function(t){return f.f&&f.f("string"===n.type(t)?n(t):t),u},u.loadAll=function(){return f.e&&f.e({all:!0},!0),u},u.destroy=function(){return n(l.appendScroll).off("."+c,f.e),n(t).off("."+c),f={},e},r(u,l,a,f,c),l.chainable?a:u}var n=t.jQuery||t.Zepto,i=0,o=!1;n.fn.Lazy=n.fn.lazy=function(t){return new a(this,t)},n.Lazy=n.lazy=function(t,r,i){if(n.isFunction(r)&&(i=r,r=[]),n.isFunction(i)){t=n.isArray(t)?t:[t],r=n.isArray(r)?r:[r];for(var o=a.prototype.config,u=o._f||(o._f={}),l=0,f=t.length;l<f;l++)(o[t[l]]===e||n.isFunction(o[t[l]]))&&(o[t[l]]=i);for(var c=0,s=r.length;c<s;c++)u[r[c]]=t[0]}},a.prototype.config={name:"lazy",chainable:!0,autoDestroy:!0,bind:"load",threshold:500,visibleOnly:!1,appendScroll:t,scrollDirection:"both",imageBase:null,defaultImage:"data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==",placeholder:null,delay:-1,combined:!1,attribute:"data-src",srcsetAttribute:"data-srcset",sizesAttribute:"data-sizes",retinaAttribute:"data-retina",loaderAttribute:"data-loader",imageBaseAttribute:"data-imagebase",removeAttribute:!0,handledName:"handled",loadedName:"loaded",effect:"show",effectTime:0,enableThrottle:!0,throttle:250,beforeLoad:e,afterLoad:e,onError:e,onFinishedAll:e},n(t).on("load",function(){o=!0})}(window);

var modal = document.querySelector(".modal");

document.onreadystatechange = function() { 
  if (document.readyState !== "complete") { 
      document.querySelector("body").style.visibility = "hidden"; 
      document.querySelector("#page_loader").style.visibility = "visible"; 
  } else { 
    //console.log("loading...")
      document.querySelector("#page_loader").style.display = "none"; 
      document.querySelector("body").style.visibility = "visible"; 
  } 
};

function windowOnClick(event) {
  //console.log(event.target)
  //console.log(modal)
  if (event.target === modal) { 
    modal.classList.toggle("show-modal");
  }
}
window.addEventListener("click", windowOnClick);

// jquery ready start
$(document).ready(function() {
	// jQuery code 

  sync_mini_cart();
 
   //$('.modal').addClass("show-modal"); 

  $('.check_payment_option:radio').change(function() { 
    $('.card-header').removeClass('highlight');
    $(this).closest('.card-header').addClass('highlight');
  });

    $("input[required]").parent("label").addClass("required");

	//////////////////////// Prevent closing from click inside dropdown
    $(document).on('click', '.dropdown-menu', function (e) {
      e.stopPropagation();
    });

    $(document).on('click', '.close-button', function (e) {
      $(".modal").removeClass('show-modal');
    });
 


     ///////////////// fixed menu on scroll for desctop
    if ($(window).width() < 768) {

     	$('.nav-home-aside .title-category').click( function(e){
     		e.preventDefault();
     		$('.menu-category').slideToggle('fast', function() { $('.menu-category .submenu').hide() });
     	});

     	$('.has-submenu a').click( function(e){
     		e.preventDefault();
     		$(this).next().slideToggle('fast');
     	});
 
    } // end if


    // custom checkbox inside card effect
    $('.js-check :radio').change(function () {
        var check_attr_name = $(this).attr('name');
        if ($(this).is(':checked')) {
            $('input[name='+ check_attr_name +']').closest('.js-check').removeClass('active');
            $(this).closest('.js-check').addClass('active');
           // item.find('.radio').find('span').text('Add');

        } else {
            item.removeClass('active');
            // item.find('.radio').find('span').text('Unselect');
        }
   
    });

	//////////////////////// Bootstrap tooltip
	if($('[data-toggle="tooltip"]').length>0) {  // check if element exists
		$('[data-toggle="tooltip"]').tooltip()
	} // end if


	// offcanvas menu
	$("[data-trigger]").on("click", function(e){
        e.preventDefault();
        e.stopPropagation();
        var offcanvas_id =  $(this).attr('data-trigger');
        $(offcanvas_id).toggleClass("show");
        $('body').toggleClass("offcanvas-active");
        $(".screen-overlay").toggleClass("show");
    }); 

   	// Close menu when pressing ESC
    $(document).on('keydown', function(event) {
        if(event.keyCode === 27) {
           $(".mobile-offcanvas").removeClass("show");
           $("body").removeClass("overlay-active");
        }
    });

    // Close menu by clicking
    $(".btn-close, .screen-overlay").click(function(e){
    	$(".screen-overlay").removeClass("show");
        $(".mobile-offcanvas").removeClass("show");
        $("body").removeClass("offcanvas-active");
    }); 

    $(".billing_address_source").change(function(e){
    	$('#billing_address').val($(this).val())
        return true;
    }); 
 
    $('.product_detail_img_thumb').mouseover(function (e) {
        $('#product_detail_img_result').attr('src', $(this).attr('data-src')); 
    }); 

    $('.lazy').lazy({
        scrollDirection: 'vertical',
        effect: 'fadeIn',
        visibleOnly: true,
        placeholder: '',
        onError: function(element) {
            //console.log('error loading ' + element.data('src'));
        }
    });

    $('#pincode').blur(function() {   
        if($('#pincode').val())
        { 
            var pincode = $('#pincode').val() 
          var jqxhr = $.ajax({ 
              method: "GET",
              url: "/pincode/fetch/"+pincode,
              data: ""
          })
          .done(function( data ) {   
              if(data.status === 100) { 
                var data_list = []
                var district_list = []
                var state_name = ""
                var district = ""
                data.pincode_list.forEach(function(pincode_data){ 
                    //data_list += "<option value='"+toTitleCase(pincode_data.office_name)+"'>"+toTitleCase(pincode_data.office_name)+"</option>";
                    if(!data_list.includes(toTitleCase(pincode_data.office_name))) 
                    {
                      data_list.push(toTitleCase(pincode_data.office_name))
                    }
                    
                    state_name = toTitleCase(pincode_data.state_name)
                    district = toTitleCase(pincode_data.district)
                    if(!district_list.includes(district)) 
                    {
                      district_list.push(district)
                    }
                    
                }); 
                //data.district_list.forEach(function(district_data){ 
                 //   district_list += "<option value='"+district_data.id+"'>"+toTitleCase(district_data.name)+"</option>"; 
                //}); 
                autocomplete(document.getElementById("location_list_eld"), data_list);
                autocomplete(document.getElementById("district_list_eld"), district_list);
                //$('#location_list_eld').html(data_list)
                //$('#district_list_eld').html(district_list)   
                //$('#state_list_eld').val(state_name)    
                auto_select_drop_down('state_list_eld', state_name);
              } else {   
                //$('#location_list_eld').html("")
                //$('#district_list_eld').html("") 
                //$('#state_list_eld').val("")   
                return false; 
              }
          })
          .fail(function(msg ) {
              //console.log( msg ); 
          })
          .always(function() {
            
          }); 
        } 
    })


    $('#add_new_address_alink').click(function() { 
        $('#add_new_address_main_block').removeClass("display_none"); 
        $('#full_name').focus();
        $('#billing_address').val("new");
    });
    $('.use_pre_address_alink').click(function() { 
        $('#add_new_address_main_block').addClass("display_none"); 
         $('#billing_address').val($(this).attr('data-addrid'));
    });
    $('#frm_checkout_process').submit(function(e) { 
      //e.preventDefault();
      $('#address_selection_missing_err_msg').addClass("display_none")
      $('.new_address_ele_fld').removeClass("error_border") 
      let is_error = 0;
      if($('#billing_address').val() == 'new')
      {
        $(".new_address_ele_fld").each(function(){
          // Test if the div element is empty
          if($(this).val() == ""){
              $(this).addClass("error_border");
              is_error = 1;
          }
        });
      }
      else if($('#billing_address').val() == '')
      {
        $('#address_selection_missing_err_msg').removeClass("display_none");  
        $('html, body').animate({
          scrollTop: $('html, body').offset().top,
        });
        return false; 
      }  
      if(is_error == 0)
      { 
        return true;
      }
      
      return false;
      
    });

    $('#customer_question_block').click(function() { 
        $('#customer_question_sub_block').removeClass("display_none");
        $('#customer_question_block').addClass("display_none");
        $('#customer_question_sub_block_tarea').focus();

    });
    $('#customer_question_block_cancel').click(function() { 
        $('#customer_question_sub_block').addClass("display_none");
        $('#customer_question_block').removeClass("display_none");
    }); 
    $('#checkout_address_list').change(function() { 
        var address_sel = $(this).val()
        address_sel = address_sel.replaceAll(",", "<br/>")
        $('#checkout_address_selc_br').html(address_sel)
        return true;
    }); 
    $('#product_qty_plus_control').click(function() { 
        var product_qty_fld = $('#product_qty_fld').val();
        if(!product_qty_fld) { product_qty_fld = 1; }
        product_qty_fld = parseInt(product_qty_fld);
        product_qty_fld += 1;
        $('#product_qty_fld').val(product_qty_fld);
        return true;
    }); 
    $('#product_qty_minus_control').click(function() { 
        var product_qty_fld = $('#product_qty_fld').val();
        if(!product_qty_fld) { product_qty_fld = 1; }
        product_qty_fld = parseInt(product_qty_fld);
        product_qty_fld = product_qty_fld - 1;
        if(product_qty_fld < 1) { product_qty_fld = 1;  }
        $('#product_qty_fld').val(product_qty_fld);
        return true;
    }); 

    $('#customer_question_block_save').click(function() { 
        $('#customer_question_sub_block_suc').removeClass("error_border");
        $('#customer_question_sub_block_err').removeClass("error_border"); 
        $('#customer_question_sub_block_tarea').removeClass("error_border");
        if($('#customer_question_sub_block_tarea').val())
        { 
            $('#customer_question_block_save_cancel').addClass("display_none");
            $('#customer_question_block_save_loader').removeClass("display_none");
          var question_val = $('#customer_question_sub_block_tarea').val();
          var product_token = $('#product_token').val();
          var jqxhr = $.ajax({ 
              method: "POST",
              url: "/product/qa/add",
              data: {
                qa: question_val,
                ptoken: product_token
              }
          })
          .done(function( data ) {   
              if(data.status === 100) { 
                $('#customer_question_sub_block_suc').removeClass("display_none");
                $('#customer_question_sub_block_tarea').val("") 
              } else {   
                
              }
          })
          .fail(function(msg ) {
              //console.log( msg ); 
          })
          .always(function() {
            $('#customer_question_block_save_cancel').removeClass("display_none");
            $('#customer_question_block_save_loader').addClass("display_none");
          }); 
        } else {
            $('#customer_question_sub_block_tarea').addClass("error_border");
        }
    }) 

    $('.product_variations_type1_option').click(function() {  
      let product_variations_link = $('#product_variations_link').val();
      let product_variations_link_json = JSON.parse(product_variations_link);
      var product_pvar = $(this).attr("data-pvar");  
      $('#product_variations_type1_sval').val(product_pvar);
      let product_variations_type2_sval = $('#product_variations_type2_sval').val();
      if(product_variations_type2_sval) {
        console.log(product_variations_link_json[product_pvar][product_variations_type2_sval])
        $('#product_variations_sval_token').val(product_variations_link_json[product_pvar][product_variations_type2_sval].token); 

        if(product_variations_link_json[product_pvar][product_variations_type2_sval].sale_price) 
        {
          $('#regular_price_html').html(product_variations_link_json[product_pvar][product_variations_type2_sval].sale_price_html);
          if(document.getElementById('sale_price_html_org'))
          {
            $('#sale_price_html_org').html(product_variations_link_json[product_pvar][product_variations_type2_sval].regular_price_html);
          } else {
            $('#sale_price_html_org_span').html('<strike id="sale_price_html_org">'+product_variations_link_json[product_pvar][product_variations_type2_sval].regular_price_html+'</strike>');
          }
        }
        else
        {
          $('#regular_price_html').html(product_variations_link_json[product_pvar][product_variations_type2_sval].regular_price_html);
          $('#sale_price_html_org_span').html('');
        }  
      }  

      $('.product_variations_type2_option').attr('disabled', false) 
      return true; 
    })

    $('.product_variations_type2_option').click(function() {  
      let product_variations_link = $('#product_variations_link').val();
      let product_variations_link_json = JSON.parse(product_variations_link);
      var product_pvar = $(this).attr("data-pvar");  
      $('#product_variations_type2_sval').val(product_pvar); 
      let product_variations_type1_sval = $('#product_variations_type1_sval').val();
      $('#product_variations_sval_token').val(product_variations_link_json[product_variations_type1_sval][product_pvar].token); 
 
      if(product_variations_link_json[product_variations_type1_sval][product_pvar].sale_price) 
      {
        $('#regular_price_html').html(product_variations_link_json[product_variations_type1_sval][product_pvar].sale_price_html);
        if(document.getElementById('sale_price_html_org'))
        {
          $('#sale_price_html_org').html(product_variations_link_json[product_variations_type1_sval][product_pvar].regular_price_html);
        } else {
          $('#sale_price_html_org_span').html('<strike id="sale_price_html_org">'+product_variations_link_json[product_variations_type1_sval][product_pvar].regular_price_html+'</strike>');
        }
      }
      else
      {
        $('#regular_price_html').html(product_variations_link_json[product_variations_type1_sval][product_pvar].regular_price_html);
        $('#sale_price_html_org_span').html('');
      } 

      return true; 
    })

    $('#otp_resend_otp').click(function() {     
        var ltoken =  $('#ltoken').val();
        $('#otp_sent_succ_msg').addClass("display_none");
        $('#otp_sent_err_msg').addClass("display_none");
        $('#otp_sent_err1_msg').addClass("display_none");
        var jqxhr = $.ajax({ 
            method: "POST",
            url: "/login/otp/"+ltoken+"/resend",
            data: { 
                ltoken: ltoken,
                _csrf: $('#_csrf').val()
            }
        })
        .done(function( data ) {   
            if(data.status === 100) {  
                $('#otp_sent_succ_msg').removeClass("display_none"); 
            } else {
                $('#otp_sent_err_msg').removeClass("display_none");
            }
        })
        .fail(function(msg ) {
            //console.log( msg ); 
            $('#otp_sent_err_msg').removeClass("display_none");
        })
        .always(function() {
            $('#otp_sent_err1_msg').addClass("display_none");
        });  
    })

    $('#signup_otp_resend_otp').click(function() {     
        var ltoken =  $('#ltoken').val();
        $('#otp_sent_succ_msg').addClass("display_none");
        $('#otp_sent_err_msg').addClass("display_none");
        $('#otp_sent_err1_msg').addClass("display_none");
        var jqxhr = $.ajax({ 
            method: "POST",
            url: "/signup/otp/"+ltoken+"/resend",
            data: { 
                ltoken: ltoken,
                _csrf: $('#_csrf').val()
            }
        })
        .done(function( data ) {   
            if(data.status === 100) {  
                $('#otp_sent_succ_msg').removeClass("display_none"); 
            } else {
                $('#otp_sent_err_msg').removeClass("display_none");
            }
        })
        .fail(function(msg ) {
            //console.log( msg ); 
            $('#otp_sent_err_msg').removeClass("display_none");
        })
        .always(function() {
            $('#otp_sent_err1_msg').addClass("display_none");
        });  
    })

    $('.aarral_cart_item_delete').click(function() {     
        var cart_item_token =  $(this).attr('data-ctoken');
        var jqxhr = $.ajax({ 
            method: "POST",
            url: "/cart/del",
            data: { 
                ctoken: cart_item_token
            }
        })
        .done(function( data ) {   
            if(data.status === 100) { 
                location.reload();
                /*if(data.redirect_url) {
                    window.location.href = data.redirect_url
                }*/
                //$('#customer_question_sub_block_suc').removeClass("display_none");
                //$('#customer_question_sub_block_tarea').val("") 
            } else {   
            
            }
        })
        .fail(function(msg ) {
            //console.log( msg ); 
        })
        .always(function() {
        
        });  
    })

    $('.aarral_cart_item_mlater').click(function() {     
        var cart_item_token =  $(this).attr('data-ctoken');
        var jqxhr = $.ajax({ 
            method: "POST",
            url: "/cart/later",
            data: { 
                ctoken: cart_item_token
            }
        })
        .done(function( data ) {   
            if(data.status === 100) { 
                if(data.redirect_url) {
                    //window.location.href = data.redirect_url
                    location.reload();
                }
                //$('#customer_question_sub_block_suc').removeClass("display_none");
                //$('#customer_question_sub_block_tarea').val("") 
            } else {   
            
            }
        })
        .fail(function(msg ) {
            //console.log( msg ); 
        })
        .always(function() {
        
        });  
    })

    $('#product_out_of_stock_notify_btn').click(function() { 
      $('#product_out_of_stock_notify_email').removeClass("error_border");
      $('#product_out_of_stock_notify_email_succ_block').addClass("display_none");
      if($('#product_out_of_stock_notify_email').val() && $('#product_token').val())
      {  
        var jqxhr = $.ajax({ 
            method: "POST",
            url: "/product/stock/notify",
            data: {
              "token": $('#product_token').val(),
              "email": $('#product_out_of_stock_notify_email').val()
            }
        })
        .done(function( data ) {   
            if(data.status === 100) { 
              $('#product_out_of_stock_notify_email_succ_block').removeClass("display_none"); 
            } else {   
              
            }
        })
        .fail(function(msg ) {
            //console.log( msg ); 
        })
        .always(function() {
          
        }); 
      } else {
          $('#product_out_of_stock_notify_email').addClass("error_border");
      }
  })

    $('#newsletter_email_btn').click(function() { 
        $('#newsletter_email').removeClass("error_border");
        $('#newsletter_email_succ_block').addClass("display_none");
        if($('#newsletter_email').val())
        { 
          var email = $('#newsletter_email').val() 
          var jqxhr = $.ajax({ 
              method: "POST",
              url: "/newsletter/subscribe",
              data: {
                "email": email
              }
          })
          .done(function( data ) {   
              if(data.status === 100) { 
                $('#newsletter_email_succ_block').removeClass("display_none");
                $('#newsletter_email').val("") 
              } else {   
                
              }
          })
          .fail(function(msg ) {
              //console.log( msg ); 
          })
          .always(function() {
            
          }); 
        } else {
            $('#newsletter_email').addClass("error_border");
        }
    })

    $('.product_add_to_cart').click(function() { 
        /*$('#newsletter_email').removeClass("error_border");
        $('#newsletter_email_succ_block').addClass("display_none");
        */
        $('#added_to_cart_suc_msg').addClass("display_none");
        $('#added_to_cart_pv_missing_err_msg').addClass('display_none')
        if($('#product_token').val())
        { 
          var is_error = 0
          if(document.getElementById('product_variations_sval_token')) {
            if($('#product_variations_sval_token').val() == "") { 
              is_error = 1
            }
          }

          if(is_error == 0) {
            $('#add_to_cart_loader').removeClass("display_none");
            var ptoken = $('#product_token').val() 
            var pvariant = ""
            if(document.getElementById('product_variations_sval_token')) {
              pvariant = $('#product_variations_sval_token').val()
            }
            var qty = $('#product_qty_fld').val() 
            var jqxhr = $.ajax({ 
                method: "POST",
                url: "/cart/add",
                data: {
                  qty: qty,
                  token: ptoken,
                  pvariant: pvariant
                }
            })
            .done(function( data ) {   
              //console.log(data)
                if(data.status === 100) {  
                  $('#added_to_cart_suc_msg').removeClass("display_none");
                   
                  //var modal = document.querySelector(".modal");  
                  $('.modal').addClass("show-modal");  
  
                  sync_mini_cart();
  
                  /*$('#newsletter_email_succ_block').removeClass("display_none");
                  $('#newsletter_email').val("") */
                } else {   
                  
                }
            })
            .fail(function(msg ) {
                //console.log( msg ); 
            })
            .always(function() {
              $('#add_to_cart_loader').addClass("display_none");
            }); 
          } else {
            $('#added_to_cart_pv_missing_err_msg').removeClass('display_none')
          }
           
        } else {
            $('#newsletter_email').addClass("error_border");
        }
    })

    $('#product_sort_form_select').change(function() { 
      $('#product_sort_form').submit();
    });

    $('.product_qty_plus_control').click(function() { 
        $('#cart_page_updated_notice_p').addClass("display_none");
        if($(this).attr("data-ptoken"))
        { 
            $('#add_to_cart_loader').removeClass("display_none");
          var ptoken = $(this).attr("data-ptoken") 
          var qty = $('.product_qty_plus_control_' + ptoken).val() 
          qty = parseInt(qty) + 1;
          var jqxhr = $.ajax({ 
              method: "POST",
              url: "/cart/update",
              data: {
                qty: qty,
                token: ptoken
              }
          })
          .done(function( data ) {   
            //console.log(data)
              if(data.status === 100) {  
                //$('#cart_page_updated_notice_p').removeClass("display_none"); 
                location.reload()
              } else {   
                
              }
          })
          .fail(function(msg ) {
              //console.log( msg ); 
          })
          .always(function() {
            $('#add_to_cart_loader').addClass("display_none");
          }); 
        } else {
            //$('#newsletter_email').addClass("error_border");
        }
    })

    $('.cart_product_qty_fld_control').blur(function() { 
        $('#cart_page_updated_notice_p').addClass("display_none");
        if($(this).attr("data-ptoken"))
        { 
            $('#add_to_cart_loader').removeClass("display_none");
          var ptoken = $(this).attr("data-ptoken") 
          var qty = $('.product_qty_plus_control_' + ptoken).val() 
          qty = parseInt(qty) + 1;
          var jqxhr = $.ajax({ 
              method: "POST",
              url: "/cart/update",
              data: {
                qty: qty,
                token: ptoken
              }
          })
          .done(function( data ) {   
            //console.log(data)
              if(data.status === 100) {  
                $('#cart_page_updated_notice_p').removeClass("display_none"); 
                location.reload()
              } else {   
                
              }
          })
          .fail(function(msg ) {
              //console.log( msg ); 
          })
          .always(function() {
            $('#add_to_cart_loader').addClass("display_none");
          }); 
        } else {
            //$('#newsletter_email').addClass("error_border");
        }
    })

    $('.product_qty_minus_control').click(function() { 
        $('#cart_page_updated_notice_p').addClass("display_none");
        //alert($(this).attr("data-ptoken"))
        if($(this).attr("data-ptoken"))
        { 
            $('#add_to_cart_loader').removeClass("display_none");
          var ptoken = $(this).attr("data-ptoken") 
          var qty = $('.product_qty_plus_control_' + ptoken).val() 
          qty = parseInt(qty) - 1;
          var jqxhr = $.ajax({ 
              method: "POST",
              url: "/cart/update",
              data: { 
                qty: qty,
                token: ptoken
              }
          })
          .done(function( data ) {   
            //console.log(data)
              if(data.status === 100) {  
                $('#cart_page_updated_notice_p').removeClass("display_none"); 
                location.reload()
              } else {   
                
              }
          })
          .fail(function(msg ) {
              //console.log( msg ); 
          })
          .always(function() {
            $('#add_to_cart_loader').addClass("display_none");
          }); 
        } else {
            //$('#newsletter_email').addClass("error_border");
        }
    })

    $('.customer_address_item_make_default').click(function() { 
        //$('#cart_page_updated_notice_p').addClass("display_none");
        if($(this).attr("data-atoken"))
        { 
           // $('#add_to_cart_loader').removeClass("display_none");
          var atoken = $(this).attr("data-atoken")  
          var jqxhr = $.ajax({ 
              method: "POST",
              url: "/profile/address/" + atoken + "/default",
              data: { 
                ok: 1
              }
          })
          .done(function( data ) {   
            //console.log(data)
              if(data.status === 100) {   
                location.reload()
              } else {   
                
              }
          })
          .fail(function(msg ) {
              //console.log( msg ); 
          })
          .always(function() {
            //$('#add_to_cart_loader').addClass("display_none");
          }); 
        } else {
            //$('#newsletter_email').addClass("error_border");
        }
    })

    $('.customer_address_item_del_asc').click(function() { 
        //$('#cart_page_updated_notice_p').addClass("display_none");
        if($(this).attr("data-atoken"))
        { 
           // $('#add_to_cart_loader').removeClass("display_none");
          var atoken = $(this).attr("data-atoken")  
          var jqxhr = $.ajax({ 
              method: "POST",
              url: "/profile/address/" + atoken + "/del",
              data: { 
                ok: 1
              }
          })
          .done(function( data ) {   
            //console.log(data)
              if(data.status === 100) {   
                location.reload()
              } else {   
                
              }
          })
          .fail(function(msg ) {
              //console.log( msg ); 
          })
          .always(function() {
            //$('#add_to_cart_loader').addClass("display_none");
          }); 
        } else {
            //$('#newsletter_email').addClass("error_border");
        }
    })

    $('.aarral_cart_item_move_to_cart').click(function() {   
        if($(this).attr('data-ctoken'))
        {  
          var cart_item_token =  $(this).attr('data-ctoken');
          var jqxhr = $.ajax({ 
              method: "POST",
              url: "/cart/add",
              data: {
                qty: 1,
                token: cart_item_token,
                mc: 1
              }
          })
          .done(function( data ) {   
            //console.log(data)
              if(data.status === 100) {    
                location.reload();
              } else {   
                
              }
          })
          .fail(function(msg ) {
              //console.log( msg ); 
          })
          .always(function() {
            
          }); 
        } else {
            $('#newsletter_email').addClass("error_border");
        }
    })

    $('#show_customer_data_mobile_update_block').click(function() {   
        $("#customer_data_mobile_update_before_block").addClass("display_none");
        $("#customer_data_mobile_update_block").removeClass("display_none"); 
        $("#customer_data_mobile_update_block_md").focus(); 
    })

    $('#cart_add_coupon_code').click(function() {   
      $('.modal').addClass("show-modal"); 
      $('#coupon_code_txtbox').focus();
      return true;
    })

    $('#coupon_code_txtbox_btn').click(function() {   
      $('#coupon_code_txtbox').removeClass("error_border"); 
      if($("#coupon_code_txtbox").val())
      {  
        $('#update_btn_loader').removeClass("display_none"); 
        var coupon_code_txtbox =  $("#coupon_code_txtbox").val();
        var jqxhr = $.ajax({ 
            method: "POST",
            url: "/cart/coupon",
            data: { 
              ccode: coupon_code_txtbox
            }
        })
        .done(function( data ) {    
          //console.log(data)
            if(data.status === 100) {    
              location.reload();
            } else {
              $('#cart_coupon_code_error_msg').html(data.status_desc)
            }
        })
        .fail(function(msg ) {
            //console.log( msg ); 
        })
        .always(function() {
          $('#update_btn_loader').addClass("display_none");
        }); 
      } else {
          $('#coupon_code_txtbox').addClass("error_border");
      } 
  })

    $('#customer_data_mobile_update_block_update_btn').click(function() {   
        $('#customer_data_mobile_update_block_md').removeClass("error_border"); 
        if($("#customer_data_mobile_update_block_md").val())
        {  
          $('#update_btn_loader').removeClass("display_none"); 
          var mobile_md =  $("#customer_data_mobile_update_block_md").val();
          var jqxhr = $.ajax({ 
              method: "POST",
              url: "/profile/update/mobile",
              data: { 
                md: mobile_md
              }
          })
          .done(function( data ) {    
              if(data.status === 100) {    
                location.reload();
              }
          })
          .fail(function(msg ) {
              //console.log( msg ); 
          })
          .always(function() {
            $('#update_btn_loader').addClass("display_none");
          }); 
        } else {
            $('#customer_data_mobile_update_block_md').addClass("error_border");
        } 
    })

    $('#new_address_add_btn').click(function() {   
      $('#customer_data_mobile_update_block_md').removeClass("error_border"); 
      $('#new_address_succ_msg_div').addClass("display_none");
      let is_error = 0;
      $('.new_address_ele_fld').removeClass('error_border');
      if($("#full_name").val() == "") {
        is_error = 1;
        $('#full_name').addClass("error_border");
      } else if($("#address_line_1").val() == "") {
        is_error = 1;
        $('#address_line_1').addClass("error_border");
      } else if($("#pincode").val() == "") {
        is_error = 1;
        $('#pincode').addClass("error_border");
      } else if($("#city").val() == "") {
        is_error = 1;
        $('#city').addClass("error_border");
      } else if($("#district_list_eld").val() == "") {
        is_error = 1;
        $('#district_list_eld').addClass("error_border");
      } else if($("#state_list_eld").find(":selected").val() == "") {
        is_error = 1;
        $('#state_list_eld').addClass("error_border");
      } else if($("#mobile_1").val() == "") {
        is_error = 1;
        $('#mobile_1').addClass("error_border");
      }
      if(is_error == 1) {
        return false;
      } else {
        let input_data = {}
        input_data.full_name = $("#full_name").val();
        input_data.company = $("#company").val();
        input_data.address_line_1 = $("#address_line_1").val();
        input_data.address_line_2 = $("#address_line_2").val();
        input_data.landmark = $("#landmark").val();
        input_data.pincode = $("#pincode").val();
        input_data.location_list_eld = $("#location_list_eld").val();
        input_data.city = $("#city").val();
        input_data.district_list_eld = $("#district_list_eld").val();
        input_data.state_list_eld = $("#state_list_eld").find(":selected").val();
        input_data.mobile_1 = $("#mobile_1").val();
        input_data.mobile_2 = $("#mobile_2").val(); 
       // $('#update_btn_loader').removeClass("display_none");  
        var jqxhr = $.ajax({ 
            method: "POST",
            url: "/profile/address/add",
            data: input_data
        })
        .done(function( data ) {    
            if(data.status === 100) {    
              $('#new_address_succ_msg_div').removeClass("display_none");
              $('.new_address_ele_fld').val("");
              //location.reload();
            }
        })
        .fail(function(msg ) {
            //console.log( msg ); 
        })
        .always(function() {
          //$('#update_btn_loader').addClass("display_none");
        }); 
      }  
      
  })

  $('#update_address_add_btn').click(function() {   
    $('#customer_data_mobile_update_block_md').removeClass("error_border"); 
    $('#new_address_succ_msg_div').addClass("display_none");
    $('#new_address_error_msg_div').addClass("display_none");
    let is_error = 0;
    $('.new_address_ele_fld').removeClass('error_border');
    if($("#full_name").val() == "") {
      is_error = 1;
      $('#full_name').addClass("error_border");
    } else if($("#address_line_1").val() == "") {
      is_error = 1;
      $('#address_line_1').addClass("error_border");
    } else if($("#pincode").val() == "") {
      is_error = 1;
      $('#pincode').addClass("error_border");
    } else if($("#city").val() == "") {
      is_error = 1;
      $('#city').addClass("error_border");
    } else if($("#district_list_eld").val() == "") {
      is_error = 1;
      $('#district_list_eld').addClass("error_border");
    } else if($("#state_list_eld").find(":selected").val() == "") {
      is_error = 1;
      $('#state_list_eld').addClass("error_border");
    } else if($("#mobile_1").val() == "") {
      is_error = 1;
      $('#mobile_1').addClass("error_border");
    }

    if(!$("#addr_token").val()) {
      is_error = 1;
    }

    if(is_error == 1) {
      return false;
    } else {
      let input_data = {}
      input_data.full_name = $("#full_name").val();
      input_data.company = $("#company").val();
      input_data.address_line_1 = $("#address_line_1").val();
      input_data.address_line_2 = $("#address_line_2").val();
      input_data.landmark = $("#landmark").val();
      input_data.pincode = $("#pincode").val();
      input_data.location_list_eld = $("#location_list_eld").val();
      input_data.city = $("#city").val();
      input_data.district_list_eld = $("#district_list_eld").val();
      input_data.state_list_eld = $("#state_list_eld").find(":selected").val();
      input_data.mobile_1 = $("#mobile_1").val();
      input_data.mobile_2 = $("#mobile_2").val(); 
      let addr_token = $("#addr_token").val(); 
     // $('#update_btn_loader').removeClass("display_none");  
      var jqxhr = $.ajax({ 
          method: "POST",
          url: "/profile/address/" + addr_token + "/update",
          data: input_data
      })
      .done(function( data ) {    
          if(data.status === 100) {    
            $('#new_address_succ_msg_div').removeClass("display_none"); 
            //location.reload();
          } else {
            $('#new_address_error_msg_div').removeClass("display_none"); 
            $('#new_address_error_msg_div_span').html(data.status_desc); 
          }
      })
      .fail(function(msg ) {
          //console.log( msg ); 
      })
      .always(function() {
        //$('#update_btn_loader').addClass("display_none");
      }); 
    }  
    
})
    
}); 
// jquery end

function auto_select_drop_down(element, text_value) {
    $('#'+element+' option:selected').removeAttr('selected');
    $('#'+element+' option').map(function () {
        if ($(this).text() == text_value)  return this;
    }).attr('selected', 'selected'); 
    return true;
}

function toTitleCase(str) {
    return str.toLowerCase().split(' ').map(function (word) {
      return (word.charAt(0).toUpperCase() + word.slice(1));
    }).join(' ');
}

function autocomplete(inp, arr) {
    /*the autocomplete function takes two arguments,ö
    the text field element and an array of possible autocompleted values:*/
    var currentFocus;
    /*execute a function when someone writes in the text field:*/
    inp.addEventListener("input", function(e) {
        var a, b, i, val = this.value;
        /*close any already open lists of autocompleted values*/
        closeAllLists();
        if (!val) { return false;}
        currentFocus = -1;
        /*create a DIV element that will contain the items (values):*/
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
        /*append the DIV element as a child of the autocomplete container:*/
        this.parentNode.appendChild(a);
        /*for each item in the array...*/
        for (i = 0; i < arr.length; i++) {
          /*check if the item starts with the same letters as the text field value:*/
          if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
            /*create a DIV element for each matching element:*/
            b = document.createElement("DIV");
            /*make the matching letters bold:*/
            b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
            b.innerHTML += arr[i].substr(val.length);
            /*insert a input field that will hold the current array item's value:*/
            b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
            /*execute a function when someone clicks on the item value (DIV element):*/
                b.addEventListener("click", function(e) {
                /*insert the value for the autocomplete text field:*/
                inp.value = this.getElementsByTagName("input")[0].value;
                /*close the list of autocompleted values,
                (or any other open lists of autocompleted values:*/
                closeAllLists();
            });
            a.appendChild(b);
          }
        }
    });
    /*execute a function presses a key on the keyboard:*/
    inp.addEventListener("keydown", function(e) {
        var x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40) {
          /*If the arrow DOWN key is pressed,
          increase the currentFocus variable:*/
          currentFocus++;
          /*and and make the current item more visible:*/
          addActive(x);
        } else if (e.keyCode == 38) { //up
          /*If the arrow UP key is pressed,
          decrease the currentFocus variable:*/
          currentFocus--;
          /*and and make the current item more visible:*/
          addActive(x);
        } else if (e.keyCode == 13) {
          /*If the ENTER key is pressed, prevent the form from being submitted,*/
          e.preventDefault();
          if (currentFocus > -1) {
            /*and simulate a click on the "active" item:*/
            if (x) x[currentFocus].click();
          }
        }
    });
    function addActive(x) {
      /*a function to classify an item as "active":*/
      if (!x) return false;
      /*start by removing the "active" class on all items:*/
      removeActive(x);
      if (currentFocus >= x.length) currentFocus = 0;
      if (currentFocus < 0) currentFocus = (x.length - 1);
      /*add class "autocomplete-active":*/
      x[currentFocus].classList.add("autocomplete-active");
    }
    function removeActive(x) {
      /*a function to remove the "active" class from all autocomplete items:*/
      for (var i = 0; i < x.length; i++) {
        x[i].classList.remove("autocomplete-active");
      }
    }
    function closeAllLists(elmnt) {
      /*close all autocomplete lists in the document,
      except the one passed as an argument:*/
      var x = document.getElementsByClassName("autocomplete-items");
      for (var i = 0; i < x.length; i++) {
        if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }
  /*execute a function when someone clicks in the document:*/
  document.addEventListener("click", function (e) {
      closeAllLists(e.target);
  });
  }

function sync_mini_cart() 
{    
  var jqxhr = $.ajax({ 
      method: "GET",
      url: "/cart/track",
      data: { 
         
      }
  })
  .done(function( data ) {   
    //console.log(data)
    if(Object.keys(data.mc).length) { 
      $('#header_shopping_cart_notify_count').removeClass("display_none");
      $('#header_shopping_cart_notify_count').html(data.mc.qty);
    }
      
  })
  .fail(function(msg ) {
      //console.log( msg ); 
  })
  .always(function() {
    
  });  
}

$(document).on("click", ".pseller-send-whatsapp", function() {
  var a = document.getElementById("pseller-whatsapp-msg");
  let wmsg = ""
  let wmno = "+918870550225"
  if (document.getElementById("pseller-whatsapp-msg")) {
    wmsg = document.getElementById("pseller-whatsapp-msg").innerHTML;
  } else {
    wmsg = "Hello, I need some help with your online shop, can you help me out with this?";
  }
  if(document.getElementById("pseller-cnumber")) {
    wmno = $("#pseller-cnumber").text();
  }
  if ("" != wmsg) {
    var b = wmno,
      c = encodeURIComponent(wmsg),
      d = "https://web.whatsapp.com/send",
      e = b,
      f = "&text=" + c;
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    )
      var d = "whatsapp://send";
    var g = d + "?phone=" + e + f;
    window.open(g, "_blank");
  }
});

$(document).on("click", "#send-whatsapp", function() {
  var a = document.getElementById("send-whatsapp-msg");
  if ("" != a.value) {
    var b = $("#get-number").text(),
      c = document.getElementById("send-whatsapp-msg").innerHTML,
      d = "https://web.whatsapp.com/send",
      e = b,
      f = "&text=" + c;
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    )
      var d = "whatsapp://send";
    var g = d + "?phone=" + e + f;
    window.open(g, "_blank");
  }
});

