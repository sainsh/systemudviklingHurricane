  //const csvImport = require('../public/assets/javascripts/csvImport');
  
  function handleFileSelect(evt) {
    var files = evt.target.files; // FileList object

    // files is a FileList of File objects. List some properties.
    var output = [];
    for (var i = 0, f = files[i];  i<files.length; i++) {
      output.push('<li><strong>', escape(f.name), '</strong> (', f.type || 'n/a', ')')
                  
                csvImport(f);
    }
    document.getElementById('list').innerHTML = '<ul>' + output.join('') + '</ul>';
    console.log(output)
  }

  document.getElementById('files').addEventListener('change', handleFileSelect, false);
