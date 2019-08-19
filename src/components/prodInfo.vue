<template>
  <div class="prodInfo">
    <div v-if="Object.keys(Info).length > 0" class="prodInfoBox" @click="todetail">
      <div class="info-l">
        <img :src="Info.imageUrl">
      </div>
      <div class="info-c">
        <div class="c-title">{{Info.name || 'Apple Watch'}}</div>
        <div class="c-param">{{Param}}</div>
        <div class="c-price">
          <div :class="priceStyle ? 'listLeft' : 'left'">
            ￥
            <span class="linghtShow">{{Info.discountPrice}}</span>
            .00
          </div>
          <div class="right">x{{Info.count || 1}}</div>
        </div>
      </div>
    </div>
    <div v-if="UseSlot" class="boxBottom">
      <div class="slotLeft">
        <slot name="footerLeft"></slot>
      </div>
      <div class="slotRight">
        <slot name="footerRight"></slot>
      </div>
    </div>
  </div>
</template>

<script>
// import { Skeleton } from "vant";
import pimg from "../assets/img/prod_sm2.png";
export default {
  components: {
    // Skeleton
  },
  props: {
    Info: {
      type: Object,
      default: () => {
        return {};
      }
    },
    priceStyle: {
        type: Boolean,
        default: false
    },
    UseSlot: {
        type: Boolean,
        default: false
    }
  },
  computed: {
    Param () {
      return this.Info.model + '，' + this.Info.size + '，' + this.Info.shell + '，' + this.Info.band
    }
  },
  data() {
    return {
      pimg: pimg
    };
  },
  watch: {},
  created() {
  },
  beforeDestroy() {},
  methods: {
      todetail () {
          this.$emit('ToDetail')
      }
  }
};
</script>

<style scoped lang="scss">
.prodInfo {
    width: 100%;
    background-color: #fff;
    overflow: hidden;
  .prodInfoBox {
    width: 100%;
    padding: 15px;
    // background-color: #fff;
    display: flex;
    flex-direction: row;
    .info-l {
      width: 105px;
      height: 105px;
      @include border;
      img {
        width: 100%;
      }
    }
    .info-c {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      text-align: left;
      margin-left: 14px;
      .c-title {
        font-size: 15px;
        color: #333;
      }
      .c-param {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
        overflow: hidden;
        color: #a0a0a0;
        font-size: 12px;
        margin-top: 5px;
      }
      .c-price {
        margin-top: 11px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: baseline;
        .left {
            font-size: 11px;
          color: #ff6633;
          .linghtShow {
            font-size: 22px;
          }
        }
        .listLeft{
            color: #333;
            font-size: 11px;
          .linghtShow {
            font-size: 16px;
          }
        }
        .right {
          font-size: 15px;
          color: #333;
        }
      }
    }
  }
  .boxBottom{
      @include border-top();
        height: 50px;
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 10px 15px;
        .slotLeft{
            flex: 1;
            text-align: left;
        } .slotRight{
            flex: 1.5;
            text-align: right;
        }
    }
}
</style>
