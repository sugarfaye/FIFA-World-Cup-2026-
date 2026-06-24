// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: brown; icon-glyph: magic;
const CONFIG = {
  // manifest.json 的远程地址，用于加载各队头像 URL 列表
  manifestUrl: "https://raw.githubusercontent.com/sugarfaye/FIFA-World-Cup-2026-/main/manifest.json",
  // 本地缓存文件夹名称（存放 manifest 和头像图片）
  cacheFolder: "WorldCup2026WidgetAssets_FIX3",
  // 赛程卡最多显示几场比赛（建议 4，超出会截断）
  maxUpcoming: 4,
  // 小组件自动刷新间隔，单位：分钟
  refreshMinutes: 1,
};

const COLORS = {
  // 默认背景渐变起始色（深海蓝）
  bgTop: new Color("#10243d"),
  // 默认背景渐变结束色（深紫蓝）
  bgBottom: new Color("#1d1830"),
  // 卡片背景色（白色低透明度）
  card: new Color("#ffffff", 0.08),
  // 卡片边框色（天蓝低透明度）
  cardBorder: new Color("#60a5fa", 0.18),
  // 主文字色（纯白）
  text: Color.white(),
  // 次要文字色（白色 55% 透明度）
  muted: new Color("#ffffff", 0.55),
  // 更淡的辅助文字（白色 32% 透明度，用于"未开赛"等）
  faint: new Color("#ffffff", 0.32),
  // 强调色（天蓝）
  accent: new Color("#38bdf8"),
  // 直播状态红色
  live: new Color("#ff453a"),
  // 胜利绿色
  win: new Color("#34c759"),
  // 平局黄色
  draw: new Color("#ffcc00"),
};

const UI = {
  // ── 画布尺寸 ──────────────────────────────────────
  // 小组件渲染宽度（逻辑像素，medium 尺寸基准）
  widgetWidth: 1080,
  // 小组件渲染高度
  widgetHeight: 508,

  // ── 直播卡布局 ────────────────────────────────────
  // 直播卡顶部留白（LIVE 徽章上方）
  liveTopGap: 15,
  // LIVE 徽章到队名行的间距（负值=上移，让徽章与内容更近）
  liveBadgeToNamesGap: -100,
  // LIVE 徽章水平偏移量（正值右移）
  liveBadgeOffsetX: 20,
  // 直播卡左右内边距
  liveSidePadding: 10,

  // ── 头像 ──────────────────────────────────────────
  // 头像图片与比分块之间的间距
  avatarScoreGap: 1,
  // 头像实际绘制尺寸（像素）
  avatarSize: 125,
  // 头像容器尺寸（用于居中布局，通常与 avatarSize 相同）
  avatarBox: 125,
  // 头像容器顶部留白（负值=上移）
  avatarTopGap: -20,
  // 头像容器底部留白
  avatarBottomGap: 0,
  // 主队头像水平偏移（负值左移）
  homeAvatarOffsetX: -5,
  // 客队头像水平偏移（负值左移）
  awayAvatarOffsetX: -10,
  // 头像垂直偏移（负值上移）
  avatarOffsetY: -1,

  // ── 比分块 ────────────────────────────────────────
  // 比分块整体高度
  scoreBlockHeight: 144,
  // 比分面板宽度
  scorePanelWidth: 50,
  // 比分面板高度
  scorePanelHeight: 42,
  // 比分面板水平内边距
  scorePanelPadX: 10,
  // 比分面板垂直内边距
  scorePanelPadY: 4,
  // 比分面板圆角半径
  scorePanelRadius: 14,
  // 是否开启比分面板发光效果
  scoreGlow: true,
  // 发光效果颜色（十六进制，不含 #）
  scoreGlowColor: "#2ee6a6",
  // 发光效果透明度（0~1，越大越亮）
  scoreGlowOpacity: 0.02,
  // 发光效果扩散半径
  scoreGlowRadius: 126,
  // 两个比分数字之间的间距
  scoreNumberGap: 12,

  // ── LIVE 徽章 ─────────────────────────────────────
  // LIVE 徽章字号
  liveBadgeFont: 12,
  // LIVE 徽章水平内边距
  liveBadgePadX: 11,
  // LIVE 徽章垂直内边距
  liveBadgePadY: 4,
  // LIVE 徽章圆角半径
  liveBadgeRadius: 8,

  // ── 队名 & VS ─────────────────────────────────────
  // 比分块内队名字号
  teamNameFont: 10,
  // 队名文字宽度（超出自动缩小）
  teamNameWidth: 46,
  // 队名最小缩放比例（0~1）
  teamNameMinScale: 0.7,
  // 主队队名水平偏移
  homeTeamNameOffsetX: 0,
  // 客队队名水平偏移
  awayTeamNameOffsetX: 3,
  // VS 文字字号
  vsFont: 15,
  // VS 文字容器宽度
  vsWidth: 25,
  // VS 文字上方间距
  vsTopGap: 0,
  // VS 文字下方间距
  vsBottomGap: 0,
  // VS 文字水平偏移（负值左移）
  vsOffsetX: -5,
  // 队名到比分面板之间的间距
  namesToScoreGap: 10,
  // 比分数字字号
  scoreFont: 36,
  // 比分中间横杠字号
  scoreDashFont: 18,

  // ── 赛程卡布局 ────────────────────────────────────
  // 赛程卡左内边距
  schedulePaddingLeft: 17,
  // 赛程卡右内边距
  schedulePaddingRight: 16,
  // 每行赛程的宽度
  scheduleRowWidth: 330,
  // 每行赛程的高度
  scheduleRowHeight: 24,

  // ── 直播卡背景色 ──────────────────────────────────
  // 直播卡背景渐变起始色（深蓝）
  liveBgTop: new Color("#102640"),
  // 直播卡背景渐变结束色（深紫）
  liveBgBottom: new Color("#281c36"),
  // 斜线条纹颜色（白色超低透明度，增加质感）
  stripe: new Color("#ffffff", 0.035),

  // ── 赛程卡背景色 ──────────────────────────────────
  // 赛程卡背景渐变起始色
  scheduleBgTop: new Color("#111b31"),
  // 赛程卡背景渐变结束色
  scheduleBgBottom: new Color("#10182c"),

  // ── 赛程卡组件色 ──────────────────────────────────
  // 比分面板背景色
  panel: new Color("#101726", 0.72),
  // 赛程行背景色（白色低透明度）
  scheduleRow: new Color("#ffffff", 0.055),
  // 赛程行边框色（蓝色低透明度，暂未启用）
  scheduleBorder: new Color("#6b8dc9", 0.22),

  // ── 比分结果颜色 ──────────────────────────────────
  // 胜利比分颜色（绿）
  scoreWin: new Color("#25d487"),
  // 失利比分颜色（红）
  scoreLose: new Color("#ff626d"),
  // 平局比分颜色（黄）
  scoreDraw: new Color("#ffd21f"),

  // ── 其他 UI 色 ────────────────────────────────────
  // LIVE 徽章背景红色
  liveBadge: new Color("#e83f49"),
  // 标题奖杯图标颜色（金色）
  trophy: new Color("#ffd11f"),
  // VS 文字颜色（白色低透明度）
  vs: new Color("#ffffff", 0.38),
};

const FLAGS = {
  "墨西哥": "🇲🇽", "南非": "🇿🇦", "韩国": "🇰🇷", "捷克": "🇨🇿",
  "加拿大": "🇨🇦", "波黑": "🇧🇦", "卡塔尔": "🇶🇦", "瑞士": "🇨🇭",
  "巴西": "🇧🇷", "摩洛哥": "🇲🇦", "海地": "🇭🇹", "苏格兰": "🏴",
  "美国": "🇺🇸", "巴拉圭": "🇵🇾", "澳大利亚": "🇦🇺", "土耳其": "🇹🇷",
  "德国": "🇩🇪", "库拉索": "🇨🇼", "科特迪瓦": "🇨🇮", "厄瓜多尔": "🇪🇨",
  "荷兰": "🇳🇱", "日本": "🇯🇵", "瑞典": "🇸🇪", "突尼斯": "🇹🇳",
  "比利时": "🇧🇪", "埃及": "🇪🇬", "伊朗": "🇮🇷", "新西兰": "🇳🇿",
  "西班牙": "🇪🇸", "佛得角": "🇨🇻", "沙特阿拉伯": "🇸🇦", "乌拉圭": "🇺🇾",
  "法国": "🇫🇷", "伊拉克": "🇮🇶", "挪威": "🇳🇴", "塞内加尔": "🇸🇳",
  "阿根廷": "🇦🇷", "奥地利": "🇦🇹", "约旦": "🇯🇴", "阿尔及利亚": "🇩🇿",
  "葡萄牙": "🇵🇹", "乌兹别克斯坦": "🇺🇿", "哥伦比亚": "🇨🇴", "刚果（金）": "🇨🇩",
  "英格兰": "🏴", "加纳": "🇬🇭", "巴拿马": "🇵🇦", "克罗地亚": "🇭🇷",
};

const ESPN_NAME_MAP = {
  "Mexico": "墨西哥",
  "South Africa": "南非",
  "South Korea": "韩国",
  "Korea Republic": "韩国",
  "Czechia": "捷克",
  "Czech Republic": "捷克",
  "Canada": "加拿大",
  "Bosnia-Herzegovina": "波黑",
  "Bosnia and Herzegovina": "波黑",
  "Qatar": "卡塔尔",
  "Switzerland": "瑞士",
  "Brazil": "巴西",
  "Morocco": "摩洛哥",
  "Haiti": "海地",
  "Scotland": "苏格兰",
  "United States": "美国",
  "USA": "美国",
  "Paraguay": "巴拉圭",
  "Australia": "澳大利亚",
  "Türkiye": "土耳其",
  "Turkey": "土耳其",
  "Germany": "德国",
  "Curaçao": "库拉索",
  "Curacao": "库拉索",
  "Ivory Coast": "科特迪瓦",
  "Côte d'Ivoire": "科特迪瓦",
  "Ecuador": "厄瓜多尔",
  "Netherlands": "荷兰",
  "Japan": "日本",
  "Sweden": "瑞典",
  "Tunisia": "突尼斯",
  "Belgium": "比利时",
  "Egypt": "埃及",
  "Iran": "伊朗",
  "New Zealand": "新西兰",
  "Spain": "西班牙",
  "Cape Verde": "佛得角",
  "Saudi Arabia": "沙特阿拉伯",
  "Uruguay": "乌拉圭",
  "France": "法国",
  "Iraq": "伊拉克",
  "Norway": "挪威",
  "Senegal": "塞内加尔",
  "Argentina": "阿根廷",
  "Austria": "奥地利",
  "Jordan": "约旦",
  "Algeria": "阿尔及利亚",
  "Portugal": "葡萄牙",
  "Uzbekistan": "乌兹别克斯坦",
  "Colombia": "哥伦比亚",
  "Congo DR": "刚果（金）",
  "DR Congo": "刚果（金）",
  "England": "英格兰",
  "Ghana": "加纳",
  "Panama": "巴拿马",
  "Croatia": "克罗地亚",
};

const STATIC_FIXTURES = [
  ["A", "墨西哥", "南非"], ["A", "韩国", "捷克"],
  ["B", "加拿大", "波黑"], ["B", "卡塔尔", "瑞士"],
  ["C", "巴西", "摩洛哥"], ["C", "海地", "苏格兰"],
  ["D", "美国", "巴拉圭"], ["D", "澳大利亚", "土耳其"],
  ["E", "德国", "库拉索"], ["E", "科特迪瓦", "厄瓜多尔"],
  ["F", "荷兰", "日本"], ["F", "瑞典", "突尼斯"],
  ["G", "比利时", "埃及"], ["G", "伊朗", "新西兰"],
  ["H", "西班牙", "佛得角"], ["H", "沙特阿拉伯", "乌拉圭"],
  ["I", "法国", "伊拉克"], ["I", "挪威", "塞内加尔"],
  ["J", "阿根廷", "奥地利"], ["J", "约旦", "阿尔及利亚"],
  ["K", "葡萄牙", "乌兹别克斯坦"], ["K", "哥伦比亚", "刚果（金）"],
  ["L", "英格兰", "加纳"], ["L", "巴拿马", "克罗地亚"],
];

const widget = new ListWidget();
widget.backgroundGradient = makeBackground(UI.liveBgTop, UI.liveBgBottom);
widget.setPadding(0, 0, 0, 0);
widget.refreshAfterDate = new Date(Date.now() + CONFIG.refreshMinutes * 60 * 1000);
widget.url = "scriptable:///run?scriptName=" + encodeURIComponent(Script.name());

try {
  const manifest = await loadManifest();
  // 恢复真实的线上数据拉取逻辑
  const data = config.runsInApp ? await chooseDebugData() : await fetchMatchData();

  if (data.live && data.live.length > 0) {
    if (data.live.length === 1) {
      await renderScoreboardCard(widget, manifest, data.live[0]);
    } else {
      await renderDualScoreboardCard(widget, manifest, data.live);
    }
  } else {
    renderScheduleCard(widget, data.matches);
  }
} catch (error) {
  renderError(widget, error);
}

if (config.runsInApp) {
  await widget.presentMedium();
}
Script.setWidget(widget);
Script.complete();

// ─────────────────────────────────────────────
// 背景 / 工具
// ─────────────────────────────────────────────

function makeBackground(topColor, bottomColor) {
  const gradient = new LinearGradient();
  gradient.locations = [0, 1];
  gradient.colors = [topColor || COLORS.bgTop, bottomColor || COLORS.bgBottom];
  return gradient;
}

function makeStripedBackground() {
  const ctx = new DrawContext();
  ctx.size = new Size(UI.widgetWidth, UI.widgetHeight);
  ctx.opaque = false;
  ctx.respectScreenScale = true;

  ctx.setFillColor(UI.liveBgTop);
  ctx.fillRect(new Rect(0, 0, UI.widgetWidth, UI.widgetHeight));

  ctx.setFillColor(new Color("#1e2035", 0.92));
  ctx.fillRect(new Rect(UI.widgetWidth * 0.45, 0, UI.widgetWidth * 0.55, UI.widgetHeight));

  ctx.setStrokeColor(UI.stripe);
  ctx.setLineWidth(2);
  for (let x = -UI.widgetHeight; x < UI.widgetWidth + UI.widgetHeight; x += 14) {
    const path = new Path();
    path.move(new Point(x, UI.widgetHeight));
    path.addLine(new Point(x + UI.widgetHeight, 0));
    ctx.addPath(path);
    ctx.strokePath();
  }

  return ctx.getImage();
}

// ─────────────────────────────────────────────
// 调试入口
// ─────────────────────────────────────────────

async function chooseDebugData() {
  // 实时调试模式：直接跳过菜单，立刻展示两场比赛的预览！
  return { 
    live: [
      makeDemoLive("阿根廷", "2", "法国", "1", "75'"), 
      makeDemoLive("巴西", "1", "摩洛哥", "1", "60'")
    ], 
    matches: [] 
  };
}

function makeDemoLive(homeTeam, homeScore, awayTeam, awayScore, minute) {
  return {
    homeTeam,
    awayTeam,
    homeScore,
    awayScore,
    minute,
    homeEvents: homeScore === "0" ? "" : "23', 52'",
    awayEvents: awayScore === "0" ? "" : "41'",
  };
}

// ─────────────────────────────────────────────
// 数据加载
// ─────────────────────────────────────────────

async function loadManifest() {
  const fm = FileManager.local();
  const cacheDir = getCacheDir(fm);
  const cachePath = fm.joinPath(cacheDir, "manifest.json");
  const maxAge = 6 * 60 * 60 * 1000;

  if (fm.fileExists(cachePath)) {
    const modified = fm.modificationDate(cachePath);
    if (modified && Date.now() - modified.getTime() < maxAge) {
      return JSON.parse(fm.readString(cachePath));
    }
  }

  const req = new Request(CONFIG.manifestUrl);
  const manifest = await req.loadJSON();
  fm.writeString(cachePath, JSON.stringify(manifest));
  return manifest;
}

function getCacheDir(fm) {
  const dir = fm.joinPath(fm.documentsDirectory(), CONFIG.cacheFolder);
  if (!fm.fileExists(dir)) {
    fm.createDirectory(dir, true);
  }
  return dir;
}

async function fetchMatchData() {
  try {
    const today = new Date();
    const start = new Date(today.getTime() - 24 * 60 * 60 * 1000);
    const end = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);
    const df = new DateFormatter();
    df.dateFormat = "yyyyMMdd";
    const url = "https://site.api.espn.com/apis/site/v2/sports/soccer/fifa.world/scoreboard?dates="
      + df.string(start) + "-" + df.string(end) + "&_=" + Date.now();
    const res = await new Request(url).loadJSON();
    return parseEspn(res);
  } catch (error) {
    return { live: [], matches: makeStaticUpcoming().slice(0, CONFIG.maxUpcoming) };
  }
}

// ─────────────────────────────────────────────
// ESPN 数据解析
// ✅ Fix 1：todayMatches 改用 m.day === "今天"
// ✅ Fix 4：今日全部结束后，保留今日结果1小时再切换明日预告
//           窗口 = 最晚一场开球时间 + 90分钟正赛 + 15分钟中场 + 15分钟伤停 + 60分钟缓冲
// ─────────────────────────────────────────────

function parseEspn(res) {
  const matches = [];
  const live = [];

  for (const event of res.events || []) {
    const comp = event.competitions && event.competitions[0];
    if (!comp) continue;
    const home = comp.competitors.find((team) => team.homeAway === "home");
    const away = comp.competitors.find((team) => team.homeAway === "away");
    if (!home || !away) continue;

    const homeTeam = normalizeTeamName(home.team.name || home.team.shortDisplayName);
    const awayTeam = normalizeTeamName(away.team.name || away.team.shortDisplayName);
    if (!homeTeam || !awayTeam) continue;

    const state = event.status.type.state;
    const eventDate = new Date(event.date);

    if (state === "in") {
      live.push({
        homeTeam,
        awayTeam,
        homeScore: String(home.score || "0"),
        awayScore: String(away.score || "0"),
        minute: displayMinute(event.status),
        homeEvents: scoringEvents(comp, home.team.id),
        awayEvents: scoringEvents(comp, away.team.id),
      });
    } else if (state === "post" || state === "pre") {
      matches.push({
        homeTeam,
        awayTeam,
        day: dayLabel(eventDate),
        dateText: monthDayLabel(eventDate),
        time: timeLabel(eventDate),
        state,
        homeScore: state === "post" ? String(home.score || "0") : null,
        awayScore: state === "post" ? String(away.score || "0") : null,
        _eventTimestamp: eventDate.getTime(), // ✅ 用于切换窗口计算
      });
    }
  }

  // ✅ Fix 1：直接用 m.day === "今天" 过滤今日比赛
  const todayMatches = matches.filter((m) => m.day === "今天");
  const todayPost    = todayMatches.filter((m) => m.state === "post");
  const todayPre     = todayMatches.filter((m) => m.state === "pre");

  let displayMatches;

  if (todayMatches.length === 0) {
    // 今天没有任何比赛 → 直接显示下一轮预告
    displayMatches = sameFirstDay(matches.filter((m) => m.state === "pre"));

  } else if (todayPre.length > 0) {
    // 今天还有未开赛的比赛 → 显示今天全部（含已结束 + 未开赛）
    displayMatches = todayMatches;

  } else {
    // ✅ Fix 4：今天全部结束 → 判断是否还在保留窗口内
    // 窗口 = 最晚一场开球时间 + 90（正赛）+ 15（中场）+ 15（伤停）+ 60（缓冲）= 180分钟
    const lastTimestamp = Math.max(...todayPost.map((m) => m._eventTimestamp));
    const cutoff = lastTimestamp + 180 * 60 * 1000;

    if (Date.now() < cutoff) {
      // 还在窗口内 → 继续显示今日结果
      displayMatches = todayPost;
    } else {
      // 窗口已过 → 切换到下一轮预告
      displayMatches = sameFirstDay(matches.filter((m) => m.state === "pre"));
    }
  }

  return {
    live,
    matches: displayMatches.slice(0, CONFIG.maxUpcoming),
  };
}

function normalizeTeamName(name) {
  return ESPN_NAME_MAP[name] || null;
}

function displayMinute(status) {
  const text = status.displayClock || status.type.shortDetail || "";
  const typeName = status.type.name || "";

  const isHalftime =
    /^(StatusHalftime|halftime)$/i.test(typeName) ||
    /^(HT|Half\s*Time|中场休息)$/i.test(text.trim());

  if (isHalftime) return "中场休息";
  if (status.type.state === "post") return "全场结束";
  return text.includes("'") ? text : text + "'";
}

function scoringEvents(comp, teamId) {
  const events = [];
  for (const detail of comp.details || []) {
    if (detail.scoringPlay && detail.team && detail.team.id === teamId) {
      events.push(detail.clock.displayValue);
    }
  }
  return events.join(", ");
}

function sameFirstDay(matches) {
  if (matches.length === 0) return [];
  const day = matches[0].day;
  return matches.filter((match) => match.day === day);
}

// ─────────────────────────────────────────────
// 日期 / 时间工具
// ─────────────────────────────────────────────

function dayLabel(date) {
  const today = ymd(new Date());
  const tomorrow = ymd(new Date(Date.now() + 24 * 60 * 60 * 1000));
  const value = ymd(date);
  if (value === today) return "今天";
  if (value === tomorrow) return "明天";
  const df = new DateFormatter();
  df.dateFormat = "MM-dd";
  return df.string(date);
}

function monthDayLabel(date) {
  const df = new DateFormatter();
  df.dateFormat = "M月d日";
  return df.string(date);
}

function ymd(date) {
  const df = new DateFormatter();
  df.dateFormat = "yyyyMMdd";
  return df.string(date);
}

function timeLabel(date) {
  const df = new DateFormatter();
  df.useShortTimeStyle();
  return df.string(date);
}

function makeStaticUpcoming() {
  return STATIC_FIXTURES.map((item, index) => ({
    group: item[0],
    homeTeam: item[1],
    awayTeam: item[2],
    day: index < 4 ? "今天" : "赛程",
    dateText: monthDayLabel(new Date()),
    time: ["03:00", "06:00", "09:00", "12:00"][index % 4],
    state: "pre",
  }));
}

// ─────────────────────────────────────────────
// 直播卡
// ─────────────────────────────────────────────

async function renderScoreboardCard(w, manifest, match) {
  try {
    w.backgroundImage = makeStripedBackground();
  } catch (_) {
    w.backgroundGradient = makeBackground(UI.liveBgTop, UI.liveBgBottom);
  }
  const homeScore = Number(match.homeScore);
  const awayScore = Number(match.awayScore);
  const homeEmotion = scoreEmotion(homeScore, awayScore);
  const awayEmotion = scoreEmotion(awayScore, homeScore);

  w.addSpacer(UI.liveTopGap);
  addLiveBadge(w, match.minute);
  w.addSpacer(UI.liveBadgeToNamesGap);

  const row = w.addStack();
  row.layoutHorizontally();
  row.centerAlignContent();
  row.setPadding(0, UI.liveSidePadding, 0, UI.liveSidePadding);

  await addHeroAvatar(row, manifest, match.homeTeam, homeEmotion, "home");
  row.addSpacer(UI.avatarScoreGap);
  addScoreBlock(row, match);
  row.addSpacer(UI.avatarScoreGap);
  await addHeroAvatar(row, manifest, match.awayTeam, awayEmotion, "away");
}

async function renderDualScoreboardCard(w, manifest, liveMatches) {
  try {
    w.backgroundImage = makeStripedBackground();
  } catch (_) {
    w.backgroundGradient = makeBackground(UI.liveBgTop, UI.liveBgBottom);
  }

  w.addSpacer(); // 顶部弹性空白，用来把内容往下推居中

  const container = w.addStack();
  container.layoutHorizontally();
  container.centerAlignContent();

  const match1 = liveMatches[0];
  const match2 = liveMatches[1] || liveMatches[0]; // fallback if length 1 somehow hits here

  await renderHalfMatch(container, manifest, match1);

  // （这里原本是竖线，现已移除）
  container.addSpacer(10); // 可以加一点透明间距代替竖线

  await renderHalfMatch(container, manifest, match2);

  w.addSpacer(); // 底部弹性空白
}

async function renderHalfMatch(parent, manifest, match) {
  const col = parent.addStack();
  col.layoutVertically();
  col.centerAlignContent();
  // 左右内边距改小，因为真实屏幕很窄
  col.setPadding(0, 6, 0, 6);

  // 0. LIVE 徽章 (LIVE Badge)
  const badgeRow = col.addStack();
  badgeRow.layoutHorizontally();
  badgeRow.addSpacer();
  const badge = badgeRow.addStack();
  badge.backgroundColor = UI.liveBadge;
  badge.cornerRadius = 6;
  badge.setPadding(2, 6, 2, 6); // 比单屏的小一点
  const badgeText = badge.addText(liveBadgeText(match.minute));
  badgeText.font = Font.heavySystemFont(9);
  badgeText.textColor = Color.white();
  badgeRow.addSpacer();

  col.addSpacer(6); // 徽章和国家名字的间距
  
  // 1. 国家名字 (Team Names)
  const namesRow = col.addStack();
  namesRow.layoutHorizontally();
  namesRow.centerAlignContent();
  namesRow.addSpacer();
  addCompactTeamName(namesRow, match.homeTeam, UI.homeTeamNameOffsetX);
  addVsText(namesRow);
  addCompactTeamName(namesRow, match.awayTeam, UI.awayTeamNameOffsetX);
  namesRow.addSpacer();

  col.addSpacer(6);

  // 2. 发光比分面板 (Compact Score Panel)
  const scoreRow = col.addStack();
  scoreRow.layoutHorizontally();
  scoreRow.centerAlignContent();
  scoreRow.addSpacer();
  
  // 临时覆盖全局宽度，确保发光背景图也能跟着一起缩小！
  const origScorePanelWidth = UI.scorePanelWidth;
  UI.scorePanelWidth = 90; // <-- 如果你想调宽度，修改这里的 90 即可生效！

  const scorePanel = scoreRow.addStack();
  scorePanel.layoutHorizontally();
  scorePanel.centerAlignContent();
  if (UI.scoreGlow) {
    scorePanel.backgroundImage = makeScorePanelImage();
  } else {
    scorePanel.backgroundColor = UI.panel;
  }
  scorePanel.cornerRadius = UI.scorePanelRadius;
  scorePanel.setPadding(UI.scorePanelPadY, UI.scorePanelPadX, UI.scorePanelPadY, UI.scorePanelPadX);
  scorePanel.size = new Size(UI.scorePanelWidth, UI.scorePanelHeight);
  
  addScoreNumber(scorePanel, match.homeScore, scoreColor(Number(match.homeScore), Number(match.awayScore)));
  scorePanel.addSpacer(8); // 比分数字间距
  const dash = scorePanel.addText("-");
  dash.font = Font.heavySystemFont(UI.scoreDashFont);
  dash.textColor = UI.vs;
  scorePanel.addSpacer(8);
  addScoreNumber(scorePanel, match.awayScore, scoreColor(Number(match.awayScore), Number(match.homeScore)));
  
  // 恢复全局宽度，不影响单场比赛的样式
  UI.scorePanelWidth = origScorePanelWidth;

  scoreRow.addSpacer();

  col.addSpacer(8);

  // 3. 球星头像 (Avatars)
  const avatarsRow = col.addStack();
  avatarsRow.layoutHorizontally();
  avatarsRow.centerAlignContent();
  avatarsRow.addSpacer();

  const hEmotion = scoreEmotion(Number(match.homeScore), Number(match.awayScore));
  const aEmotion = scoreEmotion(Number(match.awayScore), Number(match.homeScore));

  const origAvatarSize = UI.avatarSize;
  const origAvatarBox = UI.avatarBox;
  
  // 因为一个屏幕要放 4 个头像，尺寸必须大幅缩小
  UI.avatarSize = 55;
  UI.avatarBox = 55;

  await addHeroAvatar(avatarsRow, manifest, match.homeTeam, hEmotion, "home");
  avatarsRow.addSpacer(12); // 头像间距也缩小
  await addHeroAvatar(avatarsRow, manifest, match.awayTeam, aEmotion, "away");

  UI.avatarSize = origAvatarSize;
  UI.avatarBox = origAvatarBox;

  avatarsRow.addSpacer();

  col.addSpacer(6); // 头像和更新时间之间的间距

  // 4. 更新时间 (Updated Time)
  const timeRow = col.addStack();
  timeRow.layoutHorizontally();
  timeRow.centerAlignContent();
  timeRow.addSpacer();
  const df = new DateFormatter();
  df.useShortTimeStyle();
  const updatedText = timeRow.addText("⟳ " + df.string(new Date()));
  updatedText.font = Font.systemFont(8);
  updatedText.textColor = new Color("#ffffff", 0.22);
  timeRow.addSpacer();
}

function addLiveBadge(w, minute) {
  const row = w.addStack();
  row.addSpacer();
  if (UI.liveBadgeOffsetX > 0) row.addSpacer(UI.liveBadgeOffsetX);
  const badge = row.addStack();
  badge.backgroundColor = UI.liveBadge;
  badge.cornerRadius = UI.liveBadgeRadius;
  badge.setPadding(UI.liveBadgePadY, UI.liveBadgePadX, UI.liveBadgePadY, UI.liveBadgePadX);
  const text = badge.addText(liveBadgeText(minute));
  text.font = Font.heavySystemFont(UI.liveBadgeFont);
  text.textColor = Color.white();
  text.lineLimit = 1;
  if (UI.liveBadgeOffsetX < 0) row.addSpacer(Math.abs(UI.liveBadgeOffsetX));
  row.addSpacer();
}

function liveBadgeText(minute) {
  const value = String(minute || "").replace("'", "");
  if (/^\d+$/.test(value)) return value + "' LIVE";
  return value || "LIVE";
}

async function addHeroAvatar(row, manifest, teamName, emotion, side) {
  const box = row.addStack();
  box.layoutVertically();
  box.size = new Size(UI.avatarBox, UI.avatarBox);
  box.centerAlignContent();
  if (UI.avatarTopGap > 0) box.addSpacer(UI.avatarTopGap);
  const imageRow = box.addStack();
  imageRow.layoutHorizontally();
  imageRow.centerAlignContent();
  imageRow.addSpacer();
  const image = await loadAvatar(manifest, teamName, emotion);
  if (image) {
    const avatar = imageRow.addImage(makeAvatarCanvas(image, side));
    avatar.imageSize = new Size(UI.avatarBox, UI.avatarBox);
  } else {
    const flag = imageRow.addText(FLAGS[teamName] || "⚽");
    flag.font = Font.systemFont(64);
  }
  imageRow.addSpacer();
  if (UI.avatarBottomGap > 0) box.addSpacer(UI.avatarBottomGap);
}

function makeAvatarCanvas(image, side) {
  const ctx = new DrawContext();
  ctx.size = new Size(UI.avatarBox, UI.avatarBox);
  ctx.opaque = false;
  ctx.respectScreenScale = true;

  const imgW = image.size.width;
  const imgH = image.size.height;
  const ratio = imgW / imgH;

  let drawW, drawH;
  if (ratio >= 1) {
    drawW = UI.avatarSize;
    drawH = UI.avatarSize / ratio;
  } else {
    drawH = UI.avatarSize;
    drawW = UI.avatarSize * ratio;
  }

  const offsetX = side === "away" ? UI.awayAvatarOffsetX : UI.homeAvatarOffsetX;
  const x = (UI.avatarBox - drawW) / 2 + offsetX;
  const y = (UI.avatarBox - drawH) / 2 + UI.avatarOffsetY;
  ctx.drawImageInRect(image, new Rect(x, y, drawW, drawH));
  return ctx.getImage();
}

function addScoreBlock(row, match) {
  const col = row.addStack();
  col.layoutVertically();
  col.centerAlignContent();
  col.size = new Size(UI.scorePanelWidth, UI.scoreBlockHeight);

  const names = col.addStack();
  names.centerAlignContent();
  addCompactTeamName(names, match.homeTeam, UI.homeTeamNameOffsetX);
  addVsText(names);
  addCompactTeamName(names, match.awayTeam, UI.awayTeamNameOffsetX);

  col.addSpacer(UI.namesToScoreGap);
  const scorePanel = col.addStack();
  scorePanel.layoutHorizontally();
  scorePanel.centerAlignContent();
  if (UI.scoreGlow) {
    scorePanel.backgroundImage = makeScorePanelImage();
  } else {
    scorePanel.backgroundColor = UI.panel;
  }
  scorePanel.cornerRadius = UI.scorePanelRadius;
  scorePanel.setPadding(UI.scorePanelPadY, UI.scorePanelPadX, UI.scorePanelPadY, UI.scorePanelPadX);
  scorePanel.size = new Size(UI.scorePanelWidth, UI.scorePanelHeight);
  addScoreNumber(scorePanel, match.homeScore, scoreColor(Number(match.homeScore), Number(match.awayScore)));
  scorePanel.addSpacer(UI.scoreNumberGap);
  const dash = scorePanel.addText("-");
  dash.font = Font.heavySystemFont(UI.scoreDashFont);
  dash.textColor = UI.vs;
  scorePanel.addSpacer(UI.scoreNumberGap);
  addScoreNumber(scorePanel, match.awayScore, scoreColor(Number(match.awayScore), Number(match.homeScore)));

  col.addSpacer(5);
  const timeRow = col.addStack();
  timeRow.layoutHorizontally();
  timeRow.centerAlignContent();
  timeRow.addSpacer();
  const df = new DateFormatter();
  df.useShortTimeStyle();
  const updatedText = timeRow.addText("⟳ Updated " + df.string(new Date()));
  updatedText.font = Font.systemFont(8);
  updatedText.textColor = new Color("#ffffff", 0.22);
  updatedText.lineLimit = 1;
  timeRow.addSpacer();
}

function addVsText(stack) {
  const box = stack.addStack();
  box.layoutVertically();
  box.size = new Size(UI.vsWidth, 0);
  if (UI.vsTopGap > 0) box.addSpacer(UI.vsTopGap);
  const row = box.addStack();
  row.layoutHorizontally();
  row.centerAlignContent();
  row.addSpacer(Math.max(0, UI.vsOffsetX));
  const vs = row.addText("vs");
  vs.font = Font.heavySystemFont(UI.vsFont);
  vs.textColor = UI.vs;
  vs.lineLimit = 1;
  row.addSpacer(Math.max(0, -UI.vsOffsetX));
  if (UI.vsBottomGap > 0) box.addSpacer(UI.vsBottomGap);
}

function makeScorePanelImage() {
  const width = UI.scorePanelWidth;
  const height = UI.scorePanelHeight;
  const ctx = new DrawContext();
  ctx.size = new Size(width, height);
  ctx.opaque = false;
  ctx.respectScreenScale = true;

  for (let i = 0; i < 6; i++) {
    const inset = i * Math.max(1, UI.scoreGlowRadius / 10);
    const alpha = UI.scoreGlowOpacity * (1 - i / 7);
    ctx.setFillColor(new Color(UI.scoreGlowColor, alpha));
    ctx.fillEllipse(new Rect(inset, Math.max(0, height * 0.16 - i), width - inset * 2, height * 0.68 + i * 2));
  }

  ctx.setFillColor(UI.panel);
  ctx.fillRect(new Rect(0, 0, width, height));
  return ctx.getImage();
}

function addCompactTeamName(stack, teamName, offsetX) {
  const box = stack.addStack();
  box.size = new Size(UI.teamNameWidth, 0);
  box.centerAlignContent();
  const leftPad = Math.max(0, offsetX || 0);
  const rightPad = Math.max(0, -(offsetX || 0));
  box.addSpacer(leftPad || null);
  const name = box.addText(teamName);
  name.font = Font.heavySystemFont(UI.teamNameFont);
  name.textColor = COLORS.text;
  name.lineLimit = 1;
  name.minimumScaleFactor = UI.teamNameMinScale;
  box.addSpacer(rightPad || null);
}

function addScoreNumber(stack, value, color) {
  const text = stack.addText(String(value));
  text.font = Font.blackSystemFont(UI.scoreFont);
  text.textColor = color || COLORS.text;
  text.lineLimit = 1;
}

function scoreColor(teamScore, opponentScore) {
  if (teamScore === opponentScore) return UI.scoreDraw;
  if (teamScore > opponentScore) return UI.scoreWin;
  return UI.scoreLose;
}

function scoreEmotion(teamScore, opponentScore) {
  if (teamScore > opponentScore) return "happy";
  if (teamScore < opponentScore) return "sad";
  return "neutral";
}

async function loadAvatar(manifest, teamName, emotion) {
  const team = manifest.teams.find((item) => item.name === teamName);
  if (!team) return null;

  const url = team.avatars[emotion];
  if (!url) return null;

  const fm = FileManager.local();
  const cacheDir = getCacheDir(fm);
  const fileName = teamName + "_" + emotion + ".png";
  const localPath = fm.joinPath(cacheDir, fileName);

  if (fm.fileExists(localPath)) {
    return fm.readImage(localPath);
  }

  const image = await new Request(url).loadImage();
  fm.writeImage(localPath, image);
  return image;
}

// ─────────────────────────────────────────────
// 赛程卡
// ✅ Fix 2：计算今日最早/最晚开场时间，传给 addScheduleHeader
// ─────────────────────────────────────────────

function renderScheduleCard(w, matches) {
  w.backgroundGradient = makeBackground(UI.scheduleBgTop, UI.scheduleBgBottom);
  w.setPadding(12, UI.schedulePaddingRight, 8, UI.schedulePaddingLeft);

  if (matches.length === 0) {
    addScheduleHeader(w, { day: "今天", dateText: monthDayLabel(new Date()) }, "", "");
    w.addSpacer(18);
    const row = w.addStack();
    row.addSpacer();
    const text = row.addText("暂无比赛，先休息一下");
    text.font = Font.mediumSystemFont(14);
    text.textColor = COLORS.muted;
    row.addSpacer();
    w.addSpacer();
    return;
  }

  const firstTime = matches[0]?.time ?? "";
  const lastTime  = matches[matches.length - 1]?.time ?? "";

  addScheduleHeader(w, matches[0], firstTime, lastTime);
  w.addSpacer(6);
  const card = w.addStack();
  card.layoutVertically();
  card.backgroundColor = new Color("#121b30", 0.7);
  card.cornerRadius = 10;
  card.setPadding(0, 0, 0, 0);
  for (let i = 0; i < Math.min(matches.length, 4); i++) {
    addScheduleRow(card, matches[i]);
    if (i < Math.min(matches.length, 4) - 1) card.addSpacer(4);
  }
}

function addScheduleHeader(w, match, firstTime, lastTime) {
  const header = w.addStack();
  header.layoutHorizontally();
  header.centerAlignContent();

  const day = header.addText(match.day || "今天");
  day.font = Font.heavySystemFont(18);
  day.textColor = COLORS.text;
  day.lineLimit = 1;

  header.addSpacer(8);

  let timeRange = "";
  if (firstTime && lastTime && firstTime !== lastTime) {
    timeRange = " · " + firstTime + "–" + lastTime;
  } else if (firstTime) {
    timeRange = " · " + firstTime;
  }

  const sub = header.addText(
    (match.dateText || monthDayLabel(new Date())) + timeRange
  );
  sub.font = Font.heavySystemFont(12);
  sub.textColor = COLORS.muted;
  sub.lineLimit = 1;
  sub.minimumScaleFactor = 0.75;

  header.addSpacer();
  const brand = header.addText("🏆 FIFA");
  brand.font = Font.heavySystemFont(15);
  brand.textColor = UI.trophy;
  brand.lineLimit = 1;
}

// ✅ Fix 3：比分颜色区分 win / draw / lose 三态
function addScheduleRow(card, match) {
  const row = card.addStack();
  row.layoutHorizontally();
  row.centerAlignContent();
  row.backgroundColor = UI.scheduleRow;
  row.cornerRadius = 8;
  row.setPadding(3, 8, 3, 8);
  row.size = new Size(UI.scheduleRowWidth, UI.scheduleRowHeight);

  addFixedText(row, match.time, 45, Font.heavySystemFont(13), COLORS.muted, "left", 0.8);
  addScheduleTeam(row, match.homeTeam, false);
  addFixedText(row, "VS", 30, Font.heavySystemFont(13), UI.vs, "center", 1);
  addScheduleTeam(row, match.awayTeam, true);

  if (match.state === "post") {
    const h = Number(match.homeScore);
    const a = Number(match.awayScore);
    const resultText = match.homeScore + "-" + match.awayScore;
    const resultColor = h === a ? UI.scoreDraw : h > a ? UI.scoreWin : UI.scoreLose;
    addFixedText(row, resultText, 45, Font.heavySystemFont(13), resultColor, "right", 0.8);
  } else {
    addFixedText(row, "未开赛", 45, Font.heavySystemFont(11), COLORS.faint, "right", 0.8);
  }
}

function addFixedText(row, value, width, font, color, align, scale) {
  const box = row.addStack();
  box.size = new Size(width, 0);
  box.centerAlignContent();
  if (align === "right") box.addSpacer();
  const time = box.addText(value);
  time.font = font;
  time.textColor = color;
  time.lineLimit = 1;
  time.minimumScaleFactor = scale;
  if (align === "center") {
    time.centerAlignText();
  } else if (align === "right") {
    time.rightAlignText();
  }
  if (align === "left" || align === "center") box.addSpacer();
}

function addScheduleTeam(row, name, flagAfter) {
  const team = row.addStack();
  team.layoutHorizontally();
  team.centerAlignContent();
  team.size = new Size(80, 0);

  if (!flagAfter) addScheduleFlag(team, name);
  const text = team.addText(name);
  text.font = Font.heavySystemFont(13);
  text.textColor = COLORS.text;
  text.lineLimit = 1;
  text.minimumScaleFactor = 0.65;
  if (flagAfter) addScheduleFlag(team, name);
}

function addScheduleFlag(team, name) {
  const flag = team.addText((FLAGS[name] || "⚽") + " ");
  flag.font = Font.systemFont(10);
  flag.textColor = COLORS.text;
  flag.lineLimit = 1;
}

function addTiny(stack, value) {
  const text = stack.addText(value);
  text.font = Font.mediumSystemFont(10);
  text.textColor = COLORS.muted;
  text.lineLimit = 1;
}

function addFooter(w) {
  w.addSpacer();
  const row = w.addStack();
  row.addSpacer();
  const df = new DateFormatter();
  df.useShortTimeStyle();
  const text = row.addText("更新于 " + df.string(new Date()));
  text.font = Font.systemFont(8);
  text.textColor = COLORS.faint;
}

function renderError(w, error) {
  w.backgroundGradient = makeBackground(UI.scheduleBgTop, UI.scheduleBgBottom);
  w.setPadding(16, 20, 10, 22);
  addScheduleHeader(w, { day: "FIFA", dateText: monthDayLabel(new Date()) }, "", "");
  w.addSpacer(14);
  const text = w.addText("加载失败：" + error.message);
  text.font = Font.systemFont(12);
  text.textColor = COLORS.live;
  text.lineLimit = 3;
}