<template>
    <div class="nav-container primary-menu">
        <div class="mobile-topbar-header">
            <div>
                <img src="../../assets/images/logo-icon.png" class="logo-icon" alt="logo icon">
            </div>
            <div>
                <h4 class="logo-text">Rukada</h4>
            </div>
            <div class="toggle-icon ms-auto"><i class='bx bx-arrow-to-left'></i>
            </div>
        </div>
        <nav class="navbar navbar-expand-xl w-100">
            <ul class="navbar-nav justify-content-start flex-grow-1 gap-1">
                <li class="nav-item dropdown">
                    <a href="javascript:;" class="nav-link dropdown-toggle dropdown-toggle-nocaret"
                        data-bs-toggle="dropdown">
                        <div class="parent-icon"><i class='bx bx-home-ci rcle'></i>
                        </div>
                        <div class="menu-title">Dashboard</div>
                    </a>
                    <ul class="dropdown-menu">
                        <li> <a class="dropdown-item" href="index.html"><i class="bx bx-right-arrow-alt"></i>Default</a>
                        </li>
                        <li> <a class="dropdown-item" href="index2.html"><i
                                    class="bx bx-right-arrow-alt"></i>Alternate</a>
                        </li>
                        <li> <a class="dropdown-item" href="index3.html"><i
                                    class="bx bx-right-arrow-alt"></i>Graphical</a>
                        </li>
                    </ul>
                </li>
                <li class="nav-item">
                    <router-link to="/trang-chu">
                        <a class="nav-link" href="/trang-chu">
                        <div class="parent-icon"><i class="fa-solid fa-house"></i>
                        </div>
                        <div class="menu-title">HomePage</div>
                    </a>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/san-pham">
                        <a class="nav-link" href="/san-pham">
                        <div class="parent-icon"><i class="fa-solid fa-list"></i>
                        </div>
                        <div class="menu-title">Product</div>
                    </a>
                    </router-link>
                    
                </li>
                <li class="nav-item">
                    <router-link to="/profile">
                        <a class="nav-link" href="/profile">
                        <div class="parent-icon"><i class="fa-solid fa-user"></i>
                        </div>
                        <div class="menu-title">Profile</div>
                    </a>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/happy_20_10">
                        <a class="nav-link" href="/happy_20_10">
                        <div class="parent-icon"><i class="fa-regular fa-snowflake"></i>
                        </div>
                        <div class="menu-title">Happy 20/10</div>
                    </a>
                    </router-link>
                </li>
                
            </ul>
        </nav>
    </div>
</template>
<script>
export default {

}
</script>
<style></style>