(function initCommandBarCollapse() {
  var filterGroup = document.querySelector('.filter-group');
  if (!filterGroup) return;
  var pageActions = document.querySelector('.page-actions');
  var toggleBtn = filterGroup.querySelector('[data-kd-role="toggle-expand"]');
  var commandBar = document.querySelector('.command-bar');
  var GAP = 8;
  var CMD_GAP = 32;

  function getFilterItems() {
    return Array.from(filterGroup.querySelectorAll('.filter-item'));
  }
  function getTailButtons() {
    return Array.from(filterGroup.querySelectorAll('[data-kd-role="tail-btn"]'));
  }

  function syncSelectPlaceholderWidths() {
    var selects = Array.from(document.querySelectorAll('.command-bar .select-field.kd-select-trigger'));
    if (!selects.length) return;

    var measureNode = document.createElement('span');
    measureNode.style.position = 'absolute';
    measureNode.style.visibility = 'hidden';
    measureNode.style.pointerEvents = 'none';
    measureNode.style.whiteSpace = 'pre';
    measureNode.style.left = '-9999px';
    measureNode.style.top = '-9999px';
    document.body.appendChild(measureNode);

    selects.forEach(function(select) {
      var input = select.querySelector('.kd-input-inner');
      var wrap = select.querySelector('.kd-input-wrap');
      var arrow = select.querySelector('.kd-select-arrow');
      if (!input || !wrap || !arrow) return;

      var text = input.getAttribute('placeholder') || '';
      var inputStyle = window.getComputedStyle(input);
      var wrapStyle = window.getComputedStyle(wrap);
      var arrowStyle = window.getComputedStyle(arrow);

      measureNode.style.font = inputStyle.font;
      measureNode.style.letterSpacing = inputStyle.letterSpacing;
      measureNode.textContent = text;

      var textWidth = measureNode.getBoundingClientRect().width;
      var chromeWidth =
        parseFloat(wrapStyle.paddingLeft) +
        parseFloat(wrapStyle.paddingRight) +
        parseFloat(wrapStyle.borderLeftWidth) +
        parseFloat(wrapStyle.borderRightWidth) +
        parseFloat(arrowStyle.marginLeft) +
        parseFloat(arrowStyle.width);
      var nextWidth = Math.ceil(textWidth + chromeWidth + 2);

      select.style.width = nextWidth + 'px';
      select.style.minWidth = nextWidth + 'px';
    });

    measureNode.remove();
  }

  function measure() {
    var isExpanded = filterGroup.classList.contains('is-expanded');
    if (isExpanded) return;

    var items = getFilterItems();
    var tailBtns = getTailButtons();

    items.forEach(function(el) { el.style.display = ''; });
    if (toggleBtn) toggleBtn.style.display = 'none';

    var barWidth = commandBar.clientWidth;
    var actionsWidth = pageActions ? pageActions.offsetWidth : 0;
    var available = barWidth - actionsWidth - CMD_GAP - 40;

    var tailWidth = 0;
    tailBtns.forEach(function(el) { tailWidth += el.offsetWidth + GAP; });

    var toggleBtnWidth = toggleBtn ? toggleBtn.offsetWidth + GAP : 0;
    var usedWidth = tailWidth;
    var allFit = true;

    for (var i = 0; i < items.length; i++) {
      var itemWidth = items[i].offsetWidth + GAP;
      if (usedWidth + itemWidth + toggleBtnWidth <= available) {
        usedWidth += itemWidth;
        items[i].style.display = '';
      } else {
        items[i].style.display = 'none';
        allFit = false;
      }
    }

    if (toggleBtn) {
      toggleBtn.style.display = allFit ? 'none' : '';
    }
  }

  function toggleExpand() {
    var isExpanded = filterGroup.classList.contains('is-expanded');
    if (isExpanded) {
      filterGroup.classList.remove('is-expanded');
      filterGroup.style.flexWrap = 'nowrap';
      toggleBtn.setAttribute('aria-expanded', 'false');
      toggleBtn.querySelector('[data-kd-role="toggle-label"]').textContent = '展开';
      var icon = toggleBtn.querySelector('[data-kd-role="toggle-icon"]');
      if (icon) icon.style.transform = '';
      measure();
    } else {
      filterGroup.classList.add('is-expanded');
      filterGroup.style.flexWrap = 'wrap';
      getFilterItems().forEach(function(el) { el.style.display = ''; });
      toggleBtn.setAttribute('aria-expanded', 'true');
      toggleBtn.querySelector('[data-kd-role="toggle-label"]').textContent = '收起';
      var icon = toggleBtn.querySelector('[data-kd-role="toggle-icon"]');
      if (icon) icon.style.transform = 'rotate(180deg)';
    }
  }

  if (toggleBtn) {
    toggleBtn.setAttribute('aria-expanded', 'false');
    toggleBtn.addEventListener('click', toggleExpand);
  }

  syncSelectPlaceholderWidths();
  measure();

  var resizeTimer;
  window.addEventListener('resize', function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {
      syncSelectPlaceholderWidths();
      if (!filterGroup.classList.contains('is-expanded')) measure();
    }, 100);
  });
})();
