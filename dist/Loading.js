//
//  Generated by https://www.npmjs.com/package/amd-bundle
//
(function(factory) {
    if (typeof define === "function" && define.amd)
        define("Loading", ["web-cell"], factory);
    else if (typeof module === "object")
        return (module.exports = factory(require("web-cell")));
    else return (this["Loading"] = factory(this["web-cell"]));
})(function(web_cell) {
    function merge(base, path) {
        return (base + "/" + path)
            .replace(/\/\//g, "/")
            .replace(/[^/.]+\/\.\.\//g, "")
            .replace(/\.\//g, function(match, index, input) {
                return input[index - 1] === "." ? match : "";
            });
    }

    function outPackage(name) {
        return /^[^./]/.test(name);
    }

    if (typeof require !== "function")
        require = function(name) {
            if (self[name] != null) return self[name];

            throw ReferenceError("Can't find \"" + name + '" module');
        };

    var _include_ = include.bind(null, "./");

    function include(base, path) {
        path = outPackage(path) ? path : "./" + merge(base, path);

        var module = _module_[path],
            exports;

        if (!module) return require(path);

        if (!module.exports) {
            module.exports = {};

            var dependency = module.dependency;

            for (var i = 0; dependency[i]; i++)
                module.dependency[i] = _include_(dependency[i]);

            exports = module.factory.apply(
                null,
                module.dependency.concat(
                    include.bind(null, module.base),
                    module.exports,
                    module
                )
            );

            if (exports != null) module.exports = exports;

            delete module.dependency;
            delete module.factory;
        }

        return module.exports;
    }

    function _typeof(obj) {
        if (
            typeof Symbol === "function" &&
            typeof Symbol.iterator === "symbol"
        ) {
            _typeof = function _typeof(obj) {
                return typeof obj;
            };
        } else {
            _typeof = function _typeof(obj) {
                return obj &&
                    typeof Symbol === "function" &&
                    obj.constructor === Symbol &&
                    obj !== Symbol.prototype
                    ? "symbol"
                    : typeof obj;
            };
        }
        return _typeof(obj);
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    function _possibleConstructorReturn(self, call) {
        if (
            call &&
            (_typeof(call) === "object" || typeof call === "function")
        ) {
            return call;
        }
        return _assertThisInitialized(self);
    }

    function _getPrototypeOf(o) {
        _getPrototypeOf = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function _getPrototypeOf(o) {
                  return o.__proto__ || Object.getPrototypeOf(o);
              };
        return _getPrototypeOf(o);
    }

    function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError(
                "Super expression must either be null or a function"
            );
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: { value: subClass, writable: true, configurable: true }
        });
        if (superClass) _setPrototypeOf(subClass, superClass);
    }

    function _setPrototypeOf(o, p) {
        _setPrototypeOf =
            Object.setPrototypeOf ||
            function _setPrototypeOf(o, p) {
                o.__proto__ = p;
                return o;
            };
        return _setPrototypeOf(o, p);
    }

    function _assertThisInitialized(self) {
        if (self === void 0) {
            throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
            );
        }
        return self;
    }

    function _decorate(decorators, factory, superClass) {
        var r = factory(function initialize(O) {
            _initializeInstanceElements(O, decorated.elements);
        }, superClass);
        var decorated = _decorateClass(
            _coalesceClassElements(r.d.map(_createElementDescriptor)),
            decorators
        );
        _initializeClassElements(r.F, decorated.elements);
        return _runClassFinishers(r.F, decorated.finishers);
    }

    function _createElementDescriptor(def) {
        var descriptor;
        if (def.kind === "method") {
            descriptor = {
                value: def.value,
                writable: true,
                configurable: true,
                enumerable: false
            };
        } else if (def.kind === "get") {
            descriptor = {
                get: def.value,
                configurable: true,
                enumerable: false
            };
        } else if (def.kind === "set") {
            descriptor = {
                set: def.value,
                configurable: true,
                enumerable: false
            };
        } else if (def.kind === "field") {
            descriptor = {
                configurable: true,
                writable: true,
                enumerable: true
            };
        }
        var element = {
            kind: def.kind === "field" ? "field" : "method",
            key: def.key,
            placement: def.static
                ? "static"
                : def.kind === "field"
                    ? "own"
                    : "prototype",
            descriptor: descriptor
        };
        if (def.decorators) element.decorators = def.decorators;
        if (def.kind === "field") element.initializer = def.value;
        return element;
    }

    function _coalesceGetterSetter(element, other) {
        if (element.descriptor.get !== undefined) {
            other.descriptor.get = element.descriptor.get;
        } else {
            other.descriptor.set = element.descriptor.set;
        }
    }

    function _coalesceClassElements(elements) {
        var newElements = [];
        var isSameElement = function isSameElement(other) {
            return (
                other.kind === "method" &&
                other.key === element.key &&
                other.placement === element.placement
            );
        };
        for (var i = 0; i < elements.length; i++) {
            var element = elements[i];
            var other;
            if (
                element.kind === "method" &&
                (other = newElements.find(isSameElement))
            ) {
                if (
                    _isDataDescriptor(element.descriptor) ||
                    _isDataDescriptor(other.descriptor)
                ) {
                    if (_hasDecorators(element) || _hasDecorators(other)) {
                        throw new ReferenceError(
                            "Duplicated methods (" +
                                element.key +
                                ") can't be decorated."
                        );
                    }
                    other.descriptor = element.descriptor;
                } else {
                    if (_hasDecorators(element)) {
                        if (_hasDecorators(other)) {
                            throw new ReferenceError(
                                "Decorators can't be placed on different accessors with for " +
                                    "the same property (" +
                                    element.key +
                                    ")."
                            );
                        }
                        other.decorators = element.decorators;
                    }
                    _coalesceGetterSetter(element, other);
                }
            } else {
                newElements.push(element);
            }
        }
        return newElements;
    }

    function _hasDecorators(element) {
        return element.decorators && element.decorators.length;
    }

    function _isDataDescriptor(desc) {
        return (
            desc !== undefined &&
            !(desc.value === undefined && desc.writable === undefined)
        );
    }

    function _initializeClassElements(F, elements) {
        var proto = F.prototype;
        ["method", "field"].forEach(function(kind) {
            elements.forEach(function(element) {
                var placement = element.placement;
                if (
                    element.kind === kind &&
                    (placement === "static" || placement === "prototype")
                ) {
                    var receiver = placement === "static" ? F : proto;
                    _defineClassElement(receiver, element);
                }
            });
        });
    }

    function _initializeInstanceElements(O, elements) {
        ["method", "field"].forEach(function(kind) {
            elements.forEach(function(element) {
                if (element.kind === kind && element.placement === "own") {
                    _defineClassElement(O, element);
                }
            });
        });
    }

    function _defineClassElement(receiver, element) {
        var descriptor = element.descriptor;
        if (element.kind === "field") {
            var initializer = element.initializer;
            descriptor = {
                enumerable: descriptor.enumerable,
                writable: descriptor.writable,
                configurable: descriptor.configurable,
                value:
                    initializer === void 0 ? void 0 : initializer.call(receiver)
            };
        }
        Object.defineProperty(receiver, element.key, descriptor);
    }

    function _decorateClass(elements, decorators) {
        var newElements = [];
        var finishers = [];
        var placements = { static: [], prototype: [], own: [] };
        elements.forEach(function(element) {
            _addElementPlacement(element, placements);
        });
        elements.forEach(function(element) {
            if (!_hasDecorators(element)) return newElements.push(element);
            var elementFinishersExtras = _decorateElement(element, placements);
            newElements.push(elementFinishersExtras.element);
            newElements.push.apply(newElements, elementFinishersExtras.extras);
            finishers.push.apply(finishers, elementFinishersExtras.finishers);
        });
        if (!decorators) {
            return { elements: newElements, finishers: finishers };
        }
        var result = _decorateConstructor(newElements, decorators);
        finishers.push.apply(finishers, result.finishers);
        result.finishers = finishers;
        return result;
    }

    function _addElementPlacement(element, placements, silent) {
        var keys = placements[element.placement];
        if (!silent && keys.indexOf(element.key) !== -1) {
            throw new TypeError("Duplicated element (" + element.key + ")");
        }
        keys.push(element.key);
    }

    function _decorateElement(element, placements) {
        var extras = [];
        var finishers = [];
        for (
            var decorators = element.decorators, i = decorators.length - 1;
            i >= 0;
            i--
        ) {
            var keys = placements[element.placement];
            keys.splice(keys.indexOf(element.key), 1);
            var elementObject = _fromElementDescriptor(element);
            var elementFinisherExtras = _toElementFinisherExtras(
                (0, decorators[i])(elementObject) || elementObject
            );
            element = elementFinisherExtras.element;
            _addElementPlacement(element, placements);
            if (elementFinisherExtras.finisher) {
                finishers.push(elementFinisherExtras.finisher);
            }
            var newExtras = elementFinisherExtras.extras;
            if (newExtras) {
                for (var j = 0; j < newExtras.length; j++) {
                    _addElementPlacement(newExtras[j], placements);
                }
                extras.push.apply(extras, newExtras);
            }
        }
        return { element: element, finishers: finishers, extras: extras };
    }

    function _decorateConstructor(elements, decorators) {
        var finishers = [];
        for (var i = decorators.length - 1; i >= 0; i--) {
            var obj = _fromClassDescriptor(elements);
            var elementsAndFinisher = _toClassDescriptor(
                (0, decorators[i])(obj) || obj
            );
            if (elementsAndFinisher.finisher !== undefined) {
                finishers.push(elementsAndFinisher.finisher);
            }
            if (elementsAndFinisher.elements !== undefined) {
                elements = elementsAndFinisher.elements;
                for (var j = 0; j < elements.length - 1; j++) {
                    for (var k = j + 1; k < elements.length; k++) {
                        if (
                            elements[j].key === elements[k].key &&
                            elements[j].placement === elements[k].placement
                        ) {
                            throw new TypeError(
                                "Duplicated element (" + elements[j].key + ")"
                            );
                        }
                    }
                }
            }
        }
        return { elements: elements, finishers: finishers };
    }

    function _fromElementDescriptor(element) {
        var obj = {
            kind: element.kind,
            key: element.key,
            placement: element.placement,
            descriptor: element.descriptor
        };
        var desc = { value: "Descriptor", configurable: true };
        Object.defineProperty(obj, Symbol.toStringTag, desc);
        if (element.kind === "field") obj.initializer = element.initializer;
        return obj;
    }

    function _toElementDescriptors(elementObjects) {
        if (elementObjects === undefined) return;
        return _toArray(elementObjects).map(function(elementObject) {
            var element = _toElementDescriptor(elementObject);
            _disallowProperty(
                elementObject,
                "finisher",
                "An element descriptor"
            );
            _disallowProperty(elementObject, "extras", "An element descriptor");
            return element;
        });
    }

    function _toElementDescriptor(elementObject) {
        var kind = String(elementObject.kind);
        if (kind !== "method" && kind !== "field") {
            throw new TypeError(
                'An element descriptor\'s .kind property must be either "method" or' +
                    ' "field", but a decorator created an element descriptor with' +
                    ' .kind "' +
                    kind +
                    '"'
            );
        }
        var key = elementObject.key;
        if (typeof key !== "string" && _typeof(key) !== "symbol")
            key = String(key);
        var placement = String(elementObject.placement);
        if (
            placement !== "static" &&
            placement !== "prototype" &&
            placement !== "own"
        ) {
            throw new TypeError(
                'An element descriptor\'s .placement property must be one of "static",' +
                    ' "prototype" or "own", but a decorator created an element descriptor' +
                    ' with .placement "' +
                    placement +
                    '"'
            );
        }
        var descriptor = elementObject.descriptor;
        _disallowProperty(elementObject, "elements", "An element descriptor");
        var element = {
            kind: kind,
            key: key,
            placement: placement,
            descriptor: Object.assign({}, descriptor)
        };
        if (kind !== "field") {
            _disallowProperty(
                elementObject,
                "initializer",
                "A method descriptor"
            );
        } else {
            _disallowProperty(
                descriptor,
                "get",
                "The property descriptor of a field descriptor"
            );
            _disallowProperty(
                descriptor,
                "set",
                "The property descriptor of a field descriptor"
            );
            _disallowProperty(
                descriptor,
                "value",
                "The property descriptor of a field descriptor"
            );
            element.initializer = elementObject.initializer;
        }
        return element;
    }

    function _toElementFinisherExtras(elementObject) {
        var element = _toElementDescriptor(elementObject);
        var finisher = _optionalCallableProperty(elementObject, "finisher");
        var extras = _toElementDescriptors(elementObject.extras);
        return { element: element, finisher: finisher, extras: extras };
    }

    function _fromClassDescriptor(elements) {
        var obj = {
            kind: "class",
            elements: elements.map(_fromElementDescriptor)
        };
        var desc = { value: "Descriptor", configurable: true };
        Object.defineProperty(obj, Symbol.toStringTag, desc);
        return obj;
    }

    function _toClassDescriptor(obj) {
        var kind = String(obj.kind);
        if (kind !== "class") {
            throw new TypeError(
                'A class descriptor\'s .kind property must be "class", but a decorator' +
                    ' created a class descriptor with .kind "' +
                    kind +
                    '"'
            );
        }
        _disallowProperty(obj, "key", "A class descriptor");
        _disallowProperty(obj, "placement", "A class descriptor");
        _disallowProperty(obj, "descriptor", "A class descriptor");
        _disallowProperty(obj, "initializer", "A class descriptor");
        _disallowProperty(obj, "extras", "A class descriptor");
        var finisher = _optionalCallableProperty(obj, "finisher");
        var elements = _toElementDescriptors(obj.elements);
        return { elements: elements, finisher: finisher };
    }

    function _disallowProperty(obj, name, objectType) {
        if (obj[name] !== undefined) {
            throw new TypeError(
                objectType + " can't have a ." + name + " property."
            );
        }
    }

    function _optionalCallableProperty(obj, name) {
        var value = obj[name];
        if (value !== undefined && typeof value !== "function") {
            throw new TypeError("Expected '" + name + "' to be a function");
        }
        return value;
    }

    function _runClassFinishers(constructor, finishers) {
        for (var i = 0; i < finishers.length; i++) {
            var newConstructor = (0, finishers[i])(constructor);
            if (newConstructor !== undefined) {
                if (typeof newConstructor !== "function") {
                    throw new TypeError("Finishers must return a constructor.");
                }
                constructor = newConstructor;
            }
        }
        return constructor;
    }

    function _toArray(arr) {
        return (
            _arrayWithHoles(arr) || _iterableToArray(arr) || _nonIterableRest()
        );
    }

    function _nonIterableRest() {
        throw new TypeError(
            "Invalid attempt to destructure non-iterable instance"
        );
    }

    function _iterableToArray(iter) {
        if (
            Symbol.iterator in Object(iter) ||
            Object.prototype.toString.call(iter) === "[object Arguments]"
        )
            return Array.from(iter);
    }

    function _arrayWithHoles(arr) {
        if (Array.isArray(arr)) return arr;
    }

    var _module_ = {
        "./spinner.svg": {
            base: ".",
            dependency: [],
            factory: function factory(require, exports, module) {
                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
                exports.default = void 0;
                var _default =
                    "data:image/svg+xml;base64,PHN2ZyBjbGFzcz0ibGRzLWdvb2V5cmluZyIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaWRZTWlkIj48ZGVmcz4NCiAgICAgPGZpbHRlciBpZD0iZ29vZXkiIHg9Ii0xMDAlIiB5PSItMTAwJSIgd2lkdGg9IjMwMCUiIGhlaWdodD0iMzAwJSIgY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzPSJzUkdCIj4NCiAgICAgICA8ZmVHYXVzc2lhbkJsdXIgaW49IlNvdXJjZUdyYXBoaWMiIHN0ZERldmlhdGlvbj0iMi40MDAwMDAwMDAwMDAwMDA0Ij48L2ZlR2F1c3NpYW5CbHVyPg0KPGZlQ29tcG9uZW50VHJhbnNmZXIgcmVzdWx0PSJjdXRvZmYiPg0KICA8ZmVGdW5jQSB0eXBlPSJsaW5lYXIiIHNsb3BlPSIxMCIgaW50ZXJjZXB0PSItNSI+PC9mZUZ1bmNBPg0KPC9mZUNvbXBvbmVudFRyYW5zZmVyPg0KICAgICA8L2ZpbHRlcj4NCiAgIDwvZGVmcz48ZyBmaWx0ZXI9InVybCgjZ29vZXkpIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1MCA1MCkiPg0KPGcgdHJhbnNmb3JtPSJyb3RhdGUoMjg2LjQwMikiPg0KICA8Y2lyY2xlIGN4PSIxNyIgY3k9IjAiIHI9IjUuNTYyNjEiIGZpbGw9IiMyNDZhZjciPg0KICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9InIiIGtleVRpbWVzPSIwOzAuNTsxIiB2YWx1ZXM9IjMuNTk5OTk5OTk5OTk5OTk5Njs4LjM5OTk5OTk5OTk5OTk5OTszLjU5OTk5OTk5OTk5OTk5OTYiIGR1cj0iNHMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBiZWdpbj0iLTRzIj48L2FuaW1hdGU+DQogIDwvY2lyY2xlPg0KICA8YW5pbWF0ZVRyYW5zZm9ybSBhdHRyaWJ1dGVOYW1lPSJ0cmFuc2Zvcm0iIHR5cGU9InJvdGF0ZSIga2V5VGltZXM9IjA7MSIgdmFsdWVzPSIwOzM2MCIgZHVyPSI0cyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGJlZ2luPSIwcyI+PC9hbmltYXRlVHJhbnNmb3JtPg0KPC9nPg0KPC9nPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDUwIDUwKSI+DQo8ZyB0cmFuc2Zvcm09InJvdGF0ZSgzNTYuODA0KSI+DQogIDxjaXJjbGUgY3g9IjE3IiBjeT0iMCIgcj0iNS40MzQ3OCIgZmlsbD0iI2ZkZTE0OCI+DQogICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0iciIga2V5VGltZXM9IjA7MC41OzEiIHZhbHVlcz0iMy41OTk5OTk5OTk5OTk5OTk2OzguMzk5OTk5OTk5OTk5OTk5OzMuNTk5OTk5OTk5OTk5OTk5NiIgZHVyPSIycyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGJlZ2luPSItMy4ycyI+PC9hbmltYXRlPg0KICA8L2NpcmNsZT4NCiAgPGFuaW1hdGVUcmFuc2Zvcm0gYXR0cmlidXRlTmFtZT0idHJhbnNmb3JtIiB0eXBlPSJyb3RhdGUiIGtleVRpbWVzPSIwOzEiIHZhbHVlcz0iMDszNjAiIGR1cj0iMnMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBiZWdpbj0iLTAuOHMiPjwvYW5pbWF0ZVRyYW5zZm9ybT4NCjwvZz4NCjwvZz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1MCA1MCkiPg0KPGcgdHJhbnNmb3JtPSJyb3RhdGUoMjExLjIwNikiPg0KICA8Y2lyY2xlIGN4PSIxNyIgY3k9IjAiIHI9IjUuMzkyMTciIGZpbGw9IiNmODQ3NTkiPg0KICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9InIiIGtleVRpbWVzPSIwOzAuNTsxIiB2YWx1ZXM9IjMuNTk5OTk5OTk5OTk5OTk5Njs4LjM5OTk5OTk5OTk5OTk5OTszLjU5OTk5OTk5OTk5OTk5OTYiIGR1cj0iMS4zMzMzMzMzMzMzMzMzMzMzcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGJlZ2luPSItMi40cyI+PC9hbmltYXRlPg0KICA8L2NpcmNsZT4NCiAgPGFuaW1hdGVUcmFuc2Zvcm0gYXR0cmlidXRlTmFtZT0idHJhbnNmb3JtIiB0eXBlPSJyb3RhdGUiIGtleVRpbWVzPSIwOzEiIHZhbHVlcz0iMDszNjAiIGR1cj0iMS4zMzMzMzMzMzMzMzMzMzMzcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGJlZ2luPSItMS42cyI+PC9hbmltYXRlVHJhbnNmb3JtPg0KPC9nPg0KPC9nPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDUwIDUwKSI+DQo8ZyB0cmFuc2Zvcm09InJvdGF0ZSgyMDkuNjA5KSI+DQogIDxjaXJjbGUgY3g9IjE3IiBjeT0iMCIgcj0iNS42OTA0NCIgZmlsbD0iIzM3ZGVhNiI+DQogICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0iciIga2V5VGltZXM9IjA7MC41OzEiIHZhbHVlcz0iMy41OTk5OTk5OTk5OTk5OTk2OzguMzk5OTk5OTk5OTk5OTk5OzMuNTk5OTk5OTk5OTk5OTk5NiIgZHVyPSIxcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGJlZ2luPSItMS42cyI+PC9hbmltYXRlPg0KICA8L2NpcmNsZT4NCiAgPGFuaW1hdGVUcmFuc2Zvcm0gYXR0cmlidXRlTmFtZT0idHJhbnNmb3JtIiB0eXBlPSJyb3RhdGUiIGtleVRpbWVzPSIwOzEiIHZhbHVlcz0iMDszNjAiIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBiZWdpbj0iLTIuNHMiPjwvYW5pbWF0ZVRyYW5zZm9ybT4NCjwvZz4NCjwvZz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1MCA1MCkiPg0KPGcgdHJhbnNmb3JtPSJyb3RhdGUoMzUyLjAxMSkiPg0KICA8Y2lyY2xlIGN4PSIxNyIgY3k9IjAiIHI9IjMuODEzMDUiIGZpbGw9IiMzMmM4ZWUiPg0KICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9InIiIGtleVRpbWVzPSIwOzAuNTsxIiB2YWx1ZXM9IjMuNTk5OTk5OTk5OTk5OTk5Njs4LjM5OTk5OTk5OTk5OTk5OTszLjU5OTk5OTk5OTk5OTk5OTYiIGR1cj0iMC44cyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGJlZ2luPSItMC44cyI+PC9hbmltYXRlPg0KICA8L2NpcmNsZT4NCiAgPGFuaW1hdGVUcmFuc2Zvcm0gYXR0cmlidXRlTmFtZT0idHJhbnNmb3JtIiB0eXBlPSJyb3RhdGUiIGtleVRpbWVzPSIwOzEiIHZhbHVlcz0iMDszNjAiIGR1cj0iMC44cyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGJlZ2luPSItMy4ycyI+PC9hbmltYXRlVHJhbnNmb3JtPg0KPC9nPg0KPC9nPjwvZz48L3N2Zz4=";
                exports.default = _default;
            }
        },
        "./index.html": {
            base: ".",
            dependency: [],
            factory: function factory(require, exports, module) {
                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
                exports.default = void 0;
                var _default =
                    "<template>\n    <style>\n        main {\n            position:          fixed;\n            left:              0;\n            top:               0;\n            width:             100%;\n            height:            100%;\n            z-index:           999;\n            background-color:  white;\n            display:           flex;\n            flex-direction:    column;\n            justify-content:   center;\n            align-items:       center;\n            transition:        0.25s;\n        }\n        main.done {\n            width:    0;\n            height:   0;\n            opacity:  0;\n        }\n        main > img {\n            min-width:   150px;\n            max-width:   150px;\n            max-width:   25%;\n            max-height:  25%;\n        }\n    </style>\n\n    <main class=\"${view.count ? '' : 'done'}\">\n        <img src=\"${host.constructor.image}\">\n        Loading...\n    </main>\n</template>\n";
                exports.default = _default;
            }
        },
        "./index": {
            base: ".",
            dependency: [],
            factory: function factory(require, exports, module) {
                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
                exports.default = void 0;

                var _webCell = require("web-cell");

                var _index = _interopRequireDefault(require("./index.html"));

                var _spinner = _interopRequireDefault(require("./spinner.svg"));

                function _interopRequireDefault(obj) {
                    return obj && obj.__esModule
                        ? obj
                        : {
                              default: obj
                          };
                }

                var media = ["img", "iframe", "audio", "video"];

                var CellLoading = _decorate(
                    [
                        (0, _webCell.component)({
                            template: _index.default,
                            data: {
                                count: 0
                            }
                        })
                    ],
                    function(_initialize, _HTMLElement) {
                        var CellLoading =
                            /*#__PURE__*/
                            (function(_HTMLElement2) {
                                _inherits(CellLoading, _HTMLElement2);

                                function CellLoading() {
                                    var _this;

                                    _classCallCheck(this, CellLoading);

                                    _this = _possibleConstructorReturn(
                                        this,
                                        _getPrototypeOf(CellLoading).call(this)
                                    );

                                    _initialize(
                                        _assertThisInitialized(
                                            _assertThisInitialized(_this)
                                        )
                                    );

                                    _this.buildDOM();

                                    var reduce = function reduce() {
                                        return _this.count && _this.count--;
                                    };

                                    new MutationObserver(function(list) {
                                        var _iteratorNormalCompletion = true;
                                        var _didIteratorError = false;
                                        var _iteratorError = undefined;

                                        try {
                                            for (
                                                var _iterator = list[
                                                        Symbol.iterator
                                                    ](),
                                                    _step;
                                                !(_iteratorNormalCompletion = (_step = _iterator.next())
                                                    .done);
                                                _iteratorNormalCompletion = true
                                            ) {
                                                var entry = _step.value;
                                                var _iteratorNormalCompletion2 = true;
                                                var _didIteratorError2 = false;
                                                var _iteratorError2 = undefined;

                                                try {
                                                    for (
                                                        var _iterator2 = entry.addedNodes[
                                                                Symbol.iterator
                                                            ](),
                                                            _step2;
                                                        !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next())
                                                            .done);
                                                        _iteratorNormalCompletion2 = true
                                                    ) {
                                                        var node = _step2.value;

                                                        if (
                                                            media.includes(
                                                                node.nodeName.toLowerCase()
                                                            )
                                                        ) {
                                                            _this.count++;
                                                            node.onload = node.onerror = reduce;
                                                        }
                                                    }
                                                } catch (err) {
                                                    _didIteratorError2 = true;
                                                    _iteratorError2 = err;
                                                } finally {
                                                    try {
                                                        if (
                                                            !_iteratorNormalCompletion2 &&
                                                            _iterator2.return !=
                                                                null
                                                        ) {
                                                            _iterator2.return();
                                                        }
                                                    } finally {
                                                        if (
                                                            _didIteratorError2
                                                        ) {
                                                            throw _iteratorError2;
                                                        }
                                                    }
                                                }
                                            }
                                        } catch (err) {
                                            _didIteratorError = true;
                                            _iteratorError = err;
                                        } finally {
                                            try {
                                                if (
                                                    !_iteratorNormalCompletion &&
                                                    _iterator.return != null
                                                ) {
                                                    _iterator.return();
                                                }
                                            } finally {
                                                if (_didIteratorError) {
                                                    throw _iteratorError;
                                                }
                                            }
                                        }
                                    }).observe(
                                        _assertThisInitialized(
                                            _assertThisInitialized(_this)
                                        ),
                                        {
                                            childList: true
                                        }
                                    );
                                    return _this;
                                }

                                return CellLoading;
                            })(_HTMLElement);

                        return {
                            F: CellLoading,
                            d: [
                                {
                                    kind: "get",
                                    decorators: [_webCell.mapProperty],
                                    static: true,
                                    key: "observedAttributes",
                                    value: function value() {
                                        return ["count"];
                                    }
                                },
                                {
                                    kind: "get",
                                    decorators: [_webCell.blobURI],
                                    static: true,
                                    key: "image",
                                    value: function value() {
                                        return _spinner.default;
                                    }
                                },
                                {
                                    kind: "method",
                                    key: "toggle",
                                    value: function value(open) {
                                        this.count = +(open != null
                                            ? open
                                            : !this.count);
                                    }
                                },
                                {
                                    kind: "method",
                                    static: true,
                                    key: "closeAll",
                                    value: function value() {
                                        var _iteratorNormalCompletion3 = true;
                                        var _didIteratorError3 = false;
                                        var _iteratorError3 = undefined;

                                        try {
                                            for (
                                                var _iterator3 = (0,
                                                    _webCell.$)(this.tagName)[
                                                        Symbol.iterator
                                                    ](),
                                                    _step3;
                                                !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next())
                                                    .done);
                                                _iteratorNormalCompletion3 = true
                                            ) {
                                                var that = _step3.value;
                                                that.toggle(false);
                                            }
                                        } catch (err) {
                                            _didIteratorError3 = true;
                                            _iteratorError3 = err;
                                        } finally {
                                            try {
                                                if (
                                                    !_iteratorNormalCompletion3 &&
                                                    _iterator3.return != null
                                                ) {
                                                    _iterator3.return();
                                                }
                                            } finally {
                                                if (_didIteratorError3) {
                                                    throw _iteratorError3;
                                                }
                                            }
                                        }
                                    }
                                }
                            ]
                        };
                    },
                    HTMLElement
                );

                exports.default = CellLoading;
            }
        },
        "web-cell": {
            exports: web_cell
        }
    };

    return _include_("./index");
});
