(function initKdAdminTableCellRenderers(global) {
  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function icon(path, extraClass) {
    return '' +
      '<span class="kd-icon' + (extraClass ? ' ' + extraClass : '') + '" aria-hidden="true">' +
        '<svg viewBox="0 0 16 16">' + path + '</svg>' +
      '</span>';
  }

  function text(value, options) {
    options = options || {};
    var className = options.className || 'kd-admin-text-break';
    return '<span class="' + className + '">' + escapeHtml(value) + '</span>';
  }

  function secondaryText(value) {
    return '<span class="kd-admin-cell-secondary">' + escapeHtml(value) + '</span>';
  }

  function stackedText(primary, secondary) {
    return '' +
      '<span class="kd-admin-cell-stack">' +
        text(primary) +
        secondaryText(secondary) +
      '</span>';
  }

  function thumbPlaceholder(label) {
    return '<span class="kd-admin-thumb-placeholder">' + escapeHtml(label || '封面') + '</span>';
  }

  function defaultStatusMeta(statusName) {
    if (statusName === '已启用') {
      return {
        cls: 'kd-admin-status--success',
        path: '<circle cx="8" cy="8" r="5.5"></circle><path d="M5.5 8L7.2 9.7L10.5 6.4"></path>'
      };
    }
    if (statusName === '管理员禁用') {
      return {
        cls: 'kd-admin-status--error',
        path: '<circle cx="8" cy="8" r="5.5"></circle><path d="M5 11L11 5"></path><path d="M5.2 5h5.6"></path>'
      };
    }
    return {
      cls: 'kd-admin-status--neutral',
      path: '<circle cx="8" cy="8" r="5.5"></circle><path d="M5 8h6"></path>'
    };
  }

  function status(statusName, statusMap) {
    var meta = statusMap && statusMap[statusName] ? statusMap[statusName] : defaultStatusMeta(statusName);
    return '' +
      '<span class="kd-admin-status ' + meta.cls + '">' +
        icon(meta.path, 'kd-icon--12') +
        '<span class="kd-admin-status__label">' + escapeHtml(statusName) + '</span>' +
      '</span>';
  }

  function actions(items) {
    var html = (items || []).map(function(item) {
      var classes = ['kd-button', 'kd-button-m'];
      if (item.kind === 'danger') {
        classes.push('kd-button-light', 'kd-button-danger');
      } else {
        classes.push('kd-button-light', 'kd-button-light-highlight');
      }
      return '<button class="' + classes.join(' ') + '" type="button">' + escapeHtml(item.label) + '</button>';
    }).join('');

    return '<div class="kd-admin-action-group">' + html + '</div>';
  }

  global.KdAdminTableCellRenderers = {
    actions: actions,
    escapeHtml: escapeHtml,
    icon: icon,
    secondaryText: secondaryText,
    stackedText: stackedText,
    status: status,
    text: text,
    thumbPlaceholder: thumbPlaceholder
  };
})(window);
