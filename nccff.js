    document.getElementById(document).ready(function() {
        
        Webflow.require('slider');

        document.getElementById(":input, a").attr("tabindex", "-1");



        const slider = document.getElementById('#formslider');
        
        /******Step 1 // - Personal Information Slider // WORKING *******************/
        document.getElementById('#personal-name').keypress(function(event) {
            if (event.keyCode == 13) {
                event.preventDefault();
            }
        });
        document.getElementById('#personal-email').keypress(function(event) {
            if (event.keyCode == 13) {
                event.preventDefault();
            }
        });
        document.getElementById('#personal-phone').keypress(function(event) {
            if (event.keyCode == 13) {
                event.preventDefault();
            }
        });

        
        document.getElementById('#name-step').click(function(e) {
            console.log("ESHPRINT");
            e.preventDefault();   
            


            var fnumber = document.forms[0].elements["personal-phone"].value;
            console.log(fnumber)

            if(document.getElementById('#personal-name').val().length == 0){
                document.getElementById('#name-personal-alert').show(500);
            }
            else
            {
                document.getElementById('#name-personal-alert').hide();
            };
            if(document.getElementById('#personal-email').val().length == 0){
                document.getElementById('#email-personal-alert').show(500);
            }
            else
            {
            document.getElementById('#email-personal-alert').hide();
            };
            if(document.getElementById('#personal-phone').val().length == 0){
                document.getElementById('#phone-personal-alert').show(500);
            } 
            else
            {
                document.getElementById('#phone-personal-alert').hide();
            };  

            
            if(isNaN(fnumber) == true){
                document.getElementById('#phone-personal-alert2').show(500);
            }
            else
            {
                document.getElementById('#phone-personal-alert2').hide();
            };



            console.log("end of code")

            if(document.getElementById('#personal-name').val().length !=0 && 
                document.getElementById('#personal-email').val().length !=0 && 
                document.getElementById('#personal-phone').val().length !=0 && 
                isNaN(fnumber) == false &&
                slider.index != 0)
                {
                document.getElementById('#name-personal-alert').hide();
                document.getElementById('#email-personal-alert').hide();
                document.getElementById('#phone-personal-alert').hide();
                document.getElementById('#phone-personal-alert2').hide();
                document.getElementById('#tradeshow-personal-alert').hide();
                console.log("conditions met")
                Webflow.require('slider').next();
                /*document.getElementById('.w-round div:nth-child(2)').trigger('tap');*/
                }
            console.log("real end of code")
   
        });   

        
        /******Step 2 // - Store Information Slider // WORKING  *******************/
        document.getElementById('#store-name').keypress(function(event) {
            if (event.keyCode == 13) {
                event.preventDefault();
            }
        });
        document.getElementById('#store-location').keypress(function(event) {
            if (event.keyCode == 13) {
                event.preventDefault();
            }
        });
        document.getElementById('#store-address').keypress(function(event) {
            if (event.keyCode == 13) {
                event.preventDefault();
            }
        });
        document.getElementById('#store-address2').keypress(function(event) {
            if (event.keyCode == 13) {
                event.preventDefault();
            }
        });
        document.getElementById('#store-city').keypress(function(event) {
            if (event.keyCode == 13) {
                event.preventDefault();
            }
        });
        document.getElementById('#store-stateprovince').keypress(function(event) {
            if (event.keyCode == 13) {
                event.preventDefault();
            }
        });
        document.getElementById('#store-zippostalcode').keypress(function(event) {
            if (event.keyCode == 13) {
                event.preventDefault();
            }
        });
        document.getElementById('#store-email').keypress(function(event) {
            if (event.keyCode == 13) {
                event.preventDefault();
            }
        });
        document.getElementById('#store-phone').keypress(function(event) {
            if (event.keyCode == 13) {
                event.preventDefault();
            }
        });
        document.getElementById('#RJO-Buying-Show').keypress(function(event) {
            if (event.keyCode == 13) {
                event.preventDefault();
            }
        });
        document.getElementById('#The-INSTORE-Show').keypress(function(event) {
            if (event.keyCode == 13) {
                event.preventDefault();
            }
        });
        document.getElementById('#Select-Jewelry-Show-VA').keypress(function(event) {
            if (event.keyCode == 13) {
                event.preventDefault();
            }
        });
        document.getElementById('#Select-Jewelry-Show-CT').keypress(function(event) {
            if (event.keyCode == 13) {
                event.preventDefault();
            }
        });
        document.getElementById('#Select-Jewelry-Show-Dallas').keypress(function(event) {
            if (event.keyCode == 13) {
                event.preventDefault();
            }
        });
        document.getElementById('#personal-buygroup').keypress(function(event) {
            if (event.keyCode == 13) {
                event.preventDefault();
            }
        });


        document.getElementById('#store-step-back').click(function(e) {
            console.log("ESHPRINT3");
            e.preventDefault(); 
            document.getElementById('.w-round div:nth-child(1)').trigger('tap');
        });
        document.getElementById('#store-step').click(function(e) {
            console.log("ESHPRINT2");
            e.preventDefault();             

            var fnumber2 = document.forms[0].elements["store-phone"].value;
            console.log(fnumber2)

            if(document.getElementById('#store-name').val().length == 0){
                document.getElementById('#name-store-alert').show(500);
            }
            else
            {
            document.getElementById('#name-store-alert').hide();
            };
            if(document.getElementById('#store-location').val().length == 0){
                document.getElementById('#location-store-alert').show(500);
            }
            else
            {
            document.getElementById('#location-store-alert').hide();
            };
            if(document.getElementById('#store-address').val().length == 0){
                document.getElementById('#address-store-alert').show(500);
            }
            else
            {
            document.getElementById('#address-store-alert').hide();
            };
            if(document.getElementById('#store-city').val().length == 0){
                document.getElementById('#city-store-alert').show(500);
            }
            else
            {
            document.getElementById('#city-store-alert').hide();
            };
            if(document.getElementById('#store-stateprovince').val().length == 0){
                document.getElementById('#stateprovince-store-alert').show(500);
            }
            else
            {
            document.getElementById('#stateprovince-store-alert').hide();
            };
            if(document.getElementById('#store-zippostalcode').val().length == 0){
                document.getElementById('#zippostalcode-store-alert').show(500);
            }
            else
            {
            document.getElementById('#zippostalcode-store-alert').hide();
            };
            if(document.getElementById('#store-email').val().length == 0){
                document.getElementById('#email-store-alert').show(500);
            }
            else
            {
            document.getElementById('#email-store-alert').hide();
            };

            if(document.getElementById('#store-phone').val().length == 0){
                document.getElementById('#phone-store-alert').show(500);
            } 
            else
            {
                document.getElementById('#phone-store-alert').hide();
            };  

            if(isNaN(fnumber2) == true){
                document.getElementById('#phone-store-alert2').show(500);
            }
            else
            {
                document.getElementById('#phone-store-alert2').hide();
            };

            if(document.getElementById('#store-name').val().length !=0 &&
                document.getElementById('#store-location').val().length !=0 && 
                document.getElementById('#store-address').val().length !=0 &&
                document.getElementById('#store-city').val().length !=0 &&
                document.getElementById('#store-stateprovince').val().length !=0 &&
                document.getElementById('#store-zippostalcode').val().length !=0 &&
                document.getElementById('#store-email').val().length !=0 &&
                isNaN(fnumber2) == false)
                {
                console.log("conditions met")
                document.getElementByIddocument.getElementById('.w-round div:nth-child(3)').trigger('tap');
                }  
                document.getElementById('#OwnerCheckbox').disabled = true;
                document.getElementById('#PayableCheckbox').disabled = true;

            
        });


        /******Step 3 // - Store Contact List Slider // MISSING CONDITION TEST FOR PASSING SLIDE AND TESTING *******************/

        document.getElementById('#OwnerCheckbox').keypress(function(event) {
            if (event.keyCode == 13) {
                event.preventDefault();
            }
        });        
        document.getElementById('#ctc-owner-name').keypress(function(event) {
            if (event.keyCode == 13) {
                event.preventDefault();
            }
        });        
        document.getElementById('#contact-email-owner').keypress(function(event) {
            if (event.keyCode == 13) {
                event.preventDefault();
            }
        });
        document.getElementById('#PayableCheckbox').keypress(function(event) {
            if (event.keyCode == 13) {
                event.preventDefault();
            }
        });        
        document.getElementById('#ctc-accounts-name').keypress(function(event) {
            if (event.keyCode == 13) {
                event.preventDefault();
            }
        });        
        document.getElementById('#contact-email-accounts').keypress(function(event) {
            if (event.keyCode == 13) {
                event.preventDefault();
            }
        });
        document.getElementById('#BuyerCheckbox').keypress(function(event) {
            if (event.keyCode == 13) {
                event.preventDefault();
            }
        });        
        document.getElementById('#ctc-buyer-name').keypress(function(event) {
            if (event.keyCode == 13) {
                event.preventDefault();
            }
        });        
        document.getElementById('#contact-email-buyer').keypress(function(event) {
            if (event.keyCode == 13) {
                event.preventDefault();
            }
        });
        document.getElementById('#StoreCheckbox').keypress(function(event) {
            if (event.keyCode == 13) {
                event.preventDefault();
            }
        });        
        document.getElementById('#ctc-stomanager-name').keypress(function(event) {
            if (event.keyCode == 13) {
                event.preventDefault();
            }
        });        
        document.getElementById('#contact-email-stomanager').keypress(function(event) {
            if (event.keyCode == 13) {
                event.preventDefault();
            }
        });
        document.getElementById('#MarketingCheckbox').keypress(function(event) {
            if (event.keyCode == 13) {
                event.preventDefault();
            }
        });        
        document.getElementById('#ctc-marketing-name').keypress(function(event) {
            if (event.keyCode == 13) {
                event.preventDefault();
            }
        });        
        document.getElementById('#contact-email-marketing').keypress(function(event) {
            if (event.keyCode == 13) {
                event.preventDefault();
            }
        });
        document.getElementById('#OfficeCheckbox').keypress(function(event) {
            if (event.keyCode == 13) {
                event.preventDefault();
            }
        });        
        document.getElementById('#ctc-offmanager-name').keypress(function(event) {
            if (event.keyCode == 13) {
                event.preventDefault();
            }
        });        
        document.getElementById('#contact-email-offmanager').keypress(function(event) {
            if (event.keyCode == 13) {
                event.preventDefault();
            }
        });
        document.getElementById('#WebsiteCheckbox').keypress(function(event) {
            if (event.keyCode == 13) {
                event.preventDefault();
            }
        });        
        document.getElementById('#ctc-website-name').keypress(function(event) {
            if (event.keyCode == 13) {
                event.preventDefault();
            }
        });        
        document.getElementById('#contact-email-website').keypress(function(event) {
            if (event.keyCode == 13) {
                event.preventDefault();
            }
        });
        document.getElementById('#SalesCheckbox').keypress(function(event) {
            if (event.keyCode == 13) {
                event.preventDefault();
            }
        });        
        document.getElementById('#ctc-sales-name').keypress(function(event) {
            if (event.keyCode == 13) {
                event.preventDefault();
            }
        });        
        document.getElementById('#contact-email-sales').keypress(function(event) {
            if (event.keyCode == 13) {
                event.preventDefault();
            }
        });


        document.getElementById('#OwnerCheckbox').addEventListener('change', function() {
            if (document.getElementById('#OwnerCheckbox').checked == true) {
                document.getElementById('#ctc-owner-name').disabled = false;
                document.getElementById('#contact-email-owner').disabled = false;
            } else {
                document.getElementById('#ctc-owner-name').disabled = true;
                document.getElementById('#contact-email-owner').disabled = true;
                document.getElementById('#ctc-owner-name').value = '';
                document.getElementById('#contact-email-owner').value = '';
        }});
        document.getElementById('#PayableCheckbox').addEventListener('change', function() {
            if (document.getElementById('#PayableCheckbox').checked == true) {
                document.getElementById('#ctc-accounts-name').disabled = false;
                document.getElementById('#contact-email-accounts').disabled = false;
            } else {
                document.getElementById('#ctc-accounts-name').disabled = true;
                document.getElementById('#contact-email-accounts').disabled = true;
                document.getElementById('#ctc-accounts-name').value = '';
                document.getElementById('#contact-email-accounts').value = '';
        }});
        document.getElementById('#BuyerCheckbox').addEventListener('change', function() {
            if (document.getElementById('#BuyerCheckbox').checked == true) {
                document.getElementById('#ctc-buyer-name').disabled = false;
                document.getElementById('#contact-email-buyer').disabled = false;
            } else {
                document.getElementById('#ctc-buyer-name').disabled = true;
                document.getElementById('#contact-email-buyer').disabled = true;
                document.getElementById('#ctc-buyer-name').value = '';
                document.getElementById('#contact-email-buyer').value = '';
        }});
        document.getElementById('#StoreCheckbox').addEventListener('change', function() {
            if (document.getElementById('#StoreCheckbox').checked == true) {
                document.getElementById('#ctc-stomanager-name').disabled = false;
                document.getElementById('#contact-email-stomanager').disabled = false;
            } else {
                document.getElementById('#ctc-stomanager-name').disabled = true;
                document.getElementById('#contact-email-stomanager').disabled = true;
                document.getElementById('#ctc-stomanager-name').value = '';
                document.getElementById('#contact-email-stomanager').value = '';
        }});
        document.getElementById('#MarketingCheckbox').addEventListener('change', function() {
            if (document.getElementById('#MarketingCheckbox').checked == true) {
                document.getElementById('#ctc-marketing-name').disabled = false;
                document.getElementById('#contact-email-marketing').disabled = false;
            } else {
                document.getElementById('#ctc-marketing-name').disabled = true;
                document.getElementById('#contact-email-marketing').disabled = true;
                document.getElementById('#ctc-marketing-name').value = '';
                document.getElementById('#contact-email-marketing').value = '';
        }});
        document.getElementById('#OfficeCheckbox').addEventListener('change', function() {
            if (document.getElementById('#OfficeCheckbox').checked == true) {
                document.getElementById('#ctc-offmanager-name').disabled = false;
                document.getElementById('#contact-email-offmanager').disabled = false;
            } else {
                document.getElementById('#ctc-offmanager-name').disabled = true;
                document.getElementById('#contact-email-offmanager').disabled = true;
                document.getElementById('#ctc-offmanager-name').value = '';
                document.getElementById('#contact-email-offmanager').value = '';
        }});
        document.getElementById('#WebsiteCheckbox').addEventListener('change', function() {
            if (document.getElementById('#WebsiteCheckbox').checked == true) {
                document.getElementById('#ctc-website-name').disabled = false;
                document.getElementById('#contact-email-website').disabled = false;
            } else {
                document.getElementById('#ctc-website-name').disabled = true;
                document.getElementById('#contact-email-website').disabled = true;
                document.getElementById('#ctc-website-name').value = '';
                document.getElementById('#contact-email-website').value = '';
        }});
        document.getElementById('#SalesCheckbox').addEventListener('change', function() {
            if (document.getElementById('#SalesCheckbox').checked == true) {
                document.getElementById('#ctc-sales-name').disabled = false;
                document.getElementById('#contact-email-sales').disabled = false;
            } else {
                document.getElementById('#ctc-sales-name').disabled = true;
                document.getElementById('#contact-email-sales').disabled = true;
                document.getElementById('#ctc-sales-name').value = '';
                document.getElementById('#contact-email-sales').value = '';
        }});
        

        document.getElementById('#storecontact-step-back').click(function(e) {
            console.log("ESHPRINT4");
            e.preventDefault(); 
            document.getElementById('.w-round div:nth-child(2)').trigger('tap');
        });

        document.getElementById('#contact-step').click(function(e) {
            console.log("ESHPRINT3");
            e.preventDefault();

            if(document.getElementById('#ctc-owner-name').val().length == 0 || document.getElementById('#contact-email-owner').val().length == 0){
                document.getElementById('#ctc-owner-name-alert').show(500);
            }
            else
            {
                document.getElementById('#ctc-owner-name-alert').hide();
            };

            if(document.getElementById('#ctc-accounts-name').val().length == 0 || document.getElementById('#contact-accounts-owner').val().length == 0){
                document.getElementById('#ctc-accounts-name-alert').show(500);
            }
            else
            {
                document.getElementById('#ctc-accounts-name-alert').hide();
            };

            document.getElementById('.w-round div:nth-child(4)').trigger('tap');
        });   




        /******Step 4 // - Credit Information Slider // MUST TEST *******************/
        document.getElementById('#credit-name').keypress(function(event) {
            if (event.keyCode == 13) {
                event.preventDefault();
            }
        });
        document.getElementById('#credit-number').keypress(function(event) {
            if (event.keyCode == 13) {
                event.preventDefault();
            }
        });
        document.getElementById('#credit-month').keypress(function(event) {
            if (event.keyCode == 13) {
                event.preventDefault();
            }
        });
        document.getElementById('#credit-year').keypress(function(event) {
            if (event.keyCode == 13) {
                event.preventDefault();
            }
        });
        document.getElementById('#credit-cardtype').keypress(function(event) {
            if (event.keyCode == 13) {
                event.preventDefault();
            }
        });
        document.getElementById('#credit-security').keypress(function(event) {
            if (event.keyCode == 13) {
                event.preventDefault();
            }
        });
        document.getElementById('#Billing-Same-as-Store-Address').addEventListener('change', (event) =>  {
            if (event.keyCode == 13) {
                event.preventDefault();
            }
            if(document.getElementById('#Billing-Same-as-Store-Address') == true){
                document.getElementById('#credit-address1').val = document.getElementById('#store-address1').val;
                document.getElementById('#credit-address2').val = document.getElementById('#store-address2').val;
                document.getElementById('#credit-city').val = document.getElementById('#store-city').val;
                document.getElementById('#credit-StateProvince').val = document.getElementById('#store-stateprovince').val;
                document.getElementById('#credit-PostalZip').val = document.getElementById('#store-zippostalcode').val;

                document.getElementById('#credit-address1').disabled = true;
                document.getElementById('#credit-address2').disabled = true;
                document.getElementById('#credit-city').disabled = true;
                document.getElementById('#credit-StateProvince').disabled = true;
                document.getElementById('#credit-PostalZip').disabled = true;
            }
            else
            {
                document.getElementById('#credit-address1').val = ('');
                document.getElementById('#credit-address2').val = ('');
                document.getElementById('#credit-city').val = ('');
                document.getElementById('#credit-StateProvince').val = ('');
                document.getElementById('#credit-PostalZip').val = ('');

                document.getElementById('#credit-address1').disabled = false;
                document.getElementById('#credit-address2').disabled = false;
                document.getElementById('#credit-city').disabled = false;
                document.getElementById('#credit-StateProvince').disabled = false;
                document.getElementById('#credit-PostalZip').disabled = false;
            };
        });
        document.getElementById('#credit-storename').keypress(function(event) {
            if (event.keyCode == 13) {
                event.preventDefault();
            }
        });
        document.getElementById('#credit-address').keypress(function(event) {
            if (event.keyCode == 13) {
                event.preventDefault();
            }
        });
        document.getElementById('#credit-address2').keypress(function(event) {
            if (event.keyCode == 13) {
                event.preventDefault();
            }
        });
        document.getElementById('#credit-city').keypress(function(event) {
            if (event.keyCode == 13) {
                event.preventDefault();
            }
        });
        document.getElementById('#credit-stateprovince').keypress(function(event) {
            if (event.keyCode == 13) {
                event.preventDefault();
            }
        });
        document.getElementById('#credit-zippostal').keypress(function(event) {
            if (event.keyCode == 13) {
                event.preventDefault();
            }
        });

        document.getElementById('#credit-number').addEventListener('input', function () {
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



        document.getElementById('#credit-step-back').click(function(e) {
            console.log("ESHPRINT6");
            e.preventDefault(); 
            document.getElementById('.w-round div:nth-child(3)').trigger('tap');
        });

        /// MUST IMPROVE CHECK FOR SAME AS BILLING CONDITION TO PROGRESS

        document.getElementById('#credit-step').click(function(e) {
            console.log("ESHPRINT4");
            e.preventDefault();             

            var fnumber3 = document.forms[0].elements["credit-number"].value;
            var fnumber4 = document.forms[0].elements["credit-security"].value;

            if (validateCreditCardNumber(fnumber3) == true) {
                document.getElementById('#name-credit-alert').hide();                    
            } 
            else 
            {
                document.getElementById('#name-credit-alert').show(500);
            }

            });

            if(document.getElementById('#credit-name').val().length == 0){
                document.getElementById('#name-credit-alert').show(500);
            }
            else
            {
                document.getElementById('#name-credit-alert').hide();
            };

            if(isNaN(fnumber3) == true){
                document.getElementById('#number-credit-alert').show(500);
            }
            else
            {
                document.getElementById('#number-credit-alert').hide();
            };
            if(isNaN(fnumber4) == true){
                document.getElementById('#security-credit-alert').show(500);
            }
            else
            {
                document.getElementById('#security-credit-alert').hide();
            };

            var index2 = document.forms[0].elements["credit-month"].selectedIndex 
            var index3 = document.forms[0].elements["credit-year"].selectedIndex 
            var index4 = document.forms[0].elements["credit-cardtype"].selectedIndex 

            if(index2 == 0)
            {
                document.getElementById('#month-credit-alert').show(500);
            
            } else
            {
                document.getElementById('#month-credit-alert').hide();
            };
            if(index3 == 0)
            {
                document.getElementById('#year-credit-alert').show(500);
            
            } else
            {
                document.getElementById('#year-credit-alert').hide();
            };
            if(index4 == 0)
            {
                document.getElementById('#cardtype-credit-alert').show(500);
            
            } else
            {
                document.getElementById('#cardtype-credit-alert').hide();
            };
        
            if(document.getElementById('#credit-address1').val().length == 0){
                document.getElementById('#address1-credit-alert').show(500);
            }
            else
            {
            document.getElementById('#address1-credit-alert').hide();
            };
            if(document.getElementById('#credit-address2').val().length == 0){
                document.getElementById('#address2-credit-alert').show(500);
            }
            else
            {
            document.getElementById('#address2-credit-alert').hide();
            };
            if(document.getElementById('#credit-city').val().length == 0){
                document.getElementById('#city-credit-alert').show(500);
            }
            else
            {
            document.getElementById('#city-credit-alert').hide();
            };
            if(document.getElementById('#credit-stateprovince').val().length == 0){
                document.getElementById('#stateprovince-credit-alert').show(500);
            }
            else
            {
            document.getElementById('#stateprovince-credit-alert').hide();
            };
            if(document.getElementById('#credit-zippostal').val().length == 0){
                document.getElementById('#zippostal-credit-alert').show(500);
            }
            else
            {
            document.getElementById('#zippostal-credit-alert').hide();
            };



            /// MUST DELETE, DOUBLE FUNCTIONALITY, KEEP FOR IF LAMBDA DEV 

            /*if(document.getElementById('#Billing-Same-as-Store-Address') == true ){
                document.getElementById('#credit-address1').val().length == 0 ? document.getElementById('#address-credit-alert').show(500) : document.getElementById('#address-credit-alert').hide();
                document.getElementById('#credit-address2').val().length == 0 ? document.getElementById('#address2-credit-alert').show(500) : document.getElementById('#address2-credit-alert').hide();
                document.getElementById('#credit-city').val().length == 0 ? document.getElementById('#city-credit-alert').show(500) : document.getElementById('#city-credit-alert').hide();
                document.getElementById('#credit-stateprovince').val().length == 0 ? document.getElementById('#stateprovince-credit-alert').show(500) : document.getElementById('#stateprovince-credit-alert').hide();
                document.getElementById('#credit-zippostal').val().length == 0 ? document.getElementById('#zippostal-credit-alert').show(500) : document.getElementById('#zippostal-credit-alert').hide();
            }       */


            if(document.getElementById('#credit-card-name').val().length !=0 && 
            isNaN(fnumber3) == false &&
            index2 != 0 &&
            index3 != 0 &&
            index4 != 0 && 
            isNaN(fnumber4) == false &&
            document.getElementById('#credit-address1').val().length !=0 &&
            document.getElementById('#credit-address2').val().length !=0 &&
            document.getElementById('#credit-city').val().length !=0 &&
            document.getElementById('#credit-stateprovince').val().length !=0 &&
            document.getElementById('#credit-zippostal').val().length !=0)
            {
                console.log("conditions met")
                document.getElementById('.w-round div:nth-child(5)').trigger('tap');
            }   
        });



        /******Step 5 // - References Slider // MUST TEST *******************/
        document.getElementById('#References-Bank-1-Name').keypress(function(event) {
            if (event.keyCode == 13) {
                event.preventDefault();
            }
        });
        document.getElementById('#References-Bank-1-Address').keypress(function(event) {
            if (event.keyCode == 13) {
                event.preventDefault();
            }
        });
        document.getElementById('#References-Bank-1-Phone').keypress(function(event) {
            if (event.keyCode == 13) {
                event.preventDefault();
            }
        });
        document.getElementById('#References-Bank-1-Acc').keypress(function(event) {
            if (event.keyCode == 13) {
                event.preventDefault();
            }
        });
        document.getElementById('#References-Bank-2-Name').keypress(function(event) {
            if (event.keyCode == 13) {
                event.preventDefault();
            }
        });
        document.getElementById('#References-Bank-2-Address').keypress(function(event) {
            if (event.keyCode == 13) {
                event.preventDefault();
            }
        });
        document.getElementById('#References-Bank-2-Phone').keypress(function(event) {
            if (event.keyCode == 13) {
                event.preventDefault();
            }
        });
        document.getElementById('#References-Bank-2-Acc').keypress(function(event) {
            if (event.keyCode == 13) {
                event.preventDefault();
            }
        });



        document.getElementById('#References-Name-R-1').keypress(function(event) {
            if (event.keyCode == 13) {
                event.preventDefault();
            }
        });
        document.getElementById('#References-Address-R-1').keypress(function(event) {
            if (event.keyCode == 13) {
                event.preventDefault();
            }
        });
        document.getElementById('#References-City-R-1').keypress(function(event) {
            if (event.keyCode == 13) {
                event.preventDefault();
            }
        });
        document.getElementById('#References-State-R-1').keypress(function(event) {
            if (event.keyCode == 13) {
                event.preventDefault();
            }
        });
        document.getElementById('#References-ZIP-R-1').keypress(function(event) {
            if (event.keyCode == 13) {
                event.preventDefault();
            }
        });
        document.getElementById('#References-Phone-R-1').keypress(function(event) {
            if (event.keyCode == 13) {
                event.preventDefault();
            }
        });
        document.getElementById('#References-Fax-R-1').keypress(function(event) {
            if (event.keyCode == 13) {
                event.preventDefault();
            }
        });
        document.getElementById('#References-Acc-R-1').keypress(function(event) {
            if (event.keyCode == 13) {
                event.preventDefault();
            }
        });

        document.getElementById('#References-Name-R-2').keypress(function(event) {
            if (event.keyCode == 13) {
                event.preventDefault();
            }
        });
        document.getElementById('#References-Address-R-2').keypress(function(event) {
            if (event.keyCode == 13) {
                event.preventDefault();
            }
        });
        document.getElementById('#References-City-R-2').keypress(function(event) {
            if (event.keyCode == 13) {
                event.preventDefault();
            }
        });
        document.getElementById('#References-State-R-2').keypress(function(event) {
            if (event.keyCode == 13) {
                event.preventDefault();
            }
        });
        document.getElementById('#References-ZIP-R-2').keypress(function(event) {
            if (event.keyCode == 13) {
                event.preventDefault();
            }
        });
        document.getElementById('#References-Phone-R-2').keypress(function(event) {
            if (event.keyCode == 13) {
                event.preventDefault();
            }
        });
        document.getElementById('#References-Fax-R-2').keypress(function(event) {
            if (event.keyCode == 13) {
                event.preventDefault();
            }
        });
        document.getElementById('#References-Acc-R-2').keypress(function(event) {
            if (event.keyCode == 13) {
                event.preventDefault();
            }
        });

        document.getElementById('#References-Name-R-3').keypress(function(event) {
            if (event.keyCode == 13) {
                event.preventDefault();
            }
        });
        document.getElementById('#References-Address-R-3').keypress(function(event) {
            if (event.keyCode == 13) {
                event.preventDefault();
            }
        });
        document.getElementById('#References-City-R-3').keypress(function(event) {
            if (event.keyCode == 13) {
                event.preventDefault();
            }
        });
        document.getElementById('#References-State-R-3').keypress(function(event) {
            if (event.keyCode == 13) {
                event.preventDefault();
            }
        });
        document.getElementById('#References-ZIP-R-3').keypress(function(event) {
            if (event.keyCode == 13) {
                event.preventDefault();
            }
        });
        document.getElementById('#References-Phone-R-3').keypress(function(event) {
            if (event.keyCode == 13) {
                event.preventDefault();
            }
        });
        document.getElementById('#References-Fax-R-3').keypress(function(event) {
            if (event.keyCode == 13) {
                event.preventDefault();
            }
        });
        document.getElementById('#References-Acc-R-3').keypress(function(event) {
            if (event.keyCode == 13) {
                event.preventDefault();
            }
        });

        document.getElementById('#References-Name-R-4').keypress(function(event) {
            if (event.keyCode == 13) {
                event.preventDefault();
            }
        });
        document.getElementById('#References-Address-R-4').keypress(function(event) {
            if (event.keyCode == 13) {
                event.preventDefault();
            }
        });
        document.getElementById('#References-City-R-4').keypress(function(event) {
            if (event.keyCode == 13) {
                event.preventDefault();
            }
        });
        document.getElementById('#References-State-R-4').keypress(function(event) {
            if (event.keyCode == 13) {
                event.preventDefault();
            }
        });
        document.getElementById('#References-ZIP-R-4').keypress(function(event) {
            if (event.keyCode == 13) {
                event.preventDefault();
            }
        });
        document.getElementById('#References-Phone-R-4').keypress(function(event) {
            if (event.keyCode == 13) {
                event.preventDefault();
            }
        });
        document.getElementById('#References-Fax-R-4').keypress(function(event) {
            if (event.keyCode == 13) {
                event.preventDefault();
            }
        });
        document.getElementById('#References-Acc-R-4').keypress(function(event) {
            if (event.keyCode == 13) {
                event.preventDefault();
            }
        });




        document.getElementById('#references-step-back').click(function(e) {
            console.log("ESHPRINT7");
            e.preventDefault(); 
            document.getElementById('.w-round div:nth-child(4)').trigger('tap');
        });

        document.getElementById('#references-step').click(function(e) {
            console.log("ESHPRINT8");
            e.preventDefault();  
            
            if(document.getElementById('#References-Bank-1-Name').val().length == 0){
                document.getElementById('#bnr1-alert').show(500);
            }
            else
            {
                document.getElementById('#bnr1-alert').hide();
            };
            if(document.getElementById('#References-Bank-1-Address').val().length == 0){
                document.getElementById('#bar1-alert').show(500);
            }
            else
            {
                document.getElementById('#bar1-alert').hide();
            };
            if(document.getElementById('#References-Bank-1-Phone').val().length == 0){
                document.getElementById('#bpr1-alert').show(500);
            }
            else
            {
                document.getElementById('#bpr1-alert').hide();
            };
            if(document.getElementById('#References-Bank-1-Acc').val().length == 0){
                document.getElementById('#baccr1-alert').show(500);
            }
            else
            {
                document.getElementById('#baccr1-alert').hide();
            };

            if(document.getElementById('#References-Bank-2-Name').val().length == 0){
                document.getElementById('#bnr2-alert').show(500);
            }
            else
            {
                document.getElementById('#bnr2-alert').hide();
            };
            if(document.getElementById('#References-Bank-2-Address').val().length == 0){
                document.getElementById('#bar2-alert').show(500);
            }
            else
            {
                document.getElementById('#bar2-alert').hide();
            };
            if(document.getElementById('#References-Bank-2-Phone').val().length == 0){
                document.getElementById('#bpr2-alert').show(500);
            }
            else
            {
                document.getElementById('#bpr2-alert').hide();
            };
            if(document.getElementById('#References-Bank-2-Acc').val().length == 0){
                document.getElementById('#baccr2-alert').show(500);
            }
            else
            {
                document.getElementById('#baccr2-alert').hide();
            };



            if(document.getElementById('#References-Name-R-1').val().length == 0){
                document.getElementById('#pnr1-alert').show(500);
            }
            else
            {
                document.getElementById('#pnr1-alert').hide();
            };
            if(document.getElementById('#References-Address-R-1').val().length == 0){
                document.getElementById('#par1-alert').show(500);
            }
            else
            {
                document.getElementById('#par1-alert').hide();
            };
            if(document.getElementById('#References-City-R-1').val().length == 0){
                document.getElementById('#pcr1-alert').show(500);
            }
            else
            {
                document.getElementById('#pcr1-alert').hide();
            };
            if(document.getElementById('#References-State-R-1').val().length == 0){
                document.getElementById('#psr1-alert').show(500);
            }
            else
            {
                document.getElementById('#psr1-alert').hide();
            };
            if(document.getElementById('#References-ZIP-R-1').val().length == 0){
                document.getElementById('#pzr1-alert').show(500);
            }
            else
            {
                document.getElementById('#pzr1-alert').hide();
            };
            if(document.getElementById('#References-Phone-R-1').val().length == 0){
                document.getElementById('#ppr1-alert').show(500);
            }
            else
            {
                document.getElementById('#ppr1-alert').hide();
            };
            if(document.getElementById('#References-Fax-R-1').val().length == 0){
                document.getElementById('#pfr1-alert').show(500);
            }
            else
            {
                document.getElementById('#pfr1-alert').hide();
            };
            if(document.getElementById('#References-Acc-R-1').val().length == 0){
                document.getElementById('#pacr1-alert').show(500);
            }
            else
            {
                document.getElementById('#pacr1-alert').hide();
            };




            if(document.getElementById('#References-Name-R-2').val().length == 0){
                document.getElementById('#pnr2-alert').show(500);
            }
            else
            {
                document.getElementById('#pnr2-alert').hide();
            };
            if(document.getElementById('#References-Address-R-2').val().length == 0){
                document.getElementById('#par2-alert').show(500);
            }
            else
            {
                document.getElementById('#par2-alert').hide();
            };
            if(document.getElementById('#References-City-R-2').val().length == 0){
                document.getElementById('#pcr2-alert').show(500);
            }
            else
            {
                document.getElementById('#pcr2-alert').hide();
            };
            if(document.getElementById('#References-State-R-2').val().length == 0){
                document.getElementById('#psr2-alert').show(500);
            }
            else
            {
                document.getElementById('#psr2-alert').hide();
            };
            if(document.getElementById('#References-ZIP-R-2').val().length == 0){
                document.getElementById('#pzr2-alert').show(500);
            }
            else
            {
                document.getElementById('#pzr2-alert').hide();
            };
            if(document.getElementById('#References-Phone-R-2').val().length == 0){
                document.getElementById('#ppr2-alert').show(500);
            }
            else
            {
                document.getElementById('#ppr2-alert').hide();
            };
            if(document.getElementById('#References-Fax-R-2').val().length == 0){
                document.getElementById('#pfr2-alert').show(500);
            }
            else
            {
                document.getElementById('#pfr2-alert').hide();
            };
            if(document.getElementById('#References-Acc-R-2').val().length == 0){
                document.getElementById('#pacr2-alert').show(500);
            }
            else
            {
                document.getElementById('#pacr2-alert').hide();
            };


            if(document.getElementById('#References-Name-R-3').val().length == 0){
                document.getElementById('#pnr3-alert').show(500);
            }
            else
            {
                document.getElementById('#pnr3-alert').hide();
            };
            if(document.getElementById('#References-Address-R-3').val().length == 0){
                document.getElementById('#par3-alert').show(500);
            }
            else
            {
                document.getElementById('#par3-alert').hide();
            };
            if(document.getElementById('#References-City-R-3').val().length == 0){
                document.getElementById('#pcr3-alert').show(500);
            }
            else
            {
                document.getElementById('#pcr3-alert').hide();
            };
            if(document.getElementById('#References-State-R-3').val().length == 0){
                document.getElementById('#psr3-alert').show(500);
            }
            else
            {
                document.getElementById('#psr3-alert').hide();
            };
            if(document.getElementById('#References-ZIP-R-3').val().length == 0){
                document.getElementById('#pzr3-alert').show(500);
            }
            else
            {
                document.getElementById('#pzr3-alert').hide();
            };
            if(document.getElementById('#References-Phone-R-3').val().length == 0){
                document.getElementById('#ppr3-alert').show(500);
            }
            else
            {
                document.getElementById('#ppr3-alert').hide();
            };
            if(document.getElementById('#References-Fax-R-3').val().length == 0){
                document.getElementById('#pfr3-alert').show(500);
            }
            else
            {
                document.getElementById('#pfr3-alert').hide();
            };
            if(document.getElementById('#References-Acc-R-3').val().length == 0){
                document.getElementById('#pacr3-alert').show(500);
            }
            else
            {
                document.getElementById('#pacr3-alert').hide();
            };


            if(document.getElementById('#References-Name-R-4').val().length == 0){
                document.getElementById('#pnr4-alert').show(500);
            }
            else
            {
                document.getElementById('#pnr4-alert').hide();
            };
            if(document.getElementById('#References-Address-R-4').val().length == 0){
                document.getElementById('#par4-alert').show(500);
            }
            else
            {
                document.getElementById('#par4-alert').hide();
            };
            if(document.getElementById('#References-City-R-4').val().length == 0){
                document.getElementById('#pcr4-alert').show(500);
            }
            else
            {
                document.getElementById('#pcr4-alert').hide();
            };
            if(document.getElementById('#References-State-R-4').val().length == 0){
                document.getElementById('#psr4-alert').show(500);
            }
            else
            {
                document.getElementById('#psr4-alert').hide();
            };
            if(document.getElementById('#References-ZIP-R-4').val().length == 0){
                document.getElementById('#pzr4-alert').show(500);
            }
            else
            {
                document.getElementById('#pzr4-alert').hide();
            };
            if(document.getElementById('#References-Phone-R-4').val().length == 0){
                document.getElementById('#ppr4-alert').show(500);
            }
            else
            {
                document.getElementById('#ppr4-alert').hide();
            };
            if(document.getElementById('#References-Fax-R-4').val().length == 0){
                document.getElementById('#pfr4-alert').show(500);
            }
            else
            {
                document.getElementById('#pfr4-alert').hide();
            };
            if(document.getElementById('#References-Acc-R-4').val().length == 0){
                document.getElementById('#pacr4-alert').show(500);
            }
            else
            {
                document.getElementById('#pacr4-alert').hide();
            };

            var refb1 = false;            
            var refb2 = false; 
            var refp1 = false;             
            var refp2 = false; 
            var refp3 = false;             
            var refp4 = false; 

            if(document.getElementById('#References-Bank-1-Name').val().length > 0 &&
                document.getElementById('#References-Bank-1-Address').val().length == 0 &&
                document.getElementById('#References-Bank-1-Phone').val().length == 0 &&
                document.getElementById('#References-Bank-1-Acc').val().length == 0){
                refb1 = true;
            }
            else
            {
                refb1 = false; 
            };

            if(document.getElementById('#References-Bank-2-Name').val().length > 0 &&
            document.getElementById('#References-Bank-2-Address').val().length == 0 &&
            document.getElementById('#References-Bank-2-Phone').val().length == 0 &&
            document.getElementById('#References-Bank-2-Acc').val().length == 0){
                refb2 = true;
            }
            else
            {
                refb2 = false; 
            };

            if(document.getElementById('#References-Name-R-1').val().length > 0 &&
            document.getElementById('#References-Address-R-1').val().length == 0 &&
            document.getElementById('#References-City-R-1').val().length == 0 &&
            document.getElementById('#References-State-R-1').val().length == 0 &&
            document.getElementById('#References-ZIP-R-1').val().length == 0 &&
            document.getElementById('#References-Phone-R-1').val().length == 0 &&
            document.getElementById('#References-Fax-R-1').val().length == 0 &&
            document.getElementById('#References-Acc-R-1').val().length == 0){
                refp1 = true;
            }
            else
            {
                refp1 = false; 
            };

            if(document.getElementById('#References-Name-R-2').val().length > 0 &&
            document.getElementById('#References-Address-R-2').val().length == 0 &&
            document.getElementById('#References-City-R-2').val().length == 0 &&
            document.getElementById('#References-State-R-2').val().length == 0 &&
            document.getElementById('#References-ZIP-R-2').val().length == 0 &&
            document.getElementById('#References-Phone-R-2').val().length == 0 &&
            document.getElementById('#References-Fax-R-2').val().length == 0 &&
            document.getElementById('#References-Acc-R-2').val().length == 0){
                refp2 = true;
            }
            else
            {
                refp2 = false; 
            };

            if(document.getElementById('#References-Name-R-3').val().length > 0 &&
            document.getElementById('#References-Address-R-3').val().length == 0 &&
            document.getElementById('#References-City-R-3').val().length == 0 &&
            document.getElementById('#References-State-R-3').val().length == 0 &&
            document.getElementById('#References-ZIP-R-3').val().length == 0 &&
            document.getElementById('#References-Phone-R-3').val().length == 0 &&
            document.getElementById('#References-Fax-R-3').val().length == 0 &&
            document.getElementById('#References-Acc-R-3').val().length == 0){
                refp3 = true;
            }
            else
            {
                refp3 = false; 
            };

            if(document.getElementById('#References-Name-R-4').val().length > 0 &&
            document.getElementById('#References-Address-R-4').val().length == 0 &&
            document.getElementById('#References-City-R-4').val().length == 0 &&
            document.getElementById('#References-State-R-4').val().length == 0 &&
            document.getElementById('#References-ZIP-R-4').val().length == 0 &&
            document.getElementById('#References-Phone-R-4').val().length == 0 &&
            document.getElementById('#References-Fax-R-4').val().length == 0 &&
            document.getElementById('#References-Acc-R-4').val().length == 0){
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
                document.getElementById('.w-round div:nth-child(6)').trigger('tap');
            }
            else
            {
                log(refb1,refb2,refp1,refp2,refp3,refp4)
            };   
        });




        /******Step 6 // - Compliance Slider // MUST TEST *******************/

        document.getElementById('#compliance-checkbox1').keypress(function(event) {
            if (event.keyCode == 13) {
                event.preventDefault();
            }
            
        });
        document.getElementById('#compliance-checkbox2').keypress(function(event) {
            if (event.keyCode == 13) {
                event.preventDefault();
            }
        });
        document.getElementById('#compliance-checkbox3').keypress(function(event) {
            if (event.keyCode == 13) {
                event.preventDefault();
            }
        });

        document.getElementById('#submit-step-back').click(function(e) {
            console.log("ESHPRINT9");
            e.preventDefault(); 
            document.getElementById('.w-round div:nth-child(4)').trigger('tap');
        });


        document.getElementById('#submit-step').click(function(e) {
            console.log("ESHPRINT10");
            e.preventDefault();   
            
            if(document.getElementById('#compliance-checkbox1') == false){
                document.getElementById('#compliance-alert1').show(500);
            }
            else
            {
            document.getElementById('#compliance-alert1').hide();
            };

            if(document.getElementById('#compliance-checkbox2') == false){
                document.getElementById('#compliance-alert2').show(500);
            }
            else
            {
            document.getElementById('#compliance-alert2').hide();
            };

            if(document.getElementById('#compliance-checkbox3') == false){
                document.getElementById('#compliance-alert3').show(500);
            } 
            else
            {
                document.getElementById('#compliance-alert3').hide();
            };  


            if(document.getElementById('#compliance-checkbox1') == true &&
                document.getElementById('#compliance-checkbox2') == true &&
                document.getElementById('#compliance-checkbox3') == true){ 

                console.log("conditions met");
    
                document.getElementById('#submit-step').trigger('tap');
    
                console.log("real end of code");   

            }           
        });
