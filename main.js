/*global define, $, brackets, window */
define(function (require, exports, module) {
    "use strict";
  
    var LanguageManager = brackets.getModule("language/LanguageManager"),
        gps = LanguageManager.getLanguage("html"),
        groovy = LanguageManager.getLanguage("groovy");
  
    gps.addFileExtension("gps");
    groovy.setLineCommentSyntax(["//"]);
  
    LanguageManager.defineLanguage("gsp", {
        name: "gsp",
        "mode": ["htmlembedded", "application/x-ejs"],
        fileExtensions: ["gsp"],
        blockComment: ["<!--", "-->"],
        lineComment: ["<!--", "-->"]
    });
});
