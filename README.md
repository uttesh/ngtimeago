# ng-timeago
[![Gitter](https://badges.gitter.im/Join Chat.svg)](https://gitter.im/uttesh/ngtimeago?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

Is an AngularJS module for simple time ago on static data. No directives here, just a filters.

Mostly based on various snippets which I found on JSFiddle, with some changes by me.

## Quick start

```
bower install ng-timeago
```
new version
```
bower install ng-timeago0.0.2
```

or alternatively download and include `ngtimeago.js` after `angular.min.js`.

Add the `ngtimeago` module as a dependency when creating your app, e.g.

```
var app = angular.module('myApp', ['ngtimeago']);`
```

NO NEED TO INJECT in controller directly use in html.

## Rendering


```
                                <p>
                                    
                                    <small>

                                        posted {{createdOn|timeago}} by uttesh


                                    </small>
                                </p>
```


## Contributions

For problems/suggestions please create an issue on Github.

## Contributors

* [@uttesh](https://twitter.com/uttesh)

## Credits

* Other uknown JSFiddles
