/**
 * 旧浏览器检测：在应用加载前检测浏览器能力
 * 不支持的浏览器显示升级提示，避免白屏
 */
(function () {
  var ua = navigator.userAgent
  var isOldBrowser = false

  // 检测关键 API 支持
  try {
    // ES2020+ 特性检测
    if (!window.Promise || !window.fetch || !window.Symbol) {
      isOldBrowser = true
    }
    // 可选链和空值合并通过 Function 构造检测
    new Function('a?.b ?? c')
    // 动态 import
    new Function('return import("")')
  } catch (e) {
    isOldBrowser = true
  }

  // IE 检测
  if (/MSIE |Trident\//.test(ua)) {
    isOldBrowser = true
  }

  if (isOldBrowser) {
    document.body.innerHTML =
      '<div style="display:flex;flex-direction:column;align-items:center;justify-content:center;min-height:100vh;font-family:system-ui,sans-serif;text-align:center;padding:24px;">' +
      '<h1 style="font-size:24px;margin-bottom:16px;">浏览器版本过低</h1>' +
      '<p style="font-size:16px;color:#666;max-width:400px;line-height:1.6;">' +
      '您的浏览器版本过低，无法正常使用本系统。请升级到最新版本的 Chrome、Firefox、Safari 或 Edge 浏览器。' +
      '</p>' +
      '<div style="margin-top:24px;display:flex;gap:16px;flex-wrap:wrap;justify-content:center;">' +
      '<a href="https://www.google.com/chrome/" style="padding:8px 16px;background:#1677ff;color:#fff;text-decoration:none;border-radius:4px;">Chrome</a>' +
      '<a href="https://www.mozilla.org/firefox/" style="padding:8px 16px;background:#1677ff;color:#fff;text-decoration:none;border-radius:4px;">Firefox</a>' +
      '<a href="https://www.microsoft.com/edge" style="padding:8px 16px;background:#1677ff;color:#fff;text-decoration:none;border-radius:4px;">Edge</a>' +
      '</div></div>'
    throw new Error('Unsupported browser')
  }
})()