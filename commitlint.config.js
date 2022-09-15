module.exports = {
  extends: ['@commitlint/config-conventional', 'cz'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat', // 新功能
        'fix', // 修补bug
        'ui', // 更新 ui
        'docs', // 文档
        'style', // 代码格式
        'perf', // 性能优化
        'refactor', // 重构
        'test', // 测试
        'chore', // 构建过程或辅助工具的变动
        'revert', // 回退
        'merge', // 合并分支
        'build', // 打包
        'ci' // 修改 CI 配置、脚本
      ]
    ],
    // <type> 格式 小写
    'type-case': [2, 'always', 'lower-case'],
    // <type> 不能为空
    'type-empty': [2, 'never'],
    // <scope> 范围可以为空
    'scope-empty': [0, 'never'],
    // <scope> 范围格式
    'scope-case': [0],
    // <subject> 主要 message 不能为空
    'subject-empty': [2, 'never'],
    // <subject> 以什么为结束标志，禁用
    'subject-full-stop': [0, 'never'],
    // <subject> 格式，禁用
    'subject-case': [0, 'never'],
    // <body> 以空行开头
    'body-leading-blank': [1, 'always'],
    'header-max-length': [0, 'always', 72]
  }
};
