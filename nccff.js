$(document).ready(function(){
        
    Webflow.require('slider');

    /*document.getElementByID(":input, a").attr("tabindex", "-1");*/



    const slider = document.getElementByID('formslider');
    
    /******Step 1 // - Personal Information Slider // WORKING *******************/
    document.getElementByID('personal-name').keypress(function(event) {
        if (event.keyCode == 13) {
            event.preventDefault();
        }
    });
    document.getElementByID('personal-email').keypress(function(event) {
        if (event.keyCode == 13) {
            event.preventDefault();
        }
    });
    document.getElementByID('personal-phone').keypress(function(event) {
        if (event.keyCode == 13) {
            event.preventDefault();
        }
    });

    
    document.getElementByID('name-step').addEventListener('click', function(e) {
        console.log("ESHPRINT");
        e.preventDefault();   
        


        var fnumber = document.forms[0].elements["personal-phone"].valueue;
        console.log(fnumber)

        if(document.getElementByID('personal-name').value().length == 0){
            document.getElementByID('name-personal-alert').style.display = 'block';
        }
        else
        {
            document.getElementByID('name-personal-alert').style.display = 'none';
        };
        if(document.getElementByID('personal-email').value().length == 0){
            document.getElementByID('email-personal-alert').style.display = 'block';
        }
        else
        {
        document.getElementByID('email-personal-alert').style.display = 'none';
        };
        if(document.getElementByID('personal-phone').value().length == 0){
            document.getElementByID('phone-personal-alert').style.display = 'block';
        } 
        else
        {
            document.getElementByID('phone-personal-alert').style.display = 'none';
        };  

        
        if(isNaN(fnumber) == true){
            document.getElementByID('phone-personal-alert2').style.display = 'block';
        }
        else
        {
            document.getElementByID('phone-personal-alert2').style.display = 'none';
        };



        console.log("end of code")

        if(document.getElementByID('personal-name').value().length !=0 && 
            document.getElementByID('personal-email').value().length !=0 && 
            document.getElementByID('personal-phone').value().length !=0 && 
            isNaN(fnumber) == false &&
            slider.index != 0)
            {
            document.getElementByID('name-personal-alert').style.display = 'none';
            document.getElementByID('email-personal-alert').style.display = 'none';
            document.getElementByID('phone-personal-alert').style.display = 'none';
            document.getElementByID('phone-personal-alert2').style.display = 'none';
            document.getElementByID('tradeshow-personal-alert').style.display = 'none';
            console.log("conditions met")
            Webflow.require('slider').next();
            /*document.getElementByID('.w-round div:nth-child(2)').trigger('tap');*/
            }
        console.log("real end of code")

    });   

    
    /******Step 2 // - Store Information Slider // WORKING  *******************/
    document.getElementByID('store-name').keypress(function(event) {
        if (event.keyCode == 13) {
            event.preventDefault();
        }
    });
    document.getElementByID('store-location').keypress(function(event) {
        if (event.keyCode == 13) {
            event.preventDefault();
        }
    });
    document.getElementByID('store-address').keypress(function(event) {
        if (event.keyCode == 13) {
            event.preventDefault();
        }
    });
    document.getElementByID('store-address2').keypress(function(event) {
        if (event.keyCode == 13) {
            event.preventDefault();
        }
    });
    document.getElementByID('store-city').keypress(function(event) {
        if (event.keyCode == 13) {
            event.preventDefault();
        }
    });
    document.getElementByID('store-stateprovince').keypress(function(event) {
        if (event.keyCode == 13) {
            event.preventDefault();
        }
    });
    document.getElementByID('store-zippostalcode').keypress(function(event) {
        if (event.keyCode == 13) {
            event.preventDefault();
        }
    });
    document.getElementByID('store-email').keypress(function(event) {
        if (event.keyCode == 13) {
            event.preventDefault();
        }
    });
    document.getElementByID('store-phone').keypress(function(event) {
        if (event.keyCode == 13) {
            event.preventDefault();
        }
    });
    document.getElementByID('RJO-Buying-Show').keypress(function(event) {
        if (event.keyCode == 13) {
            event.preventDefault();
        }
    });
    document.getElementByID('The-INSTORE-Show').keypress(function(event) {
        if (event.keyCode == 13) {
            event.preventDefault();
        }
    });
    document.getElementByID('Select-Jewelry-Show-VA').keypress(function(event) {
        if (event.keyCode == 13) {
            event.preventDefault();
        }
    });
    document.getElementByID('Select-Jewelry-Show-CT').keypress(function(event) {
        if (event.keyCode == 13) {
            event.preventDefault();
        }
    });
    document.getElementByID('Select-Jewelry-Show-Dallas').keypress(function(event) {
        if (event.keyCode == 13) {
            event.preventDefault();
        }
    });
    document.getElementByID('personal-buygroup').keypress(function(event) {
        if (event.keyCode == 13) {
            event.preventDefault();
        }
    });


    document.getElementByID('store-step-back').addEventListener('click', function(e) {
        console.log("ESHPRINT3");
        e.preventDefault(); 
        document.getElementByID('.w-round div:nth-child(1)').trigger('tap');
    });
    document.getElementByID('store-step').addEventListener('click', function(e) {
        console.log("ESHPRINT2");
        e.preventDefault();             

        var fnumber2 = document.forms[0].elements["store-phone"].valueue;
        console.log(fnumber2)

        if(document.getElementByID('store-name').value().length == 0){
            document.getElementByID('name-store-alert').style.display = 'block';
        }
        else
        {
        document.getElementByID('name-store-alert').style.display = 'none';
        };
        if(document.getElementByID('store-location').value().length == 0){
            document.getElementByID('location-store-alert').style.display = 'block';
        }
        else
        {
        document.getElementByID('location-store-alert').style.display = 'none';
        };
        if(document.getElementByID('store-address').value().length == 0){
            document.getElementByID('address-store-alert').style.display = 'block';
        }
        else
        {
        document.getElementByID('address-store-alert').style.display = 'none';
        };
        if(document.getElementByID('store-city').value().length == 0){
            document.getElementByID('city-store-alert').style.display = 'block';
        }
        else
        {
        document.getElementByID('city-store-alert').style.display = 'none';
        };
        if(document.getElementByID('store-stateprovince').value().length == 0){
            document.getElementByID('stateprovince-store-alert').style.display = 'block';
        }
        else
        {
        document.getElementByID('stateprovince-store-alert').style.display = 'none';
        };
        if(document.getElementByID('store-zippostalcode').value().length == 0){
            document.getElementByID('zippostalcode-store-alert').style.display = 'block';
        }
        else
        {
        document.getElementByID('zippostalcode-store-alert').style.display = 'none';
        };
        if(document.getElementByID('store-email').value().length == 0){
            document.getElementByID('email-store-alert').style.display = 'block';
        }
        else
        {
        document.getElementByID('email-store-alert').style.display = 'none';
        };

        if(document.getElementByID('store-phone').value().length == 0){
            document.getElementByID('phone-store-alert').style.display = 'block';
        } 
        else
        {
            document.getElementByID('phone-store-alert').style.display = 'none';
        };  

        if(isNaN(fnumber2) == true){
            document.getElementByID('phone-store-alert2').style.display = 'block';
        }
        else
        {
            document.getElementByID('phone-store-alert2').style.display = 'none';
        };

        if(document.getElementByID('store-name').value().length !=0 &&
            document.getElementByID('store-location').value().length !=0 && 
            document.getElementByID('store-address').value().length !=0 &&
            document.getElementByID('store-city').value().length !=0 &&
            document.getElementByID('store-stateprovince').value().length !=0 &&
            document.getElementByID('store-zippostalcode').value().length !=0 &&
            document.getElementByID('store-email').value().length !=0 &&
            isNaN(fnumber2) == false)
            {
            console.log("conditions met")
            document.getElementByID('.w-round div:nth-child(3)').trigger('tap');
            }  
            document.getElementByID('OwnerCheckbox').disabled = true;
            document.getElementByID('PayableCheckbox').disabled = true;

        
    });


    /******Step 3 // - Store Contact List Slider // MISSING CONDITION TEST FOR PASSING SLIDE AND TESTING *******************/

    document.getElementByID('OwnerCheckbox').keypress(function(event) {
        if (event.keyCode == 13) {
            event.preventDefault();
        }
    });        
    document.getElementByID('ctc-owner-name').keypress(function(event) {
        if (event.keyCode == 13) {
            event.preventDefault();
        }
    });        
    document.getElementByID('contact-email-owner').keypress(function(event) {
        if (event.keyCode == 13) {
            event.preventDefault();
        }
    });
    document.getElementByID('PayableCheckbox').keypress(function(event) {
        if (event.keyCode == 13) {
            event.preventDefault();
        }
    });        
    document.getElementByID('ctc-accounts-name').keypress(function(event) {
        if (event.keyCode == 13) {
            event.preventDefault();
        }
    });        
    document.getElementByID('contact-email-accounts').keypress(function(event) {
        if (event.keyCode == 13) {
            event.preventDefault();
        }
    });
    document.getElementByID('BuyerCheckbox').keypress(function(event) {
        if (event.keyCode == 13) {
            event.preventDefault();
        }
    });        
    document.getElementByID('ctc-buyer-name').keypress(function(event) {
        if (event.keyCode == 13) {
            event.preventDefault();
        }
    });        
    document.getElementByID('contact-email-buyer').keypress(function(event) {
        if (event.keyCode == 13) {
            event.preventDefault();
        }
    });
    document.getElementByID('StoreCheckbox').keypress(function(event) {
        if (event.keyCode == 13) {
            event.preventDefault();
        }
    });        
    document.getElementByID('ctc-stomanager-name').keypress(function(event) {
        if (event.keyCode == 13) {
            event.preventDefault();
        }
    });        
    document.getElementByID('contact-email-stomanager').keypress(function(event) {
        if (event.keyCode == 13) {
            event.preventDefault();
        }
    });
    document.getElementByID('MarketingCheckbox').keypress(function(event) {
        if (event.keyCode == 13) {
            event.preventDefault();
        }
    });        
    document.getElementByID('ctc-marketing-name').keypress(function(event) {
        if (event.keyCode == 13) {
            event.preventDefault();
        }
    });        
    document.getElementByID('contact-email-marketing').keypress(function(event) {
        if (event.keyCode == 13) {
            event.preventDefault();
        }
    });
    document.getElementByID('OfficeCheckbox').keypress(function(event) {
        if (event.keyCode == 13) {
            event.preventDefault();
        }
    });        
    document.getElementByID('ctc-offmanager-name').keypress(function(event) {
        if (event.keyCode == 13) {
            event.preventDefault();
        }
    });        
    document.getElementByID('contact-email-offmanager').keypress(function(event) {
        if (event.keyCode == 13) {
            event.preventDefault();
        }
    });
    document.getElementByID('WebsiteCheckbox').keypress(function(event) {
        if (event.keyCode == 13) {
            event.preventDefault();
        }
    });        
    document.getElementByID('ctc-website-name').keypress(function(event) {
        if (event.keyCode == 13) {
            event.preventDefault();
        }
    });        
    document.getElementByID('contact-email-website').keypress(function(event) {
        if (event.keyCode == 13) {
            event.preventDefault();
        }
    });
    document.getElementByID('SalesCheckbox').keypress(function(event) {
        if (event.keyCode == 13) {
            event.preventDefault();
        }
    });        
    document.getElementByID('ctc-sales-name').keypress(function(event) {
        if (event.keyCode == 13) {
            event.preventDefault();
        }
    });        
    document.getElementByID('contact-email-sales').keypress(function(event) {
        if (event.keyCode == 13) {
            event.preventDefault();
        }
    });


    document.getElementByID('OwnerCheckbox').addEventListener('change', function() {
        if (document.getElementByID('OwnerCheckbox').checked == true) {
            document.getElementByID('ctc-owner-name').disabled = false;
            document.getElementByID('contact-email-owner').disabled = false;
        } else {
            document.getElementByID('ctc-owner-name').disabled = true;
            document.getElementByID('contact-email-owner').disabled = true;
            document.getElementByID('ctc-owner-name').valueue = '';
            document.getElementByID('contact-email-owner').valueue = '';
        }
    });
    document.getElementByID('PayableCheckbox').addEventListener('change', function() {
        if (document.getElementByID('PayableCheckbox').checked == true) {
            document.getElementByID('ctc-accounts-name').disabled = false;
            document.getElementByID('contact-email-accounts').disabled = false;
        } else {
            document.getElementByID('ctc-accounts-name').disabled = true;
            document.getElementByID('contact-email-accounts').disabled = true;
            document.getElementByID('ctc-accounts-name').valueue = '';
            document.getElementByID('contact-email-accounts').valueue = '';
        }
    });
    document.getElementByID('BuyerCheckbox').addEventListener('change', function() {
        if (document.getElementByID('BuyerCheckbox').checked == true) {
            document.getElementByID('ctc-buyer-name').disabled = false;
            document.getElementByID('contact-email-buyer').disabled = false;
        } else {
            document.getElementByID('ctc-buyer-name').disabled = true;
            document.getElementByID('contact-email-buyer').disabled = true;
            document.getElementByID('ctc-buyer-name').valueue = '';
            document.getElementByID('contact-email-buyer').valueue = '';
        }
    });
    document.getElementByID('StoreCheckbox').addEventListener('change', function() {
        if (document.getElementByID('StoreCheckbox').checked == true) {
            document.getElementByID('ctc-stomanager-name').disabled = false;
            document.getElementByID('contact-email-stomanager').disabled = false;
        } else {
            document.getElementByID('ctc-stomanager-name').disabled = true;
            document.getElementByID('contact-email-stomanager').disabled = true;
            document.getElementByID('ctc-stomanager-name').valueue = '';
            document.getElementByID('contact-email-stomanager').valueue = '';
        }
    });
    document.getElementByID('MarketingCheckbox').addEventListener('change', function() {
        if (document.getElementByID('MarketingCheckbox').checked == true) {
            document.getElementByID('ctc-marketing-name').disabled = false;
            document.getElementByID('contact-email-marketing').disabled = false;
        } else {
            document.getElementByID('ctc-marketing-name').disabled = true;
            document.getElementByID('contact-email-marketing').disabled = true;
            document.getElementByID('ctc-marketing-name').valueue = '';
            document.getElementByID('contact-email-marketing').valueue = '';
        }
    });
    document.getElementByID('OfficeCheckbox').addEventListener('change', function() {
        if (document.getElementByID('OfficeCheckbox').checked == true) {
            document.getElementByID('ctc-offmanager-name').disabled = false;
            document.getElementByID('contact-email-offmanager').disabled = false;
        } else {
            document.getElementByID('ctc-offmanager-name').disabled = true;
            document.getElementByID('contact-email-offmanager').disabled = true;
            document.getElementByID('ctc-offmanager-name').valueue = '';
            document.getElementByID('contact-email-offmanager').valueue = '';
        }
    });
    document.getElementByID('WebsiteCheckbox').addEventListener('change', function() {
        if (document.getElementByID('WebsiteCheckbox').checked == true) {
            document.getElementByID('ctc-website-name').disabled = false;
            document.getElementByID('contact-email-website').disabled = false;
        } else {
            document.getElementByID('ctc-website-name').disabled = true;
            document.getElementByID('contact-email-website').disabled = true;
            document.getElementByID('ctc-website-name').valueue = '';
            document.getElementByID('contact-email-website').valueue = '';
        }
    });
    document.getElementByID('SalesCheckbox').addEventListener('change', function() {
        if (document.getElementByID('SalesCheckbox').checked == true) {
            document.getElementByID('ctc-sales-name').disabled = false;
            document.getElementByID('contact-email-sales').disabled = false;
        } else {
            document.getElementByID('ctc-sales-name').disabled = true;
            document.getElementByID('contact-email-sales').disabled = true;
            document.getElementByID('ctc-sales-name').valueue = '';
            document.getElementByID('contact-email-sales').valueue = '';
        }
    });
    

    document.getElementByID('storecontact-step-back').addEventListener('click', function(e) {
        console.log("ESHPRINT4");
        e.preventDefault(); 
        document.getElementByID('.w-round div:nth-child(2)').trigger('tap');
    });

    document.getElementByID('contact-step').addEventListener('click', function(e) {
        console.log("ESHPRINT3");
        e.preventDefault();

        if(document.getElementByID('ctc-owner-name').value().length == 0 || document.getElementByID('contact-email-owner').value().length == 0){
            document.getElementByID('ctc-owner-name-alert').style.display = 'block';
        }
        else
        {
            document.getElementByID('ctc-owner-name-alert').style.display = 'none';
        };

        if(document.getElementByID('ctc-accounts-name').value().length == 0 || document.getElementByID('contact-accounts-owner').value().length == 0){
            document.getElementByID('ctc-accounts-name-alert').style.display = 'block';
        }
        else
        {
            document.getElementByID('ctc-accounts-name-alert').style.display = 'none';
        };

        document.getElementByID('.w-round div:nth-child(4)').trigger('tap');
    });   




    /******Step 4 // - Credit Information Slider // MUST TEST *******************/
    document.getElementByID('credit-name').keypress(function(event) {
        if (event.keyCode == 13) {
            event.preventDefault();
        }
    });
    document.getElementByID('credit-number').keypress(function(event) {
        if (event.keyCode == 13) {
            event.preventDefault();
        }
    });
    document.getElementByID('credit-month').keypress(function(event) {
        if (event.keyCode == 13) {
            event.preventDefault();
        }
    });
    document.getElementByID('credit-year').keypress(function(event) {
        if (event.keyCode == 13) {
            event.preventDefault();
        }
    });
    document.getElementByID('credit-cardtype').keypress(function(event) {
        if (event.keyCode == 13) {
            event.preventDefault();
        }
    });
    document.getElementByID('credit-security').keypress(function(event) {
        if (event.keyCode == 13) {
            event.preventDefault();
        }
    });
    document.getElementByID('Billing-Same-as-Store-Address').addEventListener('change', (event) =>  {
        if (event.keyCode == 13) {
            event.preventDefault();
        }
        if(document.getElementByID('Billing-Same-as-Store-Address') == true){
            document.getElementByID('credit-address1').value = document.getElementByID('store-address1').value;
            document.getElementByID('credit-address2').value = document.getElementByID('store-address2').value;
            document.getElementByID('credit-city').value = document.getElementByID('store-city').value;
            document.getElementByID('credit-StateProvince').value = document.getElementByID('store-stateprovince').value;
            document.getElementByID('credit-PostalZip').value = document.getElementByID('store-zippostalcode').value;

            document.getElementByID('credit-address1').disabled = true;
            document.getElementByID('credit-address2').disabled = true;
            document.getElementByID('credit-city').disabled = true;
            document.getElementByID('credit-StateProvince').disabled = true;
            document.getElementByID('credit-PostalZip').disabled = true;
        }
        else
        {
            document.getElementByID('credit-address1').value = ('');
            document.getElementByID('credit-address2').value = ('');
            document.getElementByID('credit-city').value = ('');
            document.getElementByID('credit-StateProvince').value = ('');
            document.getElementByID('credit-PostalZip').value = ('');

            document.getElementByID('credit-address1').disabled = false;
            document.getElementByID('credit-address2').disabled = false;
            document.getElementByID('credit-city').disabled = false;
            document.getElementByID('credit-StateProvince').disabled = false;
            document.getElementByID('credit-PostalZip').disabled = false;
        };
    });
    document.getElementByID('credit-storename').keypress(function(event) {
        if (event.keyCode == 13) {
            event.preventDefault();
        }
    });
    document.getElementByID('credit-address').keypress(function(event) {
        if (event.keyCode == 13) {
            event.preventDefault();
        }
    });
    document.getElementByID('credit-address2').keypress(function(event) {
        if (event.keyCode == 13) {
            event.preventDefault();
        }
    });
    document.getElementByID('credit-city').keypress(function(event) {
        if (event.keyCode == 13) {
            event.preventDefault();
        }
    });
    document.getElementByID('credit-stateprovince').keypress(function(event) {
        if (event.keyCode == 13) {
            event.preventDefault();
        }
    });
    document.getElementByID('credit-zippostal').keypress(function(event) {
        if (event.keyCode == 13) {
            event.preventDefault();
        }
    });

    document.getElementByID('credit-number').addEventListener('input', function () {
        this.valueue = this.valueue.slice(0, 16);
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



    document.getElementByID('credit-step-back').addEventListener('click', function(e) {
        console.log("ESHPRINT6");
        e.preventDefault(); 
        document.getElementByID('.w-round div:nth-child(3)').trigger('tap');
    });

    /// MUST IMPROVE CHECK FOR SAME AS BILLING CONDITION TO PROGRESS

    document.getElementByID('credit-step').addEventListener('click', function(e) {
        console.log("ESHPRINT4");
        e.preventDefault();             

        var fnumber3 = document.forms[0].elements["credit-number"].valueue;
        var fnumber4 = document.forms[0].elements["credit-security"].valueue;

        if (validateCreditCardNumber(fnumber3) == true) {
            document.getElementByID('name-credit-alert').style.display = 'none';                    
        } 
        else 
        {
            document.getElementByID('name-credit-alert').style.display = 'block';
        }    

        if(document.getElementByID('credit-name').value().length == 0){
            document.getElementByID('name-credit-alert').style.display = 'block';
        }
        else
        {
            document.getElementByID('name-credit-alert').style.display = 'none';
        };

        if(isNaN(fnumber3) == true){
            document.getElementByID('number-credit-alert').style.display = 'block';
        }
        else
        {
            document.getElementByID('number-credit-alert').style.display = 'none';
        };

        if(isNaN(fnumber4) == true){
            document.getElementByID('security-credit-alert').style.display = 'block';
        }
        else
        {
            document.getElementByID('security-credit-alert').style.display = 'none';
        };

        var index2 = document.forms[0].elements["credit-month"].selectedIndex 
        var index3 = document.forms[0].elements["credit-year"].selectedIndex 
        var index4 = document.forms[0].elements["credit-cardtype"].selectedIndex 

        if(index2 == 0)
        {
            document.getElementByID('month-credit-alert').style.display = 'block';
        
        } 
        else
        {
            document.getElementByID('month-credit-alert').style.display = 'none';
        };

        if(index3 == 0)
        {
            document.getElementByID('year-credit-alert').style.display = 'block';
        
        } 
        else
        {
            document.getElementByID('year-credit-alert').style.display = 'none';
        };

        if(index4 == 0)
        {
            document.getElementByID('cardtype-credit-alert').style.display = 'block';
        
        } 
        else
        {
            document.getElementByID('cardtype-credit-alert').style.display = 'none';
        };

        if(document.getElementByID('credit-address1').value().length == 0){
            document.getElementByID('address1-credit-alert').style.display = 'block';
        }
        else
        {
        document.getElementByID('address1-credit-alert').style.display = 'none';
        };

        if(document.getElementByID('credit-address2').value().length == 0){
            document.getElementByID('address2-credit-alert').style.display = 'block';
        }
        else
        {
        document.getElementByID('address2-credit-alert').style.display = 'none';
        };

        if(document.getElementByID('credit-city').value().length == 0){
            document.getElementByID('city-credit-alert').style.display = 'block';
        }
        else
        {
        document.getElementByID('city-credit-alert').style.display = 'none';
        };

        if(document.getElementByID('credit-stateprovince').value().length == 0){
            document.getElementByID('stateprovince-credit-alert').style.display = 'block';
        }
        else
        {
        document.getElementByID('stateprovince-credit-alert').style.display = 'none';
        };

        if(document.getElementByID('credit-zippostal').value().length == 0){
            document.getElementByID('zippostal-credit-alert').style.display = 'block';
        }
        else
        {
        document.getElementByID('zippostal-credit-alert').style.display = 'none';
        };

            /// MUST DELETE, DOUBLE FUNCTIONALITY, KEEP FOR IF LAMBDA DEV 

            /*if(document.getElementByID('Billing-Same-as-Store-Address') == true ){
                document.getElementByID('credit-address1').value().length == 0 ? document.getElementByID('address-credit-alert').style.display = 'block' : document.getElementByID('address-credit-alert').style.display = 'none';
                document.getElementByID('credit-address2').value().length == 0 ? document.getElementByID('address2-credit-alert').style.display = 'block' : document.getElementByID('address2-credit-alert').style.display = 'none';
                document.getElementByID('credit-city').value().length == 0 ? document.getElementByID('city-credit-alert').style.display = 'block' : document.getElementByID('city-credit-alert').style.display = 'none';
                document.getElementByID('credit-stateprovince').value().length == 0 ? document.getElementByID('stateprovince-credit-alert').style.display = 'block' : document.getElementByID('stateprovince-credit-alert').style.display = 'none';
                document.getElementByID('credit-zippostal').value().length == 0 ? document.getElementByID('zippostal-credit-alert').style.display = 'block' : document.getElementByID('zippostal-credit-alert').style.display = 'none';
            }       */


        if(document.getElementByID('credit-card-name').value().length !=0 && 
        isNaN(fnumber3) == false &&
        index2 != 0 &&
        index3 != 0 &&
        index4 != 0 && 
        isNaN(fnumber4) == false &&
        document.getElementByID('credit-address1').value().length !=0 &&
        document.getElementByID('credit-address2').value().length !=0 &&
        document.getElementByID('credit-city').value().length !=0 &&
        document.getElementByID('credit-stateprovince').value().length !=0 &&
        document.getElementByID('credit-zippostal').value().length !=0)
        {
            console.log("conditions met")
            document.getElementByID('.w-round div:nth-child(5)').trigger('tap');
        }   

    });   

    /******Step 5 // - References Slider // MUST TEST *******************/
    document.getElementByID('References-Bank-1-Name').keypress(function(event) {
        if (event.keyCode == 13) {
            event.preventDefault();
        }
    });
    document.getElementByID('References-Bank-1-Address').keypress(function(event) {
        if (event.keyCode == 13) {
            event.preventDefault();
        }
    });
    document.getElementByID('References-Bank-1-Phone').keypress(function(event) {
        if (event.keyCode == 13) {
            event.preventDefault();
        }
    });
    document.getElementByID('References-Bank-1-Acc').keypress(function(event) {
        if (event.keyCode == 13) {
            event.preventDefault();
        }
    });
    document.getElementByID('References-Bank-2-Name').keypress(function(event) {
        if (event.keyCode == 13) {
            event.preventDefault();
        }
    });
    document.getElementByID('References-Bank-2-Address').keypress(function(event) {
        if (event.keyCode == 13) {
            event.preventDefault();
        }
    });
    document.getElementByID('References-Bank-2-Phone').keypress(function(event) {
        if (event.keyCode == 13) {
            event.preventDefault();
        }
    });
    document.getElementByID('References-Bank-2-Acc').keypress(function(event) {
        if (event.keyCode == 13) {
            event.preventDefault();
        }
    });



    document.getElementByID('References-Name-R-1').keypress(function(event) {
        if (event.keyCode == 13) {
            event.preventDefault();
        }
    });
    document.getElementByID('References-Address-R-1').keypress(function(event) {
        if (event.keyCode == 13) {
            event.preventDefault();
        }
    });
    document.getElementByID('References-City-R-1').keypress(function(event) {
        if (event.keyCode == 13) {
            event.preventDefault();
        }
    });
    document.getElementByID('References-State-R-1').keypress(function(event) {
        if (event.keyCode == 13) {
            event.preventDefault();
        }
    });
    document.getElementByID('References-ZIP-R-1').keypress(function(event) {
        if (event.keyCode == 13) {
            event.preventDefault();
        }
    });
    document.getElementByID('References-Phone-R-1').keypress(function(event) {
        if (event.keyCode == 13) {
            event.preventDefault();
        }
    });
    document.getElementByID('References-Fax-R-1').keypress(function(event) {
        if (event.keyCode == 13) {
            event.preventDefault();
        }
    });
    document.getElementByID('References-Acc-R-1').keypress(function(event) {
        if (event.keyCode == 13) {
            event.preventDefault();
        }
    });

    document.getElementByID('References-Name-R-2').keypress(function(event) {
        if (event.keyCode == 13) {
            event.preventDefault();
        }
    });
    document.getElementByID('References-Address-R-2').keypress(function(event) {
        if (event.keyCode == 13) {
            event.preventDefault();
        }
    });
    document.getElementByID('References-City-R-2').keypress(function(event) {
        if (event.keyCode == 13) {
            event.preventDefault();
        }
    });
    document.getElementByID('References-State-R-2').keypress(function(event) {
        if (event.keyCode == 13) {
            event.preventDefault();
        }
    });
    document.getElementByID('References-ZIP-R-2').keypress(function(event) {
        if (event.keyCode == 13) {
            event.preventDefault();
        }
    });
    document.getElementByID('References-Phone-R-2').keypress(function(event) {
        if (event.keyCode == 13) {
            event.preventDefault();
        }
    });
    document.getElementByID('References-Fax-R-2').keypress(function(event) {
        if (event.keyCode == 13) {
            event.preventDefault();
        }
    });
    document.getElementByID('References-Acc-R-2').keypress(function(event) {
        if (event.keyCode == 13) {
            event.preventDefault();
        }
    });

    document.getElementByID('References-Name-R-3').keypress(function(event) {
        if (event.keyCode == 13) {
            event.preventDefault();
        }
    });
    document.getElementByID('References-Address-R-3').keypress(function(event) {
        if (event.keyCode == 13) {
            event.preventDefault();
        }
    });
    document.getElementByID('References-City-R-3').keypress(function(event) {
        if (event.keyCode == 13) {
            event.preventDefault();
        }
    });
    document.getElementByID('References-State-R-3').keypress(function(event) {
        if (event.keyCode == 13) {
            event.preventDefault();
        }
    });
    document.getElementByID('References-ZIP-R-3').keypress(function(event) {
        if (event.keyCode == 13) {
            event.preventDefault();
        }
    });
    document.getElementByID('References-Phone-R-3').keypress(function(event) {
        if (event.keyCode == 13) {
            event.preventDefault();
        }
    });
    document.getElementByID('References-Fax-R-3').keypress(function(event) {
        if (event.keyCode == 13) {
            event.preventDefault();
        }
    });
    document.getElementByID('References-Acc-R-3').keypress(function(event) {
        if (event.keyCode == 13) {
            event.preventDefault();
        }
    });

    document.getElementByID('References-Name-R-4').keypress(function(event) {
        if (event.keyCode == 13) {
            event.preventDefault();
        }
    });
    document.getElementByID('References-Address-R-4').keypress(function(event) {
        if (event.keyCode == 13) {
            event.preventDefault();
        }
    });
    document.getElementByID('References-City-R-4').keypress(function(event) {
        if (event.keyCode == 13) {
            event.preventDefault();
        }
    });
    document.getElementByID('References-State-R-4').keypress(function(event) {
        if (event.keyCode == 13) {
            event.preventDefault();
        }
    });
    document.getElementByID('References-ZIP-R-4').keypress(function(event) {
        if (event.keyCode == 13) {
            event.preventDefault();
        }
    });
    document.getElementByID('References-Phone-R-4').keypress(function(event) {
        if (event.keyCode == 13) {
            event.preventDefault();
        }
    });
    document.getElementByID('References-Fax-R-4').keypress(function(event) {
        if (event.keyCode == 13) {
            event.preventDefault();
        }
    });
    document.getElementByID('References-Acc-R-4').keypress(function(event) {
        if (event.keyCode == 13) {
            event.preventDefault();
        }
    });




    document.getElementByID('references-step-back').addEventListener('click', function(e) {
        console.log("ESHPRINT7");
        e.preventDefault(); 
        document.getElementByID('.w-round div:nth-child(4)').trigger('tap');
    });

    document.getElementByID('references-step').addEventListener('click', function(e) {
        console.log("ESHPRINT8");
        e.preventDefault();  
        
        if(document.getElementByID('References-Bank-1-Name').value().length == 0){
            document.getElementByID('bnr1-alert').style.display = 'block';
        }
        else
        {
            document.getElementByID('bnr1-alert').style.display = 'none';
        };
        if(document.getElementByID('References-Bank-1-Address').value().length == 0){
            document.getElementByID('bar1-alert').style.display = 'block';
        }
        else
        {
            document.getElementByID('bar1-alert').style.display = 'none';
        };
        if(document.getElementByID('References-Bank-1-Phone').value().length == 0){
            document.getElementByID('bpr1-alert').style.display = 'block';
        }
        else
        {
            document.getElementByID('bpr1-alert').style.display = 'none';
        };
        if(document.getElementByID('References-Bank-1-Acc').value().length == 0){
            document.getElementByID('baccr1-alert').style.display = 'block';
        }
        else
        {
            document.getElementByID('baccr1-alert').style.display = 'none';
        };

        if(document.getElementByID('References-Bank-2-Name').value().length == 0){
            document.getElementByID('bnr2-alert').style.display = 'block';
        }
        else
        {
            document.getElementByID('bnr2-alert').style.display = 'none';
        };
        if(document.getElementByID('References-Bank-2-Address').value().length == 0){
            document.getElementByID('bar2-alert').style.display = 'block';
        }
        else
        {
            document.getElementByID('bar2-alert').style.display = 'none';
        };
        if(document.getElementByID('References-Bank-2-Phone').value().length == 0){
            document.getElementByID('bpr2-alert').style.display = 'block';
        }
        else
        {
            document.getElementByID('bpr2-alert').style.display = 'none';
        };
        if(document.getElementByID('References-Bank-2-Acc').value().length == 0){
            document.getElementByID('baccr2-alert').style.display = 'block';
        }
        else
        {
            document.getElementByID('baccr2-alert').style.display = 'none';
        };



        if(document.getElementByID('References-Name-R-1').value().length == 0){
            document.getElementByID('pnr1-alert').style.display = 'block';
        }
        else
        {
            document.getElementByID('pnr1-alert').style.display = 'none';
        };
        if(document.getElementByID('References-Address-R-1').value().length == 0){
            document.getElementByID('par1-alert').style.display = 'block';
        }
        else
        {
            document.getElementByID('par1-alert').style.display = 'none';
        };
        if(document.getElementByID('References-City-R-1').value().length == 0){
            document.getElementByID('pcr1-alert').style.display = 'block';
        }
        else
        {
            document.getElementByID('pcr1-alert').style.display = 'none';
        };
        if(document.getElementByID('References-State-R-1').value().length == 0){
            document.getElementByID('psr1-alert').style.display = 'block';
        }
        else
        {
            document.getElementByID('psr1-alert').style.display = 'none';
        };
        if(document.getElementByID('References-ZIP-R-1').value().length == 0){
            document.getElementByID('pzr1-alert').style.display = 'block';
        }
        else
        {
            document.getElementByID('pzr1-alert').style.display = 'none';
        };
        if(document.getElementByID('References-Phone-R-1').value().length == 0){
            document.getElementByID('ppr1-alert').style.display = 'block';
        }
        else
        {
            document.getElementByID('ppr1-alert').style.display = 'none';
        };
        if(document.getElementByID('References-Fax-R-1').value().length == 0){
            document.getElementByID('pfr1-alert').style.display = 'block';
        }
        else
        {
            document.getElementByID('pfr1-alert').style.display = 'none';
        };
        if(document.getElementByID('References-Acc-R-1').value().length == 0){
            document.getElementByID('pacr1-alert').style.display = 'block';
        }
        else
        {
            document.getElementByID('pacr1-alert').style.display = 'none';
        };




        if(document.getElementByID('References-Name-R-2').value().length == 0){
            document.getElementByID('pnr2-alert').style.display = 'block';
        }
        else
        {
            document.getElementByID('pnr2-alert').style.display = 'none';
        };
        if(document.getElementByID('References-Address-R-2').value().length == 0){
            document.getElementByID('par2-alert').style.display = 'block';
        }
        else
        {
            document.getElementByID('par2-alert').style.display = 'none';
        };
        if(document.getElementByID('References-City-R-2').value().length == 0){
            document.getElementByID('pcr2-alert').style.display = 'block';
        }
        else
        {
            document.getElementByID('pcr2-alert').style.display = 'none';
        };
        if(document.getElementByID('References-State-R-2').value().length == 0){
            document.getElementByID('psr2-alert').style.display = 'block';
        }
        else
        {
            document.getElementByID('psr2-alert').style.display = 'none';
        };
        if(document.getElementByID('References-ZIP-R-2').value().length == 0){
            document.getElementByID('pzr2-alert').style.display = 'block';
        }
        else
        {
            document.getElementByID('pzr2-alert').style.display = 'none';
        };
        if(document.getElementByID('References-Phone-R-2').value().length == 0){
            document.getElementByID('ppr2-alert').style.display = 'block';
        }
        else
        {
            document.getElementByID('ppr2-alert').style.display = 'none';
        };
        if(document.getElementByID('References-Fax-R-2').value().length == 0){
            document.getElementByID('pfr2-alert').style.display = 'block';
        }
        else
        {
            document.getElementByID('pfr2-alert').style.display = 'none';
        };
        if(document.getElementByID('References-Acc-R-2').value().length == 0){
            document.getElementByID('pacr2-alert').style.display = 'block';
        }
        else
        {
            document.getElementByID('pacr2-alert').style.display = 'none';
        };


        if(document.getElementByID('References-Name-R-3').value().length == 0){
            document.getElementByID('pnr3-alert').style.display = 'block';
        }
        else
        {
            document.getElementByID('pnr3-alert').style.display = 'none';
        };
        if(document.getElementByID('References-Address-R-3').value().length == 0){
            document.getElementByID('par3-alert').style.display = 'block';
        }
        else
        {
            document.getElementByID('par3-alert').style.display = 'none';
        };
        if(document.getElementByID('References-City-R-3').value().length == 0){
            document.getElementByID('pcr3-alert').style.display = 'block';
        }
        else
        {
            document.getElementByID('pcr3-alert').style.display = 'none';
        };
        if(document.getElementByID('References-State-R-3').value().length == 0){
            document.getElementByID('psr3-alert').style.display = 'block';
        }
        else
        {
            document.getElementByID('psr3-alert').style.display = 'none';
        };
        if(document.getElementByID('References-ZIP-R-3').value().length == 0){
            document.getElementByID('pzr3-alert').style.display = 'block';
        }
        else
        {
            document.getElementByID('pzr3-alert').style.display = 'none';
        };
        if(document.getElementByID('References-Phone-R-3').value().length == 0){
            document.getElementByID('ppr3-alert').style.display = 'block';
        }
        else
        {
            document.getElementByID('ppr3-alert').style.display = 'none';
        };
        if(document.getElementByID('References-Fax-R-3').value().length == 0){
            document.getElementByID('pfr3-alert').style.display = 'block';
        }
        else
        {
            document.getElementByID('pfr3-alert').style.display = 'none';
        };
        if(document.getElementByID('References-Acc-R-3').value().length == 0){
            document.getElementByID('pacr3-alert').style.display = 'block';
        }
        else
        {
            document.getElementByID('pacr3-alert').style.display = 'none';
        };


        if(document.getElementByID('References-Name-R-4').value().length == 0){
            document.getElementByID('pnr4-alert').style.display = 'block';
        }
        else
        {
            document.getElementByID('pnr4-alert').style.display = 'none';
        };
        if(document.getElementByID('References-Address-R-4').value().length == 0){
            document.getElementByID('par4-alert').style.display = 'block';
        }
        else
        {
            document.getElementByID('par4-alert').style.display = 'none';
        };
        if(document.getElementByID('References-City-R-4').value().length == 0){
            document.getElementByID('pcr4-alert').style.display = 'block';
        }
        else
        {
            document.getElementByID('pcr4-alert').style.display = 'none';
        };
        if(document.getElementByID('References-State-R-4').value().length == 0){
            document.getElementByID('psr4-alert').style.display = 'block';
        }
        else
        {
            document.getElementByID('psr4-alert').style.display = 'none';
        };
        if(document.getElementByID('References-ZIP-R-4').value().length == 0){
            document.getElementByID('pzr4-alert').style.display = 'block';
        }
        else
        {
            document.getElementByID('pzr4-alert').style.display = 'none';
        };
        if(document.getElementByID('References-Phone-R-4').value().length == 0){
            document.getElementByID('ppr4-alert').style.display = 'block';
        }
        else
        {
            document.getElementByID('ppr4-alert').style.display = 'none';
        };
        if(document.getElementByID('References-Fax-R-4').value().length == 0){
            document.getElementByID('pfr4-alert').style.display = 'block';
        }
        else
        {
            document.getElementByID('pfr4-alert').style.display = 'none';
        };
        if(document.getElementByID('References-Acc-R-4').value().length == 0){
            document.getElementByID('pacr4-alert').style.display = 'block';
        }
        else
        {
            document.getElementByID('pacr4-alert').style.display = 'none';
        };

        var refb1 = false;            
        var refb2 = false; 
        var refp1 = false;             
        var refp2 = false; 
        var refp3 = false;             
        var refp4 = false; 

        if(document.getElementByID('References-Bank-1-Name').value().length > 0 &&
            document.getElementByID('References-Bank-1-Address').value().length == 0 &&
            document.getElementByID('References-Bank-1-Phone').value().length == 0 &&
            document.getElementByID('References-Bank-1-Acc').value().length == 0){
            refb1 = true;
        }
        else
        {
            refb1 = false; 
        };

        if(document.getElementByID('References-Bank-2-Name').value().length > 0 &&
        document.getElementByID('References-Bank-2-Address').value().length == 0 &&
        document.getElementByID('References-Bank-2-Phone').value().length == 0 &&
        document.getElementByID('References-Bank-2-Acc').value().length == 0){
            refb2 = true;
        }
        else
        {
            refb2 = false; 
        };

        if(document.getElementByID('References-Name-R-1').value().length > 0 &&
        document.getElementByID('References-Address-R-1').value().length == 0 &&
        document.getElementByID('References-City-R-1').value().length == 0 &&
        document.getElementByID('References-State-R-1').value().length == 0 &&
        document.getElementByID('References-ZIP-R-1').value().length == 0 &&
        document.getElementByID('References-Phone-R-1').value().length == 0 &&
        document.getElementByID('References-Fax-R-1').value().length == 0 &&
        document.getElementByID('References-Acc-R-1').value().length == 0){
            refp1 = true;
        }
        else
        {
            refp1 = false; 
        };

        if(document.getElementByID('References-Name-R-2').value().length > 0 &&
        document.getElementByID('References-Address-R-2').value().length == 0 &&
        document.getElementByID('References-City-R-2').value().length == 0 &&
        document.getElementByID('References-State-R-2').value().length == 0 &&
        document.getElementByID('References-ZIP-R-2').value().length == 0 &&
        document.getElementByID('References-Phone-R-2').value().length == 0 &&
        document.getElementByID('References-Fax-R-2').value().length == 0 &&
        document.getElementByID('References-Acc-R-2').value().length == 0){
            refp2 = true;
        }
        else
        {
            refp2 = false; 
        };

        if(document.getElementByID('References-Name-R-3').value().length > 0 &&
        document.getElementByID('References-Address-R-3').value().length == 0 &&
        document.getElementByID('References-City-R-3').value().length == 0 &&
        document.getElementByID('References-State-R-3').value().length == 0 &&
        document.getElementByID('References-ZIP-R-3').value().length == 0 &&
        document.getElementByID('References-Phone-R-3').value().length == 0 &&
        document.getElementByID('References-Fax-R-3').value().length == 0 &&
        document.getElementByID('References-Acc-R-3').value().length == 0){
            refp3 = true;
        }
        else
        {
            refp3 = false; 
        };

        if(document.getElementByID('References-Name-R-4').value().length > 0 &&
        document.getElementByID('References-Address-R-4').value().length == 0 &&
        document.getElementByID('References-City-R-4').value().length == 0 &&
        document.getElementByID('References-State-R-4').value().length == 0 &&
        document.getElementByID('References-ZIP-R-4').value().length == 0 &&
        document.getElementByID('References-Phone-R-4').value().length == 0 &&
        document.getElementByID('References-Fax-R-4').value().length == 0 &&
        document.getElementByID('References-Acc-R-4').value().length == 0){
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
            document.getElementByID('.w-round div:nth-child(6)').trigger('tap');
        }
        else
        {
            log(refb1,refb2,refp1,refp2,refp3,refp4)
        };   
    });




    /******Step 6 // - Compliance Slider // MUST TEST *******************/

    document.getElementByID('compliance-checkbox1').keypress(function(event) {
        if (event.keyCode == 13) {
            event.preventDefault();
        }
        
    });
    document.getElementByID('compliance-checkbox2').keypress(function(event) {
        if (event.keyCode == 13) {
            event.preventDefault();
        }
    });
    document.getElementByID('compliance-checkbox3').keypress(function(event) {
        if (event.keyCode == 13) {
            event.preventDefault();
        }
    });

    document.getElementByID('submit-step-back').addEventListener('click', function(e) {
        console.log("ESHPRINT9");
        e.preventDefault(); 
        document.getElementByID('.w-round div:nth-child(4)').trigger('tap');
    });


    document.getElementByID('submit-step').addEventListener('click', function(e) {
        console.log("ESHPRINT10");
        e.preventDefault();   
        
        if(document.getElementByID('compliance-checkbox1') == false){
            document.getElementByID('compliance-alert1').style.display = 'block';
        }
        else
        {
        document.getElementByID('compliance-alert1').style.display = 'none';
        };

        if(document.getElementByID('compliance-checkbox2') == false){
            document.getElementByID('compliance-alert2').style.display = 'block';
        }
        else
        {
        document.getElementByID('compliance-alert2').style.display = 'none';
        };

        if(document.getElementByID('compliance-checkbox3') == false){
            document.getElementByID('compliance-alert3').style.display = 'block';
        } 
        else
        {
            document.getElementByID('compliance-alert3').style.display = 'none';
        };  


        if(document.getElementByID('compliance-checkbox1') == true &&
            document.getElementByID('compliance-checkbox2') == true &&
            document.getElementByID('compliance-checkbox3') == true){ 

            console.log("conditions met");

            document.getElementByID('submit-step').trigger('tap');

            console.log("real end of code");   

        }           
    });

});
