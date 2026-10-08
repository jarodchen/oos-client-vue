/**
 * 主题 FOUC 守卫：必须早于首帧执行。
 * 暗色用户的 data-theme 原本由 stores/ui.ts 的 watch 在 JS bundle 跑起来后才写入，
 * 刷新时会先渲染一帧亮色背景（闪白）。此处同步读取 localStorage 预判主题并提前打标。
 * 键名/属性名与 src/stores/ui.ts 的 THEME_KEY、data-theme 保持一致。
 * 因 CSP 为 script-src 'self'（不放行内联脚本），本文件以 public/ 同源脚本形式加载。
 */
(function () {
  try {
    var theme = localStorage.getItem('rustfs_theme')
    document.documentElement.setAttribute('data-theme', theme === 'dark' ? 'dark' : 'light')
  } catch {
    // 隐私模式下 localStorage 读取即抛，保持默认（亮色），不阻塞渲染
  }
})()
