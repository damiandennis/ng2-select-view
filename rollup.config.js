export default {
  entry: 'dist/select-view.module.js',
  dest: 'dist/bundles/ng2-select-view.umd.js',
  sourceMap: false,
  format: 'umd',
  moduleName: 'ng2.select.view',
  globals: {
    '@angular/core': 'ng.core',
    '@angular/forms': 'ng.forms',
    '@angular/common': 'ng.common'
  }
}
