    $(document).ready(function() {
        $(":input, a").attr("tabindex", "-1");
        
        /******Step 1 // - Personal Information Slider // WORKING *******************/
        $('#personal-name').keypress(function(event) {
            if (event.keyCode == 13) {
                event.preventDefault();
            }
        });
        $('#personal-email').keypress(function(event) {
            if (event.keyCode == 13) {
                event.preventDefault();
            }
        });
        $('#personal-phone').keypress(function(event) {
            if (event.keyCode == 13) {
                event.preventDefault();
            }
        });

        
        $('#name-step').click(function(e) {
            console.log("ESHPRINT");
            e.preventDefault();   
            


            var fnumber = document.forms[0].elements["personal-phone"].value;
            console.log(fnumber)

            if($('#personal-name').val().length == 0){
                $('#name-personal-alert').show(500);
            }
            else
            {
                $('#name-personal-alert').hide();
            };
            if($('#personal-email').val().length == 0){
                $('#email-personal-alert').show(500);
            }
            else
            {
            $('#email-personal-alert').hide();
            };
            if($('#personal-phone').val().length == 0){
                $('#phone-personal-alert').show(500);
            } 
            else
            {
                $('#phone-personal-alert').hide();
            };  

            
            if(isNaN(fnumber) == true){
                $('#phone-personal-alert2').show(500);
            }
            else
            {
                $('#phone-personal-alert2').hide();
            };



            console.log("end of code")

            if($('#personal-name').val().length !=0 && 
                $('#personal-email').val().length !=0 && 
                $('#personal-phone').val().length !=0 && 
                isNaN(fnumber) == false/* &&
                index1 != 0*/)
                {
                $('#name-personal-alert').hide();
                $('#email-personal-alert').hide();
                $('#phone-personal-alert').hide();
                $('#phone-personal-alert2').hide();
                $('#tradeshow-personal-alert').hide();
                console.log("conditions met")
                $('.w-round div:nth-child(2)').trigger('tap');
                }
            console.log("real end of code")
   
        });   

        
        /******Step 2 // - Store Information Slider // WORKING  *******************/
        $('#store-name').keypress(function(event) {
            if (event.keyCode == 13) {
                event.preventDefault();
            }
        });
        $('#store-location').keypress(function(event) {
            if (event.keyCode == 13) {
                event.preventDefault();
            }
        });
        $('#store-address').keypress(function(event) {
            if (event.keyCode == 13) {
                event.preventDefault();
            }
        });
        $('#store-address2').keypress(function(event) {
            if (event.keyCode == 13) {
                event.preventDefault();
            }
        });
        $('#store-city').keypress(function(event) {
            if (event.keyCode == 13) {
                event.preventDefault();
            }
        });
        $('#store-stateprovince').keypress(function(event) {
            if (event.keyCode == 13) {
                event.preventDefault();
            }
        });
        $('#store-zippostalcode').keypress(function(event) {
            if (event.keyCode == 13) {
                event.preventDefault();
            }
        });
        $('#store-email').keypress(function(event) {
            if (event.keyCode == 13) {
                event.preventDefault();
            }
        });
        $('#store-phone').keypress(function(event) {
            if (event.keyCode == 13) {
                event.preventDefault();
            }
        });
        $('#RJO-Buying-Show').keypress(function(event) {
            if (event.keyCode == 13) {
                event.preventDefault();
            }
        });
        $('#The-INSTORE-Show').keypress(function(event) {
            if (event.keyCode == 13) {
                event.preventDefault();
            }
        });
        $('#Select-Jewelry-Show-VA').keypress(function(event) {
            if (event.keyCode == 13) {
                event.preventDefault();
            }
        });
        $('#Select-Jewelry-Show-CT').keypress(function(event) {
            if (event.keyCode == 13) {
                event.preventDefault();
            }
        });
        $('#Select-Jewelry-Show-Dallas').keypress(function(event) {
            if (event.keyCode == 13) {
                event.preventDefault();
            }
        });
        $('#personal-buygroup').keypress(function(event) {
            if (event.keyCode == 13) {
                event.preventDefault();
            }
        });


        $('#store-step-back').click(function(e) {
            console.log("ESHPRINT3");
            e.preventDefault(); 
            $('.w-round div:nth-child(1)').trigger('tap');
        });
        $('#store-step').click(function(e) {
            console.log("ESHPRINT2");
            e.preventDefault();             

            var fnumber2 = document.forms[0].elements["store-phone"].value;
            console.log(fnumber2)

            if($('#store-name').val().length == 0){
                $('#name-store-alert').show(500);
            }
            else
            {
            $('#name-store-alert').hide();
            };
            if($('#store-location').val().length == 0){
                $('#location-store-alert').show(500);
            }
            else
            {
            $('#location-store-alert').hide();
            };
            if($('#store-address').val().length == 0){
                $('#address-store-alert').show(500);
            }
            else
            {
            $('#address-store-alert').hide();
            };
            if($('#store-city').val().length == 0){
                $('#city-store-alert').show(500);
            }
            else
            {
            $('#city-store-alert').hide();
            };
            if($('#store-stateprovince').val().length == 0){
                $('#stateprovince-store-alert').show(500);
            }
            else
            {
            $('#stateprovince-store-alert').hide();
            };
            if($('#store-zippostalcode').val().length == 0){
                $('#zippostalcode-store-alert').show(500);
            }
            else
            {
            $('#zippostalcode-store-alert').hide();
            };
            if($('#store-email').val().length == 0){
                $('#email-store-alert').show(500);
            }
            else
            {
            $('#email-store-alert').hide();
            };

            if($('#store-phone').val().length == 0){
                $('#phone-store-alert').show(500);
            } 
            else
            {
                $('#phone-store-alert').hide();
            };  

            if(isNaN(fnumber2) == true){
                $('#phone-store-alert2').show(500);
            }
            else
            {
                $('#phone-store-alert2').hide();
            };

            if($('#store-name').val().length !=0 &&
                $('#store-location').val().length !=0 && 
                $('#store-address').val().length !=0 &&
                $('#store-city').val().length !=0 &&
                $('#store-stateprovince').val().length !=0 &&
                $('#store-zippostalcode').val().length !=0 &&
                $('#store-email').val().length !=0 &&
                isNaN(fnumber2) == false)
                {
                console.log("conditions met")
                $('.w-round div:nth-child(3)').trigger('tap');
                }  
                $('#OwnerCheckbox').disabled = true;
                $('#PayableCheckbox').disabled = true;

            
        });


        /******Step 3 // - Store Contact List Slider // MISSING CONDITION TEST FOR PASSING SLIDE AND TESTING *******************/

        $('#OwnerCheckbox').keypress(function(event) {
            if (event.keyCode == 13) {
                event.preventDefault();
            }
        });        
        $('#ctc-owner-name').keypress(function(event) {
            if (event.keyCode == 13) {
                event.preventDefault();
            }
        });        
        $('#contact-email-owner').keypress(function(event) {
            if (event.keyCode == 13) {
                event.preventDefault();
            }
        });
        $('#PayableCheckbox').keypress(function(event) {
            if (event.keyCode == 13) {
                event.preventDefault();
            }
        });        
        $('#ctc-accounts-name').keypress(function(event) {
            if (event.keyCode == 13) {
                event.preventDefault();
            }
        });        
        $('#contact-email-accounts').keypress(function(event) {
            if (event.keyCode == 13) {
                event.preventDefault();
            }
        });
        $('#BuyerCheckbox').keypress(function(event) {
            if (event.keyCode == 13) {
                event.preventDefault();
            }
        });        
        $('#ctc-buyer-name').keypress(function(event) {
            if (event.keyCode == 13) {
                event.preventDefault();
            }
        });        
        $('#contact-email-buyer').keypress(function(event) {
            if (event.keyCode == 13) {
                event.preventDefault();
            }
        });
        $('#StoreCheckbox').keypress(function(event) {
            if (event.keyCode == 13) {
                event.preventDefault();
            }
        });        
        $('#ctc-stomanager-name').keypress(function(event) {
            if (event.keyCode == 13) {
                event.preventDefault();
            }
        });        
        $('#contact-email-stomanager').keypress(function(event) {
            if (event.keyCode == 13) {
                event.preventDefault();
            }
        });
        $('#MarketingCheckbox').keypress(function(event) {
            if (event.keyCode == 13) {
                event.preventDefault();
            }
        });        
        $('#ctc-marketing-name').keypress(function(event) {
            if (event.keyCode == 13) {
                event.preventDefault();
            }
        });        
        $('#contact-email-marketing').keypress(function(event) {
            if (event.keyCode == 13) {
                event.preventDefault();
            }
        });
        $('#OfficeCheckbox').keypress(function(event) {
            if (event.keyCode == 13) {
                event.preventDefault();
            }
        });        
        $('#ctc-offmanager-name').keypress(function(event) {
            if (event.keyCode == 13) {
                event.preventDefault();
            }
        });        
        $('#contact-email-offmanager').keypress(function(event) {
            if (event.keyCode == 13) {
                event.preventDefault();
            }
        });
        $('#WebsiteCheckbox').keypress(function(event) {
            if (event.keyCode == 13) {
                event.preventDefault();
            }
        });        
        $('#ctc-website-name').keypress(function(event) {
            if (event.keyCode == 13) {
                event.preventDefault();
            }
        });        
        $('#contact-email-website').keypress(function(event) {
            if (event.keyCode == 13) {
                event.preventDefault();
            }
        });
        $('#SalesCheckbox').keypress(function(event) {
            if (event.keyCode == 13) {
                event.preventDefault();
            }
        });        
        $('#ctc-sales-name').keypress(function(event) {
            if (event.keyCode == 13) {
                event.preventDefault();
            }
        });        
        $('#contact-email-sales').keypress(function(event) {
            if (event.keyCode == 13) {
                event.preventDefault();
            }
        });


        $('#OwnerCheckbox').addEventListener('change', function() {
            if ($('#OwnerCheckbox').checked) {
                $('#ctc-owner-name').disabled = false;
                $('#contact-email-owner').disabled = false;
            } else {
                $('#ctc-owner-name').disabled = true;
                $('#contact-email-owner').disabled = true;
                $('#ctc-owner-name').value = '';
                $('#contact-email-owner').value = '';
        }});
        $('#PayableCheckbox').addEventListener('change', function() {
            if ($('#PayableCheckbox').checked) {
                $('#ctc-accounts-name').disabled = false;
                $('#contact-email-accounts').disabled = false;
            } else {
                $('#ctc-accounts-name').disabled = true;
                $('#contact-email-accounts').disabled = true;
                $('#ctc-accounts-name').value = '';
                $('#contact-email-accounts').value = '';
        }});
        $('#BuyerCheckbox').addEventListener('change', function() {
            if ($('#BuyerCheckbox').checked) {
                $('#ctc-buyer-name').disabled = false;
                $('#contact-email-buyer').disabled = false;
            } else {
                $('#ctc-buyer-name').disabled = true;
                $('#contact-email-buyer').disabled = true;
                $('#ctc-buyer-name').value = '';
                $('#contact-email-buyer').value = '';
        }});
        $('#StoreCheckbox').addEventListener('change', function() {
            if ($('#StoreCheckbox').checked) {
                $('#ctc-stomanager-name').disabled = false;
                $('#contact-email-stomanager').disabled = false;
            } else {
                $('#ctc-stomanager-name').disabled = true;
                $('#contact-email-stomanager').disabled = true;
                $('#ctc-stomanager-name').value = '';
                $('#contact-email-stomanager').value = '';
        }});
        $('#MarketingCheckbox').addEventListener('change', function() {
            if ($('#MarketingCheckbox').checked) {
                $('#ctc-marketing-name').disabled = false;
                $('#contact-email-marketing').disabled = false;
            } else {
                $('#ctc-marketing-name').disabled = true;
                $('#contact-email-marketing').disabled = true;
                $('#ctc-marketing-name').value = '';
                $('#contact-email-marketing').value = '';
        }});
        $('#OfficeCheckbox').addEventListener('change', function() {
            if ($('#OfficeCheckbox').checked) {
                $('#ctc-offmanager-name').disabled = false;
                $('#contact-email-offmanager').disabled = false;
            } else {
                $('#ctc-offmanager-name').disabled = true;
                $('#contact-email-offmanager').disabled = true;
                $('#ctc-offmanager-name').value = '';
                $('#contact-email-offmanager').value = '';
        }});
        $('#WebsiteCheckbox').addEventListener('change', function() {
            if ($('#WebsiteCheckbox').checked) {
                $('#ctc-website-name').disabled = false;
                $('#contact-email-website').disabled = false;
            } else {
                $('#ctc-website-name').disabled = true;
                $('#contact-email-website').disabled = true;
                $('#ctc-website-name').value = '';
                $('#contact-email-website').value = '';
        }});
        $('#SalesCheckbox').addEventListener('change', function() {
            if ($('#SalesCheckbox').checked) {
                $('#ctc-sales-name').disabled = false;
                $('#contact-email-sales').disabled = false;
            } else {
                $('#ctc-sales-name').disabled = true;
                $('#contact-email-sales').disabled = true;
                $('#ctc-sales-name').value = '';
                $('#contact-email-sales').value = '';
        }});
        

        $('#storecontact-step-back').click(function(e) {
            console.log("ESHPRINT4");
            e.preventDefault(); 
            $('.w-round div:nth-child(2)').trigger('tap');
        });

        $('#contact-step').click(function(e) {
            console.log("ESHPRINT3");
            e.preventDefault();

            if($('#ctc-owner-name').val().length == 0 || $('#contact-email-owner').val().length == 0){
                $('#ctc-owner-name-alert').show(500);
            }
            else
            {
                $('#ctc-owner-name-alert').hide();
            };

            if($('#ctc-accounts-name').val().length == 0 || $('#contact-accounts-owner').val().length == 0){
                $('#ctc-accounts-name-alert').show(500);
            }
            else
            {
                $('#ctc-accounts-name-alert').hide();
            };

            $('.w-round div:nth-child(4)').trigger('tap');
        });   




        /******Step 4 // - Credit Information Slider // MUST TEST *******************/
        $('#credit-name').keypress(function(event) {
            if (event.keyCode == 13) {
                event.preventDefault();
            }
        });
        $('#credit-number').keypress(function(event) {
            if (event.keyCode == 13) {
                event.preventDefault();
            }
        });
        $('#credit-month').keypress(function(event) {
            if (event.keyCode == 13) {
                event.preventDefault();
            }
        });
        $('#credit-year').keypress(function(event) {
            if (event.keyCode == 13) {
                event.preventDefault();
            }
        });
        $('#credit-cardtype').keypress(function(event) {
            if (event.keyCode == 13) {
                event.preventDefault();
            }
        });
        $('#credit-security').keypress(function(event) {
            if (event.keyCode == 13) {
                event.preventDefault();
            }
        });
        $('#Billing-Same-as-Store-Address').addEventListener('change', (event) =>  {
            if (event.keyCode == 13) {
                event.preventDefault();
            }
            if($('#Billing-Same-as-Store-Address') == true){
                $('#credit-address1').val = $('#store-address1').val;
                $('#credit-address2').val = $('#store-address2').val;
                $('#credit-city').val = $('#store-city').val;
                $('#credit-StateProvince').val = $('#store-stateprovince').val;
                $('#credit-PostalZip').val = $('#store-zippostalcode').val;

                $('#credit-address1').disabled = true;
                $('#credit-address2').disabled = true;
                $('#credit-city').disabled = true;
                $('#credit-StateProvince').disabled = true;
                $('#credit-PostalZip').disabled = true;
            }
            else
            {
                $('#credit-address1').val = ('');
                $('#credit-address2').val = ('');
                $('#credit-city').val = ('');
                $('#credit-StateProvince').val = ('');
                $('#credit-PostalZip').val = ('');

                $('#credit-address1').disabled = false;
                $('#credit-address2').disabled = false;
                $('#credit-city').disabled = false;
                $('#credit-StateProvince').disabled = false;
                $('#credit-PostalZip').disabled = false;
            };
        });
        $('#credit-storename').keypress(function(event) {
            if (event.keyCode == 13) {
                event.preventDefault();
            }
        });
        $('#credit-address').keypress(function(event) {
            if (event.keyCode == 13) {
                event.preventDefault();
            }
        });
        $('#credit-address2').keypress(function(event) {
            if (event.keyCode == 13) {
                event.preventDefault();
            }
        });
        $('#credit-city').keypress(function(event) {
            if (event.keyCode == 13) {
                event.preventDefault();
            }
        });
        $('#credit-stateprovince').keypress(function(event) {
            if (event.keyCode == 13) {
                event.preventDefault();
            }
        });
        $('#credit-zippostal').keypress(function(event) {
            if (event.keyCode == 13) {
                event.preventDefault();
            }
        });

        $('#credit-number').addEventListener('input', function () {
            this.value = this.value.slice(0, 16);
        });



        function validateCreditCardNumber(cardNumber) {
            cardNumber = cardNumber.replace(/\D/g, '');
            if (!/^\d{16}$/.test(cardNumber)) {
              return false;
            }
            let sum = 0;
            let doubleUp = false;
            for (let i = cardNumber.length - 1; i >= 0; i--) {
              let digit = parseInt(cardNumber.charAt(i), 10);
              if (doubleUp) {
                if ((digit *= 2) > 9) {
                  digit -= 9;
                }
              }
              sum += digit;
              doubleUp = !doubleUp;
            }
            return sum % 10 === 0;
        };



        $('#credit-step-back').click(function(e) {
            console.log("ESHPRINT6");
            e.preventDefault(); 
            $('.w-round div:nth-child(3)').trigger('tap');
        });

        /// MUST IMPROVE CHECK FOR SAME AS BILLING CONDITION TO PROGRESS

        $('#credit-step').click(function(e) {
            console.log("ESHPRINT4");
            e.preventDefault();             

            var fnumber3 = document.forms[0].elements["credit-number"].value;
            var fnumber4 = document.forms[0].elements["credit-security"].value;

            if (validateCreditCardNumber(fnumber3) == true) {
                $('#name-credit-alert').hide();                    
            } 
            else 
            {
                $('#name-credit-alert').show(500);
            }

            });

            if($('#credit-name').val().length == 0){
                $('#name-credit-alert').show(500);
            }
            else
            {
                $('#name-credit-alert').hide();
            };

            if(isNaN(fnumber3) == true){
                $('#number-credit-alert').show(500);
            }
            else
            {
                $('#number-credit-alert').hide();
            };
            if(isNaN(fnumber4) == true){
                $('#security-credit-alert').show(500);
            }
            else
            {
                $('#security-credit-alert').hide();
            };

            var index2 = document.forms[0].elements["credit-month"].selectedIndex 
            var index3 = document.forms[0].elements["credit-year"].selectedIndex 
            var index4 = document.forms[0].elements["credit-cardtype"].selectedIndex 

            if(index2 == 0)
            {
                $('#month-credit-alert').show(500);
            
            } else
            {
                $('#month-credit-alert').hide();
            };
            if(index3 == 0)
            {
                $('#year-credit-alert').show(500);
            
            } else
            {
                $('#year-credit-alert').hide();
            };
            if(index4 == 0)
            {
                $('#cardtype-credit-alert').show(500);
            
            } else
            {
                $('#cardtype-credit-alert').hide();
            };
        
            if($('#credit-address1').val().length == 0){
                $('#address1-credit-alert').show(500);
            }
            else
            {
            $('#address1-credit-alert').hide();
            };
            if($('#credit-address2').val().length == 0){
                $('#address2-credit-alert').show(500);
            }
            else
            {
            $('#address2-credit-alert').hide();
            };
            if($('#credit-city').val().length == 0){
                $('#city-credit-alert').show(500);
            }
            else
            {
            $('#city-credit-alert').hide();
            };
            if($('#credit-stateprovince').val().length == 0){
                $('#stateprovince-credit-alert').show(500);
            }
            else
            {
            $('#stateprovince-credit-alert').hide();
            };
            if($('#credit-zippostal').val().length == 0){
                $('#zippostal-credit-alert').show(500);
            }
            else
            {
            $('#zippostal-credit-alert').hide();
            };



            /// MUST DELETE, DOUBLE FUNCTIONALITY, KEEP FOR IF LAMBDA DEV 

            /*if($('#Billing-Same-as-Store-Address') == true ){
                $('#credit-address1').val().length == 0 ? $('#address-credit-alert').show(500) : $('#address-credit-alert').hide();
                $('#credit-address2').val().length == 0 ? $('#address2-credit-alert').show(500) : $('#address2-credit-alert').hide();
                $('#credit-city').val().length == 0 ? $('#city-credit-alert').show(500) : $('#city-credit-alert').hide();
                $('#credit-stateprovince').val().length == 0 ? $('#stateprovince-credit-alert').show(500) : $('#stateprovince-credit-alert').hide();
                $('#credit-zippostal').val().length == 0 ? $('#zippostal-credit-alert').show(500) : $('#zippostal-credit-alert').hide();
            }       */


            if($('#credit-card-name').val().length !=0 && 
            isNaN(fnumber3) == false &&
            index2 != 0 &&
            index3 != 0 &&
            index4 != 0 && 
            isNaN(fnumber4) == false &&
            $('#credit-address1').val().length !=0 &&
            $('#credit-address2').val().length !=0 &&
            $('#credit-city').val().length !=0 &&
            $('#credit-stateprovince').val().length !=0 &&
            $('#credit-zippostal').val().length !=0)
            {
                console.log("conditions met")
                $('.w-round div:nth-child(5)').trigger('tap');
            }   
        });



        /******Step 5 // - References Slider // MUST TEST *******************/
        $('#References-Bank-1-Name').keypress(function(event) {
            if (event.keyCode == 13) {
                event.preventDefault();
            }
        });
        $('#References-Bank-1-Address').keypress(function(event) {
            if (event.keyCode == 13) {
                event.preventDefault();
            }
        });
        $('#References-Bank-1-Phone').keypress(function(event) {
            if (event.keyCode == 13) {
                event.preventDefault();
            }
        });
        $('#References-Bank-1-Acc').keypress(function(event) {
            if (event.keyCode == 13) {
                event.preventDefault();
            }
        });
        $('#References-Bank-2-Name').keypress(function(event) {
            if (event.keyCode == 13) {
                event.preventDefault();
            }
        });
        $('#References-Bank-2-Address').keypress(function(event) {
            if (event.keyCode == 13) {
                event.preventDefault();
            }
        });
        $('#References-Bank-2-Phone').keypress(function(event) {
            if (event.keyCode == 13) {
                event.preventDefault();
            }
        });
        $('#References-Bank-2-Acc').keypress(function(event) {
            if (event.keyCode == 13) {
                event.preventDefault();
            }
        });



        $('#References-Name-R-1').keypress(function(event) {
            if (event.keyCode == 13) {
                event.preventDefault();
            }
        });
        $('#References-Address-R-1').keypress(function(event) {
            if (event.keyCode == 13) {
                event.preventDefault();
            }
        });
        $('#References-City-R-1').keypress(function(event) {
            if (event.keyCode == 13) {
                event.preventDefault();
            }
        });
        $('#References-State-R-1').keypress(function(event) {
            if (event.keyCode == 13) {
                event.preventDefault();
            }
        });
        $('#References-ZIP-R-1').keypress(function(event) {
            if (event.keyCode == 13) {
                event.preventDefault();
            }
        });
        $('#References-Phone-R-1').keypress(function(event) {
            if (event.keyCode == 13) {
                event.preventDefault();
            }
        });
        $('#References-Fax-R-1').keypress(function(event) {
            if (event.keyCode == 13) {
                event.preventDefault();
            }
        });
        $('#References-Acc-R-1').keypress(function(event) {
            if (event.keyCode == 13) {
                event.preventDefault();
            }
        });

        $('#References-Name-R-2').keypress(function(event) {
            if (event.keyCode == 13) {
                event.preventDefault();
            }
        });
        $('#References-Address-R-2').keypress(function(event) {
            if (event.keyCode == 13) {
                event.preventDefault();
            }
        });
        $('#References-City-R-2').keypress(function(event) {
            if (event.keyCode == 13) {
                event.preventDefault();
            }
        });
        $('#References-State-R-2').keypress(function(event) {
            if (event.keyCode == 13) {
                event.preventDefault();
            }
        });
        $('#References-ZIP-R-2').keypress(function(event) {
            if (event.keyCode == 13) {
                event.preventDefault();
            }
        });
        $('#References-Phone-R-2').keypress(function(event) {
            if (event.keyCode == 13) {
                event.preventDefault();
            }
        });
        $('#References-Fax-R-2').keypress(function(event) {
            if (event.keyCode == 13) {
                event.preventDefault();
            }
        });
        $('#References-Acc-R-2').keypress(function(event) {
            if (event.keyCode == 13) {
                event.preventDefault();
            }
        });

        $('#References-Name-R-3').keypress(function(event) {
            if (event.keyCode == 13) {
                event.preventDefault();
            }
        });
        $('#References-Address-R-3').keypress(function(event) {
            if (event.keyCode == 13) {
                event.preventDefault();
            }
        });
        $('#References-City-R-3').keypress(function(event) {
            if (event.keyCode == 13) {
                event.preventDefault();
            }
        });
        $('#References-State-R-3').keypress(function(event) {
            if (event.keyCode == 13) {
                event.preventDefault();
            }
        });
        $('#References-ZIP-R-3').keypress(function(event) {
            if (event.keyCode == 13) {
                event.preventDefault();
            }
        });
        $('#References-Phone-R-3').keypress(function(event) {
            if (event.keyCode == 13) {
                event.preventDefault();
            }
        });
        $('#References-Fax-R-3').keypress(function(event) {
            if (event.keyCode == 13) {
                event.preventDefault();
            }
        });
        $('#References-Acc-R-3').keypress(function(event) {
            if (event.keyCode == 13) {
                event.preventDefault();
            }
        });

        $('#References-Name-R-4').keypress(function(event) {
            if (event.keyCode == 13) {
                event.preventDefault();
            }
        });
        $('#References-Address-R-4').keypress(function(event) {
            if (event.keyCode == 13) {
                event.preventDefault();
            }
        });
        $('#References-City-R-4').keypress(function(event) {
            if (event.keyCode == 13) {
                event.preventDefault();
            }
        });
        $('#References-State-R-4').keypress(function(event) {
            if (event.keyCode == 13) {
                event.preventDefault();
            }
        });
        $('#References-ZIP-R-4').keypress(function(event) {
            if (event.keyCode == 13) {
                event.preventDefault();
            }
        });
        $('#References-Phone-R-4').keypress(function(event) {
            if (event.keyCode == 13) {
                event.preventDefault();
            }
        });
        $('#References-Fax-R-4').keypress(function(event) {
            if (event.keyCode == 13) {
                event.preventDefault();
            }
        });
        $('#References-Acc-R-4').keypress(function(event) {
            if (event.keyCode == 13) {
                event.preventDefault();
            }
        });




        $('#references-step-back').click(function(e) {
            console.log("ESHPRINT7");
            e.preventDefault(); 
            $('.w-round div:nth-child(4)').trigger('tap');
        });

        $('#references-step').click(function(e) {
            console.log("ESHPRINT8");
            e.preventDefault();  
            
            if($('#References-Bank-1-Name').val().length == 0){
                $('#bnr1-alert').show(500);
            }
            else
            {
                $('#bnr1-alert').hide();
            };
            if($('#References-Bank-1-Address').val().length == 0){
                $('#bar1-alert').show(500);
            }
            else
            {
                $('#bar1-alert').hide();
            };
            if($('#References-Bank-1-Phone').val().length == 0){
                $('#bpr1-alert').show(500);
            }
            else
            {
                $('#bpr1-alert').hide();
            };
            if($('#References-Bank-1-Acc').val().length == 0){
                $('#baccr1-alert').show(500);
            }
            else
            {
                $('#baccr1-alert').hide();
            };

            if($('#References-Bank-2-Name').val().length == 0){
                $('#bnr2-alert').show(500);
            }
            else
            {
                $('#bnr2-alert').hide();
            };
            if($('#References-Bank-2-Address').val().length == 0){
                $('#bar2-alert').show(500);
            }
            else
            {
                $('#bar2-alert').hide();
            };
            if($('#References-Bank-2-Phone').val().length == 0){
                $('#bpr2-alert').show(500);
            }
            else
            {
                $('#bpr2-alert').hide();
            };
            if($('#References-Bank-2-Acc').val().length == 0){
                $('#baccr2-alert').show(500);
            }
            else
            {
                $('#baccr2-alert').hide();
            };



            if($('#References-Name-R-1').val().length == 0){
                $('#pnr1-alert').show(500);
            }
            else
            {
                $('#pnr1-alert').hide();
            };
            if($('#References-Address-R-1').val().length == 0){
                $('#par1-alert').show(500);
            }
            else
            {
                $('#par1-alert').hide();
            };
            if($('#References-City-R-1').val().length == 0){
                $('#pcr1-alert').show(500);
            }
            else
            {
                $('#pcr1-alert').hide();
            };
            if($('#References-State-R-1').val().length == 0){
                $('#psr1-alert').show(500);
            }
            else
            {
                $('#psr1-alert').hide();
            };
            if($('#References-ZIP-R-1').val().length == 0){
                $('#pzr1-alert').show(500);
            }
            else
            {
                $('#pzr1-alert').hide();
            };
            if($('#References-Phone-R-1').val().length == 0){
                $('#ppr1-alert').show(500);
            }
            else
            {
                $('#ppr1-alert').hide();
            };
            if($('#References-Fax-R-1').val().length == 0){
                $('#pfr1-alert').show(500);
            }
            else
            {
                $('#pfr1-alert').hide();
            };
            if($('#References-Acc-R-1').val().length == 0){
                $('#pacr1-alert').show(500);
            }
            else
            {
                $('#pacr1-alert').hide();
            };




            if($('#References-Name-R-2').val().length == 0){
                $('#pnr2-alert').show(500);
            }
            else
            {
                $('#pnr2-alert').hide();
            };
            if($('#References-Address-R-2').val().length == 0){
                $('#par2-alert').show(500);
            }
            else
            {
                $('#par2-alert').hide();
            };
            if($('#References-City-R-2').val().length == 0){
                $('#pcr2-alert').show(500);
            }
            else
            {
                $('#pcr2-alert').hide();
            };
            if($('#References-State-R-2').val().length == 0){
                $('#psr2-alert').show(500);
            }
            else
            {
                $('#psr2-alert').hide();
            };
            if($('#References-ZIP-R-2').val().length == 0){
                $('#pzr2-alert').show(500);
            }
            else
            {
                $('#pzr2-alert').hide();
            };
            if($('#References-Phone-R-2').val().length == 0){
                $('#ppr2-alert').show(500);
            }
            else
            {
                $('#ppr2-alert').hide();
            };
            if($('#References-Fax-R-2').val().length == 0){
                $('#pfr2-alert').show(500);
            }
            else
            {
                $('#pfr2-alert').hide();
            };
            if($('#References-Acc-R-2').val().length == 0){
                $('#pacr2-alert').show(500);
            }
            else
            {
                $('#pacr2-alert').hide();
            };


            if($('#References-Name-R-3').val().length == 0){
                $('#pnr3-alert').show(500);
            }
            else
            {
                $('#pnr3-alert').hide();
            };
            if($('#References-Address-R-3').val().length == 0){
                $('#par3-alert').show(500);
            }
            else
            {
                $('#par3-alert').hide();
            };
            if($('#References-City-R-3').val().length == 0){
                $('#pcr3-alert').show(500);
            }
            else
            {
                $('#pcr3-alert').hide();
            };
            if($('#References-State-R-3').val().length == 0){
                $('#psr3-alert').show(500);
            }
            else
            {
                $('#psr3-alert').hide();
            };
            if($('#References-ZIP-R-3').val().length == 0){
                $('#pzr3-alert').show(500);
            }
            else
            {
                $('#pzr3-alert').hide();
            };
            if($('#References-Phone-R-3').val().length == 0){
                $('#ppr3-alert').show(500);
            }
            else
            {
                $('#ppr3-alert').hide();
            };
            if($('#References-Fax-R-3').val().length == 0){
                $('#pfr3-alert').show(500);
            }
            else
            {
                $('#pfr3-alert').hide();
            };
            if($('#References-Acc-R-3').val().length == 0){
                $('#pacr3-alert').show(500);
            }
            else
            {
                $('#pacr3-alert').hide();
            };


            if($('#References-Name-R-4').val().length == 0){
                $('#pnr4-alert').show(500);
            }
            else
            {
                $('#pnr4-alert').hide();
            };
            if($('#References-Address-R-4').val().length == 0){
                $('#par4-alert').show(500);
            }
            else
            {
                $('#par4-alert').hide();
            };
            if($('#References-City-R-4').val().length == 0){
                $('#pcr4-alert').show(500);
            }
            else
            {
                $('#pcr4-alert').hide();
            };
            if($('#References-State-R-4').val().length == 0){
                $('#psr4-alert').show(500);
            }
            else
            {
                $('#psr4-alert').hide();
            };
            if($('#References-ZIP-R-4').val().length == 0){
                $('#pzr4-alert').show(500);
            }
            else
            {
                $('#pzr4-alert').hide();
            };
            if($('#References-Phone-R-4').val().length == 0){
                $('#ppr4-alert').show(500);
            }
            else
            {
                $('#ppr4-alert').hide();
            };
            if($('#References-Fax-R-4').val().length == 0){
                $('#pfr4-alert').show(500);
            }
            else
            {
                $('#pfr4-alert').hide();
            };
            if($('#References-Acc-R-4').val().length == 0){
                $('#pacr4-alert').show(500);
            }
            else
            {
                $('#pacr4-alert').hide();
            };

            var refb1 = false;            
            var refb2 = false; 
            var refp1 = false;             
            var refp2 = false; 
            var refp3 = false;             
            var refp4 = false; 

            if($('#References-Bank-1-Name').val().length > 0 &&
                $('#References-Bank-1-Address').val().length == 0 &&
                $('#References-Bank-1-Phone').val().length == 0 &&
                $('#References-Bank-1-Acc').val().length == 0){
                refb1 = true;
            }
            else
            {
                refb1 = false; 
            };

            if($('#References-Bank-2-Name').val().length > 0 &&
            $('#References-Bank-2-Address').val().length == 0 &&
            $('#References-Bank-2-Phone').val().length == 0 &&
            $('#References-Bank-2-Acc').val().length == 0){
                refb2 = true;
            }
            else
            {
                refb2 = false; 
            };

            if($('#References-Name-R-1').val().length > 0 &&
            $('#References-Address-R-1').val().length == 0 &&
            $('#References-City-R-1').val().length == 0 &&
            $('#References-State-R-1').val().length == 0 &&
            $('#References-ZIP-R-1').val().length == 0 &&
            $('#References-Phone-R-1').val().length == 0 &&
            $('#References-Fax-R-1').val().length == 0 &&
            $('#References-Acc-R-1').val().length == 0){
                refp1 = true;
            }
            else
            {
                refp1 = false; 
            };

            if($('#References-Name-R-2').val().length > 0 &&
            $('#References-Address-R-2').val().length == 0 &&
            $('#References-City-R-2').val().length == 0 &&
            $('#References-State-R-2').val().length == 0 &&
            $('#References-ZIP-R-2').val().length == 0 &&
            $('#References-Phone-R-2').val().length == 0 &&
            $('#References-Fax-R-2').val().length == 0 &&
            $('#References-Acc-R-2').val().length == 0){
                refp2 = true;
            }
            else
            {
                refp2 = false; 
            };

            if($('#References-Name-R-3').val().length > 0 &&
            $('#References-Address-R-3').val().length == 0 &&
            $('#References-City-R-3').val().length == 0 &&
            $('#References-State-R-3').val().length == 0 &&
            $('#References-ZIP-R-3').val().length == 0 &&
            $('#References-Phone-R-3').val().length == 0 &&
            $('#References-Fax-R-3').val().length == 0 &&
            $('#References-Acc-R-3').val().length == 0){
                refp3 = true;
            }
            else
            {
                refp3 = false; 
            };

            if($('#References-Name-R-4').val().length > 0 &&
            $('#References-Address-R-4').val().length == 0 &&
            $('#References-City-R-4').val().length == 0 &&
            $('#References-State-R-4').val().length == 0 &&
            $('#References-ZIP-R-4').val().length == 0 &&
            $('#References-Phone-R-4').val().length == 0 &&
            $('#References-Fax-R-4').val().length == 0 &&
            $('#References-Acc-R-4').val().length == 0){
                refp4 = true;
            }
            else
            {
                refp4 = false; 
            };

            if(refb1==true &&
                refb2==true &&
                refp1==true &&
                refp2==true &&
                refp3==true &&
                refp4==true)
            {
                console.log("conditions met")
                $('.w-round div:nth-child(6)').trigger('tap');
            }
            else
            {
                log(refb1,refb2,refp1,refp2,refp3,refp4)
            };   
        });




        /******Step 6 // - Compliance Slider // MUST TEST *******************/

        $('#compliance-checkbox1').keypress(function(event) {
            if (event.keyCode == 13) {
                event.preventDefault();
            }
        });
        $('#compliance-checkbox2').keypress(function(event) {
            if (event.keyCode == 13) {
                event.preventDefault();
            }
        });
        $('#compliance-checkbox3').keypress(function(event) {
            if (event.keyCode == 13) {
                event.preventDefault();
            }
        });

        $('#submit-step-back').click(function(e) {
            console.log("ESHPRINT9");
            e.preventDefault(); 
            $('.w-round div:nth-child(4)').trigger('tap');
        });


        $('#submit-step').click(function(e) {
            console.log("ESHPRINT10");
            e.preventDefault();   
            
            if($('#compliance-checkbox1') == false){
                $('#compliance-alert1').show(500);
            }
            else
            {
            $('#compliance-alert1').hide();
            };

            if($('#compliance-checkbox2') == false){
                $('#compliance-alert2').show(500);
            }
            else
            {
            $('#compliance-alert2').hide();
            };

            if($('#compliance-checkbox3') == false){
                $('#compliance-alert3').show(500);
            } 
            else
            {
                $('#compliance-alert3').hide();
            };  


            if($('#compliance-checkbox1') == true &&
                $('#compliance-checkbox2') == true &&
                $('#compliance-checkbox3') == true){ 

                console.log("conditions met");
    
                $('#submit-step').trigger('tap');
    
                console.log("real end of code");   

            }           
        });
