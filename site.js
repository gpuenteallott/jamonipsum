(function (factory) {
  typeof define === 'function' && define.amd ? define(factory) :
  factory();
}((function () { 'use strict';

  /**
   * @returns {Node}
   */
  function getCountInput() {
    return document.getElementById('jamon-count-input');
  }
  /**
   * @returns {string}
   */

  function getTypeInputValue() {
    return document.querySelector('input[name="type"]:checked').value;
  }
  /**
   * @returns {bool}
   */

  function getEmojiValue() {
    return Boolean(document.querySelector('input[name="emoji"]:checked'));
  }
  /**
   * @returns {Node}
   */

  function getBody() {
    return document.getElementsByTagName('BODY')[0];
  }
  /**
   * @returns {Node}
   */

  function getMainLogo() {
    var h1 = document.getElementsByTagName('H1')[0];
    return h1.getElementsByClassName('header-logo')[0];
  }
  /**
   * @param {string} html
   */

  function renderResult(html) {
    var resultNode = document.getElementById('jamon-result');

    if (resultNode) {
      resultNode.innerHTML = html;
    }
  }
  /**
   * @returns {Node}
   */

  function getModalEl() {
    return document.getElementById('info-modal');
  }
  /**
   * @returns {Node}
   */

  function getOpenModalLink() {
    return document.getElementById('info-link');
  }
  /**
   * @returns {Node[]}
   */

  function getAllInputs() {
    return document.getElementsByTagName('INPUT');
  }
  /**
   * @param {Node} el
   * @param {string} classes
   */

  function hasClass(el, classes) {
    return new RegExp("\b".concat(classes, "\b")).test(el.className);
  }
  /**
   * @param {Node} el
   * @param {string} classes
   */

  function removeClass(el, classes) {
    el.className = (el.className || '').replace(classes, '').trim();
  }
  /**
   * @param {Node} el
   * @param {string} classes
   */

  function addClass(el, classes) {
    if (!hasClass(el, classes)) {
      el.className = "".concat(el.className || '', " ").concat(classes);
    }
  }
  /**
   * @param {Node} el
   */

  function rotate(el) {
    var rotateClass = 'is-rotating';

    if (!el || hasClass(el, rotateClass)) {
      return;
    }

    addClass(el, rotateClass);
    setTimeout(function () {
      removeClass(el, rotateClass);
    }, 500);
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys(Object(source), true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }

  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var bodyClass = 'is-showing-modal';
  var modalClass = 'is-visible';

  var _default = /*#__PURE__*/function () {
    /**
     * @param {Node} el
     * @param {Node} body
     */
    function _default(el, body) {
      _classCallCheck(this, _default);

      this.el = el;
      this.body = body;
      this.open = this.open.bind(this);
      this.close = this.close.bind(this);
      this.bind();
    }

    _createClass(_default, [{
      key: "open",
      value: function open() {
        addClass(this.body, bodyClass);
        addClass(this.el, modalClass);
      }
    }, {
      key: "close",
      value: function close() {
        removeClass(this.body, bodyClass);
        removeClass(this.el, modalClass);
      }
    }, {
      key: "bind",
      value: function bind() {
        var closeButtons = this.el.getElementsByClassName('modal-close');

        for (var i = 0; i < closeButtons.length; i++) {
          closeButtons[i].addEventListener('click', this.close);
        }
      }
    }]);

    return _default;
  }();

  var allArticles = ['la', 'el', 'las', 'los', 'mis', 'tus', 'sus', 'tu', 'mi', 'un', 'una', 'a', 'con', 'mucho de'];

  var allConnectors = ['y', 'pero'];

  var allEmojis = ['🍕', '🇪🇸', '🍊', '🍻', '🍳', '🍷', '🎾', '🏁', '🎊', '🐣', '👍', '✌', '🌟', '👀 ', '👅', '💪', '💩', '😎', '😴', '😱', '😘', '😻'];

  var allStops = ['.', ','];

  var allWords = ['jamón', 'estopa', 'tortilla', 'patata', 'dolores', 'calimocho', 'salmorejo', 'canción', 'señor', 'amiga', 'estupendo', 'croquetas', 'hormiguero', 'guitarra', 'Quijote', 'señorita', 'tapas', 'caña', 'copazo', 'reconquista', 'charanga', 'chiringuito', 'playita', 'persiana', 'bocadillo', 'fregona', 'tomatito', 'colacao', 'café con leche', 'turrón', 'pipas', 'tío', 'tía', 'botellón', 'vaya chollazo', 'flipado', 'mola mazo', 'cocido', 'al tuntún', 'fútbol', 'más fútbol', 'quinto pino', 'piripi', 'ligar', 'vale', 'canturreando', 'vagueando', 'haciéndose el loco', 'no pega ojo', 'está pan comido', 'tócate', 'enchufe', 'flamenco', 'Almodóvar', 'Rey', 'jodido', 'fiesta', 'siesta', 'comino', 'lia', 'nuestra comunidad', 'vecinos', 'chulapo', 'escanciando sidra', 'cabra', 'epa', 'corral', 'lacasitos', 'movida', 'bingo', 'chinchón', 'rumbeo', 'año', 'vale', 'guiri', 'resaca', 'hecho polvo', 'vergüenza', 'friolero', 'torraera', 'piltrafilla', 'atún', 'quillo', 'picha', 'kinki', 'friqui', 'pasmarote', 'petardazo', 'caramba', 'paella', 'macho', 'goleador', 'clásico', 'gazpacho', 'mariposita', 'a lo hecho, pecho.', 'ancha es Castilla.', 'gato encerrado', 'sangre fría', 'roña', 'roñica', 'vamos', 'Sancho', 'bonachón', 'gordinflón', 'caballero', 'honor', 'colegas', 'barrio', 'litros', 'talego', 'Barça', 'Real Madrid', 'duro', 'chorizo', 'Costa Brava', 'dominguera', 'aquí no hay tomate', 'Carnaval', 'Fallas', 'horchata', 'pinchito', 'sidra', 'vino rioja', 'manchego', 'morcilla', 'atiborrarse', 'mete una bola', 'orujo', 'fabada', 'asturiana', 'madrileña', 'canario', 'gallego', 'a tope', 'a diestro y siniestro', 'Torrente', 'farruco', 'peluco', 'martes 13', 'litrona', 'tronco', 'por la cara', 'caradura', 'ronda', 'maruja', 'cotilla', 'como motos', 'se cortaron', 'cogió prestado', 'enróllate', 'careto', 'vendió', 'musculitos', 'posturitas', 'soplón', 'camello', 'pacotilla', 'trapicheo', 'tiburón de la noche', 'chulo', 'descafeinado', 'Ibiza', 'paliza', 'chorradas', 'gorilla', 'armando gresca', 'liándola parda', 'bacalao', 'borrachos como cubas', 'Lepe', 'fulano', 'soñar es gratis', 'colarse', 'corriendo', 'cara de malo', 'truhán', 'salta!', 'picardía', 'se lo van a dar', 'lo suyo', 'piñazo', 'llega tarde', 'entra que te entra', 'probando', 'ojos', 'pasan', 'trae', 'sonrisa', 'abanica', 'como Camarón', 'entrañas', 'resacón', 'malla de ballet', 'bailarán', 'collección de', 'brutal', 'genial', 'eso no vale', 'así', 'chiquilla', 'la mala vida', 'oveja negra', 'portería', 'de goleada', 'máxima', 'maneras de vivir', 'de vicio', 'cómplice', 'farra', 'juerga', 'salir de', 'el armario', 'Nadal', 'Alonso', 'cien gaviotas', 'miedo a volar'];

  var initialTokens = ['Jamón', 'ipsum'];
  /**
   *
   * @param {string[]} paragraph
   * @returns {string}
   */

  var joinTokens = function joinTokens(paragraph) {
    return paragraph.reduce(function (memo, token, index) {
      if (index === 0) {
        return "".concat(token);
      }

      if (/^\.|,$/.test(token)) {
        return "".concat(memo).concat(token);
      }

      return "".concat(memo, " ").concat(token);
    }, '');
  };
  /**
   * @param {string} string
   * @returns {int}
   */

  var countWords = function countWords(value) {
    return value.split(/\s/).filter(function (s) {
      return s !== '';
    }).length;
  };
  /**
   * @param {string[]} tokens
   * @returns {int}
   */


  var countWordsInTokens = function countWordsInTokens(tokens) {
    return countWords(joinTokens(tokens));
  };
  /**
   * @param {int} upperLimit
   * @param {int} lowerLimit
   * @returns {int}
   */

  var getRandInt = function getRandInt(upperLimit, lowerLimit) {
    return lowerLimit + Math.floor(Math.random() * (upperLimit - lowerLimit + 1));
  };
  /**
   * @param {int} length
   * @param {Function} getValue
   * @return {Array}
   */


  var createArray = function createArray(length, getValue) {
    var array = []; // For some reason, I can't get methods like Array.from to work properly on the  minified code

    for (var i = 0; i < length; i++) {
      array[i] = getValue(i);
    }

    return array;
  };
  /**
   * @param {int} count
   * @param {string} type
   * @param {bool} useEmojis
   * @return {Object}
   */


  var getConfig = function getConfig(count, type, useEmojis) {
    var config = {
      initialTokens: initialTokens,
      paragraphs: [],
      wordRepetitionThreshold: 20,
      word: {
        list: useEmojis ? allWords.concat(allEmojis) : allWords,
        minWordsInBetween: 0,
        probability: 1,
        lastWordsThreshold: 0,
        repetitionThreshold: 20
      },
      stop: {
        list: allStops,
        minWordsInBetween: 3,
        probability: 0.3,
        lastWordsThreshold: 6,
        repetitionThreshold: 0
      },
      connector: {
        list: allConnectors,
        minWordsInBetween: 6,
        probability: 0.5,
        lastWordsThreshold: 6,
        repetitionThreshold: 0
      },
      article: {
        list: allArticles,
        minWordsInBetween: 2,
        probability: 0.5,
        lastWordsThreshold: 2,
        repetitionThreshold: 2
      }
    };

    if (type === 'words') {
      config.paragraphs[0] = count;
    } else if (type === 'paragraphs') {
      config.paragraphs = createArray(count, function () {
        return getRandInt(100, 50);
      });
    } else {
      throw new Error("Unknown type: ".concat(type));
    }

    return config;
  };
  /**
   * @param {string[]} array
   * @param {int} wordsLeft
   * @param {int} threshold
   * @param {string[]} lastTokens
   * @returns {string}
   */


  var chooseTokenFromArray = function chooseTokenFromArray(array, wordsLeft, threshold, lastTokens) {
    var rand;
    var word;
    var attempts = 0;

    do {
      rand = getRandInt(array.length - 1, 0);
      word = array[rand];
      attempts++;
    } while ( // Re-attempt to pick a word in the following conditions
    attempts < threshold && (lastTokens.includes(word) || countWords(word) > wordsLeft));

    return word;
  };
  /**
   *
   * @param {Object} config
   * @param {Object} param1
   * @param {int} param1.iterationsWithoutIt
   * @param {int} param1.wordsLeft
   * @param {string[]} param1.lastTokens
   * @return {string|undefined}
   */


  var getRandomTokenFromConfig = function getRandomTokenFromConfig(config, _ref) {
    var _ref$iterationsWithou = _ref.iterationsWithoutIt,
        iterationsWithoutIt = _ref$iterationsWithou === void 0 ? 0 : _ref$iterationsWithou,
        _ref$wordsLeft = _ref.wordsLeft,
        wordsLeft = _ref$wordsLeft === void 0 ? function () {
      throw new Error('wordsLeft is required');
    } : _ref$wordsLeft,
        _ref$lastTokens = _ref.lastTokens,
        lastTokens = _ref$lastTokens === void 0 ? [] : _ref$lastTokens;

    if (wordsLeft > config.lastWordsThreshold && iterationsWithoutIt >= config.minWordsInBetween && Math.random() < config.probability) {
      return chooseTokenFromArray(config.list, wordsLeft, config.repetitionThreshold, lastTokens);
    }

    return undefined;
  };
  /**
   * @param {string} string
   * @returns {string}
   */


  var capitalize = function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  };
  /**
   * @param {string} string
   * @returns {bool}
   */


  var isEndOfSentence = function isEndOfSentence(string) {
    return /\.|!/.test(string.slice(-1));
  };
  /**
   * @param {string[]} tokens
   * @returns {string[]}
   */


  var capitalizeTokens = function capitalizeTokens(tokens) {
    return tokens.map(function (token, i) {
      return i === 0 || isEndOfSentence(tokens[i - 1]) ? capitalize(token) : token;
    });
  };
  /**
   * @param {Object} config
   * @return {string[]}
   */


  var generateTokens = function generateTokens(config) {
    var tokens = _toConsumableArray(config.initialTokens || []);

    var wordLimit = config.wordLimit;
    var cacheData = {
      word: {
        notUsedStreak: 0
      },
      connector: {
        notUsedStreak: 0
      },
      article: {
        notUsedStreak: 0
      },
      stop: {
        notUsedStreak: 0
      }
    };
    var tokenTypes = ['connector', 'article', 'word', 'stop'];
    var iterations = 0;
    var hardIterationsLimit = 1000;

    var _loop = function _loop() {
      var lastTokens = tokens.slice(-config.word.repetitionThreshold).map(function (token) {
        return token.trim();
      });
      var newTokens = [];
      tokenTypes.forEach(function (tokenType) {
        var token = getRandomTokenFromConfig(config[tokenType], {
          iterationsWithoutIt: cacheData[tokenType].notUsedStreak,
          wordsLeft: wordLimit - countWordsInTokens(tokens) - countWordsInTokens(newTokens),
          lastTokens: lastTokens
        });
        cacheData[tokenType].notUsedStreak = !token ? cacheData[tokenType].notUsedStreak + 1 : 0;

        if (token) {
          newTokens.push(token);
        }
      }); // Incrementing word count.

      tokens.push.apply(tokens, newTokens);
      iterations++;

      if (iterations > hardIterationsLimit) {
        return "break";
      }
    };

    while (countWordsInTokens(tokens) < wordLimit) {
      var _ret = _loop();

      if (_ret === "break") break;
    }

    var capitalizedTokens = [].concat(_toConsumableArray(capitalizeTokens(tokens)), ['.' // end of paragraph
    ]);
    return capitalizedTokens;
  };
  /**
   * @param {Object} config
   * @return {string}
   */


  var generateTokensMultiParagraph = function generateTokensMultiParagraph(config) {
    var paragraphs = config.paragraphs.map(function (paragraphConfig, index) {
      var wordsInParagraph = paragraphConfig;

      var thisConfig = _objectSpread2(_objectSpread2({}, config), {}, {
        wordLimit: wordsInParagraph,
        initialTokens: index === 0 ? config.initialTokens : undefined
      });

      return generateTokens(thisConfig);
    });
    return paragraphs;
  };
  /**
   * @param {string[][]} paragraphs
   * @return {string}
   */


  var joinTokenParagraphs = function joinTokenParagraphs(paragraphs) {
    return paragraphs.map(function (paragraph) {
      return joinTokens(paragraph);
    }).reduce(function (memo, paragraph) {
      return "".concat(memo).concat(paragraph, "\n");
    }, '').trim();
  };
  /**
   * @param {Object} config
   * @param {int} config.count
   * @param {string} config.type
   * @param {bool} config.useEmojis
   * @returns {Promise}
   */


  var jamonIpsum = (function () {
    var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref2$count = _ref2.count,
        count = _ref2$count === void 0 ? function () {
      throw new Error('count is required');
    } : _ref2$count,
        _ref2$type = _ref2.type,
        type = _ref2$type === void 0 ? function () {
      throw new Error('type is required');
    } : _ref2$type,
        _ref2$useEmojis = _ref2.useEmojis,
        useEmojis = _ref2$useEmojis === void 0 ? function () {
      throw new Error('useEmojis is required');
    } : _ref2$useEmojis;

    return new Promise(function (resolve) {
      var config = getConfig(count, type, useEmojis);
      var tokens = generateTokensMultiParagraph(config);
      resolve(joinTokenParagraphs(tokens));
    });
  });

  /**
   * Read input values and generate random text.
   */

  function readUiAndGenerate() {
    var count = parseInt(getCountInput().value, 10);
    var type = getTypeInputValue();
    var useEmojis = getEmojiValue();
    jamonIpsum({
      count: count,
      type: type,
      useEmojis: useEmojis
    }).then(function (result) {
      var paragraphs = result.split(/\n/);
      var html = ['<p>', paragraphs.join('</p></p>'), '</p>'].join('');
      renderResult(html);
    });
  }
  /**
   * Do bindings that trigger random text generation.
   */


  function bindGenerate() {
    var inputsHTMLCollection = getAllInputs();

    for (var i = 0; i < inputsHTMLCollection.length; i++) {
      inputsHTMLCollection[i].addEventListener('input', function (e) {
        if (e.target.name === 'type') {
          if (e.target.value === 'words') {
            getCountInput().value = getCountInput().value * 10;
          } else {
            getCountInput().value = Math.ceil(getCountInput().value / 10);
          }
        }

        if (e.target.name === 'count') {
          // Skip rendering if we have an empty value
          if (e.target.value === '') {
            return;
          }

          var countValue = parseInt(e.target.value, 10);

          if (Number.isNaN(countValue)) {
            return;
          }

          if (countValue < e.target.min) {
            e.target.value = e.target.min;
          }

          if (countValue > e.target.max) {
            e.target.value = e.target.max;
          } // If no match, use parsed, like with with '4e3'


          if ("".concat(countValue) !== countValue) {
            e.target.value = countValue;
          }
        }

        readUiAndGenerate();
      });
    }
  }
  /**
   * Woah. Logo is magical.
   */


  function bindLogo() {
    var logo = getMainLogo();
    logo.addEventListener('click', function () {
      rotate(logo);
      readUiAndGenerate();
    });
  }
  /**
   * Initialize modal with extra info.
   */


  function setUpInfoModal() {
    var modalEl = getModalEl();
    var modal = new _default(modalEl, getBody());
    var link = getOpenModalLink();
    link.addEventListener('click', modal.open);
  }

  bindGenerate();
  bindLogo();
  setUpInfoModal();
  readUiAndGenerate();

})));
