jquery.messageBox
===============
messageBox system is a simple alert box ot message box displaying into a usable site or application in HTML.

## Installation
In the header of the page set style sheets
```html
<head>
<script src="http://code.jquery.com/jquery.min.js"></script>
<script src="js/jquery.messagebox.js"></script>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css">
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css">
</head>
```
The stylesheet used by the plugin is loaded directly by itself.


## Usage

See the test.html for more examples

```javascript

// This function is called by the plug when the latter is closed
function msgClose(ret){
	console.log("msgClose -> button value %s", ret);
}


$( document ).ready(function() {

  //Instanciation du plugin
	var msg = $("body").messageBox({
	  cbClose : msgClose,
	  modal:true
	});
	
	//show the alertBox
	msg.data('messageBox').warning('MessageBox Warning', 'jquery.messageBox is good for you !');
	
	//show an alertbox with custom buttons
	msg.data('messageBox').exclamation('MessageBox Warning', 'jquery.messageBox is good for you !', [{text:'Yeahhh',return:128}]);
	
	//show an messageBox with a question and multipple responses
	msg.data('messageBox').question('Format C:', 'Are you sure you want to format the C: drive ?', [{text:'Of course',return:128}, {text:'Heuhhh ???',return:127},{text:'Nein danke',return:126}]);
	
});
```

## Options
These options are passed to the plugin beings during initialization

```javascript
autoClose : 10
/**
Global option.
Default = 0
When this value is greater than zero , the message window will be closed automatically after the set time
*/
```

```javascript
showAutoClose : true
/**
Global option.
Default = true
When this value is set to true the countdown is displayed
*/
```

```javascript
modal : true
/**
Global option.
Default = true
When this value is set to true the messageBox is displayed on a darker transparent background
*/
```

```javascript
css : 'css/messageBox.css'
/**
Global option.
Default = 'css/messageBox.css'
Filename and path of the CSS file loaded by the plugin
*/
```

```javascript
cbClose : false
/**
Global option.
Default = false
Callback function called by the plugin when the messageBox is closed
This function will receive the value of the clicked button
Ex : 
function msgClose(ret){
	console.log("msgClose -> retour %s", ret);
}
*/
```

```javascript
cbReady : false
/**
Global option.
Default = false
Callback function called by the plugin when it's ready
Ex : 
function msgBoxReady(){
	console.log("By djingo ! msgBox is ready. incredible isn't.");
}
*/
```

```javascript
locale : {}
/**
Global option.
Default = {
    NO : 'Non',
    YES : 'Oui',
    CANCEL : 'Annuler',
    OK : 'Ok',
    textAutoClose: 'Fermeture automatique dans %d sec'
}

Ex in english :
local = {
    NO : 'No',
    YES : 'Yes',
    CANCEL : 'Cancel',
    OK : 'Ok',
    textAutoClose: 'Automatic closing in %d sec'
}

Ex in spanish :
local = {
    NO : 'No',
    YES : 'Si',
    CANCEL : 'Cancelar',
    OK : 'Ok',
    textAutoClose: 'Cierre automático en %d seg'
}

*/
```

## Functions

* plugin.data('messageBox').danger(title, text, [autoclose], [modal]);
* plugin.data('messageBox').warning(title, text, [autoclose], [modal]);
* plugin.data('messageBox').info(title, text, [autoclose], [modal]);
* plugin.data('messageBox').default(title, text, [autoclose], [modal]);
* plugin.data('messageBox').question(title, text, buttons, [autoclose], [modal]);
* plugin.data('messageBox').exclamation(title, text, buttons, [autoclose], [modal]);

### Params

* `title` : (required) (string) is a string contains the messageBox title
* `test` :  (required) (string) is a string contains the messageBox text
* `autoclose` : (not required) (int) is a integer contains the delay to autoclose the messageBox
* `modal` : (not required) (bool) is a boolean to display the messageBox in modal mode or not
* `buttons` : (required) (array of object) contains the buttons to display in the messageBox
The button must have this form :
{text: 'button text', return: 128} The return value will be passed to the callback function `cbClose ()`




