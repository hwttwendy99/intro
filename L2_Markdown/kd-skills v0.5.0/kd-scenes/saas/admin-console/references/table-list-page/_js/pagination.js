(function initKdAdminPagination(global) {
  var DEFAULT_PAGE_SIZE_OPTIONS = [10, 20, 50];

  function clamp(value, min, max) {
    var next = Number(value);
    if (!Number.isFinite(next)) next = min;
    return Math.max(min, Math.min(max, next));
  }

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function renderIcon(path) {
    return '' +
      '<span class="kd-icon" aria-hidden="true">' +
        '<svg viewBox="0 0 16 16">' + path + '</svg>' +
      '</span>';
  }

  function createPagination(container, options) {
    if (!container) return null;
    options = options || {};

    var state = {
      currentPage: Number(options.currentPage) || 1,
      pageSize: Number(options.pageSize) || 20,
      total: Number(options.total) || 0,
      selectedCount: Number(options.selectedCount) || 0
    };
    var pageSizeOptions = options.pageSizeOptions || DEFAULT_PAGE_SIZE_OPTIONS;
    var onChange = typeof options.onChange === 'function' ? options.onChange : function() {};

    container.classList.add('pagination-area');
    container.setAttribute('data-kd-component', 'Pagination');
    container.innerHTML = '' +
      '<div class="pagination-summary" data-kd-pagination-summary></div>' +
      '<div class="pagination-main">' +
        '<div class="page-group">' +
          '<button class="page-link page-link-icon" type="button" aria-label="上一页" data-kd-page-prev>' +
            renderIcon('<path d="M9.5 4L6 8L9.5 12"></path>') +
          '</button>' +
          '<div class="page-group" data-kd-page-numbers></div>' +
          '<button class="page-link page-link-icon" type="button" aria-label="下一页" data-kd-page-next>' +
            renderIcon('<path d="M6.5 4L10 8L6.5 12"></path>') +
          '</button>' +
        '</div>' +
        '<div class="page-extra">' +
          '<label class="page-size-field kd-input kd-input-medium kd-select-trigger">' +
            '<span class="sr-only">每页条数</span>' +
            '<span class="kd-input-wrap" data-kd-component="Select">' +
              '<input class="kd-input-inner" type="text" readonly data-kd-page-size-text>' +
              '<span class="kd-select-arrow" aria-hidden="true">' +
                renderIcon('<path d="M4 6.5L8 10L12 6.5"></path>') +
              '</span>' +
            '</span>' +
          '</label>' +
          '<div class="page-extra">' +
            '<span>前往</span>' +
            '<label class="jump-field kd-input kd-input-medium">' +
              '<span class="sr-only">页码输入</span>' +
              '<span class="kd-input-wrap" data-kd-component="Text Field / KDTextField">' +
                '<input class="kd-input-inner" type="text" inputmode="numeric" data-kd-page-jump>' +
              '</span>' +
            '</label>' +
            '<span>页</span>' +
          '</div>' +
        '</div>' +
      '</div>';

    var summary = container.querySelector('[data-kd-pagination-summary]');
    var prevBtn = container.querySelector('[data-kd-page-prev]');
    var nextBtn = container.querySelector('[data-kd-page-next]');
    var pageNumbers = container.querySelector('[data-kd-page-numbers]');
    var pageSizeText = container.querySelector('[data-kd-page-size-text]');
    var jumpInput = container.querySelector('[data-kd-page-jump]');
    var pageSizeTrigger = pageSizeText.closest('.kd-select-trigger');

    function totalPages() {
      return Math.max(1, Math.ceil(state.total / state.pageSize));
    }

    function emit() {
      onChange({
        currentPage: state.currentPage,
        pageSize: state.pageSize,
        total: state.total,
        selectedCount: state.selectedCount,
        totalPages: totalPages()
      });
    }

    function render() {
      var total = totalPages();
      state.currentPage = clamp(state.currentPage, 1, total);
      summary.textContent = '已选 ' + state.selectedCount + ' 条，共 ' + state.total + ' 条';
      pageSizeText.value = state.pageSize + ' 条/页';
      jumpInput.value = state.currentPage;
      prevBtn.disabled = state.currentPage === 1;
      nextBtn.disabled = state.currentPage === total;

      var html = '';
      for (var i = 1; i <= total; i += 1) {
        html += '<button class="page-link' + (i === state.currentPage ? ' is-current' : '') +
          '" type="button" data-kd-page="' + i + '">' + escapeHtml(i) + '</button>';
      }
      pageNumbers.innerHTML = html;
    }

    function setState(nextState, shouldEmit) {
      if (!nextState) return;
      if (nextState.total != null) state.total = Math.max(0, Number(nextState.total) || 0);
      if (nextState.selectedCount != null) state.selectedCount = Math.max(0, Number(nextState.selectedCount) || 0);
      if (nextState.pageSize != null) state.pageSize = Math.max(1, Number(nextState.pageSize) || state.pageSize);
      if (nextState.currentPage != null) state.currentPage = Number(nextState.currentPage) || 1;
      state.currentPage = clamp(state.currentPage, 1, totalPages());
      render();
      if (shouldEmit) emit();
    }

    pageNumbers.addEventListener('click', function(event) {
      var target = event.target.closest('[data-kd-page]');
      if (!target) return;
      setState({ currentPage: Number(target.getAttribute('data-kd-page')) }, true);
    });

    prevBtn.addEventListener('click', function() {
      if (state.currentPage <= 1) return;
      setState({ currentPage: state.currentPage - 1 }, true);
    });

    nextBtn.addEventListener('click', function() {
      if (state.currentPage >= totalPages()) return;
      setState({ currentPage: state.currentPage + 1 }, true);
    });

    jumpInput.addEventListener('change', function() {
      setState({ currentPage: clamp(jumpInput.value, 1, totalPages()) }, true);
    });

    pageSizeTrigger.addEventListener('click', function() {
      var currentIndex = pageSizeOptions.indexOf(state.pageSize);
      var nextIndex = currentIndex >= 0 ? (currentIndex + 1) % pageSizeOptions.length : 0;
      setState({ pageSize: pageSizeOptions[nextIndex], currentPage: 1 }, true);
    });

    render();

    return {
      render: render,
      setState: function(nextState) {
        setState(nextState, false);
      },
      getState: function() {
        return {
          currentPage: state.currentPage,
          pageSize: state.pageSize,
          total: state.total,
          selectedCount: state.selectedCount,
          totalPages: totalPages()
        };
      },
      destroy: function() {
        container.innerHTML = '';
      }
    };
  }

  global.KdAdminPagination = {
    create: createPagination
  };
})(window);
