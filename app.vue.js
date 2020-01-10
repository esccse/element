
<script>
export default {
    name: 'app',
    data () {
        return {
            navArr: [
                {path: 'aaa', name: 'aaaName'},
                {path: 'bbb', name: 'bbbName'},
                {path: 'ccc', name: 'cccName'},
                {path: 'ddd', name: 'dddName'},
            ],
            curNav: '',
            defaultActive: '',
            openedNavArr: []
        };
    },
    watch: {
        openedNavArr(val) {
            window.localStorage.setItem('openedNavArr', JSON.stringify(val));
        }
    },
    mounted() {
        window.app = this;
        window.$$ = $;
        this.$nextTick(() => {
            this.recoveryNavTab();
        })
    },
    methods: {
        recoveryNavTab() { // 刷新时回复nav及tab
            const openedNavArr = JSON.parse(window.localStorage.getItem('openedNavArr'));
            if (openedNavArr && openedNavArr.length) {
                this.openedNavArr = openedNavArr;
                const tab = this.openedNavArr.find(v => v.path === window.location.hash.replace(/(#|\/)/g, ''));
                if (tab) {
                    this.curNav = tab.name;
                    this.defaultActive = tab.path;
                }
            }
        },
        handleSelect(path) {
            const nav = this.navArr.find(v => v.path === path);
            if (this.openedNavArr.find(v => v.path === nav.path)) {
                this.curNav = nav.name;
            } else {
                this.openedNavArr.push(nav);
                this.curNav = nav.name;
            }
        },
        tabRemove(name) {
            const navIndex = this.openedNavArr.findIndex(v => v.name === name);
            this.openedNavArr.splice(navIndex, 1);
            setTimeout(() => {
                const domArr = $('.el-tabs__item');
                if (this.openedNavArr.length) {
                    domArr[domArr.length -1].click();
                } else {
                    this.$router.push({path: '/'})
                    domArr[domArr.length -1].click();
                }
            }, 20)
        },
        tabClick(tab) {
            console.log(tab)
            this.$router.push({path: `/${tab.$attrs.path}`})
            this.setNavAcitve(tab.$attrs.path);
        },
        setNavAcitve(path) {
            // const dom = $('.el-menu-item').removeClass('is-active').filter((i, v) => v.innerHTML.includes(name));
            // if (dom.length) {
            //     dom.addClass('is-active')
            // }
            this.defaultActive = path
        }
    }
};
</script>

