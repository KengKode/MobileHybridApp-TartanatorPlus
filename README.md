MobileHybridApp-TartanatorPlus
==============================

Starter Kit for in-class Training  

## Lab objectives:  
 - **DRY** your code
 - **JSON**ify your data
 - **AJAX** calling
 - **DOM** manipulation  

## Follows these steps:
 
###1. Use offline jQuery components 

- @index.html: Replace jQuery reference in `<head>` with the offline version shown below:     
`<link rel="stylesheet" href="css/jquery.mobile-1.1.0.min.css" />`  
`<script src="js/jquery.js"></script>`  
`<script src="js/jquery.mobile-1.1.0.min.js"></script>`

_**remember that this trio comes together**: never split them out_

###2. DRY your code
 
- @index.html: Combine tartans.html into index.html with `<div data-role="page" id="tartansPage">..</div>` 
- Make `<ul>` inside `<div id="tartansPage">` childless (no `<li>`) and set its attributes as `data-role="listview"` and `id="tartansList"`  
- Revise Tartans links `href="tartans.html"` of all footers to `="#tartansPage"`  

_**check your progress**: nav bar should work and tartans page must contains no tartan_  

###3. JSONify your data

- Create file `tartans.json` and fill in with at least 10 tartan items, each item should have 2 properties (id, name) like this:  
`[`  
` {"id":1, "name":"abercromble"'},`   
` {"id":2, "name":"ar.. },`  
` ..`  
` ..`  
` {"id":10, ... }`  
`]`  
\* pick any tartan name you like from tartans folder  
\* make sure to save it in the root folder  

_**open your JSON in simulator**: if something went wrong, check your web server MIME setting_  

###4. Binding Page Events

- @index.html: Insert `<script>..</script>` before the `</body>` tag
- Inside `<script>`, bind event "pagebeforecreate" to "#homePage" and make "#tagLine" say "Hello Tartanian" when event is activated, like sample code below:  
`$("pageName").bind("eventName", function(e) {`  
`....$("anyElement").html("anyHTML");`  
`})`  

_**check your simulator**: TagLine should be changed_  

- Bind another event "pagebeforeshow" to "#tartansPage":  
- Make event handler work in the following sequence  
\- Get data from "tartans.json" with `$.get("yourJSON", {}, function(res,code) {}, "json")`  
\- In `function(res,code)`, read each response item  and generate it into:  
`<li><a href="displayTartan.html?id={tartanID}">{tartanName}</li>`  
\- Put all generated `<li>` into "tartansList" by using jQuery selector like this `$("#yourList")`    
- Tips:  
\* String Concatenation might be useful when you generate `<li>`    
\* `{tartanID}` and `{tartanName}` come from each response item    
\* Do not forget to refresh your listview with `.listview("refresh")`  

_**check your progress**: you should see your tartans in Tartans page, )<eep )<oding!_ 







