// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function () {
  console.log("✅ StrixAE 页面加载成功！");

  // 平滑滚动（论文官网必备）
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});