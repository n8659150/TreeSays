<template>
    <div class="navbar flex">
        <!-- <el-menu :default-active="$route.name" class="el-menu-nav" mode="horizontal" @select="handleSelect" background-color="#fff" active-text-color="#1989fa">
            <div class="navWrapper">
                <div class="flex">
                    <span class="logo">树 说</span>
                </div>
                <div class="navMain flex">
                    <el-menu-item index="home" @click="toRouter('/home')">首页</el-menu-item>
                    <el-menu-item index="expose" @click="toRouter('/expose/home')">我要揭发</el-menu-item>
                    <el-menu-item index="hc" @click="toRouter('/hc/list')">求助中心</el-menu-item>
                    <el-menu-item index="4" @click="toRouter()">社区论坛</el-menu-item>
                    <el-menu-item index="5" @click="toRouter()">相关资讯</el-menu-item>
                    <el-menu-item index="6" @click="toRouter()">万人墙</el-menu-item>
                </div>
            </div>
        </el-menu> -->
        <el-menu :default-active="$route.name" mode="horizontal" @select="handleSelect">

                    <div class="navWrapper">
                    <span class="logo">树 说</span>
                    <el-menu-item index="Treesays" @click="toRouter('/home')">树洞一下</el-menu-item>
                    <el-menu-item index="Smzdm" @click="toRouter('/smzdm')">什么值得买</el-menu-item>
                    <el-menu-item index="3" @click="toRouter('')">代码秀</el-menu-item>
                    <el-menu-item index="4" @click="toRouter('')">相爱相杀</el-menu-item>
                    </div>

        </el-menu>
    </div>
</template>

<script>
import "./overwrite.css";
export default {
    name: "Navbar",
    data() {
        return {
            activeIndex: "1"
        };
    },
    methods: {
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
        },
        toRouter(path) {
            !path ? alert("敬请期待") : this.$router.push({ path });
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.flex {
    display: flex;
}
.navbar {
    height: 60px;
    align-items: center;
}
.navbar ul {
    width: 100%;
}
.navWrapper {
    display: flex;
    width: 960px;
    margin: 0 auto;
}
.logo {
    display: flex;
    font-size: 32px;
    font-weight: 400;
    color: #1989fa;
    align-items: center;
    margin-right: 65px;
}

.navWrapper .el-menu-item.is-active {
    background: none;
    color: #1989fa;
    border-bottom: 3px solid #1989fa;
}
.el-menu-nav {
    height: 60px;
    display: flex;
    flex: 1;
}
</style>
