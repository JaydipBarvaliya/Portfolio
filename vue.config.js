module.exports = {
    chainWebpack: config => {
      
        config.module.rules.delete('eslint');
        config.module
              .rule("pdf")
              .test(/\.pdf$/)
              .use("file-loader")
              .loader("file-loader");
    },
    
}
