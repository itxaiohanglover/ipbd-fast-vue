export interface ITheme {
	// 顶栏风格 [light、theme]
	headerStyle: string
	// 主题颜色
	primaryColor: string
	// 布局风格 [vertical、columns、transverse]
	layout: string
	// 开启标签页
	isTabsView: boolean
	// 开启标签页缓存
	isTabsCache: boolean
	// 标签页风格 [style-1、style-2]
	tabsStyle: string
}
