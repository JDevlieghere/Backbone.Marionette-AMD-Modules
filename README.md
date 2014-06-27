Marionette-AMD-Modules
======================

[Backbone.Marionette](http://marionettejs.com/) Example with AMD Modules ([RequireJS](http://requirejs.org/))

## Modules
The modules `one` and `two` are located in the `module` directory. They each contain an app, router, controller and view. For brevity, the example does not include models or collections. The modules as well as the main router are loaded in `app.js`.

As an example, each module specifies a custom route while the index route is provided by the `AppRouter`.
```
/
/one
/two
```

## Directory & File Structure

```
|   .bowerrc
|   .gitignore
|   bower.json
|   LICENSE
|   output.txt
|   README.md
+---app
|   |   app.js
|   |   index.html
|   |   main.js
|   |   templates.js
|   +---common
|   |   |   AppController.js
|   |   |   AppRouter.js
|   |   |
|   |   \---views
|   |           Footer.js
|   |           Header.js
|   |           Index.js
|   +---lib
|   |       tpl.js
|   +---modules
|   |   +---one
|   |   |       OneApp.js
|   |   |       OneController.js
|   |   |       OneRouter.js
|   |   |       OneView.js
|   |   |
|   |   \---two
|   |           TwoApp.js
|   |           TwoController.js
|   |           TwoRouter.js
|   |           TwoView.js
|   +---styles
|   |       main.css
|   |
|   \---templates
|           footer.tmpl
|           header.tmpl
|           index.tmpl
|           one.tmpl
|           two.tmpl
```

## License

MIT License (see [LICENSE](https://github.com/JDevlieghere/Backbone.Marionette-AMD-Modules/blob/master/LICENSE))