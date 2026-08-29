(function initAdminConsoleNavigationSidebar() {
  var shell = document.querySelector('.navigation-shell');
  if (!shell) return;

  var collapsedClass = 'is-collapsed';

  function syncNavGroups() {
    var toggleButtons = Array.from(shell.querySelectorAll('[data-nav-toggle]'));
    toggleButtons.forEach(function(toggleBtn) {
      var groupName = toggleBtn.getAttribute('data-nav-toggle');
      var expanded = toggleBtn.getAttribute('aria-expanded') === 'true';
      var group = shell.querySelector('[data-nav-group="' + groupName + '"]');
      var caret = toggleBtn.querySelector('[data-nav-caret]');
      if (group) {
        group.hidden = !expanded || shell.classList.contains(collapsedClass);
      }
      if (caret) {
        caret.style.transform = expanded ? 'rotate(180deg)' : 'rotate(0deg)';
      }
    });
  }

  function syncSidebarToggle() {
    var toggleBtn = shell.querySelector('[data-nav-sidebar-toggle]');
    if (!toggleBtn) return;
    var toggleIcon = toggleBtn.querySelector('[data-nav-sidebar-toggle-icon]');
    var tooltipLabel = shell.querySelector('[data-nav-sidebar-tooltip-label]');
    var collapsed = shell.classList.contains(collapsedClass);

    toggleBtn.setAttribute('aria-expanded', collapsed ? 'false' : 'true');
    toggleBtn.setAttribute('aria-label', collapsed ? '展开侧栏' : '收起侧栏');

    if (toggleIcon) {
      toggleIcon.style.transform = collapsed ? 'rotate(180deg)' : 'rotate(0deg)';
    }

    if (tooltipLabel) {
      tooltipLabel.textContent = collapsed ? '展开导航' : '收起导航';
    }
  }

  function hideTooltipOnClick() {
    var tooltipWrap = shell.querySelector('.nav-footer-tooltip');
    var toggleBtn = shell.querySelector('[data-nav-sidebar-toggle]');
    if (!tooltipWrap || !toggleBtn) return;

    tooltipWrap.classList.add('is-tooltip-suppressed');
    toggleBtn.blur();

    window.setTimeout(function() {
      tooltipWrap.classList.remove('is-tooltip-suppressed');
    }, 120);
  }

  function bindNavGroups() {
    var toggleButtons = Array.from(shell.querySelectorAll('[data-nav-toggle]'));
    toggleButtons.forEach(function(toggleBtn) {
      toggleBtn.addEventListener('click', function() {
        if (shell.classList.contains(collapsedClass)) return;
        var expanded = toggleBtn.getAttribute('aria-expanded') === 'true';
        toggleBtn.setAttribute('aria-expanded', expanded ? 'false' : 'true');
        syncNavGroups();
      });
    });
  }

  function bindSidebarToggle() {
    var toggleBtn = shell.querySelector('[data-nav-sidebar-toggle]');
    if (!toggleBtn) return;

    toggleBtn.addEventListener('click', function() {
      hideTooltipOnClick();
      shell.classList.toggle(collapsedClass);
      syncSidebarToggle();
      syncNavGroups();
    });
  }

  syncSidebarToggle();
  syncNavGroups();
  bindNavGroups();
  bindSidebarToggle();
})();
