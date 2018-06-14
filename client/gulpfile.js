var gulp = require("gulp");
var rename = require("gulp-rename");
var clean = require("gulp-clean");
var fs = require("fs");
var cheerio = require("cheerio");
var ts = require("typescript");

gulp.task("dist", function() {
  var files = [
    "./public/*",
    "!./public/.htaccess",
    "!./public/index.php",
    "!./public/storage",
    "!./public/favicon.ico",
    "!./public/favicon-32x32.png"
  ];

  //remove old dist files from laravel public folder
  gulp.src(files, { read: false }).pipe(clean({ force: true }));

  //copy dist folder into laravel public folder
  gulp
    .src(["./dist/**/*", "!./dist/index.html", "!./dist/stats.json"])
    .pipe(gulp.dest("./public"));

  var $ = cheerio.load(fs.readFileSync("./dist/index.html", "utf8"));

  //get script tags that need to be injected into main laravel view
  var scripts = $("script")
    .map(function(i, el) {
      return $("<div>").append($(el)).html();
    })
    .toArray();

  //get css tags that need to be injected into main laravel view
  var styles = $("link")
    .filter(function(i, el) {
      return $(el).attr("href").indexOf("bundle.css") > -1;
    })
    .map(function(i, el) {
      return $("<div>").append($(el)).html();
    })
    .toArray();

  //js scripts replace regex
  var jsSearch = /{{--angular scripts begin--}}[\s\S]*{{--angular scripts end--}}/;

  var jsReplaceStr =
    "{{--angular scripts begin--}}" +
    "\n\t\t" +
    scripts.join("\n\t\t") +
    "\n\t\t{{--angular scripts end--}}";

  //css styles replace regex
  var cssSearch = /{{--angular styles begin--}}[\s\S]*{{--angular styles end--}}/;
  var cssReplaceStr =
    "{{--angular styles begin--}}" +
    "\n\t\t" +
    styles.join("\n\t\t") +
    "\n\t\t{{--angular styles end--}}";

  //replace app stylesheet links and js script tags with new ones
  var content = fs.readFileSync(
    "./resources/views/welcome.blade.php",
    "utf8"
  );
  content = content
    .replace(jsSearch, jsReplaceStr)
    .replace(cssSearch, cssReplaceStr);

  fs.writeFileSync(
    "./resources/views/welcome.blade.php",
    content,
    "utf8"
  );
});
