<template>
  <div class="newwalletresult-wrap">
    <el-page-header @back="goBack" content="创建钱包"></el-page-header>
    <el-divider></el-divider>
    <div>
      <span>钱包创建成功，钱包助记词为：</span>
      <el-input type="textarea" v-model="form.memwd"></el-input>
      <span>助记词是您恢复钱包的唯一手段，请牢记助记词，并确保助记词的安全。</span>
    </div>
    <br />
    <div>
      <el-button type="primary" @click="exportMemwd">导出助记词</el-button>
      <span>请勿使用在线服务保存助记词</span>
    </div>
    <br />
    <div>
      <el-button type="primary" @click="goBack" plain>返回</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        memwd: "zhujici",
      }
    };
  },
  methods: {
    exportMemwd() {
      console.log("exportMemwd!");
    },
    goBack() {
      console.log("goBack!");
    }
  }
};
</script>

<style lang="scss" scoped>
.newwalletresult-wrap {
  width: 308px;
  padding: 30px 20px;
}
</style>
