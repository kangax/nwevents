(function(D){
  
  // TODO: all of this needs tests
  var match = D.match;
  
  /**
   * @method up
   * @param {HTMLElement} element element to walk from
   * @param {String | Number} expr CSS expression or an index
   * @return {HTMLElement | undefined}
   */
  function up(element, expr) {
    var i = 0, isIndex = typeof expr == 'number';
    while (element = element.parentNode) {
      if (isIndex) {
        if (i++ == expr) {
          return element;
        }
      }
      else if (match(element, expr)) return element;
    }
  }
  /**
   * @method down
   * @param {HTMLElement} element element to walk from
   * @param {String | Number} expr CSS expression or an index
   * @return {HTMLElement | undefined}
   */
  function down(element, expr) {
    // TODO: implement index-based matching
    if (match(element, expr)) return element;
    if (element.childNodes) {
      for (var i=0, l=element.childNodes.length; i<l; i++) {
        var child = element.childNodes[i];
        if (child.nodeType === 1) {
          var result = match(child, expr);
          if (result) return child;
          return down(child, expr);
        }
      }
    }
  }
  /**
   * @method next
   * @param {HTMLElement} element element to walk from
   * @param {String | Number} expr CSS expression or an index
   * @return {HTMLElement | undefined}
   */
  function next(element, expr) {
    var i = 0, isIndex = typeof expr == 'number';
    while (element = element.nextSibling) {
      if (isIndex) {
        if (i++ == expr) {
          return element;
        }
      }
      else if (match(element, expr)) return element;
    }
  }
  /**
   * @method previous
   * @param {HTMLElement} element element to walk from
   * @param {String | Number} expr CSS expression or an index
   * @return {HTMLElement | undefined}
   */
  function previous(element, expr) {
    var i = 0, isIndex = typeof expr == 'number';
    while (element = element.previousSibling) {
      if (isIndex) {
        if (i++ == expr) {
          return element;
        }
      }
      else if (match(element, expr)) return element;
    }
  }
  D.up = up;
  D.down = down;
  D.next = next;
  D.previous = previous;
})(NW.Dom);