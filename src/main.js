document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('input.navbar-menu');
    const navbarMenuBlock = document.querySelector('.navbar-menu\\:block');
    const mobileNavbar = document.querySelector('.mobile-navbar');
    let isMobileNavbarVisible = false;
    let isMenuVisible = false;
    let resizeScheduled = false;

    // 检查可见性
    const checkMobileNavbarVisibility = () => {
        const newVisibility = mobileNavbar.offsetWidth > 0 && mobileNavbar.offsetHeight > 0; 
        if (newVisibility !== isMobileNavbarVisible) {
            isMobileNavbarVisible = newVisibility;
            return true;
        }
        return false;
    };

    // 更新菜单显示
    const toggleMenu = () => {
        if (isMobileNavbarVisible) {
            const shouldShow = menuToggle.checked;
            if (shouldShow !== isMenuVisible) {
                navbarMenuBlock.classList.toggle('visible', shouldShow);
                isMenuVisible = shouldShow;
            }
        }
    };

    // 防抖处理
    const debounce = (func, delay) => {
        let timeout;
        return function (...args) {
            clearTimeout(timeout);
            timeout = setTimeout(() => func.apply(this, args), delay);
        };
    };

    // 使用requestAnimationFrame
    const onResize = () => {
        if (!resizeScheduled) {
            resizeScheduled = true;
            requestAnimationFrame(() => {
                if (checkMobileNavbarVisibility()) {
                    toggleMenu();
                }
                resizeScheduled = false;
            });
        }
    };

    // 初始调用
    checkMobileNavbarVisibility();
    toggleMenu();

    // 监听切换按钮状态变化
    menuToggle.addEventListener('change', toggleMenu);

    // 使用防抖的resize监听
    window.addEventListener('resize', debounce(onResize, 100));
});
