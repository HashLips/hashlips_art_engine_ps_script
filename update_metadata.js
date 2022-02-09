// Simple art generator by HashLips <->

#include "./lib/json2.js";

function main () {

    var continueConfirmation = confirm(
        "You are about to update the metadata of your collection. Are you sure you want to continue?"
      );
      
      if(!continueConfirmation) return
      
      var prefix = prompt("What is your new metadata prefix?", "");
      
      var suffix = prompt("What is you new metadata suffix?", "");

      var path = app.activeDocument.path;
      var f = new Folder(path + "/build/metadata");
      
      if (f != null) {
        var fileList = f.getFiles(/\.(json)$/i);
      }
      
      for (var a = 0; a < fileList.length; a++) {
        var file = File(fileList[a]);
        file.open("r");
        var data = JSON.parse(file.read());
        file.close();
        data.image = prefix + data.edition + suffix;
        file.open("w");
        file.write(JSON.stringify(data));
        file.close();
      }

      alert("Updating metadata process is complete.");
      
}

main()
