(function initKdAdminTable(global) {
  function toArray(value) {
    return Array.prototype.slice.call(value || []);
  }

  function resolveElement(root, selectorOrElement) {
    if (!selectorOrElement) return null;
    if (typeof selectorOrElement === 'string') {
      return (root || document).querySelector(selectorOrElement);
    }
    return selectorOrElement;
  }

  function defaultRowId(row, index) {
    if (row && row.id != null) return String(row.id);
    return String(index);
  }

  function clamp(value, min, max) {
    var next = Number(value);
    if (!Number.isFinite(next)) next = min;
    return Math.max(min, Math.min(max, next));
  }

  function createAdminTable(options) {
    options = options || {};

    var root = resolveElement(document, options.root) || document;
    var tableFrame = resolveElement(root, options.frame || '.table-frame');
    var tableScroll = resolveElement(root, options.scroll || '.table-scroll');
    var tableBody = resolveElement(root, options.body || 'tbody');
    var table = tableScroll ? tableScroll.querySelector('table') : null;
    var getRowId = typeof options.getRowId === 'function' ? options.getRowId : defaultRowId;
    var renderRow = typeof options.renderRow === 'function' ? options.renderRow : null;
    var onSelectionChange = typeof options.onSelectionChange === 'function' ? options.onSelectionChange : function() {};
    var onStateChange = typeof options.onStateChange === 'function' ? options.onStateChange : function() {};
    var pagination = options.pagination || null;

    if (!tableFrame || !tableScroll || !tableBody || !table) {
      throw new Error('KdAdminTable.create requires frame, scroll, table, and body elements.');
    }

    var state = {
      rows: Array.isArray(options.rows) ? options.rows.slice() : [],
      selectedIds: new Set((options.selectedIds || []).map(String)),
      hoveredRowId: null,
      currentPage: Number(options.currentPage) || 1,
      pageSize: Number(options.pageSize) || 20
    };

    function pageStartIndex() {
      return (state.currentPage - 1) * state.pageSize;
    }

    function pageRows() {
      var start = (state.currentPage - 1) * state.pageSize;
      return state.rows.slice(start, start + state.pageSize);
    }

    function totalPages() {
      return Math.max(1, Math.ceil(state.rows.length / state.pageSize));
    }

    function syncPagination() {
      if (!pagination || typeof pagination.setState !== 'function') return;
      pagination.setState({
        currentPage: state.currentPage,
        pageSize: state.pageSize,
        total: state.rows.length,
        selectedCount: state.selectedIds.size
      });
    }

    function emitSelectionChange() {
      onSelectionChange({
        selectedIds: Array.from(state.selectedIds),
        selectedCount: state.selectedIds.size
      });
    }

    function emitStateChange() {
      onStateChange({
        currentPage: state.currentPage,
        pageSize: state.pageSize,
        total: state.rows.length,
        selectedCount: state.selectedIds.size,
        totalPages: totalPages()
      });
    }

    function syncHoveredRow(rowId) {
      state.hoveredRowId = rowId == null ? null : String(rowId);
      var rows = toArray(tableBody.querySelectorAll('.kd-table-row'));
      rows.forEach(function(row, i) {
        var isHover = state.hoveredRowId != null && row.getAttribute('data-row-id') === state.hoveredRowId;
        row.classList.toggle('is-row-hover', isHover);
        var isPrevHover = i + 1 < rows.length && state.hoveredRowId != null &&
          rows[i + 1].getAttribute('data-row-id') === state.hoveredRowId;
        row.classList.toggle('is-prev-hover', isPrevHover);
      });
    }

    function syncStickyState() {
      var hasOverflow = table.scrollWidth > tableScroll.clientWidth + 1;
      tableFrame.classList.toggle('has-sticky-columns', hasOverflow);
      tableFrame.classList.remove('is-scrolling-none', 'is-scrolling-left', 'is-scrolling-middle', 'is-scrolling-right');

      if (!hasOverflow) {
        tableFrame.classList.add('is-scrolling-none');
        return;
      }

      var maxScrollLeft = Math.max(0, tableScroll.scrollWidth - tableScroll.clientWidth);
      var scrollLeft = tableScroll.scrollLeft;

      if (scrollLeft <= 1) {
        tableFrame.classList.add('is-scrolling-left');
      } else if (scrollLeft >= maxScrollLeft - 1) {
        tableFrame.classList.add('is-scrolling-right');
      } else {
        tableFrame.classList.add('is-scrolling-middle');
      }
    }

    function syncPrevSelected() {
      var rows = toArray(tableBody.querySelectorAll('.kd-table-row'));
      rows.forEach(function(row, i) {
        var nextIsSelected = i + 1 < rows.length && rows[i + 1].classList.contains('is-selected');
        row.classList.toggle('is-prev-selected', nextIsSelected);
      });
    }

    function syncCheckAll() {
      var checkAll = resolveElement(root, options.checkAll || '#checkAll');
      var checkAllWrap = resolveElement(root, options.checkAllWrap || '#checkAllWrap');
      if (!checkAll) return;

      var startIndex = pageStartIndex();
      var visibleIds = pageRows().map(function(row, index) {
        return String(getRowId(row, startIndex + index));
      });
      var checkedCount = visibleIds.filter(function(id) {
        return state.selectedIds.has(id);
      }).length;

      checkAll.checked = visibleIds.length > 0 && checkedCount === visibleIds.length;
      checkAll.indeterminate = checkedCount > 0 && checkedCount < visibleIds.length;

      if (checkAllWrap) {
        checkAllWrap.classList.toggle('is-checked', checkAll.checked);
        checkAllWrap.classList.toggle('is-indeterminate', checkAll.indeterminate);
      }
    }

    function render() {
      if (renderRow) {
        var startIndex = pageStartIndex();
        tableBody.innerHTML = pageRows().map(function(row, index) {
          var absoluteIndex = startIndex + index;
          var rowId = String(getRowId(row, absoluteIndex));
          return renderRow(row, {
            index: absoluteIndex,
            rowId: rowId,
            checked: state.selectedIds.has(rowId),
            selectedIds: state.selectedIds
          });
        }).join('');
      }

      syncHoveredRow(state.hoveredRowId);
      syncPrevSelected();
      syncCheckAll();
      syncStickyState();
      syncPagination();
      emitStateChange();
    }

    function setRows(rows) {
      state.rows = Array.isArray(rows) ? rows.slice() : [];
      state.currentPage = clamp(state.currentPage, 1, totalPages());
      render();
    }

    function setPage(nextPage, nextPageSize) {
      if (nextPageSize != null) state.pageSize = Math.max(1, Number(nextPageSize) || state.pageSize);
      state.currentPage = clamp(nextPage, 1, totalPages());
      render();
    }

    function setSelected(rowId, checked) {
      var id = String(rowId);
      if (checked) state.selectedIds.add(id);
      else state.selectedIds.delete(id);
      syncCheckAll();
      emitSelectionChange();
      syncPagination();
    }

    function handleBodyMouseover(event) {
      var row = event.target.closest('.kd-table-row');
      if (!row || !tableBody.contains(row)) return;
      syncHoveredRow(row.getAttribute('data-row-id'));
    }

    function handleBodyMouseout(event) {
      var related = event.relatedTarget;
      if (related && tableBody.contains(related)) return;
      syncHoveredRow(null);
    }

    function handleBodyChange(event) {
      var target = event.target;
      if (!target.matches('.row-check,[data-kd-row-check]')) return;
      var row = target.closest('.kd-table-row');
      var rowId = target.getAttribute('data-row-id') || (row && row.getAttribute('data-row-id'));
      if (rowId == null) return;
      setSelected(rowId, target.checked);
      if (row) {
        row.classList.toggle('is-selected', target.checked);
        syncPrevSelected();
      }
      var checkboxWrap = target.closest('.kd-checkbox-input');
      if (checkboxWrap) checkboxWrap.classList.toggle('is-checked', target.checked);
    }

    function handleCheckAllChange() {
      var startIndex = pageStartIndex();
      pageRows().forEach(function(row, index) {
        var rowId = String(getRowId(row, startIndex + index));
        if (checkAll.checked) state.selectedIds.add(rowId);
        else state.selectedIds.delete(rowId);
      });
      render();
      emitSelectionChange();
    }

    tableScroll.addEventListener('scroll', syncStickyState);
    tableBody.addEventListener('mouseover', handleBodyMouseover);
    tableBody.addEventListener('mouseout', handleBodyMouseout);
    tableBody.addEventListener('change', handleBodyChange);

    var checkAll = resolveElement(root, options.checkAll || '#checkAll');
    if (checkAll) {
      checkAll.addEventListener('change', handleCheckAllChange);
    }

    var resizeObserver = null;
    if (typeof ResizeObserver !== 'undefined') {
      resizeObserver = new ResizeObserver(syncStickyState);
      resizeObserver.observe(tableFrame);
      resizeObserver.observe(tableScroll);
    }
    window.addEventListener('resize', syncStickyState);

    render();

    return {
      render: render,
      setRows: setRows,
      setPage: setPage,
      setSelected: setSelected,
      syncStickyState: syncStickyState,
      getState: function() {
        return {
          rows: state.rows.slice(),
          selectedIds: Array.from(state.selectedIds),
          selectedCount: state.selectedIds.size,
          currentPage: state.currentPage,
          pageSize: state.pageSize,
          total: state.rows.length,
          totalPages: totalPages()
        };
      },
      destroy: function() {
        tableScroll.removeEventListener('scroll', syncStickyState);
        tableBody.removeEventListener('mouseover', handleBodyMouseover);
        tableBody.removeEventListener('mouseout', handleBodyMouseout);
        tableBody.removeEventListener('change', handleBodyChange);
        if (checkAll) checkAll.removeEventListener('change', handleCheckAllChange);
        window.removeEventListener('resize', syncStickyState);
        if (resizeObserver) resizeObserver.disconnect();
      }
    };
  }

  global.KdAdminTable = {
    create: createAdminTable
  };
})(window);
