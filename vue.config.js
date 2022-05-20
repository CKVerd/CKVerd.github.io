module.exports = {
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