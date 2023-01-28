<script>
  
    $(document).ready(function() {
        $(":input, a").attr("tabindex", "-1");
        
        /******Step 1 *******************/
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
        $('#personal-tradeshow').keypress(function(event) {
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

            var index1 = document.forms[0].elements["personal-tradeshows"].selectedIndex 

            if(index1 == 0)
            {
                $('#tradeshow-personal-alert').show(500);
            
            } else
            {
                $('#tradeshow-personal-alert').hide();
            };

            console.log("end of code")

            if($('#personal-name').val().length !=0 && 
                $('#personal-email').val().length !=0 && 
                $('#personal-phone').val().length !=0 && 
                isNaN(fnumber) == false &&
                index1 != 0)
                {
                /*$('#name-personal-alert').hide();
                $('#email-personal-alert').hide();
                $('#phone-personal-alert').hide();
                $('#phone-personal-alert2').hide();
                $('#tradeshow-personal-alert').hide();*/
                console.log("conditions met")
                $('.w-round div:nth-child(2)').trigger('tap');
                }
            console.log("real end of code")
   
        });   
        





        
        /******Step 2 *******************/
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
        });

        /******Step 3 *******************/

        $('#store-step-back').click(function(e) {
            console.log("ESHPRINT4");
            e.preventDefault(); 
            $('.w-round div:nth-child(2)').trigger('tap');
        });

        $('#credit-step').click(function(e) {
            console.log("ESHPRINT5");
            e.preventDefault();

            $('.w-round div:nth-child(4)').trigger('tap');
        }   


        /******Step 4 *******************/
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
        $('#credit-storedataflag').keypress(function(event) {
            if (event.keyCode == 13) {
                event.preventDefault();
            }
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

        $('#credit-step-back').click(function(e) {
            console.log("ESHPRINT6");
            e.preventDefault(); 
            $('.w-round div:nth-child(3)').trigger('tap');
        });



        $('#credit-step').click(function(e) {
            console.log("ESHPRINT7");
            e.preventDefault();             

            var fnumber3 = document.forms[0].elements["credit-number"].value;
            console.log(fnumber3)
            var fnumber4 = document.forms[0].elements["credit-security"].value;
            console.log(fnumber4)

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



            if($('#credit-storename').val().length == 0){
                $('#storename-credit-alert').show(500);
            }
            else
            {
            $('#storename-credit-alert').hide();
            };
            if($('#credit-address').val().length == 0){
                $('#address-credit-alert').show(500);
            }
            else
            {
            $('#address-credit-alert').hide();
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

            if($('#credit-name').val().length !=0 && 
            isNaN(fnumber3) == false &&
            index2 != 0 &&
            index3 != 0 &&
            index4 != 0 && 
            isNaN(fnumber4) == false &&
            $('#credit-storename').val().length !=0 &&
            $('#credit-address').val().length !=0 &&
            $('#credit-city').val().length !=0 &&
            $('#credit-stateprovince').val().length !=0 &&
            $('#credit-zippostal').val().length !=0)
            {
            console.log("conditions met")
            $('.w-round div:nth-child(5)').trigger('tap');
            }   
        });



    });
</script>
