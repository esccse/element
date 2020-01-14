export default {
    name: 'app',
    data () {
        return {
            parentPath: 'home1',
            loading: {loading: false},
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
    methods: {
        recoveryNavTab() { // 刷新时回复nav及tab
            const openedNavArr = JSON.parse(window.localStorage.getItem('openedNavArr'));
            if (openedNavArr && openedNavArr.length) {
                this.openedNavArr = openedNavArr;
                const tab = this.openedNavArr.find(v => v.path === window.localStorage.getItem('defaultActive'));
                if (tab) {
                    this.curNav = tab.name;
                    this.defaultActive = tab.path;
                }
            }
        },
        handleSelect(path) {
            this.$router.push({path: `\/${this.parentPath}\/${path}`})
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
            this.$router.push({path: `\/${this.parentPath}\/${tab.$attrs.path}`})
            this.setNavAcitve(tab.$attrs.path);
        },
        setNavAcitve(path) {
            // const dom = $('.el-menu-item').removeClass('is-active').filter((i, v) => v.innerHTML.includes(name));
            // if (dom.length) {
            //     dom.addClass('is-active')
            // }
            this.defaultActive = path
        },
        addHashEven() {
            window.onhashchange = e => { // onpopstate
                const parentIndex = e.newURL.split('/').findIndex(v => v === this.parentPath);
                const path = e.newURL.split('/')[parentIndex + 1];
                const nav = this.navArr.find(v => v.path === path);
                if (nav) {
                    this.defaultActive = nav.path;this.curNav = nav.name;
                }
            },
        }
    },
    watch: {
        openedNavArr(val) {
            window.localStorage.setItem('openedNavArr', JSON.stringify(val));
        },
        defaultActive(val) {
            window.localStorage.setItem('defaultActive', val);
        }
    },
    mounted() {
        window.__loading = this.loading
        this.$nextTick(() => {
            this.recoveryNavTab();
            this.addHashEven();
            setTimeout(() => $('.content-wrap').css('height', `${document.documentElement.clientHeight - 50}px`), 30);
        })
    },
    destroyed() { // deactivated
        window.onhashchange = null;
        window.onpopstate = null;
    },
};
