/*
Copyright 2012 Adobe Systems, Incorporated
This work is licensed under a Creative Commons Attribution-Noncommercial-Share Alike 3.0 Unported License http://creativecommons.org/licenses/by-nc-sa/3.0/ .
Permissions beyond the scope of this license, pertaining to the examples of code included within this work are available at Adobe http://www.adobe.com/communities/guidelines/ccplus/commercialcode_plus_permission.html .
*/
!function(){  
    
    function CSSExclusions(){}
    
    // basic feature detection 
    CSSExclusions.prototype.isSupported = (function(prop){

        var el = document.createElement("div"),
            style = el.style;

        if (!el){
            return false
        }

        // intentional bias towards -webkit because the prototype uses 
        // code under prefixed notation that is still being debated in the W3C
        style.setProperty("-webkit-shape-inside", "rectangle(0, 0, 100%, 100%)");
        return (style.getPropertyValue("-webkit-shape-inside") != null);
    })()    

    var CSSExclusions = new CSSExclusions()

    var checkSupport = function(){
        if (CSSExclusions.isSupported){
            return 
        }
        else{
            var target = document.querySelector('article section') 

            if (target){
                target.innerHTML = createWarning()
            }
        }
    }

    var createWarning = function(){
        var h = [],
            p = function(){ h.push.apply(h, arguments) }
            
        p('<p class="unsupported error">')
            p('<strong>Warning:</strong> You need to use the Chrome Canary browser with experimental WebKit features enabled to see this example working correctly. See <a href="../index.html#browser-support">here</a> for more info.')
        p('</p>')

        return h.join('')
    }

    document.addEventListener("DOMContentLoaded", checkSupport)
}()