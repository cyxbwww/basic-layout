module.exports = {
  types: [
    { value: 'feat', name: 'feat: 新增功能' },
    { value: 'fix', name: 'fix: 修复bug' },
    { value: 'ui', name: 'ui: 更新ui' },
    { value: 'docs', name: 'docs: 文档变更' },
    { value: 'style', name: 'style: 代码格式（不影响功能，例如空格、分号等格式修正）' },
    { value: 'perf', name: 'perf: 性能优化' },
    { value: 'refactor', name: 'refactor: 代码重构（不包括 bug 修复、功能新增）' },
    { value: 'test', name: 'test: 添加、修改测试用例' },
    { value: 'chore', name: 'chore: 对构建过程或辅助工具和库的更改（不影响源文件、测试用例）' },
    { value: 'revert', name: 'revert: 回滚 commit' },
    { value: 'build', name: 'build: 构建流程、外部依赖变更（如升级 npm 包、修改 脚手架 配置等）' },
    { value: 'merge', name: 'merge: 合并分支' },
    { value: 'ci', name: 'ci: 修改 CI 配置、脚本' }
  ],
  // override the messages, defaults are as follows
  messages: {
    type: '请选择提交类型:',
    customScope: '请输入您修改的范围 (可选):',
    subject: '请简要描述提交 message (必填):\n',
    body: '请输入详细描述 (可选):',
    footer: '请输入要关闭的 ISSUE (可选):\n',
    confirmCommit: '确认使用以上信息提交？ (y/n/e/h)'
  },
  allowCustomScopes: true,
  skipQuestions: ['scope', 'body'],
  subjectLimit: 100,
  footerPrefix: 'ISSUE CLOSED:'
};
