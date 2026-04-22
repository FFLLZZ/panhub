// 插件名称常量
export const ALL_PLUGIN_NAMES = [
  "pansearch",
  "qupansou",
  "panta",
  "hunhepan",
  "jikepan",
  "labi",
  "thepiratebay",
  "duoduo",
  "xuexizhinan",
  "nyaa",
] as const;

// 平台信息配置 — icon 为 inline SVG
export const PLATFORM_INFO: Record<
  string,
  { name: string; color: string; icon: string }
> = {
  aliyun: {
    name: "阿里云盘",
    color: "#7c3aed",
    icon: `<svg viewBox="0 0 24 24" width="18" height="18" fill="none"><path d="M6.5 19a4.5 4.5 0 0 1-.5-8.97 7 7 0 0 1 13.86 1.02A3.5 3.5 0 0 1 19 18.5H6.5z" fill="white" opacity=".9"/><circle cx="12" cy="13" r="2" fill="#7c3aed"/></svg>`,
  },
  quark: {
    name: "夸克网盘",
    color: "#6366f1",
    icon: `<svg viewBox="0 0 24 24" width="18" height="18" fill="none"><rect x="3" y="3" width="18" height="18" rx="5" fill="white" opacity=".9"/><circle cx="12" cy="12" r="4" fill="#6366f1"/><circle cx="12" cy="12" r="1.5" fill="white"/></svg>`,
  },
  baidu: {
    name: "百度网盘",
    color: "#2563eb",
    icon: `<svg viewBox="0 0 24 24" width="18" height="18" fill="none"><path d="M7 4a3 3 0 0 0-2.83 4.02A3.5 3.5 0 0 0 4 14.5h2a5.5 5.5 0 0 0 10.37-2.5A4 4 0 0 0 17 4H7z" fill="white" opacity=".9"/><circle cx="9" cy="8" r="1.2" fill="#2563eb"/><circle cx="14" cy="8" r="1.2" fill="#2563eb"/></svg>`,
  },
  "115": {
    name: "115网盘",
    color: "#f59e0b",
    icon: `<svg viewBox="0 0 24 24" width="18" height="18" fill="none"><rect x="3" y="5" width="18" height="14" rx="3" fill="white" opacity=".9"/><path d="M8 10v4M11 9v6M14 10v4M17 9v6" stroke="#f59e0b" stroke-width="2" stroke-linecap="round"/></svg>`,
  },
  xunlei: {
    name: "迅雷云盘",
    color: "#fbbf24",
    icon: `<svg viewBox="0 0 24 24" width="18" height="18" fill="none"><path d="M13 2L4 14h6l-2 8 9-12h-6z" fill="white" opacity=".9"/></svg>`,
  },
  uc: {
    name: "UC网盘",
    color: "#ef4444",
    icon: `<svg viewBox="0 0 24 24" width="18" height="18" fill="none"><circle cx="12" cy="12" r="9" fill="white" opacity=".9"/><path d="M12 5v7l4 4" stroke="#ef4444" stroke-width="2.5" stroke-linecap="round"/></svg>`,
  },
  tianyi: {
    name: "天翼云盘",
    color: "#ec4899",
    icon: `<svg viewBox="0 0 24 24" width="18" height="18" fill="none"><path d="M6.5 19a4.5 4.5 0 0 1-.5-8.97 7 7 0 0 1 13.86 1.02A3.5 3.5 0 0 1 19 18.5H6.5z" fill="white" opacity=".9"/><path d="M9 14l3-3 3 3" stroke="#ec4899" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  },
  "123": {
    name: "123网盘",
    color: "#10b981",
    icon: `<svg viewBox="0 0 24 24" width="18" height="18" fill="none"><rect x="3" y="3" width="18" height="18" rx="4" fill="white" opacity=".9"/><path d="M8 16V8l4 8V8M16 8v8M14 8h4" stroke="#10b981" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  },
  mobile: {
    name: "移动云盘",
    color: "#0ea5e9",
    icon: `<svg viewBox="0 0 24 24" width="18" height="18" fill="none"><rect x="6" y="2" width="12" height="20" rx="3" fill="white" opacity=".9"/><circle cx="12" cy="18" r="1.5" fill="#0ea5e9"/></svg>`,
  },
  others: {
    name: "其他网盘",
    color: "#6b7280",
    icon: `<svg viewBox="0 0 24 24" width="18" height="18" fill="none"><circle cx="12" cy="12" r="9" fill="white" opacity=".9"/><circle cx="9" cy="10" r="1.5" fill="#6b7280"/><circle cx="15" cy="10" r="1.5" fill="#6b7280"/><path d="M8 15c1 1.5 3 2.5 4 2.5s3-1 4-2.5" stroke="#6b7280" stroke-width="1.5" stroke-linecap="round"/></svg>`,
  },
};

// 默认用户设置
export const DEFAULT_USER_SETTINGS = {
  enabledPlugins: [...ALL_PLUGIN_NAMES],
  concurrency: 4,
  pluginTimeoutMs: 5000,
} as const;

// 本地存储键名
export const STORAGE_KEYS = {
  settings: "panhub.settings",
  searchMode: "searchMode",
} as const;
