define(['exports', 'aurelia-dependency-injection', './baseConfig'], function (exports, _aureliaDependencyInjection, _baseConfig) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var Storage = (function () {
    function Storage(config) {
      _classCallCheck(this, _Storage);

      this.config = config.current;
    }

    _createClass(Storage, [{
      key: 'get',
      value: function get(key) {
        switch (this.config.storage) {
          case 'localStorage':
            if ('localStorage' in window && window.localStorage !== null) {
              return localStorage.getItem(key);
            } else {
              console.warn('Warning: Local Storage is disabled or unavailable');
              return undefined;
            }
            break;

          case 'sessionStorage':
            if ('sessionStorage' in window && window.sessionStorage !== null) {
              return sessionStorage.getItem(key);
            } else {
              console.warn('Warning: Session Storage is disabled or unavailable.  will not work correctly.');
              return undefined;
            }
            break;
          default:
            throw new Error('Unexpected storage type requested.');
        }
      }
    }, {
      key: 'set',
      value: function set(key, value) {
        switch (this.config.storage) {
          case 'localStorage':
            if ('localStorage' in window && window.localStorage !== null) {
              return localStorage.setItem(key, value);
            } else {
              console.warn('Warning: Local Storage is disabled or unavailable.  will not work correctly.');
              return undefined;
            }
            break;

          case 'sessionStorage':
            if ('sessionStorage' in window && window.sessionStorage !== null) {
              return sessionStorage.setItem(key, value);
            } else {
              console.warn('Warning: Session Storage is disabled or unavailable.  will not work correctly.');
              return undefined;
            }
            break;

          default:
            throw new Error('Unexpected storage type requested.');
        }
      }
    }, {
      key: 'remove',
      value: function remove(key) {
        switch (this.config.storage) {
          case 'localStorage':
            if ('localStorage' in window && window.localStorage !== null) {
              return localStorage.removeItem(key);
            } else {
              console.warn('Warning: Local Storage is disabled or unavailable.  will not work correctly.');
              return undefined;
            }
            break;

          case 'sessionStorage':
            if ('sessionStorage' in window && window.sessionStorage !== null) {
              return sessionStorage.removeItem(key);
            } else {
              console.warn('Warning: Session Storage is disabled or unavailable.  will not work correctly.');
              return undefined;
            }
            break;

          default:
            throw new Error('Unexpected storage type requested.');
        }
      }
    }]);

    var _Storage = Storage;
    Storage = (0, _aureliaDependencyInjection.inject)(_baseConfig.BaseConfig)(Storage) || Storage;
    return Storage;
  })();

  exports.Storage = Storage;
});