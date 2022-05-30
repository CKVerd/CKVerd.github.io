module.exports = {
  publicPath: '/portfolio/',
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "@/assets/style/_global.scss";
        `
      }
    }
  }
};