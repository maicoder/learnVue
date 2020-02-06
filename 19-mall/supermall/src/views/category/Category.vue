<template>
  <div id="category">
    <nav-bar class="nav-bar"><div slot="center">商品分类</div></nav-bar>
    <div class="content">
      <tab-menu :categories="categoryies" @selectItem="selectItem" />
      <scroll id="tab-content">

      </scroll>
    </div>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar';

  import TabMenu from './childComps/TabMenu';
  import TabContentCategory from './childComps/TabContentCategory';
  import TabContentDetail from './childComps/TabContentDetail';

  import TabControl from 'components/content/tabControl/TabControl';
  import Scroll from 'components/common/scroll/Scroll';

  import {getCategory, getSubcategory} from 'network/category';
  import {POP, NEW, SELL} from 'common/const';
  import {getSubcategoryDetail} from "../../network/category";

  export default {
    name: "Category",
    components: {
      Scroll,
      NavBar,
      TabMenu,
      TabControl,
      Scroll,
      TabContentDetail,
      TabContentCategory
    },
    data() {
      return {
        categoryies: [],
        categoryData: {},
        currentIndex: -1
      }
    },
    mounted() {
      // 1.请求分类数据
      this._getCategory();

      // 2.监听图片加载完成
      this.$bus.$on('imgLoad', () => {
        this.$refs.scroll.refresh()
      })
    },
    computed: {
      showSubcategory() {
        if (this.currentIndex === -1) return {}
        return this.categoryData[this.currentIndex].subcategories
      },
      showCategoryDetail() {
        if (this.currentIndex === -1) return []
        return this.categoryData[this.currentIndex].categoryDetail[this.currentType]
      }
    },
    methods: {
      _getCategory() {
        getCategory().then(res => {
          // 1.获取分类数据
          this.categories = res.data.category.list;

          // 初始化每个类别的子数据
          for (let i = 0; i < this.categories.length; i++) {
            this.categoryData[i] = {
              subcategories: {},
              categoryDetail: {
                'pop': [],
                'new': [],
                'sell': []
              }
            }
          }
          // 3.请求每一个分类的数据
          this._getSubcategories(0);
        })
      },
      _getSubcategories(index) {
        this.currentIndex = index;
        const mailKey = this.categories[index].maitKey;
        getSubcategory(mailKey).then(res => {
          this.categoryData[index].subcategories = res.data;
          this.categoryData = {...this.categoryData};
          this._getCategoryDetail(POP);
          this._getCategoryDetail(SELL);
          this._getCategoryDetail(NEW)
        })
      },
      _getCategoryDetail(type) {
        const miniWallKey = this.categories[this.currentIndex].miniWallkey;
        getSubcategoryDetail(miniWallKey).then(res => {
          this.categoryData[this.currentIndex].categoryDetail[type] = res;
          this.categoryData = {...this.categoryData};
        })
      },
      selectItem(index) {
        this._getSubcategories(index)
      }
    }
  }
</script>

<style scoped>
  #category {
    height: 100vh;
  }

  .nav-bar {
    background-color: var(--color-tint);
    font-weight: 700;
    color: #ffffff;
  }

  .content {
    position: absolute;
    left: 0;
    right: 0;
    top: 44px;
    bottom: 49px;

    display: flex;
  }

</style>
