const htmlContainer = 
CodeMirror(document.querySelector('.editor .code .html'), {
  lineNumbers: true,
  mode: 'xml',
  value: '<h1>Hello</h1> <p>This is a paragraph</p> <button>Click me</button>',
});
const cssContainer = 
CodeMirror(document.querySelector('.editor .code .css'), {
  lineNumbers: true,
  mode: 'css',
  value: 'body{color:#000;}',
});
const jsContainer =
CodeMirror(document.querySelector('.editor .code .js'), {
  lineNumbers: true,
  mode: 'javascript',
  value: '//JavaScript is Fun',
});
document.querySelector("#run-btn").addEventListener("click", function(){
  let html = htmlContainer.getValue();
	var css = "<style>" + cssContainer.getValue() + "</style>";
	var js = "<scri"+"pt>" + jsContainer.getValue() + "</scri" + "pt>";
	let previewwindow = document.querySelector("#preview-window").contentWindow.document;
  previewwindow.open();
  previewwindow.write(html+css+js);
  previewwindow.close();
});
window.onbeforeunload = function(){
  window.alert("Save your work before exiting!");
}