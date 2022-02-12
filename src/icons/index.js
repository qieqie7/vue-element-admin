import SvgIcon from '@/components/SvgIcon'// svg component

// register globally

export function registerSvgIconComponent(vueApp) {
  vueApp.component('SvgIcon', SvgIcon)
}

// TODO: 这里不是很明白，看起来是想把icon注册到全局，但是好像 requireAll 只是返回了一个数组, 并没有在上面注册
const req = require.context('./svg', false, /\.svg$/)
const requireAll = requireContext => requireContext.keys().map(requireContext)
requireAll(req)
