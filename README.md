# ng-timeago

Is an AngularJS module for simple time ago on static data. No directives here, just a filters.

Mostly based on various snippets which I found on JSFiddle, with some changes by me.

## Quick start

```
bower install ng-timeago
```
or alternatively download and include `ngtimeago.js` after `angular.min.js`.

Add the `ngtimeago` module as a dependency when creating your app, e.g.

```
var app = angular.module('myApp', ['ngtimeago']);`
```

NO NEED TO INJECT in controller directly use in html.

## Rendering

There is a custom filter called `startFrom` to help you rendering items per page.

```
                                <p>
                                    
                                    <small>

                                        posted {{createdOn|timeago}} by uttesh


                                    </small>
                                </p>
```

The code above will also set the class "active" on the span for the current page number. Note that the first page is actually __0__ hence the {{n + 1}}.

## Contributions

For problems/suggestions please create an issue on Github.

## Contributors

* [@uttesh](https://twitter.com/uttesh)

## Credits

* AngularJS time: [http://jsfiddle.net/i_woody/cnL5T/)
* Other uknown JSFiddles
