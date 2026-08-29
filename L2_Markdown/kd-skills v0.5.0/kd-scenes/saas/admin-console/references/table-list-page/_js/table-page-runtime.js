(function initKdAdminTablePageRuntime(global) {
  function resolveElement(root, selectorOrElement) {
    if (!selectorOrElement) return null;
    if (typeof selectorOrElement === 'string') {
      return (root || document).querySelector(selectorOrElement);
    }
    return selectorOrElement;
  }

  function toNumber(value, fallback) {
    var next = Number(value);
    return Number.isFinite(next) ? next : fallback;
  }

  function normalizeSelectedIds(selectedIds) {
    return Array.isArray(selectedIds) ? selectedIds.map(function(id) { return String(id); }) : [];
  }

  function createTableListPage(options) {
    options = options || {};

    if (!global.KdAdminTable || !global.KdAdminPagination) {
      throw new Error('KdAdminTablePageRuntime requires KdAdminTable and KdAdminPagination.');
    }

    var root = resolveElement(document, options.root) || document;
    var selectors = options.selectors || {};
    var contentShell = resolveElement(root, selectors.contentShell || '.content-shell');
    var contentStack = resolveElement(root, selectors.contentStack || '.content-stack');
    var tableArea = resolveElement(root, selectors.tableArea || '.table-area');
    var tableScroll = resolveElement(root, selectors.tableScroll || '#tableScroll');
    var paginationMount = resolveElement(root, selectors.paginationMount || '#adminPagination');
    var rows = Array.isArray(options.rows) ? options.rows.slice() : [];
    var pageSizeOptions = Array.isArray(options.pageSizeOptions) && options.pageSizeOptions.length
      ? options.pageSizeOptions.slice()
      : [10, 20, 50];
    var initialState = options.initialState || {};
    var state = {
      currentPage: Math.max(1, toNumber(initialState.currentPage, 1)),
      pageSize: Math.max(1, toNumber(initialState.pageSize, pageSizeOptions[0] || 20)),
      selectedIds: new Set(normalizeSelectedIds(initialState.selectedIds))
    };
    var getRowId = typeof options.getRowId === 'function'
      ? options.getRowId
      : function(row) { return row && row.id != null ? row.id : ''; };
    var renderRow = typeof options.renderRow === 'function' ? options.renderRow : null;
    var tableInstance = null;
    var paginationInstance = null;
    var resizeObserver = null;

    if (!tableScroll || !paginationMount) {
      throw new Error('KdAdminTablePageRuntime requires tableScroll and paginationMount.');
    }
    if (!renderRow) {
      throw new Error('KdAdminTablePageRuntime requires renderRow.');
    }

    function syncTableScrollHeight() {
      if (!contentShell || !tableScroll || !paginationMount) return;
      var shellRect = contentShell.getBoundingClientRect();
      var tableRect = tableScroll.getBoundingClientRect();
      var paginationHeight = paginationMount.getBoundingClientRect().height;
      var available = shellRect.bottom - tableRect.top - paginationHeight;
      tableScroll.style.maxHeight = Math.max(160, Math.floor(available)) + 'px';
    }

    function handleResize() {
      syncTableScrollHeight();
      if (tableInstance) {
        tableInstance.syncStickyState();
      }
    }

    paginationInstance = global.KdAdminPagination.create(paginationMount, {
      currentPage: state.currentPage,
      pageSize: state.pageSize,
      total: rows.length,
      selectedCount: state.selectedIds.size,
      pageSizeOptions: pageSizeOptions,
      onChange: function(next) {
        state.currentPage = next.currentPage;
        state.pageSize = next.pageSize;
        if (tableInstance) {
          tableInstance.setPage(state.currentPage, state.pageSize);
        }
        syncTableScrollHeight();
      }
    });

    tableInstance = global.KdAdminTable.create({
      root: root,
      frame: selectors.tableFrame || '.table-frame',
      scroll: selectors.tableScroll || '#tableScroll',
      body: selectors.tableBody || '#tableBody',
      checkAll: selectors.checkAll || '#checkAll',
      checkAllWrap: selectors.checkAllWrap || '#checkAllWrap',
      rows: rows,
      currentPage: state.currentPage,
      pageSize: state.pageSize,
      selectedIds: Array.from(state.selectedIds),
      getRowId: getRowId,
      renderRow: function(row, context) {
        return renderRow(row, context, {
          root: root,
          rows: rows.slice(),
          state: state,
          pagination: paginationInstance,
          table: tableInstance
        });
      },
      pagination: paginationInstance,
      onSelectionChange: function(nextState) {
        state.selectedIds = new Set(nextState.selectedIds.map(String));
        paginationInstance.setState({ selectedCount: state.selectedIds.size });
        if (typeof options.onSelectionChange === 'function') {
          options.onSelectionChange(nextState, state);
        }
      },
      onStateChange: function(nextState) {
        state.currentPage = nextState.currentPage;
        state.pageSize = nextState.pageSize;
        syncTableScrollHeight();
        if (typeof options.onStateChange === 'function') {
          options.onStateChange(nextState, state);
        }
      }
    });

    tableInstance.syncStickyState();
    syncTableScrollHeight();
    window.addEventListener('resize', handleResize);

    if (typeof ResizeObserver !== 'undefined') {
      resizeObserver = new ResizeObserver(handleResize);
      [contentShell, contentStack, tableArea, paginationMount].forEach(function(element) {
        if (element) resizeObserver.observe(element);
      });
    }

    return {
      pagination: paginationInstance,
      table: tableInstance,
      state: state,
      rows: rows.slice(),
      syncLayout: handleResize,
      destroy: function() {
        window.removeEventListener('resize', handleResize);
        if (resizeObserver) resizeObserver.disconnect();
        if (tableInstance && typeof tableInstance.destroy === 'function') {
          tableInstance.destroy();
        }
      }
    };
  }

  global.KdAdminTablePageRuntime = {
    create: createTableListPage
  };
})(window);
