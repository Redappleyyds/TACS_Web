//移动端菜单
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('input.navbar-menu');
    const navbarMenuBlock = document.querySelector('.navbar-menu\\:block');

    const updateMenuDisplay = () => {
        if (menuToggle.checked) {
            navbarMenuBlock.classList.add('visible'); // 添加类以设置目标高度和透明度
        } else {
            navbarMenuBlock.classList.remove('visible'); // 移除类以重置
        }
    };

    // 初始更新
    updateMenuDisplay();

    // 监听输入状态变化
    menuToggle.addEventListener('change', updateMenuDisplay);
});