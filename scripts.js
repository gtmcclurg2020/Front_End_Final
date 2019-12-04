function euroConverter(){
    document.currency.dollar.value = document.currency.euro.value * 1.110
    document.currency.pound.value = document.currency.euro.value * 0.850
    document.currency.yen.value = document.currency.euro.value * 120.3
    document.currency.aud.value = document.currency.euro.value * 1.620
    document.currency.cad.value = document.currency.euro.value * 1.470
    }
function dollarConverter(){
    document.currency.euro.value = document.currency.dollar.value * 0.90
    document.currency.pound.value = document.currency.dollar.value * 0.77
    document.currency.yen.value = document.currency.dollar.value * 108.56
    document.currency.aud.value = document.currency.dollar.value * 1.460 
    document.currency.cad.value = document.currency.dollar.value * 1.33
    }
function poundConverter(){
    document.currency.dollar.value = document.currency.pound.value * 1.3
    document.currency.euro.value = document.currency.pound.value * 1.170
    document.currency.yen.value = document.currency.pound.value * 141.11
    document.currency.aud.value = document.currency.pound.value * 1.900
    document.currency.cad.value = document.currency.pound.value * 1.730
    }
function yenConverter(){
    document.currency.dollar.value = document.currency.yen.value * 0.0092
    document.currency.pound.value = document.currency.yen.value * 0.0071
    document.currency.euro.value = document.currency.yen.value * 0.00830
    document.currency.aud.value = document.currency.yen.value * 0.01344
    document.currency.cad.value = document.currency.yen.value * 0.0120
    }
function audConverter(){
    document.currency.dollar.value = document.currency.aud.value  * 0.680
    document.currency.euro.value = document.currency.aud.value * 0.620
    document.currency.pound.value = document.currency.aud.value * 0.530
    document.currency.yen.value = document.currency.aud.value * 74.40
    document.currency.cad.value = document.currency.aud.value * 0.910
    }
function cadConverter(){
    document.currency.dollar.value = document.currency.cad.value  * 0.75
    document.currency.euro.value = document.currency.cad.value * 0.680
    document.currency.pound.value = document.currency.cad.value * 0.580
    document.currency.yen.value = document.currency.cad.value * 81.61
    document.currency.aud.value = document.currency.cad.value  * 1.10
    }
function clearForm(){
    document.currency.reset()
}